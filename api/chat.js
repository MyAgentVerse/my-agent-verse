import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Load knowledge base once at cold start
let KB = "";
try {
  KB = fs.readFileSync(path.join(__dirname, "knowledge/kb.md"), "utf-8");
} catch {
  KB = "MyAgentVerse builds AI automation for $1M–$5M businesses. Free Process Audit at myagentverse.com/process-audit. Call (281) 699-8318.";
}

// Simple RAG: split KB into sections, find relevant ones by keyword match
function retrieveContext(userMessage) {
  const query = userMessage.toLowerCase();
  const sections = KB.split(/\n##+ /).filter(Boolean);
  const scored = sections.map((s) => {
    const words = query.split(/\s+/);
    const score = words.filter((w) => w.length > 3 && s.toLowerCase().includes(w)).length;
    return { section: s, score };
  });
  // Return top 3 most relevant sections
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.section)
    .join("\n\n---\n\n");
}

const SYSTEM_PROMPT = `You are Alex, an AI business automation advisor for MyAgentVerse — a boutique automation agency based in The Woodlands, TX that builds custom AI systems for $1M–$5M revenue businesses.

YOUR MISSION: Have a real conversation to understand the business owner's biggest operational pain points, then guide them toward booking a free Process Audit call.

YOUR CONVERSATION APPROACH:
1. Greet warmly and ask what kind of business they run
2. Ask what their team does every week that they shouldn't have to
3. Listen, validate their pain, make it specific
4. Show you understand: "That sounds like it's costing you about X hours/week..."
5. Introduce the free audit as the obvious next step
6. Ask for their name and best phone number or email to schedule

TONE: Warm, direct, conversational. Like a smart advisor who gets their world. Not salesy. Short paragraphs — max 3 sentences per response. Ask one question at a time.

WHEN COLLECTING LEAD INFO: If they give you their name + contact (email or phone), confirm you're passing it to the team and they'll reach out within 1 business day. Also mention: call directly at (281) 699-8318.

NEVER: Don't make up specific numbers. Don't promise specific results. Don't say you're an AI unless directly asked. Don't list everything at once — have a real conversation.

KNOWLEDGE BASE:
{KB_CONTEXT}`;

// Extract lead info from conversation
function extractLead(messages) {
  const text = messages.map((m) => m.content).join(" ");
  const email = text.match(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i)?.[0] || null;
  const phone = text.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/)?.[0] || null;
  const nameMatch = text.match(/(?:i'?m|my name is|this is|i am)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i);
  const name = nameMatch?.[1] || null;
  return { name, email, phone };
}

export default async function handler(req, res) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).set(CORS).end();
  }

  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages = [] } = req.body || {};
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

    // Get last user message for RAG retrieval
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const context = lastUser ? retrieveContext(lastUser.content) : KB.slice(0, 2000);

    const systemPrompt = SYSTEM_PROMPT.replace("{KB_CONTEXT}", context);

    const completion = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    const data = await completion.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I had trouble responding. Call us at (281) 699-8318!";

    // Non-blocking lead capture + Slack notification
    const { name, email, phone } = extractLead(messages);
    if (name && (email || phone)) {
      const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (supabaseUrl && supabaseKey) {
        fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name,
            email: email || undefined,
            phone: phone || undefined,
            form_type: "chat",
            custom_fields: { source: "chat_widget", last_message: lastUser?.content },
          }),
        }).catch(() => {});
      }

      // Slack notification
      const slackWebhook = process.env.SLACK_WEBHOOK_URL;
      if (slackWebhook) {
        fetch(slackWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `💬 New Chat Lead — ${name}`,
            blocks: [
              {
                type: "header",
                text: { type: "plain_text", text: "💬 New Chat Lead", emoji: true },
              },
              {
                type: "section",
                fields: [
                  { type: "mrkdwn", text: `*Name:*\n${name}` },
                  { type: "mrkdwn", text: `*Email:*\n${email ?? "—"}` },
                  { type: "mrkdwn", text: `*Phone:*\n${phone ?? "—"}` },
                  { type: "mrkdwn", text: `*Last Message:*\n${lastUser?.content ?? "—"}` },
                ],
              },
              { type: "divider" },
              {
                type: "context",
                elements: [
                  {
                    type: "mrkdwn",
                    text: `Captured via chat widget · ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT`,
                  },
                ],
              },
            ],
          }),
        }).catch(() => {});
      }
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    return res.status(500).json({ reply: "Something went wrong. Please call us at (281) 699-8318!" });
  }
}

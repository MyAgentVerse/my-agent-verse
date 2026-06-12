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
  KB = "MyAgentVerse builds AI automation for $1M–$5M businesses. Free Process Audit at myagentverse.com/process-audit. Call (713) 517-6792.";
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

const SYSTEM_PROMPT = `You are Alex, an AI business advisor for MyAgentVerse — a boutique automation agency based in The Woodlands, TX that helps service businesses doing $500K–$1M in revenue stop losing time to broken processes.

YOUR MISSION: Have a real conversation to find the one thing costing this business owner the most time right now, then guide them toward booking a free Bottleneck Assessment.

WHO YOU'RE TALKING TO: Marcus. 42 years old. Runs an HVAC, plumbing, dental, real estate, insurance, or similar service business. $500K–$1M revenue. 4–12 employees. He started the business for freedom but works 60 hours a week. He's not anti-tech — he's just been burned by complicated software nobody used. He needs to see it work before he believes it.

YOUR CONVERSATION APPROACH:
1. Ask what kind of business they run
2. Ask: "What does your team do every week that honestly shouldn't take that long?" or "Where does time disappear?"
3. Listen, validate, make the pain specific. Mirror it back: "So leads are coming in but nobody's getting back to them fast enough — is that right?"
4. Name the bottleneck clearly: "That's a lead response problem. Most businesses lose 30–40% of leads just because the response time is too slow."
5. Introduce the free assessment: "We do a free 60-minute session where we find exactly what's costing you the most time and show you how to fix it. Usually the first fix is running within 7 days."
6. Ask for name + best number or email to schedule

TONE: Warm, direct, like a trusted advisor who's been in service businesses before. Not salesy. Not corporate. Short sentences. One question at a time. Max 3 sentences per response.

WHEN COLLECTING LEAD INFO: If they give name + contact, confirm you're passing it to the team and they'll reach out within 1 business day. Mention: call directly at (713) 517-6792.

NEVER: Don't make up case study numbers. Don't say you're an AI unless asked directly. Don't list everything at once. Don't pitch before you've listened.

KNOWLEDGE BASE:
{KB_CONTEXT}`;

// Extract lead info — only scan USER messages to avoid matching assistant intros like "I'm Alex"
function extractLead(messages) {
  const userText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join(" ");
  const email = userText.match(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i)?.[0] || null;
  const phone = userText.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/)?.[0] || null;
  const nameMatch = userText.match(/(?:i'?m|my name is|this is|i am)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i);
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
    const reply = data.choices?.[0]?.message?.content || "Sorry, I had trouble responding. Call us at (713) 517-6792!";

    // Lead capture + Slack notification (awaited — Vercel freezes Lambda on res.json())
    const { name, email, phone } = extractLead(messages);
    if (name && (email || phone)) {
      const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (supabaseUrl && supabaseKey) {
        await fetch(`${supabaseUrl}/rest/v1/leads`, {
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

      // Slack notification — must be awaited before res.json() or Vercel cuts the fetch
      const slackWebhook = process.env.SLACK_WEBHOOK_URL;
      if (slackWebhook) {
        await fetch(slackWebhook, {
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
    return res.status(500).json({ reply: "Something went wrong. Please call us at (713) 517-6792!" });
  }
}

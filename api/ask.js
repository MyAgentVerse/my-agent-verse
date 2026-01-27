import OpenAI from "openai";
import { kv } from "@vercel/kv";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        const { sessionId, question } = req.body;

        if (!sessionId || !question) {
            return res.status(400).json({ error: "Missing sessionId or question" });
        }

        // 1️⃣ Load document from KV
        const documentText = await kv.get(`doc:${sessionId}`);

        if (!documentText) {
            return res.status(404).json({ error: "Session expired or document not found" });
        }

        // 2️⃣ Call OpenAI with document grounding
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                        "You are an AI assistant. Answer ONLY using the provided document. If the answer is not in the document, say you do not know.",
                },
                {
                    role: "user",
                    content: `DOCUMENT:\n${documentText}\n\nQUESTION:\n${question}`,
                },
            ],
            temperature: 0.2,
            max_tokens: 300,
        });

        const answer =
            completion.choices[0]?.message?.content ||
            "I could not find an answer in the document.";

        // 3️⃣ Return real AI answer
        return res.status(200).json({
            success: true,
            answer,
            confidence: "High",
        });
    } catch (error) {
        console.error("ASK API ERROR:", error);
        return res.status(500).json({ error: "AI processing failed" });
    }
}

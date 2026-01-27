export const config = {
    runtime: "nodejs",
};

import { kv } from "@vercel/kv";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const { sessionId, question } = req.body;

        if (!sessionId || !question) {
            return res.status(400).json({
                error: "Missing sessionId or question",
            });
        }

        const documentText = await kv.get(`doc:${sessionId}`);

        if (!documentText) {
            return res.status(404).json({
                error: "Session expired or document not found",
            });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4.1-mini",
            temperature: 0.2,
            messages: [
                {
                    role: "system",
                    content:
                        "Answer strictly using the document. If the answer is not present, say you do not know.",
                },
                {
                    role: "user",
                    content: `DOCUMENT:\n${documentText}\n\nQUESTION:\n${question}`,
                },
            ],
        });

        return res.status(200).json({
            success: true,
            answer: completion.choices[0].message.content,
            confidence: "High",
        });
    } catch (err) {
        console.error("ASK ERROR:", err);
        return res.status(500).json({
            error: "Failed to generate answer",
        });
    }
}

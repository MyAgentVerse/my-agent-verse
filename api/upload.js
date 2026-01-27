import { kv } from "@vercel/kv";

export const config = {
    runtime: "edge",
};

export default async function handler(req) {
    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({ error: "Method not allowed" }),
            { status: 405 }
        );
    }

    const body = await req.json();
    const { documentText } = body;

    if (!documentText || documentText.trim() === "") {
        return new Response(
            JSON.stringify({ error: "Missing documentText" }),
            { status: 400 }
        );
    }

    const sessionId = `demo_${crypto.randomUUID()}`;

    await kv.set(sessionId, {
        documentText,
        createdAt: Date.now(),
        expiresAt: Date.now() + 30 * 60 * 1000,
    });

    return new Response(
        JSON.stringify({
            success: true,
            sessionId,
            message: "Document ready. You can now ask questions.",
        }),
        { status: 200 }
    );
}

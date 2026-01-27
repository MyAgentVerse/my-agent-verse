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
    const { sessionId, question } = body;

    if (!sessionId || !question) {
        return new Response(
            JSON.stringify({ error: "Missing sessionId or question" }),
            { status: 400 }
        );
    }

    const session = await kv.get(sessionId);

    if (!session) {
        return new Response(
            JSON.stringify({ error: "Session expired or not found" }),
            { status: 404 }
        );
    }

    if (session.expiresAt < Date.now()) {
        await kv.del(sessionId);
        return new Response(
            JSON.stringify({ error: "Session expired" }),
            { status: 410 }
        );
    }

    return new Response(
        JSON.stringify({
            success: true,
            answer: `Question received: "${question}". Document length: ${session.documentText.length} characters.`,
        }),
        { status: 200 }
    );
}

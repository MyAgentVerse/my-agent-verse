const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).set(CORS).end();
  }

  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const slackWebhook = process.env.SLACK_WEBHOOK_URL;
  if (!slackWebhook) {
    return res.status(200).json({ success: false, message: "SLACK_WEBHOOK_URL not configured" });
  }

  try {
    const { name, email, phone, form_type, custom_fields, form_source } = req.body || {};

    const formTypeLabels = {
      contact: "Contact Form",
      consultation: "Consultation Request",
      build: "Build Application",
      demo: "Demo Request",
      chat: "Chat Widget",
      other: "Other",
    };
    const formLabel = formTypeLabels[form_type] || form_type || "Form";

    // Build extra detail lines from custom_fields
    const extras = [];
    if (custom_fields && typeof custom_fields === "object") {
      for (const [k, v] of Object.entries(custom_fields)) {
        if (v !== null && v !== undefined && k !== "source") {
          const label = k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          extras.push(`*${label}:* ${Array.isArray(v) ? v.join(", ") : String(v)}`);
        }
      }
    }

    const slackBody = {
      text: `🎯 New ${formLabel} — ${name || "Unknown"}`,
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: `🎯 New ${formLabel}`, emoji: true },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${name || "—"}` },
            { type: "mrkdwn", text: `*Email:*\n${email || "—"}` },
            { type: "mrkdwn", text: `*Phone:*\n${phone || "—"}` },
            { type: "mrkdwn", text: `*Source:*\n${form_source || "—"}` },
          ],
        },
        ...(extras.length > 0
          ? [{ type: "section", text: { type: "mrkdwn", text: extras.join("\n") } }]
          : []),
        { type: "divider" },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT`,
            },
          ],
        },
      ],
    };

    const slackRes = await fetch(slackWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackBody),
    });

    return res.status(200).json({ success: slackRes.ok, status: slackRes.status });
  } catch (err) {
    console.error("Slack notify error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

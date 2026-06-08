import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadId } = await req.json();
    console.log("Processing n8n notification for lead:", leadId);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Fetch lead details
    const { data: lead, error } = await supabase
      .from("leads")
      .select("*")
      .eq("id", leadId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching lead:", error);
      throw error;
    }

    if (!lead) {
      throw new Error("Lead not found");
    }

    console.log("Lead data fetched:", lead.email);

    // --- Slack notification ---
    const slackWebhookUrl = Deno.env.get("SLACK_WEBHOOK_URL");
    if (slackWebhookUrl) {
      const formTypeLabels: Record<string, string> = {
        contact: "Contact Form",
        consultation: "Consultation Request",
        build: "Build Application",
        demo: "Demo Request",
        chat: "Chat Widget",
        other: "Other",
      };
      const formLabel = formTypeLabels[lead.form_type] ?? lead.form_type;

      // Build extra detail lines from custom_fields
      const extras: string[] = [];
      if (lead.custom_fields && typeof lead.custom_fields === "object") {
        for (const [k, v] of Object.entries(lead.custom_fields)) {
          if (v !== null && v !== undefined && k !== "source") {
            const label = k.replace(/_/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
            extras.push(`*${label}:* ${Array.isArray(v) ? v.join(", ") : String(v)}`);
          }
        }
      }

      const slackBody = {
        text: `🎯 New ${formLabel} — ${lead.name}`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: `🎯 New ${formLabel}`, emoji: true },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${lead.name ?? "—"}` },
              { type: "mrkdwn", text: `*Email:*\n${lead.email ?? "—"}` },
              { type: "mrkdwn", text: `*Phone:*\n${lead.phone ?? "—"}` },
              { type: "mrkdwn", text: `*Source:*\n${lead.form_source ?? "—"}` },
            ],
          },
          ...(extras.length > 0
            ? [{ type: "section", text: { type: "mrkdwn", text: extras.join("\n") } }]
            : []),
          { type: "divider" },
          {
            type: "context",
            elements: [
              { type: "mrkdwn", text: `Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT` },
            ],
          },
        ],
      };

      fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackBody),
      }).catch((e: unknown) => console.error("Slack notification failed:", e));
    } else {
      console.warn("SLACK_WEBHOOK_URL not configured, skipping Slack notification");
    }

    // --- n8n webhook ---
    const n8nWebhookUrl = Deno.env.get("N8N_WEBHOOK_URL");

    if (!n8nWebhookUrl) {
      console.warn("N8N_WEBHOOK_URL not configured, skipping n8n notification");
      return new Response(
        JSON.stringify({ success: true, message: "n8n webhook not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Sending to n8n webhook...");

    const webhookResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "new_lead",
        lead: lead,
        timestamp: new Date().toISOString(),
      }),
    });

    console.log("n8n webhook response status:", webhookResponse.status);

    return new Response(
      JSON.stringify({
        success: true,
        webhookStatus: webhookResponse.status
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in notify-n8n function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

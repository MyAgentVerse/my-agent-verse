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

    // Send to n8n webhook
    const n8nWebhookUrl = Deno.env.get("N8N_WEBHOOK_URL");
    
    if (!n8nWebhookUrl) {
      console.warn("N8N_WEBHOOK_URL not configured, skipping notification");
      return new Response(
        JSON.stringify({ success: true, message: "Webhook not configured" }),
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
  } catch (error) {
    console.error("Error in notify-n8n function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

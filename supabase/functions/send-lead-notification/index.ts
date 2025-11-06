import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadNotificationRequest {
  leadId: string;
  notifyEmails?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadId, notifyEmails = ["team@myagentverse.com"] }: LeadNotificationRequest = await req.json();

    // Initialize Supabase client to fetch lead details
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Fetch lead details
    const { data: lead, error: leadError } = await supabaseClient
      .from("leads")
      .select("*")
      .eq("id", leadId)
      .single();

    if (leadError || !lead) {
      throw new Error(`Lead not found: ${leadError?.message}`);
    }

    // Format lead data for email
    const formTypeLabels = {
      contact: "Contact Form",
      consultation: "Consultation Request",
      build: "Build Application",
      demo: "Demo Request",
      other: "Other"
    };

    const formTypeLabel = formTypeLabels[lead.form_type as keyof typeof formTypeLabels] || lead.form_type;

    // Create email content
    let customFieldsHtml = "";
    if (lead.custom_fields && typeof lead.custom_fields === "object") {
      customFieldsHtml = Object.entries(lead.custom_fields)
        .filter(([_, value]) => value !== null && value !== undefined)
        .map(([key, value]) => {
          const formattedKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
          const formattedValue = Array.isArray(value) ? value.join(", ") : String(value);
          return `<li><strong>${formattedKey}:</strong> ${formattedValue}</li>`;
        })
        .join("");
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00b7c2;">🎯 New Lead Received!</h2>
        <p style="color: #666; font-size: 16px;">A new <strong>${formTypeLabel}</strong> has been submitted.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Lead Information</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 8px 0;"><strong>Name:</strong> ${lead.name}</li>
            <li style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></li>
            ${lead.phone ? `<li style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></li>` : ""}
            ${lead.company_name ? `<li style="margin: 8px 0;"><strong>Company:</strong> ${lead.company_name}</li>` : ""}
            <li style="margin: 8px 0;"><strong>Form Type:</strong> ${formTypeLabel}</li>
            <li style="margin: 8px 0;"><strong>Status:</strong> ${lead.status}</li>
            <li style="margin: 8px 0;"><strong>Priority:</strong> ${lead.priority}</li>
          </ul>
          
          ${customFieldsHtml ? `
            <h4 style="color: #333; margin-top: 15px;">Additional Details</h4>
            <ul style="list-style: none; padding: 0;">
              ${customFieldsHtml}
            </ul>
          ` : ""}
        </div>

        ${lead.form_source ? `<p style="color: #888; font-size: 14px;">Source: ${lead.form_source}</p>` : ""}
        ${lead.utm_source || lead.utm_campaign ? `
          <p style="color: #888; font-size: 14px;">
            Campaign: ${[lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(" / ")}
          </p>
        ` : ""}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666;">
            View this lead in your dashboard: 
            <a href="${req.headers.get("origin")}/admin/dashboard" style="color: #00b7c2; text-decoration: none;">
              Open CRM Dashboard →
            </a>
          </p>
        </div>
      </div>
    `;

    // Send email to notification recipients
    const emailResponse = await resend.emails.send({
      from: "MyAgentVerse Leads <onboarding@resend.dev>",
      to: notifyEmails,
      subject: `🎯 New ${formTypeLabel}: ${lead.name} - ${lead.company_name || lead.email}`,
      html: emailHtml,
    });

    console.log("Lead notification sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending lead notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

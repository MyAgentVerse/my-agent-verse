import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormRequest = await req.json();

    // Server-side validation
    if (!name || name.trim().length === 0 || name.length > 100) {
      throw new Error("Name is required and must be between 1 and 100 characters");
    }
    if (!email || email.trim().length === 0 || email.length > 255) {
      throw new Error("Valid email is required");
    }
    if (!message || message.trim().length < 10 || message.length > 1000) {
      throw new Error("Message must be between 10 and 1000 characters");
    }
    if (phone && (phone.length < 10 || phone.length > 20)) {
      throw new Error("Phone number must be between 10 and 20 characters");
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const trimmedPhone = phone?.trim();

    console.log("Processing contact form submission from:", trimmedEmail);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "MyAgentVerse Contact Form <onboarding@resend.dev>",
      to: ["info@myagentverse.com"],
      subject: "New Contact Form Submission - MyAgentVerse",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Phone:</strong> ${trimmedPhone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${trimmedMessage}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Business notification email sent:", businessEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "MyAgentVerse <onboarding@resend.dev>",
      to: [trimmedEmail],
      subject: "Thank you for contacting MyAgentVerse!",
      html: `
        <h2>Thank you for reaching out, ${trimmedName}!</h2>
        <p>We've received your message and our team will get back to you shortly.</p>
        <p><strong>Here's what you sent:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${trimmedMessage}</p>
        <p>We typically respond within 24 hours during business days.</p>
        <br />
        <p>Best regards,<br />The MyAgentVerse Team</p>
        <p style="color: #666; font-size: 14px;">
          📞 (281) 699-8318<br />
          🌐 myagentverse.com
        </p>
      `,
    });

    console.log("Customer confirmation email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Form submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-form function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send contact form",
        success: false
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);

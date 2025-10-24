import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { create } from "https://deno.land/x/djwt@v3.0.1/mod.ts";
import { importPKCS8, SignJWT } from "https://esm.sh/jose@5.2.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Google Sheets API configuration
const GOOGLE_SHEETS_PRIVATE_KEY = Deno.env.get("GOOGLE_SHEETS_PRIVATE_KEY");
const GOOGLE_SHEETS_CLIENT_EMAIL = Deno.env.get("GOOGLE_SHEETS_CLIENT_EMAIL");
const GOOGLE_SHEET_ID = Deno.env.get("GOOGLE_SHEET_ID");

// Helper function to get Google Sheets access token using jose library
async function getGoogleSheetsAccessToken(): Promise<string> {
  try {
    const privateKey = GOOGLE_SHEETS_PRIVATE_KEY!;
    const clientEmail = GOOGLE_SHEETS_CLIENT_EMAIL!;

    console.log("Importing private key for JWT signing...");
    
    // Import the private key
    const key = await importPKCS8(privateKey, "RS256");

    const now = Math.floor(Date.now() / 1000);

    console.log("Creating JWT for Google OAuth...");
    
    // Create and sign the JWT
    const jwt = await new SignJWT({})
      .setProtectedHeader({ alg: "RS256", typ: "JWT" })
      .setIssuer(clientEmail)
      .setSubject(clientEmail)
      .setAudience("https://oauth2.googleapis.com/token")
      .setIssuedAt(now)
      .setExpirationTime(now + 3600)
      .sign(key);

    console.log("JWT created, exchanging for access token...");

    // Exchange JWT for access token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      throw new Error(`Token exchange failed: ${tokenResponse.status} - ${errorText}`);
    }

    const tokenData = await tokenResponse.json();
    console.log("Access token obtained successfully");
    return tokenData.access_token;
  } catch (error: any) {
    console.error("Error getting access token:", {
      message: error.message,
      stack: error.stack,
    });
    throw error;
  }
}

// Helper function to append data to Google Sheets
async function appendToGoogleSheet(
  name: string,
  email: string,
  phone: string,
  message: string
): Promise<void> {
  try {
    console.log("Getting Google Sheets access token...");
    const accessToken = await getGoogleSheetsAccessToken();

    // Format timestamp
    const timestamp = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const values = [[timestamp, name, email, phone || "Not provided", message]];

    console.log("Appending data to Google Sheet:", { 
      sheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      rowData: values[0]
    });

    // Append values to the sheet
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1!A:E:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Sheets API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log("Successfully appended to Google Sheet:", {
      updatedRange: result.updates?.updatedRange,
      updatedRows: result.updates?.updatedRows,
      updatedCells: result.updates?.updatedCells,
    });
  } catch (error: any) {
    console.error("Error appending to Google Sheet:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    // Don't throw - we want emails to still work even if Sheets fails
  }
}

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

    // Append data to Google Sheet
    console.log("Attempting to write to Google Sheet...");
    await appendToGoogleSheet(trimmedName, trimmedEmail, trimmedPhone || "", trimmedMessage);

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

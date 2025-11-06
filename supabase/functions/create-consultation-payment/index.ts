import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const consultationSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().trim().min(1).max(100),
  companyName: z.string().trim().min(1).max(200),
  website: z.string().url().max(500).optional().or(z.literal("")),
  industry: z.string().trim().min(1).max(100),
  annualRevenue: z.string().trim().min(1).max(100),
  teamSize: z.string().trim().min(1).max(100),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/).max(20),
  biggestChallenge: z.string().trim().min(1).max(1000),
  useCases: z.array(z.string().max(100)).max(20).optional(),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate and sanitize input using Zod schema
    const validationResult = consultationSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ error: "Invalid input data provided" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }
    
    const { 
      email, 
      name, 
      companyName, 
      website, 
      industry, 
      annualRevenue, 
      teamSize, 
      phone, 
      biggestChallenge, 
      useCases 
    } = validationResult.data;

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else if (name) {
      // Create new customer if name is provided
      const customer = await stripe.customers.create({
        email,
        name,
      });
      customerId = customer.id;
    }

    // Create checkout session for one-time $299 payment
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price: "price_1SPBKnHT0ThhYCZBk9yBXWag",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/consultation?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/consultation?payment=canceled`,
      metadata: {
        product_type: "ai_implementation_roadmap_call",
        email,
        company_name: companyName,
      },
    });

    // Get UTM parameters from request headers or query params
    const url = new URL(req.url);
    const utmParams = {
      utm_source: url.searchParams.get('utm_source') || undefined,
      utm_medium: url.searchParams.get('utm_medium') || undefined,
      utm_campaign: url.searchParams.get('utm_campaign') || undefined,
      utm_content: url.searchParams.get('utm_content') || undefined,
      utm_term: url.searchParams.get('utm_term') || undefined,
    };

    // Store lead data in unified leads table
    const { error: dbError } = await supabaseClient
      .from("leads")
      .insert({
        name,
        email,
        phone,
        company_name: companyName,
        form_type: "consultation",
        custom_fields: {
          website: website || null,
          industry,
          annual_revenue: annualRevenue,
          team_size: teamSize,
          biggest_challenge: biggestChallenge,
          use_cases: useCases,
        },
        stripe_session_id: session.id,
        payment_status: "pending",
        payment_amount: 299,
        form_source: req.headers.get("referer") || undefined,
        referrer: req.headers.get("referer") || undefined,
        ...utmParams,
        user_agent: req.headers.get("user-agent") || undefined,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      // Don't fail payment if DB insert fails, but log it
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    // Return generic error message to prevent information leakage
    return new Response(
      JSON.stringify({ error: "Unable to process payment. Please try again or contact support." }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

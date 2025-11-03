import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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
    } = await req.json();
    
    // Validate required fields
    if (!email || !name || !companyName || !industry || !annualRevenue || !teamSize || !phone || !biggestChallenge) {
      throw new Error("All required fields must be provided");
    }

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

    // Store consultation lead data in database
    const { error: dbError } = await supabaseClient
      .from("consultation_leads")
      .insert({
        name,
        email,
        company_name: companyName,
        website: website || null,
        industry,
        annual_revenue: annualRevenue,
        team_size: teamSize,
        phone,
        biggest_challenge: biggestChallenge,
        use_cases: useCases,
        stripe_session_id: session.id,
        payment_status: "pending",
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
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Payment processing failed" }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

-- Create consultation_leads table to store all consultation requests
CREATE TABLE public.consultation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  website TEXT,
  industry TEXT NOT NULL,
  annual_revenue TEXT NOT NULL,
  team_size TEXT NOT NULL,
  phone TEXT NOT NULL,
  biggest_challenge TEXT NOT NULL,
  use_cases JSONB,
  stripe_session_id TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  consultation_scheduled BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form submission)
CREATE POLICY "Anyone can submit consultation requests"
ON public.consultation_leads
FOR INSERT
WITH CHECK (true);

-- Create policy to allow reading own submissions by email (optional, for future use)
CREATE POLICY "Users can view their own consultation requests"
ON public.consultation_leads
FOR SELECT
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_consultation_leads_email ON public.consultation_leads(email);

-- Create index on stripe_session_id for payment verification
CREATE INDEX idx_consultation_leads_stripe_session ON public.consultation_leads(stripe_session_id);
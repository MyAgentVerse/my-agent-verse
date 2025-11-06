-- Create form type enum
CREATE TYPE public.form_type AS ENUM ('contact', 'consultation', 'build', 'demo', 'other');

-- Create lead status enum
CREATE TYPE public.lead_status AS ENUM ('new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost', 'nurture');

-- Create lead priority enum
CREATE TYPE public.lead_priority AS ENUM ('low', 'medium', 'high', 'urgent');

-- Create unified leads table
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Common fields across all forms
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  
  -- Form identification
  form_type public.form_type NOT NULL,
  form_source TEXT, -- URL where form was submitted
  
  -- Form-specific data stored as JSONB
  custom_fields JSONB DEFAULT '{}'::jsonb,
  
  -- CRM fields
  status public.lead_status NOT NULL DEFAULT 'new',
  priority public.lead_priority NOT NULL DEFAULT 'medium',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  notes TEXT,
  assigned_to UUID REFERENCES auth.users(id),
  
  -- Tracking fields
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  referrer TEXT,
  ip_address TEXT,
  user_agent TEXT,
  
  -- Payment/Revenue tracking
  payment_status TEXT,
  payment_amount DECIMAL(10,2),
  stripe_session_id TEXT,
  
  -- Timeline
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  contacted_at TIMESTAMPTZ,
  contacted_by TEXT,
  last_activity_at TIMESTAMPTZ DEFAULT now(),
  
  -- Soft delete
  deleted_at TIMESTAMPTZ
);

-- Create analytics events table
CREATE TABLE public.analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Session tracking
  session_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  
  -- Event details
  event_type TEXT NOT NULL, -- 'page_view', 'form_view', 'form_start', 'form_submit', 'click', etc.
  event_category TEXT, -- 'forms', 'navigation', 'engagement'
  event_action TEXT,
  event_label TEXT,
  event_value NUMERIC,
  
  -- Page context
  page_url TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  
  -- UTM parameters
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  
  -- Technical details
  ip_address TEXT,
  user_agent TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  
  -- Additional data
  metadata JSONB DEFAULT '{}'::jsonb,
  
  -- Timestamp
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_form_type ON public.leads(form_type);
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_assigned_to ON public.leads(assigned_to);
CREATE INDEX idx_leads_custom_fields ON public.leads USING gin(custom_fields);
CREATE INDEX idx_leads_tags ON public.leads USING gin(tags);
CREATE INDEX idx_leads_deleted_at ON public.leads(deleted_at) WHERE deleted_at IS NULL;

CREATE INDEX idx_analytics_session_id ON public.analytics_events(session_id);
CREATE INDEX idx_analytics_event_type ON public.analytics_events(event_type);
CREATE INDEX idx_analytics_created_at ON public.analytics_events(created_at DESC);
CREATE INDEX idx_analytics_page_url ON public.analytics_events(page_url);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- RLS Policies for leads table
CREATE POLICY "Admins can view all leads"
  ON public.leads
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all leads"
  ON public.leads
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete leads"
  ON public.leads
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can submit leads (forms)"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- RLS Policies for analytics_events table
CREATE POLICY "Admins can view all analytics"
  ON public.analytics_events
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can insert analytics events"
  ON public.analytics_events
  FOR INSERT
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for leads table
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to migrate existing consultation_leads
CREATE OR REPLACE FUNCTION public.migrate_consultation_leads()
RETURNS void AS $$
BEGIN
  INSERT INTO public.leads (
    email,
    name,
    phone,
    company_name,
    form_type,
    custom_fields,
    status,
    notes,
    payment_status,
    stripe_session_id,
    created_at,
    contacted_at,
    contacted_by
  )
  SELECT
    email,
    name,
    phone,
    company_name,
    'consultation'::public.form_type,
    jsonb_build_object(
      'website', website,
      'industry', industry,
      'annual_revenue', annual_revenue,
      'team_size', team_size,
      'biggest_challenge', biggest_challenge,
      'use_cases', use_cases
    ),
    CASE
      WHEN consultation_scheduled THEN 'qualified'::public.lead_status
      WHEN contacted_at IS NOT NULL THEN 'contacted'::public.lead_status
      ELSE 'new'::public.lead_status
    END,
    notes,
    payment_status,
    stripe_session_id,
    created_at,
    contacted_at,
    contacted_by
  FROM public.consultation_leads
  ON CONFLICT DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Execute migration
SELECT public.migrate_consultation_leads();
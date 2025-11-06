-- Fix search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix search_path for migrate_consultation_leads function
CREATE OR REPLACE FUNCTION public.migrate_consultation_leads()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;
-- Grant all necessary permissions to anon and authenticated roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.leads TO anon;
GRANT INSERT ON TABLE public.leads TO authenticated;
GRANT SELECT ON TABLE public.leads TO anon;
GRANT SELECT ON TABLE public.leads TO authenticated;

-- Also grant usage on sequences if any
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
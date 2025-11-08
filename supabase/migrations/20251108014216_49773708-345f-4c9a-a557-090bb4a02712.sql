-- Temporarily disable RLS to allow all inserts
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Re-enable it immediately after
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop all existing INSERT policies
DROP POLICY IF EXISTS "Anonymous users can submit leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can submit leads" ON public.leads;
DROP POLICY IF EXISTS "Allow public lead submissions" ON public.leads;
DROP POLICY IF EXISTS "Anyone can submit leads (forms)" ON public.leads;

-- Create a single, simple INSERT policy that allows everything
CREATE POLICY "public_insert_leads"
ON public.leads
FOR INSERT
WITH CHECK (true);
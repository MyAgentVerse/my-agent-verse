-- CRITICAL FIX: Grant INSERT permission to anon role explicitly
GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;

-- Drop existing policies
DROP POLICY IF EXISTS "public_insert_leads" ON public.leads;
DROP POLICY IF EXISTS "Anonymous users can submit leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can submit leads" ON public.leads;

-- Create permissive INSERT policy for all roles
CREATE POLICY "allow_all_inserts"
ON public.leads
AS PERMISSIVE
FOR INSERT
TO public
WITH CHECK (true);

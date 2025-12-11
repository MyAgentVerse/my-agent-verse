-- Drop existing insert policy
DROP POLICY IF EXISTS "allow_public_inserts" ON public.leads;

-- Create a permissive insert policy that explicitly allows anon and authenticated roles
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Grant insert permission to anon role on leads table
GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;
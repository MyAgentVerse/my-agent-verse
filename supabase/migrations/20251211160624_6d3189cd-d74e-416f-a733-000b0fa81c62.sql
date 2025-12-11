-- Drop existing insert policy
DROP POLICY IF EXISTS "allow_public_inserts" ON public.leads;

-- Create a permissive insert policy for all roles (including public/unauthenticated)
CREATE POLICY "allow_public_inserts" 
ON public.leads 
FOR INSERT 
TO public
WITH CHECK (true);
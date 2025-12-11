-- Drop the existing restrictive insert policy
DROP POLICY IF EXISTS "allow_all_inserts" ON public.leads;

-- Create a permissive insert policy that allows anyone to insert leads
CREATE POLICY "allow_public_inserts" 
ON public.leads 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);
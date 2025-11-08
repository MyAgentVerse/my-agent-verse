-- Drop the existing INSERT policy
DROP POLICY IF EXISTS "Allow public lead submissions" ON public.leads;

-- Create separate policies for anon and authenticated users
CREATE POLICY "Anonymous users can submit leads"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can submit leads"  
ON public.leads
FOR INSERT
TO authenticated
WITH CHECK (true);

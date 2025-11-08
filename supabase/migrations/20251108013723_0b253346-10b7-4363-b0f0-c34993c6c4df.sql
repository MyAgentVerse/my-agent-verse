-- Drop existing INSERT policy for leads
DROP POLICY IF EXISTS "Anyone can submit leads (forms)" ON public.leads;

-- Create new INSERT policy that explicitly allows both authenticated and anonymous users
CREATE POLICY "Allow public lead submissions"
ON public.leads
FOR INSERT
TO public, anon, authenticated
WITH CHECK (true);

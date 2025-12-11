-- Add a SELECT policy for anonymous users to read the row they just inserted
-- This is needed because the insert uses .select() to return the inserted row
CREATE POLICY "Users can view their submitted leads" 
ON public.leads 
FOR SELECT 
TO anon, authenticated
USING (true);
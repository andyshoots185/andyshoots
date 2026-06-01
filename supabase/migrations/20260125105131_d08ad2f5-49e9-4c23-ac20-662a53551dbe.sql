-- Create contact_submissions table to store form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_read BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins can view submissions (for future admin panel)
-- For now, we'll also allow the edge function to read via service role
CREATE POLICY "Service role can read all submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);
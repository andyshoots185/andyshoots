
DROP POLICY IF EXISTS "Service role can read all submissions" ON public.contact_submissions;

REVOKE SELECT ON public.contact_submissions FROM anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

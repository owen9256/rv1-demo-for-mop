-- Fix security issue: Add explicit policy to deny unauthorized access to support_tickets
-- This ensures that only authenticated users with proper roles can access sensitive data

-- First, ensure RLS is enabled (it should be already, but let's be explicit)
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

-- Add explicit denial policy for anonymous users
CREATE POLICY "Deny anonymous access to support tickets"
ON public.support_tickets
FOR ALL
TO anon
USING (false)
WITH CHECK (false);

-- Add explicit denial policy for authenticated users without proper roles
CREATE POLICY "Deny unauthorized authenticated access to support tickets"
ON public.support_tickets
FOR SELECT
TO authenticated
USING (
  current_user_has_role('admin'::app_role) OR 
  current_user_has_role('moderator'::app_role)
);

-- Update the existing insert policy to be more explicit about who can insert
-- Keep the existing functionality but make it more secure
DROP POLICY IF EXISTS "Anyone can submit support tickets" ON public.support_tickets;

CREATE POLICY "Allow support ticket submission"
ON public.support_tickets
FOR INSERT
TO authenticated, anon
WITH CHECK (true);
-- Create support tickets table
CREATE TABLE public.support_tickets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  module TEXT NOT NULL,
  help_type TEXT NOT NULL,
  subject TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  priority TEXT NOT NULL DEFAULT 'medium',
  attachment_urls TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert support tickets (public form)
CREATE POLICY "Anyone can submit support tickets" 
ON public.support_tickets 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow only admins to read tickets (for future admin panel)
CREATE POLICY "Only admins can read support tickets" 
ON public.support_tickets 
FOR SELECT 
USING (false); -- Will need to be updated when admin roles are implemented

-- Create storage bucket for support attachments
INSERT INTO storage.buckets (id, name, public) VALUES ('support-attachments', 'support-attachments', false);

-- Create storage policies for support attachments
CREATE POLICY "Anyone can upload support attachments" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'support-attachments');

-- Create policy for reading attachments (restricted access)
CREATE POLICY "Restricted access to support attachments" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'support-attachments' AND false); -- Will need admin access later

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_support_tickets_updated_at
BEFORE UPDATE ON public.support_tickets
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
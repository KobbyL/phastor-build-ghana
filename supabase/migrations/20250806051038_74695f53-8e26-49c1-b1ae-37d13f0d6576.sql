-- Create quotation_requests table to capture contact form submissions
CREATE TABLE public.quotation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  project_type text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'quoted', 'completed', 'cancelled')),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  notes text,
  quoted_amount numeric,
  quoted_at timestamp with time zone
);

-- Enable RLS
ALTER TABLE public.quotation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create quotation requests
CREATE POLICY "Allow anyone to create quotation requests" 
ON public.quotation_requests 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users (admins) to view all quotation requests
CREATE POLICY "Allow authenticated users to view quotation requests" 
ON public.quotation_requests 
FOR SELECT 
USING (auth.role() = 'authenticated'::text);

-- Allow authenticated users (admins) to update quotation requests
CREATE POLICY "Allow authenticated users to update quotation requests" 
ON public.quotation_requests 
FOR UPDATE 
USING (auth.role() = 'authenticated'::text);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quotation_requests_updated_at
BEFORE UPDATE ON public.quotation_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
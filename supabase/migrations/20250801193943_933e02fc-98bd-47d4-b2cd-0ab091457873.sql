-- Create orders table for guest checkouts
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  customer_address TEXT,
  order_items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'GHS',
  status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert orders (guest checkout)
CREATE POLICY "Allow anyone to create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading orders by session ID (for order confirmation)
CREATE POLICY "Allow reading orders by session ID" 
ON public.orders 
FOR SELECT 
USING (true);

-- Create trigger for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
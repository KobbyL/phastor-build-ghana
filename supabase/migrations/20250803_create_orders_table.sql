-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  customer_address TEXT,
  order_items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert orders (for customers)
CREATE POLICY "Allow anyone to insert orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users with admin role to read orders
CREATE POLICY "Allow admins to read orders" 
ON public.orders 
FOR SELECT 
USING (auth.jwt() ->> 'role' = 'admin');

-- Create policy to allow authenticated users with admin role to update orders
CREATE POLICY "Allow admins to update orders" 
ON public.orders 
FOR UPDATE 
USING (auth.jwt() ->> 'role' = 'admin');

-- Create trigger for updating timestamps
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better query performance
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_orders_created_at ON public.orders(created_at); 
-- Allow authenticated users to update order status
CREATE POLICY "Allow authenticated users to update orders" 
ON public.orders 
FOR UPDATE 
USING (auth.role() = 'authenticated'::text);
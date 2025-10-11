-- ========================================
-- PHASTOR BUILD GHANA - COMPLETE DATABASE SETUP
-- Run this script in your Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard/project/wieakbpdacegdujkyekd
-- ========================================

-- ========================================
-- 1. CREATE HELPER FUNCTIONS
-- ========================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to handle updated_at for products
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- ========================================
-- 2. CREATE PRODUCTS TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image_url TEXT,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for products
CREATE POLICY "Enable read access for all users" ON public.products
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.products
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON public.products
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON public.products
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS set_updated_at ON public.products;
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- ========================================
-- 3. CREATE ORDERS TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.orders (
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

-- Create policy to allow authenticated users to read orders
CREATE POLICY "Allow authenticated users to read orders" 
ON public.orders 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update orders
CREATE POLICY "Allow authenticated users to update orders" 
ON public.orders 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create trigger for updating timestamps
DROP TRIGGER IF EXISTS update_orders_updated_at ON public.orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at);

-- ========================================
-- 4. CREATE BLOG TABLES
-- ========================================

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image TEXT,
    author_id UUID REFERENCES auth.users(id),
    author_name VARCHAR(100),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    tags TEXT[],
    meta_title VARCHAR(255),
    meta_description TEXT,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(7) DEFAULT '#3B82F6',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_post_categories junction table
CREATE TABLE IF NOT EXISTS blog_post_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
    category_id UUID REFERENCES blog_categories(id) ON DELETE CASCADE,
    UNIQUE(post_id, category_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- Enable RLS (Row Level Security)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
    FOR SELECT USING (status = 'published');

CREATE POLICY "Authenticated users can view all blog posts" ON blog_posts
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert blog posts" ON blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authors can update their own blog posts" ON blog_posts
    FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own blog posts" ON blog_posts
    FOR DELETE USING (auth.uid() = author_id);

-- Create policies for blog_categories
CREATE POLICY "Anyone can view blog categories" ON blog_categories
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage blog categories" ON blog_categories
    FOR ALL USING (auth.role() = 'authenticated');

-- Create policies for blog_post_categories
CREATE POLICY "Anyone can view blog post categories" ON blog_post_categories
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can manage blog post categories" ON blog_post_categories
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert default categories
INSERT INTO blog_categories (name, slug, description, color) VALUES
    ('Construction Tips', 'construction-tips', 'Tips and best practices for construction projects', '#10B981'),
    ('Product Updates', 'product-updates', 'Latest updates about our concrete products', '#3B82F6'),
    ('Industry News', 'industry-news', 'News and trends in the construction industry', '#F59E0B'),
    ('Project Showcase', 'project-showcase', 'Showcasing projects using our products', '#8B5CF6'),
    ('Company News', 'company-news', 'Updates and news from Phastor Concrete Products', '#EF4444')
ON CONFLICT (slug) DO NOTHING;

-- Create trigger for blog_posts
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- 5. CREATE QUOTATION REQUESTS TABLE
-- ========================================

CREATE TABLE IF NOT EXISTS public.quotation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quotation_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quotation requests
CREATE POLICY "Allow anyone to insert quotation requests" 
ON public.quotation_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users to read quotation requests
CREATE POLICY "Allow authenticated users to read quotation requests" 
ON public.quotation_requests 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update quotation requests
CREATE POLICY "Allow authenticated users to update quotation requests" 
ON public.quotation_requests 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create trigger for updating timestamps
DROP TRIGGER IF EXISTS update_quotation_requests_updated_at ON public.quotation_requests;
CREATE TRIGGER update_quotation_requests_updated_at
  BEFORE UPDATE ON public.quotation_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_quotation_requests_created_at ON public.quotation_requests(created_at);

-- ========================================
-- SETUP COMPLETE!
-- ========================================
-- Your database is now ready to use.
-- Admin Login: phastorgroup@gmail.com
-- You'll need to set the password in Authentication > Users
-- ========================================


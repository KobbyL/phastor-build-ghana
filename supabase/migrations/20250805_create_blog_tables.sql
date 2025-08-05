-- Create blog_posts table
CREATE TABLE blog_posts (
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
CREATE TABLE blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    color VARCHAR(7) DEFAULT '#3B82F6',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_post_categories junction table
CREATE TABLE blog_post_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
    category_id UUID REFERENCES blog_categories(id) ON DELETE CASCADE,
    UNIQUE(post_id, category_id)
);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_categories_slug ON blog_categories(slug);

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
    ('Company News', 'company-news', 'Updates and news from Phastor Concrete Products', '#EF4444');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for blog_posts
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

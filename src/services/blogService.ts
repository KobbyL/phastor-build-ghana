import { supabase } from '@/integrations/supabase/client';
import { BlogPost, BlogCategory, CreateBlogPostData, UpdateBlogPostData, BlogFilters, BlogPagination } from '@/types/blog';

export class BlogService {
  // Blog Posts
  static async getBlogPosts(filters: BlogFilters = {}, page = 1, limit = 10) {
    try {
      // Build the query with filters
      // Use direct Supabase query approach
      let dbQuery = (supabase as any).from('blog_posts').select('*');
      
      if (filters.status) {
        dbQuery = dbQuery.eq('status', filters.status);
      }
      
      if (filters.search) {
        dbQuery = dbQuery.or(`title.ilike.%${filters.search}%,content.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%`);
      }
      
      if (filters.author) {
        dbQuery = dbQuery.eq('author_name', filters.author);
      }
      
      const { data: fallbackData, error: fallbackError } = await dbQuery
        .order('created_at', { ascending: false })
        .range((page - 1) * limit, page * limit - 1);
      
      if (fallbackError) throw fallbackError;
      
      const posts: BlogPost[] = fallbackData?.map((post: any) => ({
        ...post,
        categories: []
      })) || [];
      
      return {
        posts,
        pagination: {
          page,
          limit,
          total: posts.length,
          totalPages: Math.ceil(posts.length / limit)
        }
      };
    } catch (error) {
      console.error('Error in getBlogPosts:', error);
      return {
        posts: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0
        }
      };
    }
  }

  static async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }

      return {
        ...data,
        categories: []
      };
    } catch (error) {
      console.error('Error in getBlogPostBySlug:', error);
      return null;
    }
  }

  static async getBlogPostById(id: string): Promise<BlogPost | null> {
    try {
      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }

      return {
        ...data,
        categories: []
      };
    } catch (error) {
      console.error('Error in getBlogPostById:', error);
      return null;
    }
  }

  static async createBlogPost(postData: CreateBlogPostData): Promise<BlogPost> {
    try {
      const { category_ids, ...blogPostData } = postData;
      const user = await supabase.auth.getUser();

      const { data: post, error: postError } = await (supabase as any)
        .from('blog_posts')
        .insert([{
          ...blogPostData,
          author_id: user.data.user?.id,
          published_at: postData.status === 'published' ? (postData.published_at || new Date().toISOString()) : null
        }])
        .select()
        .single();

      if (postError) throw postError;

      return {
        ...post,
        categories: []
      };
    } catch (error) {
      console.error('Error in createBlogPost:', error);
      throw error;
    }
  }

  static async updateBlogPost(postData: UpdateBlogPostData): Promise<BlogPost> {
    try {
      const { id, category_ids, ...updateData } = postData;

      const { error: postError } = await (supabase as any)
        .from('blog_posts')
        .update({
          ...updateData,
          published_at: updateData.status === 'published' && !updateData.published_at 
            ? new Date().toISOString() 
            : updateData.published_at
        })
        .eq('id', id);

      if (postError) throw postError;

      return await this.getBlogPostById(id) as BlogPost;
    } catch (error) {
      console.error('Error in updateBlogPost:', error);
      throw error;
    }
  }

  static async deleteBlogPost(id: string): Promise<void> {
    try {
      const { error } = await (supabase as any)
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error in deleteBlogPost:', error);
      throw error;
    }
  }

  // Blog Categories
  static async getBlogCategories(): Promise<BlogCategory[]> {
    try {
      const { data, error } = await (supabase as any)
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error in getBlogCategories:', error);
      return [];
    }
  }

  static async createBlogCategory(categoryData: Omit<BlogCategory, 'id' | 'created_at'>): Promise<BlogCategory> {
    try {
      const { data, error } = await (supabase as any)
        .from('blog_categories')
        .insert([categoryData])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error in createBlogCategory:', error);
      throw error;
    }
  }

  static async updateBlogCategory(id: string, categoryData: Partial<BlogCategory>): Promise<BlogCategory> {
    try {
      const { data, error } = await (supabase as any)
        .from('blog_categories')
        .update(categoryData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error in updateBlogCategory:', error);
      throw error;
    }
  }

  static async deleteBlogCategory(id: string): Promise<void> {
    try {
      const { error } = await (supabase as any)
        .from('blog_categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error in deleteBlogCategory:', error);
      throw error;
    }
  }

  // Utility functions
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  static async isSlugUnique(slug: string, excludeId?: string): Promise<boolean> {
    try {
      let query = (supabase as any)
        .from('blog_posts')
        .select('id')
        .eq('slug', slug);

      if (excludeId) {
        query = query.neq('id', excludeId);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return !data || data.length === 0;
    } catch (error) {
      console.error('Error in isSlugUnique:', error);
      return false;
    }
  }

  static async getRelatedPosts(postId: string, limit = 3): Promise<BlogPost[]> {
    try {
      // Simple implementation - just get recent posts excluding current one
      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .neq('id', postId)
        .order('published_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return data?.map((post: any) => ({
        ...post,
        categories: []
      })) || [];
    } catch (error) {
      console.error('Error in getRelatedPosts:', error);
      return [];
    }
  }
}

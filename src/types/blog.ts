export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  author_id?: string;
  author_name?: string;
  status: 'draft' | 'published' | 'archived';
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  categories?: BlogCategory[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color: string;
  created_at: string;
}

export interface BlogPostCategory {
  id: string;
  post_id: string;
  category_id: string;
}

export interface CreateBlogPostData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  author_name?: string;
  status: 'draft' | 'published' | 'archived';
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
  category_ids?: string[];
}

export interface UpdateBlogPostData extends Partial<CreateBlogPostData> {
  id: string;
}

export interface BlogFilters {
  status?: 'draft' | 'published' | 'archived';
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

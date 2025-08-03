import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

const SUPABASE_URL = "https://wieakbpdacegdujkyekd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZWFrYnBkYWNlZ2R1amt5ZWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5ODU5NzEsImV4cCI6MjA2OTU2MTk3MX0.yg8QjPk7ffvug9lQERLhe6jLM3HGTPV5jb-UGsjrUk4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
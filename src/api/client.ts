import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gjytkfhumezdatkztkop.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqeXRrZmh1bWV6ZGF0a3p0a29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMDUxMTksImV4cCI6MjA0MjU4MTExOX0.iZoEqcpg1esIw2o8kXxdF9fMbzk6A-DzfOnwVF1fhAw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

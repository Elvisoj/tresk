import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const VITE_SUPABASE_URL= "https://fwbqxyiqcjjtgjnweklw.supabase.co"
const VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YnF4eWlxY2pqdGdqbndla2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzODAwMzMsImV4cCI6MjA1ODk1NjAzM30.HDeC2tLIJfgLgHtD_1VoHpYUx0uSLZbVDOZJ5nXYcl8"
export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

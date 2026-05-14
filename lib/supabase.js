import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qhsmmmgeqmdtcnesafbj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoc21tbWdlcW1kdGNuZXNhZmJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxOTgyODIsImV4cCI6MjA5Mzc3NDI4Mn0.p3rIu61M16yiJMkgoWvj4uP-JDIKJl8ij7MtycYIxnY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
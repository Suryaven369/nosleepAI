import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://belcshfpbfhohsirmmhu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlbGNzaGZwYmZob2hzaXJtbWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NDYwODgsImV4cCI6MjA0OTUyMjA4OH0.H7e_CTZAJDsFvD_zVYY9ORskTHUPufmuuH27TpYfm_o'
)
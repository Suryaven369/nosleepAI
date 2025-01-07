/*
  # Add theme column to stories table

  1. Changes
    - Add theme column to stories table
    - Make it nullable since existing records won't have a theme
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'stories' AND column_name = 'theme'
  ) THEN
    ALTER TABLE stories ADD COLUMN theme text;
  END IF;
END $$;
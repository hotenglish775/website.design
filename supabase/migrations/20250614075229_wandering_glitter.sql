/*
  # Fix RLS policy for contact_messages table

  1. Security Updates
    - Drop existing INSERT policy for contact_messages
    - Create new INSERT policy that properly allows anonymous users to insert contact messages
    - Ensure the policy allows public access for contact form submissions

  This migration fixes the RLS policy violation that prevents contact form submissions from working.
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow public to insert contact messages" ON contact_messages;

-- Create a new INSERT policy that allows anonymous users to insert contact messages
CREATE POLICY "Allow public to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, public
  WITH CHECK (true);

-- Also ensure authenticated users can insert (in case they're logged in)
CREATE POLICY "Allow authenticated users to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
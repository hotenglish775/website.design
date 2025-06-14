/*
  # Fix RLS policy for contact messages

  1. Security Changes
    - Drop existing INSERT policy for contact_messages table
    - Create new INSERT policy that properly allows anonymous users to submit contact messages
    - Ensure the policy allows both anonymous and authenticated users to insert messages

  This migration fixes the RLS violation error that prevents users from submitting contact messages through the public contact form.
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow anyone to insert contact messages" ON contact_messages;

-- Create a new INSERT policy that allows both anonymous and authenticated users
CREATE POLICY "Allow public to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure RLS is enabled on the table
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
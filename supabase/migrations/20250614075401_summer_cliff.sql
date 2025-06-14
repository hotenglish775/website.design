/*
  # Fix RLS policies for contact messages

  1. Security Changes
    - Drop existing conflicting policies on `contact_messages` table
    - Create a single, clear policy for anonymous users to insert contact messages
    - Ensure authenticated users can still manage messages

  This migration resolves the "new row violates row-level security policy" error
  by simplifying and fixing the RLS policies for the contact_messages table.
*/

-- Drop existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow authenticated users to insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow public to insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated users to update message status" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated users to view all messages" ON contact_messages;

-- Create clear, non-conflicting policies
CREATE POLICY "Allow anyone to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update message status"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
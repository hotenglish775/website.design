/*
  # Create contact messages table for freelance designer website

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, sender's full name)
      - `email` (text, sender's email address)
      - `message` (text, the contact message)
      - `status` (text, message status - new, read, responded)
      - `created_at` (timestamp, when message was created)

  2. Security
    - Enable RLS on `contact_messages` table
    - Allow public to insert messages (for contact form)
    - Allow authenticated users to view and update messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
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
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
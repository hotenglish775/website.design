/*
  # Create bookings table for freelance designer website

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, client's full name)
      - `email` (text, client's email address)
      - `phone` (text, optional phone number)
      - `project_type` (text, type of project requested)
      - `preferred_start_date` (date, client's preferred start date)
      - `notes` (text, additional project details and notes)
      - `status` (text, booking status - pending, confirmed, completed, cancelled)
      - `created_at` (timestamp, when booking was created)
      - `updated_at` (timestamp, when booking was last updated)

  2. Security
    - Enable RLS on `bookings` table
    - Add policies for authenticated users to manage bookings
    - Public users can insert bookings (for the booking form)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text NOT NULL,
  preferred_start_date date NOT NULL,
  notes text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public to insert bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_project_type ON bookings(project_type);
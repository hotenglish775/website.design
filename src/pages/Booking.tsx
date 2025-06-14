import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, Download, AlertCircle } from 'lucide-react';
import { createBooking } from '../lib/supabase';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    startDate: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const projectTypes = [
    'Custom EVM Blockchain',
    'Blockchain Faucet Website',
    'Blockchain Explorer',
    'Token Generator',
    'Solana SPL Token',
    'Staking DApp',
    'NFT Marketplace',
    'ICO DApp',
    'Blockchain Chat DApp',
    'Custom Web3 Project',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Save to Supabase database
      const booking = await createBooking({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        project_type: formData.projectType,
        preferred_start_date: formData.startDate,
        notes: formData.notes || '',
      });

      console.log('Booking saved successfully:', booking);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        startDate: '',
        notes: '',
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      setError('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSQL = () => {
    const bookingData = {
      ...formData,
      id: Math.floor(Math.random() * 10000),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    const sqlContent = `-- Booking Entry Export
-- Generated: ${new Date().toLocaleString()}

INSERT INTO bookings (id, name, email, phone, project_type, preferred_start_date, notes, status, created_at)
VALUES (
  ${bookingData.id},
  '${bookingData.name.replace(/'/g, "''")}',
  '${bookingData.email}',
  '${bookingData.phone}',
  '${bookingData.projectType}',
  '${bookingData.startDate}',
  '${bookingData.notes.replace(/'/g, "''")}',
  '${bookingData.status}',
  '${bookingData.createdAt}'
);`;

    const blob = new Blob([sqlContent], { type: 'text/sql' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `booking_${bookingData.id}.sql`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-green-900/20 to-green-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl p-8 text-center animate-fade-in">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Thank you for your booking. We'll be in touch within 24 hours to discuss your Web3 project details and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generateSQL}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download SQL Export
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Book Your Web3 Project
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Ready to revolutionize your business with blockchain technology? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 animate-slide-up">
            {error && (
              <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <span className="text-red-300">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <User className="h-6 w-6 text-blue-400 mr-3" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                      placeholder="+44 1554 123456"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FileText className="h-6 w-6 text-blue-400 mr-3" />
                  Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Start Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        required
                        value={formData.startDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={6}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-white"
                  placeholder="Tell us more about your Web3 project goals, specific blockchain requirements, budget range, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Clock className="h-5 w-5 mr-3" />
                      Book Your Web3 Project
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  We'll respond within 24 hours to schedule a consultation call.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-400">Here's what you can expect after submitting your Web3 project booking:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Response',
                description: 'We\'ll get back to you within 24 hours to confirm receipt and schedule a consultation call.',
              },
              {
                step: '2',
                title: 'Technical Consultation',
                description: 'We\'ll discuss your blockchain requirements, architecture, timeline, budget, and answer technical questions.',
              },
              {
                step: '3',
                title: 'Proposal & Development',
                description: 'We\'ll send you a detailed proposal with project scope, timeline, and pricing for your approval.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
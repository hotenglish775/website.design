import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { createContactMessage } from '../lib/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      await createContactMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      console.log('Contact message saved successfully:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error saving contact message:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@revolutionweb3.design',
      link: 'mailto:info@revolutionweb3.design',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+44 1554 123456',
      link: 'tel:+441554123456',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'ERW Road, Llanelli SA15 2TE',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '24 hours',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Ready to start your Web3 project? We'd love to hear about your blockchain ideas and how we can help bring them to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-white mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Whether you have a specific blockchain project in mind or just want to explore Web3 possibilities, 
                we're here to help. Reach out through any of the methods below, and we'll get back to you promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                      {info.link !== '#' ? (
                        <a 
                          href={info.link}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 font-medium">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Google Maps integration would go here</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl animate-slide-up">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              {isSubmitted && (
                <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 mb-6 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  <span className="text-green-300">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {error && (
                <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-6 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                  <span className="text-red-300">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-white"
                    placeholder="Tell us about your blockchain project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about our Web3 services and blockchain development process.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How long does a typical blockchain project take?',
                answer: 'Project timelines vary based on scope and complexity. A basic dApp typically takes 4-6 weeks, while custom blockchain development may take 8-12 weeks. We\'ll provide a detailed timeline during our initial consultation.',
              },
              {
                question: 'Do you provide ongoing support after deployment?',
                answer: 'Yes! All packages include post-deployment support ranging from 1-6 months depending on the package. We also offer ongoing maintenance plans to keep your blockchain applications secure and up-to-date.',
              },
              {
                question: 'Which blockchains do you work with?',
                answer: 'We specialize in Ethereum, Binance Smart Chain, Polygon, Solana, and can build custom EVM-compatible blockchains. We also work with various Layer 2 solutions and emerging blockchain platforms.',
              },
              {
                question: 'Can you help with smart contract audits?',
                answer: 'Absolutely! We provide comprehensive smart contract audits and security reviews. We also offer ongoing monitoring and can connect you with certified audit firms for additional security validation.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg animate-slide-up">
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
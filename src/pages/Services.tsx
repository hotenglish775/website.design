import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Monitor, ShoppingCart, Palette, Zap, Search, Code } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStripePayment = (packageName: string, price: number) => {
    alert(`Stripe integration will be set up here for ${packageName} - £${price}`);
  };

  const services = [
    {
      name: 'Web3 Starter',
      price: 2500,
      description: 'Perfect for launching your first DApp or Web3 project with essential blockchain features.',
      features: [
        'Wallet Integration',
        'Smart Contract UI',
        'Responsive Design',
        'Basic Web3 Features',
        '1 Month Support',
        'Testnet Deployment',
      ],
      popular: false,
      icon: Monitor,
    },
    {
      name: 'Custom Blockchain UI',
      price: 5500,
      description: 'Advanced blockchain interfaces with custom functionality and multi-chain support.',
      features: [
        'Multi-Chain Support',
        'Advanced Analytics',
        'Custom Components',
        'Smart Contract Dashboard',
        'NFT Integration',
        'API Integration',
        '3 Months Support',
      ],
      popular: true,
      icon: ShoppingCart,
    },
    {
      name: 'Enterprise DApp Suite',
      price: 12000,
      description: 'Complete enterprise-grade decentralized application with full blockchain integration.',
      features: [
        'Full DApp Development',
        'Multi-Protocol Support',
        'Advanced Security',
        'Custom Smart Contracts',
        'Admin Dashboard',
        'White-label Solution',
        '6 Months Support',
      ],
      popular: false,
      icon: Palette,
    },
    {
      name: 'Blockchain Consultation',
      price: 150,
      description: 'Expert blockchain consultation and development assistance for your Web3 projects.',
      features: [
        'Technical Architecture',
        'Smart Contract Review',
        'Security Audit',
        'Performance Optimization',
        'Best Practices Guide',
        'Ongoing Support',
      ],
      popular: false,
      icon: Zap,
    },
  ];

  const additionalServices = [
    {
      icon: Search,
      title: 'Smart Contract Audits',
      description: 'Comprehensive security audits for your smart contracts to ensure safety and compliance.',
    },
    {
      icon: Code,
      title: 'Custom Blockchain Development',
      description: 'Build your own EVM-compatible blockchain with custom features and tokenomics.',
    },
    {
      icon: Monitor,
      title: 'DApp Maintenance',
      description: 'Keep your decentralized applications secure, updated, and performing at their best.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Web3 Services & Packages
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Choose from our carefully crafted blockchain service packages designed to meet your specific Web3 needs and budget.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-slide-up ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mr-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                      <p className="text-3xl font-bold text-blue-400">£{service.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleStripePayment(service.name, service.price)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Pay Now - £{service.price.toLocaleString()}
                    </button>
                    <Link
                      to="/booking"
                      onClick={scrollToTop}
                      className="w-full bg-transparent text-blue-400 border-2 border-blue-400 py-3 px-6 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 inline-flex items-center justify-center group"
                    >
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Web3 Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Need something specific? We offer additional blockchain services to complement your main package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-slide-up">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined blockchain development process ensures your Web3 project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We discuss your Web3 goals, blockchain requirements, and technical vision.' },
              { step: '02', title: 'Architecture', description: 'We design the technical architecture and smart contract structure for your project.' },
              { step: '03', title: 'Development', description: 'Your blockchain application comes to life with careful attention to security and performance.' },
              { step: '04', title: 'Deploy & Support', description: 'We deploy to mainnet and provide ongoing support and maintenance.' },
            ].map((process, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enter Web3?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your blockchain project and find the perfect package for your Web3 needs.
          </p>
          <Link
            to="/booking"
            onClick={scrollToTop}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center group"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
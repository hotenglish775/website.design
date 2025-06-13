import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Clock, Zap, Shield, Globe, Code, Layers, Database, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStripePayment = (packageName: string, price: number) => {
    alert(`Stripe integration will be set up here for ${packageName} - $${price}`);
  };

  const stats = [
    { icon: Users, value: '150+', label: 'DApp Projects' },
    { icon: Award, value: '50M+', label: 'TVL Managed' },
    { icon: Star, value: '5.0', label: 'Client Rating' },
    { icon: Clock, value: '3+', label: 'Years in Web3' },
  ];

  const serviceTiers = [
    {
      name: 'Web3 Starter',
      price: 2500,
      description: 'Perfect for launching your first DApp or Web3 project',
      features: [
        'Wallet Integration',
        'Smart Contract UI',
        'Responsive Design',
        'Basic Web3 Features',
        '1 Month Support'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Custom Blockchain UI',
      price: 5500,
      description: 'Advanced blockchain interfaces with custom functionality',
      features: [
        'Multi-Chain Support',
        'Advanced Analytics',
        'Custom Components',
        'Smart Contract Dashboard',
        'NFT Integration',
        '3 Months Support'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise DApp Suite',
      price: 12000,
      description: 'Complete enterprise-grade decentralized application',
      features: [
        'Full DApp Development',
        'Multi-Protocol Support',
        'Advanced Security',
        'Custom Smart Contracts',
        'Admin Dashboard',
        'White-label Solution',
        '6 Months Support'
      ],
      popular: false,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web3 UI/UX Design',
      description: 'Intuitive interfaces that make blockchain accessible to everyone'
    },
    {
      icon: Code,
      title: 'Custom EVM Interfaces',
      description: 'Seamless integration with Ethereum and EVM-compatible chains'
    },
    {
      icon: Shield,
      title: 'Smart Contract Dashboards',
      description: 'Real-time monitoring and interaction with your smart contracts'
    },
    {
      icon: Layers,
      title: 'NFT Marketplaces',
      description: 'Complete marketplace solutions for digital collectibles'
    },
    {
      icon: Database,
      title: 'DApp Integrations',
      description: 'Connect your application with the decentralized ecosystem'
    },
    {
      icon: Zap,
      title: 'DeFi Protocols',
      description: 'Build the next generation of decentralized finance applications'
    }
  ];

  const techStack = [
    { name: 'Solidity', logo: '⚡' },
    { name: 'Ethers.js', logo: '🔗' },
    { name: 'Web3.js', logo: '🌐' },
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Tailwind', logo: '🎨' },
    { name: 'Hardhat', logo: '⚒️' },
    { name: 'IPFS', logo: '📦' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at DeFiLabs',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Alex delivered an exceptional DeFi dashboard that our users love. The UI is intuitive and the Web3 integration is flawless.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder of NFTVerse',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Our NFT marketplace exceeded all expectations. The design is cutting-edge and the performance is outstanding.'
    },
    {
      name: 'Emily Watson',
      role: 'Product Lead at ChainFlow',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Working with Alex was a game-changer. They understand both design and blockchain technology at a deep level.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Designing the
              </span>
              <br />
              <span className="text-white">Future of the Web</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Creating next-generation Web3 experiences that bridge the gap between blockchain technology and beautiful, intuitive design.
            </p>
            <Link
              to="/booking"
              onClick={scrollToTop}
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Web3 Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From simple wallet integrations to complex DeFi protocols, we have the perfect package for your blockchain project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative group ${tier.popular ? 'lg:scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  <div className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} opacity-5 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-white mb-4">
                      ${tier.price.toLocaleString()}
                    </div>
                    <p className="text-gray-400 mb-6">{tier.description}</p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleStripePayment(tier.name, tier.price)}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${tier.gradient} text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1`}
                    >
                      Get Started - ${tier.price.toLocaleString()}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized in creating cutting-edge Web3 applications that push the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We use the latest and most reliable technologies to build robust Web3 applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-blue-400"
                />
              </div>
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="text-white font-semibold">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-blue-400 text-sm">
                {testimonials[currentTestimonial].role}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-800 border border-gray-700 rounded-full p-2 hover:border-blue-500 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-800 border border-gray-700 rounded-full p-2 hover:border-blue-500 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something extraordinary together. Your Web3 vision deserves a world-class execution.
          </p>
          <Link
            to="/booking"
            onClick={scrollToTop}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
          >
            <span className="relative z-10">Start Your Web3 Journey</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
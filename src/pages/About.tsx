import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Zap, Heart, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'Blockchain Development', percentage: 95 },
    { name: 'Smart Contract Development', percentage: 90 },
    { name: 'Web3 UI/UX Design', percentage: 88 },
    { name: 'DApp Development', percentage: 92 },
    { name: 'NFT Marketplace Development', percentage: 85 },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'We write maintainable, scalable blockchain code that stands the test of time.',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Every pixel matters. We create visually stunning Web3 interfaces that engage users.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Speed is crucial. We optimize every dApp for lightning-fast blockchain interactions.',
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We are committed to delivering results that matter.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Revolution Web3 Design
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We are a passionate team of blockchain developers and Web3 designers with over 5 years of experience creating 
                revolutionary digital experiences in the decentralized world.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We specialize in crafting beautiful, functional blockchain applications that help businesses enter the Web3 space 
                and connect with the future of the internet. From concept to deployment, we're here to bring your vision to life.
              </p>
              <Link
                to="/portfolio"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center group"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Revolution Web3 Design Team"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've honed our skills across various blockchain technologies and design principles to deliver exceptional Web3 results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="animate-slide-up">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-white">{skill.name}</span>
                    <span className="text-blue-400 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Our Journey</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We started our journey in blockchain development during the early days of Ethereum, where we discovered our passion for 
                  creating decentralized experiences that solve real-world problems.
                </p>
                <p>
                  Over the years, we've worked with startups, DeFi protocols, NFT projects, and established companies, 
                  helping them establish a strong presence in the Web3 ecosystem and achieve their blockchain goals.
                </p>
                <p>
                  We believe that great Web3 design is not just about aesthetics—it's about creating meaningful 
                  connections between users and the decentralized future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core values guide every blockchain project we take on and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center animate-slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to take your project into the Web3 space? We'd love to hear about your blockchain vision.
          </p>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center group"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
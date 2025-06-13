import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Custom EVM Blockchain',
      category: 'blockchain',
      description: 'EVM Proof-of-Stake (PoS) Blockchain Development compatible with Ethereum, BSC, and Polygon. Features validator staking, rewards system, and smart contract support.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solidity', 'Go', 'EVM', 'PoS', 'Validators'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Validator Staking & Rewards',
        'Predefined Maximum Supply',
        'Testnet & Faucet Applications',
        'ERC20/ERC721/ERC1155 Support',
        'NFT Integration for GameFi',
        'Full Source Code Provided'
      ]
    },
    {
      title: 'Blockchain Faucet Website',
      category: 'dapp',
      description: 'Custom faucet dApp that lets users claim tokens for free. Supports various blockchains with captcha, anti-bot protection, and wallet integration.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['React', 'Web3.js', 'Captcha', 'Multi-chain'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Multi-blockchain Support',
        'Captcha Protection',
        'Anti-bot Mechanisms',
        'Wallet Integration',
        'Rate Limiting',
        'Admin Dashboard'
      ]
    },
    {
      title: 'Custom Blockchain Explorer',
      category: 'tools',
      description: 'Custom blockchain explorer to track transactions, wallets, and tokens on your network. Supports EVM-compatible chains with custom styling.',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'GraphQL', 'EVM'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Transaction Tracking',
        'Wallet Analytics',
        'Token Information',
        'Custom Styling',
        'API Integration',
        'Real-time Updates'
      ]
    },
    {
      title: 'Blockchain Token Generator',
      category: 'tools',
      description: 'Secure, easy-to-use token creation platform for Ethereum, BSC, Solana, and custom chains. Generate tokens with just a few clicks.',
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solidity', 'React', 'Multi-chain', 'Token Factory'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Multi-chain Support',
        'Custom Token Features',
        'Security Audited',
        'One-click Deployment',
        'Metadata Setup',
        'Liquidity Pool Creation'
      ]
    },
    {
      title: 'Solana SPL Token Creation',
      category: 'solana',
      description: 'Create and deploy custom SPL tokens on the Solana blockchain. Includes metadata setup, token minting, and wallet integration.',
      image: 'https://images.pexels.com/photos/6802045/pexels-photo-6802045.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solana', 'SPL', 'Rust', 'Phantom Wallet'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'SPL Token Creation',
        'Metadata Configuration',
        'Minting Capabilities',
        'Phantom Integration',
        'Solflare Support',
        'Token Authority Management'
      ]
    },
    {
      title: 'Custom Staking DApp',
      category: 'defi',
      description: 'Professional staking dApp where users can stake tokens and earn rewards. Fully customizable UI, compatible with major EVM chains.',
      image: 'https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solidity', 'React', 'DeFi', 'Staking'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Token Staking Pools',
        'Reward Distribution',
        'APY Calculations',
        'Unstaking Periods',
        'Multi-token Support',
        'Admin Controls'
      ]
    },
    {
      title: 'NFT Marketplace DApp',
      category: 'nft',
      description: 'Full-featured NFT marketplace built on Ethereum, BSC, or Solana. Features minting, buying/selling, auction support, and wallet integration.',
      image: 'https://images.pexels.com/photos/6802055/pexels-photo-6802055.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['NFT', 'Marketplace', 'IPFS', 'Auctions'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'NFT Minting',
        'Buy/Sell Functionality',
        'Auction System',
        'IPFS Integration',
        'Royalty Management',
        '13-page Complete Script'
      ]
    },
    {
      title: 'ICO DApp Platform',
      category: 'ico',
      description: 'Complete ICO dApp for token sales with whitelisting, vesting, and wallet connection. Works on Ethereum, BSC, Polygon, and custom chains.',
      image: 'https://images.pexels.com/photos/6802058/pexels-photo-6802058.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['ICO', 'Token Sale', 'Vesting', 'Whitelist'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Token Sale Management',
        'Whitelist System',
        'Vesting Schedules',
        'Multi-chain Support',
        'KYC Integration',
        'Admin Dashboard'
      ]
    },
    {
      title: 'Blockchain Chat DApp',
      category: 'dapp',
      description: 'Secure, Web3-based decentralized chat application with wallet login, encrypted messaging, and on-chain/off-chain data handling.',
      image: 'https://images.pexels.com/photos/6802061/pexels-photo-6802061.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Chat', 'Encryption', 'Web3', 'Decentralized'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Wallet Authentication',
        'End-to-end Encryption',
        'Group Chats',
        'File Sharing',
        'On-chain Verification',
        'IPFS Storage'
      ]
    },
    {
      title: 'Full Uniswap Clone DApp',
      category: 'defi',
      description: 'Complete Uniswap clone with liquidity pools, swaps, staking, and farming. Built on Solidity and Web3 with responsive design and wallet support.',
      image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Uniswap', 'DEX', 'Liquidity', 'Farming'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Automated Market Maker',
        'Liquidity Pool Creation',
        'Token Swapping',
        'Yield Farming',
        'Staking Rewards',
        'Governance Token'
      ]
    },
    {
      title: 'MetaMask Clone Extension',
      category: 'tools',
      description: 'MetaMask-style wallet extension for your blockchain or token project. Secure Chrome extension with Web3 integration and wallet features.',
      image: 'https://images.pexels.com/photos/6802064/pexels-photo-6802064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Chrome Extension', 'Wallet', 'Web3', 'Security'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Secure Key Management',
        'Multi-chain Support',
        'Transaction Signing',
        'DApp Integration',
        'Custom Network Support',
        'Backup & Recovery'
      ]
    },
    {
      title: 'ChatGPT-Powered Web3 Chat',
      category: 'ai',
      description: 'Web3-powered ChatGPT interface where users can chat securely using their wallets with token-gated access or tipping features.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['AI', 'ChatGPT', 'Web3', 'Token-gated'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'AI-Powered Chat',
        'Wallet Authentication',
        'Token-gated Access',
        'Tipping System',
        'Encrypted Messages',
        'Smart Contract Integration'
      ]
    },
    {
      title: 'Smart Contract Auditing DApp',
      category: 'tools',
      description: 'AI-powered dApp that audits Solidity smart contracts. Includes syntax checks, vulnerability detection, and comprehensive report generation.',
      image: 'https://images.pexels.com/photos/6802067/pexels-photo-6802067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['AI', 'Security', 'Auditing', 'Solidity'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'AI Vulnerability Detection',
        'Syntax Analysis',
        'Security Report Generation',
        'Gas Optimization',
        'Best Practice Checks',
        'Automated Testing'
      ]
    },
    {
      title: 'Crypto Trading Bot DApp',
      category: 'trading',
      description: 'Frontend dApp where users can connect wallets and configure automated trading strategies. Supports CEX/DEX APIs and Web3 wallet automation.',
      image: 'https://images.pexels.com/photos/6802070/pexels-photo-6802070.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Trading Bot', 'DeFi', 'Automation', 'API'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Strategy Configuration',
        'CEX/DEX Integration',
        'Automated Trading',
        'Risk Management',
        'Portfolio Tracking',
        'Backtesting Tools'
      ]
    },
    {
      title: 'Custom Crypto Airdrop DApp',
      category: 'airdrop',
      description: 'Interactive airdrop dApp where users can claim tokens by completing tasks or connecting wallets. Includes anti-bot protection and referral options.',
      image: 'https://images.pexels.com/photos/6802073/pexels-photo-6802073.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Airdrop', 'Tasks', 'Referrals', 'Anti-bot'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Task-based Claims',
        'Referral System',
        'Anti-bot Protection',
        'Eligibility Verification',
        'Social Media Integration',
        'Analytics Dashboard'
      ]
    },
    {
      title: 'Solana Token Airdrop DApp',
      category: 'solana',
      description: 'Fast, user-friendly SPL token airdrop dApp with wallet authentication and eligibility checks. Perfect for Solana token distribution.',
      image: 'https://images.pexels.com/photos/6802076/pexels-photo-6802076.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solana', 'SPL', 'Airdrop', 'Phantom'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'SPL Token Distribution',
        'Phantom Wallet Integration',
        'Eligibility Verification',
        'Bulk Distribution',
        'Real-time Analytics',
        'Claim History'
      ]
    },
    {
      title: 'Web3 Facebook Clone',
      category: 'social',
      description: 'Decentralized social network DApp inspired by Facebook. Includes posts, likes, profiles, and wallet-based login on EVM or Solana.',
      image: 'https://images.pexels.com/photos/6802079/pexels-photo-6802079.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Social', 'Decentralized', 'Posts', 'Profiles'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Decentralized Posts',
        'Wallet-based Login',
        'Like & Comment System',
        'User Profiles',
        'Friend Connections',
        'IPFS Content Storage'
      ]
    },
    {
      title: 'Full Blockchain Web3 Tools Suite',
      category: 'tools',
      description: 'Complete suite of Web3 tools: wallet connector, token creator, staking, ICO, and NFT marketplace built with Next.js and Solidity.',
      image: 'https://images.pexels.com/photos/6802082/pexels-photo-6802082.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Next.js', 'Tools Suite', 'Multi-chain', 'All-in-one'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Wallet Connector',
        'Token Creator',
        'Staking Platform',
        'ICO Launchpad',
        'NFT Marketplace',
        'Multi-chain Support'
      ]
    },
    {
      title: 'Solana NFT Marketplace',
      category: 'nft',
      description: 'Complete NFT marketplace on Solana with minting, buying, listing, and Phantom wallet support. Ideal for art, gaming, and collectibles.',
      image: 'https://images.pexels.com/photos/6802085/pexels-photo-6802085.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solana', 'NFT', 'Phantom', 'Marketplace'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Solana NFT Minting',
        'Phantom Integration',
        'Buy/Sell/Trade',
        'Collection Management',
        'Royalty System',
        'Low Transaction Fees'
      ]
    },
    {
      title: 'AI-Powered Chrome Extension',
      category: 'ai',
      description: 'Custom Chrome extension powered by ChatGPT or Gemini for summarization, automation, or trading signals. Includes backend integration and UI customization.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Chrome Extension', 'AI', 'ChatGPT', 'Automation'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'AI-Powered Features',
        'Custom Task Automation',
        'Trading Signal Integration',
        'Content Summarization',
        'Backend API Integration',
        'Custom UI Design'
      ]
    },
    {
      title: 'Multi-Chain Crypto Exchange',
      category: 'exchange',
      description: 'Centralized or hybrid exchange platform with multi-chain wallet integration, order book, liquidity system, and security layers across 15+ blockchains.',
      image: 'https://images.pexels.com/photos/6802088/pexels-photo-6802088.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Exchange', 'Multi-chain', 'Order Book', 'Liquidity'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        '15+ Blockchain Support',
        'Advanced Order Book',
        'Liquidity Management',
        'Security Layers',
        'KYC/AML Integration',
        'API Trading Support'
      ]
    },
    {
      title: 'Crypto Hedge Fund DApp',
      category: 'defi',
      description: 'Decentralized hedge fund platform where users can invest in curated portfolios, manage allocations, and track returns with transparent smart contracts.',
      image: 'https://images.pexels.com/photos/6802091/pexels-photo-6802091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Hedge Fund', 'Portfolio', 'Investment', 'DeFi'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Portfolio Management',
        'Investment Pools',
        'Transparent Returns',
        'Risk Assessment',
        'Automated Rebalancing',
        'Performance Analytics'
      ]
    },
    {
      title: 'ETH Arbitrage Trading DApp',
      category: 'trading',
      description: 'DApp that scans ETH-based exchanges for arbitrage opportunities and allows wallet-based or API-triggered trade execution with real-time alerts.',
      image: 'https://images.pexels.com/photos/6802094/pexels-photo-6802094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Arbitrage', 'ETH', 'Trading', 'Real-time'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Arbitrage Detection',
        'Real-time Alerts',
        'Multi-Exchange Scanning',
        'Automated Execution',
        'Profit Tracking',
        'Risk Management'
      ]
    },
    {
      title: 'Advanced Web3 Wallet Connector',
      category: 'tools',
      description: 'Powerful Web3 wallet connector supporting MetaMask, WalletConnect, Coinbase, and more across EVM, Solana, and custom networks.',
      image: 'https://images.pexels.com/photos/6802097/pexels-photo-6802097.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Wallet Connector', 'Multi-wallet', 'EVM', 'Solana'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Multi-wallet Support',
        'Cross-chain Compatibility',
        'WalletConnect Integration',
        'Custom Network Support',
        'Session Management',
        'Error Handling'
      ]
    },
    {
      title: 'AI Solidity Code Editor',
      category: 'ai',
      description: 'AI-powered Solidity IDE that audits smart contracts in real-time, suggests improvements, and highlights risks using GPT technology.',
      image: 'https://images.pexels.com/photos/8386437/pexels-photo-8386437.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['AI', 'Solidity', 'IDE', 'Code Editor'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Real-time Code Analysis',
        'AI-powered Suggestions',
        'Vulnerability Detection',
        'Code Optimization',
        'Syntax Highlighting',
        'Integrated Testing'
      ]
    },
    {
      title: 'Solana Blockchain SaaS DApp',
      category: 'solana',
      description: 'SaaS platform on Solana for subscription services and token-gated apps. Full development with scalable backend and wallet login integration.',
      image: 'https://images.pexels.com/photos/6802100/pexels-photo-6802100.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Solana', 'SaaS', 'Subscriptions', 'Token-gated'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Subscription Management',
        'Token-gated Access',
        'Scalable Backend',
        'Wallet Authentication',
        'Payment Processing',
        'Analytics Dashboard'
      ]
    },
    {
      title: 'AI Image Generator App',
      category: 'ai',
      description: 'AI art platform using Stable Diffusion or DALL·E for image generation. Integrated with Web3 payments and NFT minting capabilities.',
      image: 'https://images.pexels.com/photos/8386441/pexels-photo-8386441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['AI', 'Image Generation', 'NFT', 'Web3 Payments'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'AI Image Generation',
        'Multiple AI Models',
        'Web3 Payment Integration',
        'NFT Minting',
        'Gallery System',
        'Commercial Licensing'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'dapp', name: 'DApps' },
    { id: 'defi', name: 'DeFi' },
    { id: 'nft', name: 'NFT' },
    { id: 'tools', name: 'Tools' },
    { id: 'solana', name: 'Solana' },
    { id: 'ico', name: 'ICO' },
    { id: 'ai', name: 'AI' },
    { id: 'trading', name: 'Trading' },
    { id: 'airdrop', name: 'Airdrop' },
    { id: 'social', name: 'Social' },
    { id: 'exchange', name: 'Exchange' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Our Blockchain Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Explore our comprehensive collection of 28 Web3 projects spanning multiple blockchains, AI integration, and cutting-edge decentralized technologies.
          </p>
        </div>
      </section>

      {/* Sticky Filter Navigation */}
      <div className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <div className="flex items-center mr-4 text-gray-400">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium hidden sm:inline">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm transform hover:scale-105 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Project Count */}
          <div className="text-center">
            <span className="text-sm text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
              Showing <span className="text-blue-400 font-semibold">{filteredProjects.length}</span> of <span className="text-purple-400 font-semibold">{projects.length}</span> projects
            </span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-up group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all transform hover:scale-110 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all transform hover:scale-110 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {categories.find(cat => cat.id === project.category)?.name || project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.features && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-gray-700 text-gray-300 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-all transform hover:scale-105 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Showcase */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We stay at the forefront of blockchain technology to deliver cutting-edge Web3 solutions across multiple ecosystems and AI platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Solidity', 'Rust', 'Go', 'React', 'Next.js', 'TypeScript',
              'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'IPFS', 'GraphQL',
              'Phantom', 'MetaMask', 'OpenAI', 'Chrome APIs', 'Uniswap', 'Solana',
              'ChatGPT', 'Gemini', 'Stable Diffusion', 'DALL·E', 'WalletConnect', 'Coinbase Wallet'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 text-center animate-slide-up hover:-translate-y-1 group"
              >
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Web3 Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your blockchain vision to life with the same attention to detail and innovation showcased in our comprehensive portfolio.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Start Your Blockchain Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
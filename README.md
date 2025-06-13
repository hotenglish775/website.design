# Revolution Web3 Design 🚀

> **Revolutionizing the future of the web with cutting-edge Web3 technologies and beautiful, intuitive blockchain design.**

![Revolution Web3 Design](https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)

## 🌟 About

Revolution Web3 Design is a comprehensive Web3 development platform showcasing 28+ blockchain projects spanning multiple ecosystems including Ethereum, Solana, AI integration, and cutting-edge decentralized technologies.

### 🎯 Our Expertise
- **Custom EVM Blockchain Development**
- **DeFi Protocol Creation**
- **NFT Marketplace Development**
- **Smart Contract Auditing**
- **Web3 UI/UX Design**
- **AI-Powered Blockchain Tools**

## 🚀 Quick Start

### Automated Installation (Recommended)

```bash
# Download and run the installation script
curl -fsSL https://raw.githubusercontent.com/your-repo/revolution-web3-design/main/install.sh | bash

# Or download first, then run
wget https://raw.githubusercontent.com/your-repo/revolution-web3-design/main/install.sh
chmod +x install.sh
./install.sh
```

### Manual Installation

#### Prerequisites
- **Node.js** 18+ and npm
- **Git**
- **Supabase Account** (for database)

#### Step 1: Clone Repository
```bash
git clone https://github.com/your-repo/revolution-web3-design.git
cd revolution-web3-design
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

#### Step 4: Configure Environment Variables
```env
# Supabase Configuration
VITE_SUPABASE_URL="your-supabase-url"
VITE_SUPABASE_ANON_KEY="your-supabase-anon-key"

# SMTP Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
ADMIN_EMAIL="admin@revolutionweb3.design"

# Application Configuration
APP_NAME="Revolution Web3 Design"
APP_URL="http://localhost:1000"
PORT=1000
```

#### Step 5: Build and Start
```bash
# Development
npm run dev

# Production
npm run build
npm run preview
```

## 📁 Project Structure

```
revolution-web3-design/
├── 📂 src/
│   ├── 📂 components/          # Reusable UI components
│   ├── 📂 pages/              # Main application pages
│   ├── 📂 lib/                # Utilities and configurations
│   └── 📄 App.tsx             # Main application component
├── 📂 supabase/
│   └── 📂 migrations/         # Database schema migrations
├── 📂 server/                 # Backend server files
├── 📄 install.sh              # Automated installation script
├── 📄 package.json            # Project dependencies
└── 📄 README.md              # This file
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 1000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run server` | Start backend server |

## 🌐 Features

### 🎨 Frontend Features
- **Modern React 18** with TypeScript
- **Tailwind CSS** for styling
- **Responsive Design** for all devices
- **Smooth Animations** and micro-interactions
- **Dark Theme** optimized for Web3

### 🔗 Web3 Integration
- **Multi-chain Support** (Ethereum, BSC, Polygon, Solana)
- **Wallet Connectivity** (MetaMask, WalletConnect, Phantom)
- **Smart Contract Interaction**
- **DeFi Protocol Integration**
- **NFT Marketplace Features**

### 📊 Backend Features
- **Supabase Database** integration
- **SMTP Email** notifications
- **Form Validation** and security
- **API Endpoints** for data management
- **Real-time Updates**

## 🗄️ Database Setup

The application uses Supabase for database management. The following tables are automatically created:

### Tables
- **bookings** - Client project bookings
- **contact_messages** - Contact form submissions

### Setup Instructions
1. Create a [Supabase account](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key to `.env`
4. Run the migration files in `supabase/migrations/`

## 📧 Email Configuration

Configure SMTP settings in your `.env` file:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
ADMIN_EMAIL="admin@revolutionweb3.design"
```

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `SMTP_PASS`

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Netlify
```bash
# Build command
npm run build

# Publish directory
dist

# Environment variables
# Add your .env variables to Netlify dashboard
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🔧 Configuration

### Port Configuration
The application runs on port 1000 by default. To change:

```env
PORT=3000
```

Or use the dev script:
```bash
npm run dev -- --port 3000
```

### Custom Domain
Update the `APP_URL` in your `.env` file:
```env
APP_URL="https://your-domain.com"
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ }
    }
  }
}
```

### Fonts
The application uses Inter font. To change, update `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🔒 Security

### Environment Variables
- Never commit `.env` files
- Use strong passwords for SMTP
- Rotate API keys regularly

### Form Security
- Client and server-side validation
- Honeypot spam protection
- Rate limiting on submissions

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 1000
lsof -ti:1000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

**Supabase connection issues:**
- Verify your URL and keys in `.env`
- Check Supabase project status
- Ensure RLS policies are configured

**Email not sending:**
- Verify SMTP credentials
- Check firewall settings
- Test with a different SMTP provider

## 📞 Support

### Contact Information
- **Email**: info@revolutionweb3.design
- **Phone**: +44 1554 123456
- **Address**: ERW Road, Llanelli SA15 2TE

### Getting Help
1. Check this README first
2. Search existing issues
3. Create a new issue with details
4. Contact support for urgent matters

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test on multiple devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Supabase** for the backend infrastructure
- **Lucide React** for the beautiful icons
- **Pexels** for the stock photography

---

<div align="center">

**Built with ❤️ by Revolution Web3 Design**

[Website](https://revolutionweb3.design) • [Portfolio](https://revolutionweb3.design/portfolio) • [Contact](https://revolutionweb3.design/contact)

</div>
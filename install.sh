#!/bin/bash

# Revolution Web3 Design - Professional Installation Script
# Author: Revolution Web3 Design Team
# Version: 1.0.0
# Description: Automated setup script for the Revolution Web3 Design website

set -e  # Exit on any error

# Colors for beautiful output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# ASCII Art Banner
show_banner() {
    clear
    echo -e "${CYAN}"
    cat << "EOF"
    ██████╗ ███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗
    ██╔══██╗██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║
    ██████╔╝█████╗  ██║   ██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║
    ██╔══██╗██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║
    ██║  ██║███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║
    ╚═╝  ╚═╝╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                                                        
    ██╗    ██╗███████╗██████╗ ██████╗     ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗
    ██║    ██║██╔════╝██╔══██╗╚════██╗    ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║
    ██║ █╗ ██║█████╗  ██████╔╝ █████╔╝    ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║
    ██║███╗██║██╔══╝  ██╔══██╗ ╚═══██╗    ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║
    ╚███╔███╔╝███████╗██████╔╝██████╔╝    ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║
     ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝     ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
EOF
    echo -e "${NC}"
    echo -e "${WHITE}═══════════════════════════════════════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}                    🚀 Professional Installation Script v1.0.0 🚀${NC}"
    echo -e "${WHITE}═══════════════════════════════════════════════════════════════════════════════════${NC}"
    echo ""
}

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_step() {
    echo -e "${PURPLE}[STEP]${NC} $1"
}

# Progress bar function
show_progress() {
    local duration=$1
    local message=$2
    echo -n -e "${CYAN}$message${NC}"
    
    for ((i=0; i<=duration; i++)); do
        echo -n "."
        sleep 0.1
    done
    echo -e " ${GREEN}✓${NC}"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        log_error "This script should not be run as root for security reasons."
        log_info "Please run as a regular user with sudo privileges."
        exit 1
    fi
}

# Check system requirements
check_requirements() {
    log_step "Checking system requirements..."
    
    # Check OS
    if [[ "$OSTYPE" != "linux-gnu"* ]] && [[ "$OSTYPE" != "darwin"* ]]; then
        log_error "This script supports Linux and macOS only."
        exit 1
    fi
    
    # Check if curl is installed
    if ! command -v curl &> /dev/null; then
        log_warning "curl is not installed. Installing..."
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            sudo apt-get update && sudo apt-get install -y curl
        elif [[ "$OSTYPE" == "darwin"* ]]; then
            brew install curl
        fi
    fi
    
    # Check if git is installed
    if ! command -v git &> /dev/null; then
        log_warning "Git is not installed. Installing..."
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            sudo apt-get update && sudo apt-get install -y git
        elif [[ "$OSTYPE" == "darwin"* ]]; then
            brew install git
        fi
    fi
    
    log_success "System requirements check completed!"
}

# Install Node.js and npm
install_nodejs() {
    log_step "Checking Node.js installation..."
    
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        log_info "Node.js is already installed: $NODE_VERSION"
        
        # Check if version is >= 18
        MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
        if [ "$MAJOR_VERSION" -lt 18 ]; then
            log_warning "Node.js version is too old. Updating to latest LTS..."
            install_node_fresh
        else
            log_success "Node.js version is compatible!"
        fi
    else
        log_info "Node.js not found. Installing latest LTS version..."
        install_node_fresh
    fi
}

install_node_fresh() {
    # Install Node.js using NodeSource repository (Linux) or Homebrew (macOS)
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        if ! command -v brew &> /dev/null; then
            log_info "Installing Homebrew first..."
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        fi
        brew install node
    fi
    
    log_success "Node.js installed successfully!"
}

# Interactive configuration
configure_environment() {
    log_step "Setting up environment configuration..."
    echo ""
    echo -e "${YELLOW}Please provide the following configuration details:${NC}"
    echo ""
    
    # Supabase Configuration
    echo -e "${CYAN}🗄️  Supabase Configuration${NC}"
    read -p "Enter your Supabase URL: " SUPABASE_URL
    read -p "Enter your Supabase Anon Key: " SUPABASE_ANON_KEY
    echo ""
    
    # SMTP Configuration
    echo -e "${CYAN}📧 SMTP Email Configuration${NC}"
    read -p "Enter SMTP Host (e.g., smtp.gmail.com): " SMTP_HOST
    read -p "Enter SMTP Port (e.g., 587): " SMTP_PORT
    read -p "Enter SMTP Username: " SMTP_USER
    read -s -p "Enter SMTP Password: " SMTP_PASS
    echo ""
    read -p "Enter Admin Email (for notifications): " ADMIN_EMAIL
    echo ""
    
    # Application Configuration
    echo -e "${CYAN}⚙️  Application Configuration${NC}"
    read -p "Enter Application Name [Revolution Web3 Design]: " APP_NAME
    APP_NAME=${APP_NAME:-"Revolution Web3 Design"}
    
    read -p "Enter Application URL [http://localhost:1000]: " APP_URL
    APP_URL=${APP_URL:-"http://localhost:1000"}
    
    read -p "Enter Port [1000]: " PORT
    PORT=${PORT:-1000}
    echo ""
    
    # Create .env file
    create_env_file
}

create_env_file() {
    log_info "Creating environment configuration file..."
    
    cat > .env << EOF
# Revolution Web3 Design - Environment Configuration
# Generated on: $(date)

# Application Configuration
APP_NAME="$APP_NAME"
APP_URL="$APP_URL"
PORT=$PORT
NODE_ENV=production

# Supabase Configuration
VITE_SUPABASE_URL="$SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="$SUPABASE_ANON_KEY"

# SMTP Email Configuration
SMTP_HOST="$SMTP_HOST"
SMTP_PORT=$SMTP_PORT
SMTP_USER="$SMTP_USER"
SMTP_PASS="$SMTP_PASS"
SMTP_SECURE=true

# Admin Configuration
ADMIN_EMAIL="$ADMIN_EMAIL"

# Security
SESSION_SECRET="$(openssl rand -base64 32)"
JWT_SECRET="$(openssl rand -base64 32)"

# Database (if using local database)
DATABASE_URL="postgresql://localhost:5432/revolution_web3"

# API Keys (add your API keys here)
# STRIPE_SECRET_KEY=""
# STRIPE_PUBLISHABLE_KEY=""
EOF
    
    log_success "Environment file created successfully!"
}

# Install dependencies
install_dependencies() {
    log_step "Installing project dependencies..."
    
    show_progress 20 "Installing npm packages"
    
    if ! npm install; then
        log_error "Failed to install dependencies"
        exit 1
    fi
    
    log_success "Dependencies installed successfully!"
}

# Build the project
build_project() {
    log_step "Building the project..."
    
    show_progress 30 "Building production assets"
    
    if ! npm run build; then
        log_error "Build failed"
        exit 1
    fi
    
    log_success "Project built successfully!"
}

# Create systemd service (Linux only)
create_service() {
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        log_step "Creating systemd service..."
        
        read -p "Do you want to create a systemd service for auto-start? (y/n): " CREATE_SERVICE
        
        if [[ $CREATE_SERVICE == "y" || $CREATE_SERVICE == "Y" ]]; then
            SERVICE_FILE="/etc/systemd/system/revolution-web3.service"
            
            sudo tee $SERVICE_FILE > /dev/null << EOF
[Unit]
Description=Revolution Web3 Design Website
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$(pwd)
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF
            
            sudo systemctl daemon-reload
            sudo systemctl enable revolution-web3
            
            log_success "Systemd service created and enabled!"
        fi
    fi
}

# Start the application
start_application() {
    log_step "Starting the application..."
    
    read -p "Do you want to start the application now? (y/n): " START_NOW
    
    if [[ $START_NOW == "y" || $START_NOW == "Y" ]]; then
        if [[ "$OSTYPE" == "linux-gnu"* ]] && systemctl is-enabled revolution-web3 &>/dev/null; then
            sudo systemctl start revolution-web3
            log_success "Application started via systemd service!"
        else
            log_info "Starting application in development mode..."
            npm run dev &
            APP_PID=$!
            log_success "Application started! PID: $APP_PID"
        fi
        
        echo ""
        log_info "Application is running at: $APP_URL"
        log_info "Press Ctrl+C to stop the application"
    fi
}

# Show completion message
show_completion() {
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════════════════════════${NC}"
    echo -e "${WHITE}                    🎉 Installation Completed Successfully! 🎉${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "${CYAN}📋 Installation Summary:${NC}"
    echo -e "   ✅ System requirements checked"
    echo -e "   ✅ Node.js and npm installed"
    echo -e "   ✅ Dependencies installed"
    echo -e "   ✅ Environment configured"
    echo -e "   ✅ Project built successfully"
    echo ""
    echo -e "${YELLOW}🚀 Quick Start Commands:${NC}"
    echo -e "   ${WHITE}Development:${NC} npm run dev"
    echo -e "   ${WHITE}Production:${NC}  npm start"
    echo -e "   ${WHITE}Build:${NC}       npm run build"
    echo ""
    echo -e "${BLUE}📖 Important Files:${NC}"
    echo -e "   ${WHITE}.env${NC}        - Environment configuration"
    echo -e "   ${WHITE}package.json${NC} - Project dependencies"
    echo -e "   ${WHITE}dist/${NC}       - Built production files"
    echo ""
    echo -e "${PURPLE}🌐 Access Your Website:${NC}"
    echo -e "   ${WHITE}Local:${NC}  $APP_URL"
    echo -e "   ${WHITE}Admin:${NC} $ADMIN_EMAIL"
    echo ""
    echo -e "${CYAN}💡 Need Help?${NC}"
    echo -e "   📧 Email: info@revolutionweb3.design"
    echo -e "   📞 Phone: +44 1554 123456"
    echo -e "   🌐 Website: https://revolutionweb3.design"
    echo ""
    echo -e "${GREEN}Thank you for choosing Revolution Web3 Design! 🚀${NC}"
    echo ""
}

# Main installation function
main() {
    show_banner
    
    log_info "Starting Revolution Web3 Design installation..."
    echo ""
    
    # Pre-installation checks
    check_root
    check_requirements
    
    # Core installation steps
    install_nodejs
    configure_environment
    install_dependencies
    build_project
    
    # Optional services
    create_service
    
    # Completion
    show_completion
    start_application
}

# Error handling
trap 'log_error "Installation failed! Check the error messages above."; exit 1' ERR

# Run main function
main "$@"
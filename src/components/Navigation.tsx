
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, User, Briefcase, MessageCircle, FileText, Mail, QrCode } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Zap },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Resume', path: '/resume', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Chat', path: '/chat', icon: MessageCircle },
    { name: 'QR Code', path: '/qrcode', icon: QrCode }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'glass-morphism backdrop-blur-md shadow-2xl' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
              <Zap className="w-6 h-6 text-cosmic-black animate-lightning-glow" />
            </div>
            <span className="text-xl font-bold text-cosmic-starlight">Austin Wood</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-300 hover:scale-105
                    ${isActive 
                      ? 'bg-cosmic-gold text-cosmic-black shadow-lg shadow-cosmic-gold/25' 
                      : 'text-cosmic-starlight hover:text-cosmic-gold hover:bg-cosmic-gold/10'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-cosmic-starlight hover:text-cosmic-gold hover:bg-cosmic-gold/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 glass-morphism rounded-lg mt-2 animate-fade-in">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 text-sm font-medium
                      transition-all duration-200
                      ${isActive 
                        ? 'bg-cosmic-gold text-cosmic-black' 
                        : 'text-cosmic-starlight hover:text-cosmic-gold hover:bg-cosmic-gold/10'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

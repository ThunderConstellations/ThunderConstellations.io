
import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, FileText, Mail, Zap, Award, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Award, label: 'Skills', path: '/skills' },
    { icon: Briefcase, label: 'Projects', path: '/projects' },
    { icon: FileText, label: 'Resume', path: '/resume' },
    { icon: Users, label: 'References', path: '/references' },
    { icon: Mail, label: 'Contact', path: '/contact' }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 glass-morphism p-3 rounded-xl hover:border-cosmic-gold/40 transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-cosmic-gold" />
        ) : (
          <Menu className="w-6 h-6 text-cosmic-starlight group-hover:text-cosmic-gold transition-colors" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        glass-morphism border-r border-cosmic-gold/20
      `}>
        <div className="p-8 h-full flex flex-col">
          {/* Enhanced Logo/Brand with Name */}
          <div className="mb-8 mt-16">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-cosmic-gold animate-lightning-glow" />
              <div>
                <h2 className="text-xl font-bold text-cosmic-gold">Austin Wood</h2>
                <p className="text-sm text-cosmic-starlight/70">Healthcare Professional</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-cosmic-gold font-medium mb-2">Portfolio</div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cosmic-gold to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Navigation Items - with better spacing and overflow handling */}
          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={toggleSidebar}
                      className={`
                        flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200
                        ${isActive 
                          ? 'bg-cosmic-gold/20 text-cosmic-gold border border-cosmic-gold/30' 
                          : 'text-cosmic-starlight/80 hover:text-cosmic-gold hover:bg-cosmic-gold/10 border border-transparent hover:border-cosmic-gold/20'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Enhanced Footer */}
          <div className="mt-8">
            <div className="glass-morphism p-4 rounded-lg text-center border border-cosmic-gold/20">
              <div className="mb-3">
                <p className="text-sm font-medium text-cosmic-gold mb-1">Austin Wood</p>
                <p className="text-xs text-cosmic-starlight/60">
                  Healthcare & Technology
                </p>
              </div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-cosmic-gold rounded-full animate-star-twinkle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <p className="text-xs text-cosmic-starlight/50">
                Powered by Thunder ⚡
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

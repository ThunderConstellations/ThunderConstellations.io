
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
      {/* Enhanced Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 glass-morphism p-3 rounded-xl hover:border-cosmic-gold/40 transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-cosmic-gold" />
        ) : (
          <Menu className="w-6 h-6 text-cosmic-starlight group-hover:text-cosmic-gold transition-colors" />
        )}
        
        {/* Lightning effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cosmic-gold/20 to-transparent animate-pulse" />
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-gold rounded-full animate-star-twinkle"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 30}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </button>

      {/* Enhanced Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Enhanced Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        glass-morphism border-r border-cosmic-gold/20
      `}>
        <div className="p-6 h-full flex flex-col relative">
          {/* Enhanced Logo/Brand with multiple lightning bolts */}
          <div className="mb-6 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <Zap className="w-7 h-7 text-cosmic-gold animate-lightning-glow" />
                {/* Additional smaller lightning bolts */}
                <Zap 
                  className="absolute -top-1 -right-1 w-4 h-4 text-cosmic-amber animate-pulse" 
                  style={{ animationDelay: '0.5s' }}
                />
                <Zap 
                  className="absolute -bottom-1 -left-1 w-3 h-3 text-cosmic-gold animate-pulse" 
                  style={{ animationDelay: '1s' }}
                />
                
                {/* Energy sparks around the main bolt */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-2 bg-cosmic-gold animate-star-twinkle"
                    style={{
                      top: `${10 + i * 5}px`,
                      left: `${8 + (i % 2) * 15}px`,
                      transform: `rotate(${i * 45}deg)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
              <div>
                <h2 className="text-lg font-bold text-cosmic-gold">Austin Wood</h2>
                <p className="text-xs text-cosmic-starlight/70">Healthcare Professional</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-cosmic-gold font-medium mb-2">Portfolio</div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-cosmic-gold to-transparent mx-auto animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Navigation Items */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={toggleSidebar}
                      className={`
                        relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group
                        ${isActive 
                          ? 'bg-cosmic-gold/20 text-cosmic-gold border border-cosmic-gold/30' 
                          : 'text-cosmic-starlight/80 hover:text-cosmic-gold hover:bg-cosmic-gold/10 border border-transparent hover:border-cosmic-gold/20'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium text-sm">{item.label}</span>
                      
                      {/* Lightning effect on hover/active */}
                      <div className={`absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'group-hover:opacity-100'
                      }`}>
                        {[...Array(2)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-cosmic-gold rounded-full animate-star-twinkle"
                            style={{
                              top: `${30 + i * 40}%`,
                              right: `${10 + i * 5}%`,
                              animationDelay: `${i * 0.4}s`,
                            }}
                          />
                        ))}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Enhanced Footer with lightning animation */}
          <div className="mt-6">
            <div className="glass-morphism p-3 rounded-lg text-center border border-cosmic-gold/20 relative overflow-hidden">
              <div className="mb-2">
                <p className="text-xs font-medium text-cosmic-gold mb-1">Austin Wood</p>
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
              <p className="text-xs text-cosmic-starlight/50 flex items-center justify-center gap-1">
                Powered by Thunder 
                <Zap className="w-3 h-3 text-cosmic-gold animate-pulse" />
              </p>
              
              {/* Background lightning animation */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-full bg-cosmic-gold animate-pulse"
                    style={{
                      left: `${20 + i * 30}%`,
                      animationDelay: `${i * 0.6}s`,
                      transform: `rotate(${i * 15}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Code, FileText, Phone, MessageCircle } from 'lucide-react';

// navigation component - hope this mobile menu works *crosses fingers*
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Briefcase, label: 'Projects', path: '/projects' },
    { icon: FileText, label: 'Resume', path: '/resume' },
    { icon: MessageCircle, label: 'Contact', path: '/contact' }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Simple Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 bg-gray-800 p-3 rounded border border-gray-600 text-white"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Simple Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}

      {/* Simple Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        bg-gray-900 border-r border-gray-600
      `}>
        <div className="p-6 h-full flex flex-col">
          {/* Simple Logo/Brand */}
          <div className="mb-6 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Austin Wood</h2>
                <p className="text-xs text-gray-400">Healthcare Professional</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-yellow-400 font-medium mb-2">Portfolio</div>
              <div className="w-12 h-0.5 bg-yellow-400 mx-auto"></div>
            </div>
          </div>

          {/* Simple Navigation Items */}
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
                        flex items-center gap-3 px-4 py-2.5 rounded-lg
                        ${isActive 
                          ? 'bg-yellow-400 text-black' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Simple Footer */}
          <div className="mt-6">
            <div className="bg-gray-800 p-3 rounded-lg text-center border border-gray-600">
              <div className="mb-2">
                <p className="text-xs font-medium text-yellow-400 mb-1">Austin Wood</p>
                <p className="text-xs text-gray-400">
                  Healthcare & Technology
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Powered by Thunder
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

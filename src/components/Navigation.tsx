import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, FileText, MessageCircle, Wrench } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Briefcase, label: 'Projects', path: '/projects' },
    { icon: Wrench, label: 'Services', path: '/services' },
    { icon: FileText, label: 'Resume', path: '/resume' },
    { icon: MessageCircle, label: 'Contact', path: '/contact' }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Simple Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 bg-gray-800 p-3 rounded border border-gray-600 text-white shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`
        fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        bg-gray-900 border-r border-gray-700 shadow-2xl
      `}>
        <div className="p-6 h-full flex flex-col">
          {/* Logo / Brand */}
          <div className="mb-6 mt-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-black font-bold text-base">A</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-wide">Austin Wood</h2>
                <p className="text-xs text-gray-400">Healthcare & IT Specialist</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-yellow-400 font-semibold uppercase tracking-wider mb-2">Navigation</div>
              <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Navigation Items */}
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
                        flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200
                        ${isActive 
                          ? 'bg-yellow-400 text-black font-semibold shadow-md transform scale-[1.02]' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/80'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm tracking-wide">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Footer Info */}
          <div className="mt-6">
            <div className="bg-gray-800/80 p-3.5 rounded-xl text-center border border-gray-700">
              <p className="text-xs font-semibold text-yellow-400 mb-0.5">Austin Wood Portfolio</p>
              <p className="text-xs text-gray-400">Valparaiso, IN 46383</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

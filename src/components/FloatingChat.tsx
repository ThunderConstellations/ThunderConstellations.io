import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import AIChat from './AIChat';

// floating chat widget - this was harder than expected OwO
const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const location = useLocation();

  // Don't show floating chat on the home page or dedicated chat page
  if (location.pathname === '/' || location.pathname === '/chat') {
    return null;
  }

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isFullscreen) {
      setIsFullscreen(false);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {/* Simple Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 bg-blue-500 p-4 rounded-full text-white hover:bg-blue-600"
          title="Open Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* AI Chat Component */}
      {isOpen && (
        <AIChat
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          onClose={toggleChat}
        />
      )}
    </>
  );
};

export default FloatingChat;

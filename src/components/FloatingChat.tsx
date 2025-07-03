
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import AIChat from './AIChat';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-40 glass-morphism p-4 rounded-full hover:border-cosmic-gold/40 
                   transition-all duration-300 transform hover:scale-110 animate-pulse-gold"
        >
          <MessageSquare className="w-6 h-6 text-cosmic-gold" />
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

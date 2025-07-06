
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Maximize2, Minimize2 } from 'lucide-react';

interface MobileOptimizedChatProps {
  children: React.ReactNode;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const MobileOptimizedChat: React.FC<MobileOptimizedChatProps> = ({ 
  children, 
  isFullscreen, 
  onToggleFullscreen 
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [initialViewportHeight, setInitialViewportHeight] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setInitialViewportHeight(window.visualViewport?.height || window.innerHeight);
    };

    const handleViewportChange = () => {
      if (window.visualViewport) {
        const currentHeight = window.visualViewport.height;
        const heightDifference = initialViewportHeight - currentHeight;
        setIsKeyboardVisible(heightDifference > 150); // Keyboard likely visible
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
      }
    };
  }, [initialViewportHeight]);

  if (!isMobile) {
    return <>{children}</>;
  }

  return (
    <div className={`
      mobile-chat-container
      ${isFullscreen ? 'fixed inset-0 z-50' : 'fixed bottom-0 right-0 left-0 z-40'}
      ${isKeyboardVisible ? 'h-screen' : isFullscreen ? 'h-screen' : 'h-[80vh]'}
      bg-gradient-to-br from-cosmic-dark via-cosmic-black to-cosmic-dark
      transition-all duration-300 ease-out
      ${!isFullscreen ? 'rounded-t-2xl' : ''}
      border-t-2 border-cosmic-gold/20
    `}>
      {/* Mobile header with drag indicator */}
      {!isFullscreen && (
        <div className="flex flex-col items-center py-2 px-4 bg-cosmic-black/50">
          <div className="w-12 h-1 bg-cosmic-gold/40 rounded-full mb-2"></div>
          <button
            onClick={onToggleFullscreen}
            className="flex items-center gap-2 text-cosmic-gold text-sm"
          >
            <Maximize2 className="w-4 h-4" />
            Expand Chat
          </button>
        </div>
      )}

      {/* Chat content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        .mobile-chat-container {
          touch-action: manipulation;
          -webkit-overflow-scrolling: touch;
        }
        
        @media (max-width: 768px) {
          .mobile-chat-container input,
          .mobile-chat-container textarea {
            font-size: 16px; /* Prevents zoom on iOS */
            -webkit-appearance: none;
            border-radius: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileOptimizedChat;

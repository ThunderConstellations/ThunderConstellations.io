
import React from 'react';
import { Zap, Minimize2, Maximize2, X, Sparkles } from 'lucide-react';

interface ChatHeaderProps {
  isFullscreen: boolean;
  onToggleFullscreen?: () => void;
  onClose?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  isFullscreen, 
  onToggleFullscreen, 
  onClose 
}) => {
  // Only show header controls when not main page
  if (!onToggleFullscreen && !onClose) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-cosmic-gold/20 bg-gradient-to-r from-cosmic-gold/5 to-cosmic-gold/10 rounded-t-2xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
            <Zap className="w-5 h-5 text-cosmic-black animate-lightning-glow" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-cosmic-black" />
          <Sparkles className="absolute -top-2 -right-2 w-3 h-3 text-cosmic-gold animate-spin" />
        </div>
        <div>
          <h3 className="font-bold text-cosmic-gold text-lg">Career Assistant</h3>
          <p className="text-xs text-cosmic-starlight/70 animate-pulse">Ask me anything about my background!</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {onToggleFullscreen && (
          <button
            onClick={onToggleFullscreen}
            className="text-cosmic-starlight hover:text-cosmic-gold transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-cosmic-gold/10"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        )}
        {onClose && !isFullscreen && (
          <button
            onClick={onClose}
            className="text-cosmic-starlight hover:text-red-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-red-400/10"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;

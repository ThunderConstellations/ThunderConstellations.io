
import React from 'react';
import { Bot } from 'lucide-react';

interface TypingIndicatorProps {
  isVisible: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="flex gap-3 justify-start animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
        <Bot className="w-4 h-4 text-cosmic-black" />
      </div>
      <div className="bg-gradient-to-br from-cosmic-dark/80 to-cosmic-dark/60 border border-cosmic-gold/20 rounded-2xl p-4">
        <div className="flex gap-1 items-center">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <span className="ml-2 text-xs text-cosmic-starlight/70">Thinking...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;

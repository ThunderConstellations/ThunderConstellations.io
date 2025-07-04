
import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface ChatWelcomeProps {
  isFullscreen: boolean;
  showWelcome: boolean;
}

const ChatWelcome: React.FC<ChatWelcomeProps> = ({ isFullscreen, showWelcome }) => {
  if (!showWelcome) {
    return null;
  }

  return (
    <div className="text-center py-8 animate-fade-in">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
            <Bot className="w-8 h-8 text-cosmic-black" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full animate-pulse border-2 border-cosmic-black" />
          <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-cosmic-gold animate-spin" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-cosmic-gold mb-3">Hi! I'm your career assistant</h2>
      <p className="text-cosmic-starlight/80 max-w-xl mx-auto text-base mb-6">
        Ask me anything about my healthcare technology background, technical skills, or career journey
      </p>
      <div className="flex justify-center">
        <div className="flex gap-1 items-center text-cosmic-starlight/60">
          <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <span className="ml-2 text-sm">Initializing...</span>
        </div>
      </div>
    </div>
  );
};

export default ChatWelcome;

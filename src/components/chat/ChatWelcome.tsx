
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
    <div className="text-center py-12 animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
            <Bot className="w-10 h-10 text-cosmic-black" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full animate-pulse border-3 border-cosmic-black" />
          <Sparkles className="absolute -top-3 -right-3 w-6 h-6 text-cosmic-gold animate-spin" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-cosmic-gold mb-4">Hi! I'm your career assistant</h1>
      <p className="text-cosmic-starlight/80 max-w-2xl mx-auto text-lg mb-8">
        Ask me anything about my healthcare technology background, technical skills, or career journey
      </p>
    </div>
  );
};

export default ChatWelcome;

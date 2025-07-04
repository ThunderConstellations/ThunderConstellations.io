
import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface ChatWelcomeProps {
  isFullscreen: boolean;
  showWelcome: boolean;
}

const ChatWelcome: React.FC<ChatWelcomeProps> = ({ isFullscreen, showWelcome }) => {
  if (!isFullscreen || !showWelcome) {
    return null;
  }

  return (
    <div className="text-center py-8 animate-fade-in">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
            <Bot className="w-8 h-8 text-cosmic-black" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-cosmic-gold animate-spin" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-cosmic-gold mb-2">Career Assistant</h1>
      <p className="text-cosmic-starlight/80 max-w-2xl mx-auto">
        Ask me anything about my healthcare technology background, technical skills, or career journey
      </p>
    </div>
  );
};

export default ChatWelcome;

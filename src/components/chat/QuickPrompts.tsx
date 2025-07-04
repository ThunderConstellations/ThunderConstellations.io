
import React from 'react';
import { Zap } from 'lucide-react';

interface QuickPromptsProps {
  isVisible: boolean;
  onPromptSelect: (prompt: string) => void;
}

const QuickPrompts: React.FC<QuickPromptsProps> = ({ isVisible, onPromptSelect }) => {
  const quickPrompts = [
    "Tell me about your healthcare experience",
    "What is care coordination?",
    "How do you approach mental health support?",
    "What technical skills are you developing?",
    "What type of role are you seeking?",
    "Tell me about your leadership experience"
  ];

  if (!isVisible) return null;

  return (
    <div className="px-6 pb-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-cosmic-gold" />
        <p className="text-sm text-cosmic-gold font-medium">Try asking:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {quickPrompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => onPromptSelect(prompt)}
            className="text-left text-sm p-4 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/15 
                     hover:from-cosmic-gold/20 hover:to-cosmic-gold/25 
                     text-cosmic-starlight border border-cosmic-gold/30 rounded-xl 
                     transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg
                     hover:shadow-cosmic-gold/20 group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="group-hover:text-cosmic-gold transition-colors duration-200">
              {prompt}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickPrompts;

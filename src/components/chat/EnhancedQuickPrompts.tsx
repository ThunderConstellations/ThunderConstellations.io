
import React from 'react';
import { MessageCircle, FileText, Award, Briefcase, Phone, Users } from 'lucide-react';

interface EnhancedQuickPromptsProps {
  isVisible: boolean;
  onPromptSelect: (prompt: string) => void;
}

const EnhancedQuickPrompts: React.FC<EnhancedQuickPromptsProps> = ({ isVisible, onPromptSelect }) => {
  if (!isVisible) return null;

  const prompts = [
    {
      icon: MessageCircle,
      text: "Tell me about yourself",
      prompt: "Tell me about Austin's background and experience",
      color: "from-blue-500/20 to-purple-500/20 border-blue-500/30"
    },
    {
      icon: Award,
      text: "Core Skills",
      prompt: "What are Austin's core skills and competencies?",
      color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
    },
    {
      icon: Briefcase,
      text: "Work Experience", 
      prompt: "Show me Austin's work experience and background",
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30"
    },
    {
      icon: FileText,
      text: "Download Resume",
      prompt: "I'd like to download Austin's resume",
      color: "from-cosmic-gold/20 to-yellow-500/20 border-cosmic-gold/30"
    },
    {
      icon: Users,
      text: "References",
      prompt: "Can I see Austin's professional references?",
      color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30"
    },
    {
      icon: Phone,
      text: "Contact Info",
      prompt: "How can I contact Austin?",
      color: "from-pink-500/20 to-rose-500/20 border-pink-500/30"
    }
  ];

  return (
    <div className="p-3 sm:p-6 border-t border-cosmic-gold/20">
      <h3 className="text-cosmic-gold font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-center">
        Quick Questions
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto">
        {prompts.map((prompt, index) => {
          const Icon = prompt.icon;
          return (
            <button
              key={index}
              onClick={() => onPromptSelect(prompt.prompt)}
              className={`
                p-3 sm:p-4 rounded-lg border bg-gradient-to-br ${prompt.color}
                hover:scale-105 transition-all duration-300 group
                text-left flex flex-col items-center gap-2 sm:gap-3
                hover:shadow-lg hover:shadow-cosmic-gold/10
              `}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cosmic-gold group-hover:scale-110 transition-transform" />
              <span className="text-cosmic-starlight text-xs sm:text-sm font-medium text-center leading-tight">
                {prompt.text}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-cosmic-starlight/60 text-xs text-center mt-3 sm:mt-4">
        Click any topic to start the conversation
      </p>
    </div>
  );
};

export default EnhancedQuickPrompts;
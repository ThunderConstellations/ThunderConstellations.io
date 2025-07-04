
import React, { useState } from 'react';
import { Zap, Shuffle } from 'lucide-react';

interface QuickPromptsProps {
  isVisible: boolean;
  onPromptSelect: (prompt: string) => void;
}

const QuickPrompts: React.FC<QuickPromptsProps> = ({ isVisible, onPromptSelect }) => {
  const [currentSet, setCurrentSet] = useState(0);

  const promptSets = [
    [
      "Show me your healthcare/care coordination resume",
      "What are your professional references?",
      "Tell me about your crisis intervention experience",
      "What technical skills are you developing?",
      "Show me your IT/helpdesk resume",
      "What's your contact information?"
    ],
    [
      "Tell me about your leadership experience",
      "What administrative skills do you have?",
      "Show me your general resume",
      "What are your career goals?",
      "Tell me about your education background",
      "What certifications do you have?"
    ],
    [
      "Show me your administrative/office resume",
      "What's your experience with documentation systems?",
      "Tell me about your process improvement work",
      "What automation tools do you use?",
      "How do you handle crisis situations?",
      "What makes you unique as a candidate?"
    ],
    [
      "Show me reference letters",
      "What's your experience with mental health support?",
      "Tell me about your retail leadership experience",
      "What remote work experience do you have?",
      "How do you approach team management?",
      "What's your experience with healthcare compliance?"
    ]
  ];

  const shufflePrompts = () => {
    setCurrentSet((prev) => (prev + 1) % promptSets.length);
  };

  if (!isVisible) return null;

  const currentPrompts = promptSets[currentSet];

  return (
    <div className="px-6 pb-4 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cosmic-gold" />
          <p className="text-sm text-cosmic-gold font-medium">Try asking:</p>
        </div>
        <button
          onClick={shufflePrompts}
          className="flex items-center gap-2 px-3 py-1 bg-cosmic-gold/10 hover:bg-cosmic-gold/20 
                   text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30 
                   transition-all duration-200 hover:scale-105"
        >
          <Shuffle className="w-3 h-3" />
          More Ideas
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {currentPrompts.map((prompt, index) => (
          <button
            key={`${currentSet}-${index}`}
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

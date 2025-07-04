
import React, { useState } from 'react';
import { Zap, Shuffle } from 'lucide-react';

interface QuickPromptsProps {
  isVisible: boolean;
  onPromptSelect: (prompt: string) => void;
}

const QuickPrompts: React.FC<QuickPromptsProps> = ({ isVisible, onPromptSelect }) => {
  const [currentSet, setCurrentSet] = useState(0);
  
  const allPrompts = [
    // Set 1 - Experience & Background
    [
      "Tell me about your healthcare experience",
      "What is care coordination?",
      "How do you approach mental health support?",
      "What technical skills are you developing?",
      "What type of role are you seeking?",
      "Tell me about your leadership experience"
    ],
    // Set 2 - Skills & Achievements
    [
      "What are your biggest professional achievements?",
      "How do you measure success in healthcare?",
      "Tell me about your problem-solving approach",
      "What certifications do you have?",
      "How do you handle challenging situations?",
      "What makes you stand out as a candidate?"
    ],
    // Set 3 - Goals & Values
    [
      "What are your career goals?",
      "How do you stay current with healthcare trends?",
      "What motivates you in your work?",
      "How do you approach team collaboration?",
      "What's your ideal work environment?",
      "How do you contribute to quality improvement?"
    ],
    // Set 4 - Projects & Innovation
    [
      "Tell me about your recent projects",
      "How do you use technology in healthcare?",
      "What process improvements have you made?",
      "How do you handle data and analytics?",
      "What tools do you use for coordination?",
      "How do you ensure patient satisfaction?"
    ]
  ];

  const currentPrompts = allPrompts[currentSet];

  const generateMoreSuggestions = () => {
    setCurrentSet((prev) => (prev + 1) % allPrompts.length);
  };

  if (!isVisible) return null;

  return (
    <div className="px-6 pb-4 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cosmic-gold" />
          <p className="text-sm text-cosmic-gold font-medium">Try asking:</p>
        </div>
        <button
          onClick={generateMoreSuggestions}
          className="flex items-center gap-2 px-3 py-1.5 bg-cosmic-gold/10 hover:bg-cosmic-gold/20 
                   text-cosmic-gold border border-cosmic-gold/30 rounded-lg text-xs
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
                     hover:shadow-cosmic-gold/20 group animate-fade-in"
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

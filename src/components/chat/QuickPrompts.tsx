
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
      "Tell me about Austin Wood's healthcare experience",
      "What are Austin's professional certifications?",
      "Show me Austin Wood's crisis intervention background",
      "What technical skills has Austin developed?",
      "Tell me about Austin's leadership experience",
      "What makes Austin Wood unique as a healthcare professional?"
    ],
    [
      "Show me Austin Wood's healthcare resume",
      "What are Austin's care coordination skills?",
      "Tell me about Austin's mental health support experience",
      "What IT certifications does Austin have?",
      "Show me Austin Wood's contact information",
      "What are Austin's career goals and aspirations?"
    ],
    [
      "Tell me about Austin Wood's team management experience",
      "What process improvements has Austin implemented?",
      "Show me Austin's administrative and office skills",
      "What automation tools does Austin use?",
      "Tell me about Austin's educational background",
      "How does Austin handle crisis situations?"
    ],
    [
      "Show me Austin Wood's IT support resume",
      "What healthcare compliance experience does Austin have?",
      "Tell me about Austin's retail leadership background",
      "What remote work experience does Austin have?",
      "Show me reference letters for Austin Wood",
      "What's Austin's approach to patient advocacy?"
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
          <p className="text-sm text-cosmic-gold font-medium">
            Ask about <span className="font-bold">Austin Wood</span>:
          </p>
        </div>
        <button
          onClick={shufflePrompts}
          className="flex items-center gap-2 px-3 py-1 bg-cosmic-gold/10 hover:bg-cosmic-gold/20 
                   text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30 
                   transition-all duration-200 hover:scale-105"
        >
          <Shuffle className="w-3 h-3" />
          More Questions
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

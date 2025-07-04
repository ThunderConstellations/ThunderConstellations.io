
import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalMessageProps {
  onComplete: () => void;
}

const TerminalMessage: React.FC<TerminalMessageProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const terminalLines = [
    '> Initializing ThunderConstellations...',
    '> Connecting to healthcare network...',
    '> Loading care coordination protocols...',
    '> Accessing mental health resources...',
    '> Portfolio systems online.',
    '',
    '> EXPERIENCE_LOADED: [Healthcare, Mental Health, Care Coordination]',
    '> SKILLS_LOADED: [Patient Advocacy, Program Leadership, Team Collaboration]',
    '> STATUS: Ready to make a difference ⚡',
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        }
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 1000);
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="flex gap-3 justify-start animate-fade-in mb-6">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
          <Terminal className="w-4 h-4 text-cosmic-black" />
        </div>
      </div>
      
      <div className="max-w-[80%] rounded-2xl p-6 backdrop-blur-sm transition-all duration-300
                    bg-gradient-to-br from-cosmic-dark/80 to-cosmic-dark/60 border border-cosmic-gold/20
                    shadow-lg hover:shadow-xl hover:shadow-cosmic-gold/10">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cosmic-gold/20">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-3 text-cosmic-starlight/60 font-mono text-xs">
            terminal@thunder-constellations:~$
          </span>
        </div>

        {/* Terminal Content */}
        <div className="font-mono space-y-2 text-sm">
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div
              key={index}
              className={`
                text-cosmic-starlight transition-all duration-300
                ${index === currentLine ? 'terminal-cursor' : ''}
                ${line.includes('SKILLS_LOADED') || line.includes('EXPERIENCE_LOADED') ? 'text-cosmic-gold' : ''}
                ${line.includes('STATUS') ? 'text-cosmic-gold font-bold' : ''}
              `}
            >
              {line || '\u00A0'}
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        {currentLine >= terminalLines.length - 1 && (
          <div className="mt-6 pt-4 border-t border-cosmic-gold/20 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: 'Healthcare', items: ['Care Coord', 'Mental Health', 'Patient Care'] },
                { label: 'Leadership', items: ['Team Lead', 'Program Mgmt', 'Training'] },
                { label: 'Communication', items: ['Patient Ed', 'Collaboration', 'Advocacy'] },
                { label: 'Development', items: ['Process Improve', 'Quality Assurance', 'Innovation'] }
              ].map((category, index) => (
                <div
                  key={category.label}
                  className={`
                    glass-morphism p-3 rounded-lg transform transition-all duration-500 delay-${index * 200}
                    hover:border-cosmic-gold/40 hover:shadow-lg hover:shadow-cosmic-gold/20
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-cosmic-gold font-bold mb-2 text-xs">
                    {category.label}
                  </h4>
                  <ul className="text-xs text-cosmic-starlight/80 space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <span className="text-xs opacity-60 mt-4 block text-cosmic-starlight/50">
          {new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>
    </div>
  );
};

export default TerminalMessage;

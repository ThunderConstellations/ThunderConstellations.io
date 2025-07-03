
import React, { useEffect, useState } from 'react';

const TerminalIntro = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const terminalLines = [
    '> Initializing ThunderConstellations...',
    '> Connecting to cosmic network...',
    '> Aligning stars and lightning...',
    '> Loading professional matrix...',
    '> Portfolio systems online.',
    '',
    '> SKILLS_LOADED: [React, TypeScript, Healthcare, Leadership]',
    '> EXPERIENCE_LOADED: [Tech, Mental Health, Care Coordination]',
    '> STATUS: Ready for collaboration ⚡',
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < terminalLines.length - 1) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="glass-morphism rounded-xl p-8 max-w-4xl w-full">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cosmic-gold/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-cosmic-starlight/60 font-mono text-sm">
            terminal@thunder-constellations:~$
          </span>
        </div>

        {/* Terminal Content */}
        <div className="font-mono space-y-3">
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div
              key={index}
              className={`
                text-cosmic-starlight transition-all duration-500
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
          <div className="mt-8 pt-6 border-t border-cosmic-gold/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind'] },
                { label: 'Backend', items: ['Node.js', 'Python', 'Databases'] },
                { label: 'Healthcare', items: ['Care Coord', 'Mental Health', 'Clinical'] },
                { label: 'Leadership', items: ['Team Lead', 'Mentoring', 'Strategy'] }
              ].map((category, index) => (
                <div
                  key={category.label}
                  className={`
                    glass-morphism p-4 rounded-lg transform transition-all duration-500 delay-${index * 200}
                    hover:border-cosmic-gold/40 hover:shadow-lg hover:shadow-cosmic-gold/20
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-cosmic-gold font-bold mb-2 text-sm">
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
      </div>
    </div>
  );
};

export default TerminalIntro;

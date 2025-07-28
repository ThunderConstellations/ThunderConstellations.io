
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// terminal intro - this is going to be harder than being dragged through the Trail of Tears...GG
const TerminalIntro = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const terminalLines = [
    '> Initializing Austin Wood Portfolio System...',
    '> Connecting to professional network...',
    '> Loading healthcare expertise modules...',
    '> Syncing technology integration protocols...',
    '> Austin Wood - System Online ⚡',
    '',
    '> PROFILE_LOADED: Austin Wood - Healthcare Professional',
    '> SKILLS_LOADED: [Healthcare, Leadership, IT Support, Crisis Intervention]',
    '> EXPERIENCE_LOADED: [Mental Health, Care Coordination, Team Management]',
    '> CERTIFICATIONS_LOADED: [Google IT, Mental Health First Aid, Crisis Intervention]',
    '> STATUS: Ready for collaboration and innovation 🚀',
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
      <div className="glass-morphism rounded-xl p-8 max-w-5xl w-full border border-cosmic-gold/20">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cosmic-gold/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-cosmic-starlight/60 font-mono text-sm">
            terminal@austin-wood-portfolio:~$
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
                ${line.includes('PROFILE_LOADED') || line.includes('Austin Wood - System Online') ? 'text-cosmic-gold font-bold' : ''}
                ${line.includes('SKILLS_LOADED') || line.includes('EXPERIENCE_LOADED') || line.includes('CERTIFICATIONS_LOADED') ? 'text-cosmic-gold' : ''}
                ${line.includes('STATUS') ? 'text-cosmic-gold font-bold' : ''}
              `}
            >
              {line || '\u00A0'}
            </div>
          ))}
        </div>

        {/* Enhanced Skills Grid */}
        {currentLine >= terminalLines.length - 1 && (
          <div className="mt-8 pt-6 border-t border-cosmic-gold/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-cosmic-gold mb-2">Austin Wood - Core Competencies</h3>
              <p className="text-cosmic-starlight/70">Healthcare Professional & Technology Enthusiast</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  label: 'Healthcare',
                  items: ['Care Coordination', 'Mental Health', 'Patient Advocacy'],
                  color: 'from-green-500/20 to-green-600/20 border-green-500/30'
                },
                {
                  label: 'Leadership',
                  items: ['Team Management', 'Crisis Response', 'Process Improvement'],
                  color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30'
                },
                {
                  label: 'Technology',
                  items: ['IT Support', 'Documentation', 'Automation'],
                  color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30'
                },
                {
                  label: 'Certifications',
                  items: ['Google IT Pro', 'Mental Health First Aid', 'Crisis Intervention'],
                  color: 'from-cosmic-gold/20 to-yellow-500/20 border-cosmic-gold/30'
                }
              ].map((category, index) => (
                <div
                  key={category.label}
                  className={`
                    glass-morphism p-4 rounded-lg transform transition-all duration-500 delay-${index * 200}
                    hover:border-cosmic-gold/40 hover:shadow-lg hover:shadow-cosmic-gold/20
                    bg-gradient-to-br ${category.color} border
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h4 className="text-cosmic-gold font-bold mb-3 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-cosmic-gold rounded-full"></span>
                    {category.label}
                  </h4>
                  <ul className="text-xs text-cosmic-starlight/80 space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-cosmic-starlight/60 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Professional Summary */}
            <div className="mt-6 text-center">
              <div className="glass-morphism p-4 rounded-lg bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/20 border border-cosmic-gold/30">
                <p className="text-sm text-cosmic-starlight/90">
                  <span className="text-cosmic-gold font-semibold">Austin Wood</span> -
                  Bridging healthcare expertise with technology innovation to create meaningful solutions
                  for patient care and healthcare system improvement.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalIntro;

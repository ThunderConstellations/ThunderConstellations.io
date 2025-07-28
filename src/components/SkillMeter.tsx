
import React, { useEffect, useState } from 'react';

interface SkillMeterProps {
  skill: string;
  level: number;
  years?: number;
  category: 'healthcare' | 'technical' | 'leadership';
  delay?: number;
}

// skill meter - hope this animation works *crosses fingers*
const SkillMeter: React.FC<SkillMeterProps> = ({ 
  skill, 
  level, 
  years, 
  category, 
  delay = 0 
}) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimatedLevel(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  const getCategoryColor = () => {
    switch (category) {
      case 'healthcare': return 'bg-red-400';
      case 'technical': return 'bg-blue-400';
      case 'leadership': return 'bg-green-400';
      default: return 'bg-cosmic-gold';
    }
  };

  const getCategoryBorder = () => {
    switch (category) {
      case 'healthcare': return 'border-red-400/30';
      case 'technical': return 'border-blue-400/30';
      case 'leadership': return 'border-green-400/30';
      default: return 'border-cosmic-gold/30';
    }
  };

  return (
    <div className={`
      glass-morphism p-4 rounded-lg border transition-all duration-500
      ${getCategoryBorder()}
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      hover:scale-105 hover:shadow-lg
    `}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold text-cosmic-starlight">{skill}</h4>
          {years && (
            <p className="text-xs text-cosmic-starlight/60">{years} years experience</p>
          )}
        </div>
        <span className="text-sm font-bold text-cosmic-gold">{level}%</span>
      </div>
      
      <div className="relative h-2 bg-cosmic-starlight/20 rounded-full overflow-hidden">
        <div 
          className={`
            h-full rounded-full transition-all duration-1000 ease-out
            ${getCategoryColor()}
          `}
          style={{ 
            width: `${animatedLevel}%`,
            transitionDelay: `${delay}ms`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
      </div>
    </div>
  );
};

export default SkillMeter;

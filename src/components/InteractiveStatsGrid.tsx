
import React, { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { HoverEffectWrapper } from './ui/hover-effects';

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  description: string;
}

interface InteractiveStatsGridProps {
  stats: Stat[];
}

const InteractiveStatsGrid: React.FC<InteractiveStatsGridProps> = ({ stats }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animatedValues, setAnimatedValues] = useState<string[]>([]);

  useEffect(() => {
    // Animate numbers on mount
    const timer = setTimeout(() => {
      setAnimatedValues(stats.map(stat => stat.value));
    }, 500);

    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <div className="text-center mb-16">
      <AnimatedSection animation="fade-in">
        <h2 className="text-4xl font-bold text-cosmic-starlight mb-4">
          Impact <span className="text-cosmic-gold">Metrics</span>
        </h2>
        <p className="text-cosmic-starlight/80 text-lg mb-12 max-w-2xl mx-auto">
          Quantified results from my professional journey in healthcare and technology
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <AnimatedSection key={stat.label} animation="scale-in" delay={index * 150}>
            <HoverEffectWrapper effect="lift" intensity="medium">
              <div
                className={`
                  glass-morphism p-8 rounded-xl text-center transition-all duration-300 h-full
                  border border-cosmic-gold/20 hover:border-cosmic-gold/40
                  ${hoveredIndex === index ? 'bg-cosmic-gold/10' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  <stat.icon 
                    className={`w-12 h-12 transition-all duration-300 ${
                      hoveredIndex === index ? 'scale-110' : ''
                    }`} 
                  />
                </div>
                
                <div className="text-4xl font-bold text-cosmic-gold mb-2 transition-all duration-500">
                  {animatedValues[index] || '0'}
                </div>
                
                <div className="text-cosmic-starlight font-semibold mb-2">
                  {stat.label}
                </div>
                
                <div className={`
                  text-sm text-cosmic-starlight/70 transition-all duration-300
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-70'}
                `}>
                  {stat.description}
                </div>
              </div>
            </HoverEffectWrapper>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default InteractiveStatsGrid;

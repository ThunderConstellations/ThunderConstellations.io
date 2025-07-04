
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  value: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  animationDelay?: number;
  color?: 'default' | 'cosmic-gold' | 'green' | 'blue' | 'red';
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedProgress: React.FC<AnimatedProgressProps> = ({
  value,
  label,
  showValue = true,
  className = '',
  animationDelay = 0,
  color = 'cosmic-gold',
  size = 'md'
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate the progress value
      const animationDuration = 1500;
      const steps = 60;
      const increment = value / steps;
      let currentValue = 0;
      
      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= value) {
          currentValue = value;
          clearInterval(interval);
        }
        setDisplayValue(Math.round(currentValue));
      }, animationDuration / steps);

      return () => clearInterval(interval);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [value, animationDelay]);

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    default: 'bg-primary',
    'cosmic-gold': 'bg-cosmic-gold',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500'
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-cosmic-starlight">
            {label}
          </span>
          {showValue && (
            <span className="text-sm text-cosmic-gold font-semibold">
              {displayValue}%
            </span>
          )}
        </div>
      )}
      
      <div className={cn(
        "w-full bg-cosmic-dark/40 rounded-full overflow-hidden border border-cosmic-gold/20",
        sizeClasses[size]
      )}>
        <div
          className={cn(
            "h-full transition-all duration-1000 ease-out rounded-full",
            colorClasses[color],
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            width: `${displayValue}%`,
            background: color === 'cosmic-gold' 
              ? 'linear-gradient(90deg, #FFD700, #FFA500)'
              : undefined
          }}
        />
      </div>
    </div>
  );
};

interface SkillBarProps {
  skill: string;
  level: number;
  category?: string;
  animationDelay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  level,
  category,
  animationDelay = 0
}) => {
  return (
    <div className="space-y-2" style={{ animationDelay: `${animationDelay}ms` }}>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm font-medium text-cosmic-starlight">
            {skill}
          </span>
          {category && (
            <span className="ml-2 px-2 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full">
              {category}
            </span>
          )}
        </div>
        <span className="text-sm text-cosmic-gold font-semibold">
          {level}%
        </span>
      </div>
      <AnimatedProgress 
        value={level} 
        animationDelay={animationDelay}
        showValue={false}
      />
    </div>
  );
};

// Component for displaying multiple skill bars
interface SkillsProgressProps {
  skills: Array<{
    name: string;
    level: number;
    category?: string;
  }>;
  title?: string;
  className?: string;
}

export const SkillsProgress: React.FC<SkillsProgressProps> = ({
  skills,
  title,
  className = ''
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {title && (
        <h3 className="text-2xl font-bold text-cosmic-gold mb-6">{title}</h3>
      )}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill.name}
            level={skill.level}
            category={skill.category}
            animationDelay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

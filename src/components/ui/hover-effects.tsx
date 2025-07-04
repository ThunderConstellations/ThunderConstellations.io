
import React from 'react';
import { cn } from '@/lib/utils';

interface HoverEffectWrapperProps {
  children: React.ReactNode;
  className?: string;
  effect?: 'scale' | 'glow' | 'lift' | 'rotate';
  intensity?: 'low' | 'medium' | 'high';
}

export const HoverEffectWrapper: React.FC<HoverEffectWrapperProps> = ({
  children,
  className,
  effect = 'scale',
  intensity = 'medium'
}) => {
  const getEffectClasses = () => {
    const baseClasses = 'transition-all duration-300 ease-out cursor-pointer';
    
    switch (effect) {
      case 'scale':
        return cn(baseClasses, {
          'hover:scale-105': intensity === 'low',
          'hover:scale-110': intensity === 'medium',
          'hover:scale-125': intensity === 'high',
        });
      case 'glow':
        return cn(baseClasses, {
          'hover:shadow-lg hover:shadow-cosmic-gold/20': intensity === 'low',
          'hover:shadow-xl hover:shadow-cosmic-gold/30': intensity === 'medium',
          'hover:shadow-2xl hover:shadow-cosmic-gold/40': intensity === 'high',
        });
      case 'lift':
        return cn(baseClasses, {
          'hover:-translate-y-1': intensity === 'low',
          'hover:-translate-y-2': intensity === 'medium',
          'hover:-translate-y-4': intensity === 'high',
        });
      case 'rotate':
        return cn(baseClasses, {
          'hover:rotate-1': intensity === 'low',
          'hover:rotate-2': intensity === 'medium',
          'hover:rotate-3': intensity === 'high',
        });
      default:
        return baseClasses;
    }
  };

  return (
    <div className={cn(getEffectClasses(), className)}>
      {children}
    </div>
  );
};

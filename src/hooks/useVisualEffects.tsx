
import { useState, useEffect, useRef } from 'react';

interface VisualEffectsConfig {
  enableParticles?: boolean;
  enableLightning?: boolean;
  enableStarField?: boolean;
  enableConstellation?: boolean;
  intensity?: number;
}

export const useVisualEffects = (config: VisualEffectsConfig = {}) => {
  const [isActive, setIsActive] = useState(false);
  const [performance, setPerformance] = useState<'high' | 'medium' | 'low'>('high');
  const frameTimeRef = useRef<number[]>([]);

  // Monitor performance and adjust effects accordingly
  useEffect(() => {
    const measurePerformance = () => {
      const now = performance.now();
      frameTimeRef.current.push(now);
      
      if (frameTimeRef.current.length > 60) {
        const frameTimes = frameTimeRef.current.slice(-60);
        const avgFrameTime = frameTimes.reduce((a, b, i) => 
          i === 0 ? 0 : a + (b - frameTimes[i - 1]), 0
        ) / (frameTimes.length - 1);
        
        if (avgFrameTime > 20) {
          setPerformance('low');
        } else if (avgFrameTime > 16) {
          setPerformance('medium');
        } else {
          setPerformance('high');
        }
        
        frameTimeRef.current = [];
      }
      
      if (isActive) {
        requestAnimationFrame(measurePerformance);
      }
    };

    if (isActive) {
      requestAnimationFrame(measurePerformance);
    }
  }, [isActive]);

  // Auto-enable effects after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getEffectConfig = () => {
    const baseConfig = {
      enableParticles: config.enableParticles ?? true,
      enableLightning: config.enableLightning ?? true,
      enableStarField: config.enableStarField ?? true,
      enableConstellation: config.enableConstellation ?? true,
      intensity: config.intensity ?? 1
    };

    // Adjust based on performance
    if (performance === 'low') {
      return {
        ...baseConfig,
        enableParticles: false,
        enableConstellation: false,
        intensity: 0.3
      };
    } else if (performance === 'medium') {
      return {
        ...baseConfig,
        intensity: 0.6
      };
    }

    return baseConfig;
  };

  return {
    isActive,
    performance,
    effectConfig: getEffectConfig(),
    toggleEffects: () => setIsActive(prev => !prev)
  };
};

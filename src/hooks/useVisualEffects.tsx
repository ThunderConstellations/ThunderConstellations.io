
import { useState, useEffect, useRef } from 'react';

// visual effects hook - this is probably overkill but looks nice UwU
export const useVisualEffects = (config: VisualEffectsConfig = {}) => {
  const [isActive, setIsActive] = useState(false);
  const [performanceLevel, setPerformanceLevel] = useState<'high' | 'medium' | 'low'>('high');
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
          setPerformanceLevel('low');
        } else if (avgFrameTime > 16) {
          setPerformanceLevel('medium');
        } else {
          setPerformanceLevel('high');
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
    if (performanceLevel === 'low') {
      return {
        ...baseConfig,
        enableParticles: false,
        enableConstellation: false,
        intensity: 0.3
      };
    } else if (performanceLevel === 'medium') {
      return {
        ...baseConfig,
        intensity: 0.6
      };
    }

    return baseConfig;
  };

  return {
    isActive,
    performance: performanceLevel,
    effectConfig: getEffectConfig(),
    toggleEffects: () => setIsActive(prev => !prev)
  };
};

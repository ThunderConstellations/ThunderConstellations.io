
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // Create star shape using CSS clip-path
  const StarShape = ({ delay, radius, size }: { delay: number; radius: number; size: number }) => (
    <div
      className={`absolute transition-all duration-300 ${
        isMoving ? 'opacity-80' : 'opacity-30'
      }`}
      style={{
        left: mousePosition.x + Math.cos((Date.now() * 0.002 + delay) * Math.PI) * radius - size/2,
        top: mousePosition.y + Math.sin((Date.now() * 0.002 + delay) * Math.PI) * radius - size/2,
        width: `${size}px`,
        height: `${size}px`,
        background: '#fbbf24',
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        animation: 'star-twinkle 1s ease-in-out infinite',
        animationDelay: `${delay * 0.2}s`,
      }}
    />
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Lightning Zaps */}
      <div
        className={`absolute transition-all duration-200 ease-out ${
          isMoving ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <Zap className="w-6 h-6 text-cosmic-gold animate-pulse" />
      </div>

      {/* Rotating Stars */}
      {[...Array(6)].map((_, i) => (
        <StarShape 
          key={i}
          delay={i * 1.5}
          radius={25 + (i % 2) * 15}
          size={8 + (i % 3) * 2}
        />
      ))}

      {/* Additional smaller stars in outer orbit */}
      {[...Array(4)].map((_, i) => (
        <StarShape 
          key={`outer-${i}`}
          delay={i * 2 + 8}
          radius={45}
          size={6}
        />
      ))}

      {/* Central Glow */}
      <div
        className={`absolute w-4 h-4 rounded-full transition-all duration-200 ${
          isMoving 
            ? 'bg-cosmic-gold/30 shadow-lg shadow-cosmic-gold/50' 
            : 'bg-cosmic-gold/10'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
    </div>
  );
};

export default AnimatedCursor;

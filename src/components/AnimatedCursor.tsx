
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

      {/* Rotating Stars/Constellations */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-cosmic-gold rounded-full transition-all duration-300 ${
            isMoving ? 'opacity-80' : 'opacity-30'
          }`}
          style={{
            left: mousePosition.x + Math.cos((i * Math.PI) / 4) * 30 - 2,
            top: mousePosition.y + Math.sin((i * Math.PI) / 4) * 30 - 2,
            transform: `rotate(${i * 45}deg)`,
            animation: `spin 2s linear infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
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

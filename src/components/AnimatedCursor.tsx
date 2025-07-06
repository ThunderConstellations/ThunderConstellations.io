
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(timeoutId);
    };
  }, []);

  // Enhanced lightning bolt with sparks
  const LightningBolt = ({ delay, distance, size, rotation }: { 
    delay: number; 
    distance: number; 
    size: number;
    rotation: number;
  }) => (
    <div
      className={`absolute transition-all duration-300 ${
        isMoving ? 'opacity-90' : 'opacity-40'
      } ${isClicking ? 'scale-150' : 'scale-100'}`}
      style={{
        left: mousePosition.x + Math.cos((Date.now() * 0.003 + delay) * Math.PI) * distance - size/2,
        top: mousePosition.y + Math.sin((Date.now() * 0.003 + delay) * Math.PI) * distance - size/2,
        transform: `rotate(${rotation + (Date.now() * 0.001)}deg)`,
        filter: `drop-shadow(0 0 ${size/2}px #fbbf24)`,
      }}
    >
      <Zap 
        className={`text-cosmic-gold animate-pulse`}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          animationDelay: `${delay * 0.2}s`,
        }} 
      />
    </div>
  );

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
        filter: `drop-shadow(0 0 ${size/3}px #fde047)`,
      }}
    />
  );

  // Electric spark effect
  const ElectricSpark = ({ delay, distance }: { delay: number; distance: number }) => (
    <div
      className={`absolute w-1 transition-all duration-200 ${
        isMoving ? 'opacity-70 h-6' : 'opacity-0 h-2'
      }`}
      style={{
        left: mousePosition.x + Math.cos((Date.now() * 0.005 + delay) * Math.PI) * distance,
        top: mousePosition.y + Math.sin((Date.now() * 0.005 + delay) * Math.PI) * distance,
        background: 'linear-gradient(45deg, #fbbf24, #fde047)',
        transform: `rotate(${Date.now() * 0.002 + delay * 45}deg)`,
        filter: 'blur(0.5px)',
        animationDelay: `${delay * 0.1}s`,
      }}
    />
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Central Enhanced Lightning Bolt */}
      <div
        className={`absolute transition-all duration-200 ease-out ${
          isMoving ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${isClicking ? 'scale-150 rotate-12' : ''}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <Zap 
          className="w-6 h-6 text-cosmic-gold animate-pulse" 
          style={{
            filter: 'drop-shadow(0 0 8px #fbbf24) drop-shadow(0 0 16px #fde047)',
          }}
        />
      </div>

      {/* Orbiting Lightning Bolts */}
      {[...Array(4)].map((_, i) => (
        <LightningBolt 
          key={`lightning-${i}`}
          delay={i * 2}
          distance={35 + (i % 2) * 15}
          size={16 + (i % 3) * 4}
          rotation={i * 90}
        />
      ))}

      {/* Electric Sparks */}
      {[...Array(8)].map((_, i) => (
        <ElectricSpark 
          key={`spark-${i}`}
          delay={i * 0.8}
          distance={20 + (i % 3) * 10}
        />
      ))}

      {/* Rotating Stars */}
      {[...Array(6)].map((_, i) => (
        <StarShape 
          key={`star-${i}`}
          delay={i * 1.5}
          radius={50 + (i % 2) * 20}
          size={8 + (i % 3) * 2}
        />
      ))}

      {/* Central Energy Glow */}
      <div
        className={`absolute w-8 h-8 rounded-full transition-all duration-200 ${
          isMoving 
            ? 'bg-cosmic-gold/20 shadow-lg shadow-cosmic-gold/50' 
            : 'bg-cosmic-gold/10'
        } ${isClicking ? 'scale-150 bg-cosmic-gold/40' : ''}`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          filter: 'blur(4px)',
        }}
      />

      {/* Outer energy ring */}
      <div
        className={`absolute w-12 h-12 rounded-full border transition-all duration-300 ${
          isMoving 
            ? 'border-cosmic-gold/30 opacity-60' 
            : 'border-cosmic-gold/10 opacity-20'
        } ${isClicking ? 'scale-200 border-cosmic-gold/60' : ''}`}
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          animation: isMoving ? 'spin 2s linear infinite' : 'none',
        }}
      />
    </div>
  );
};

export default AnimatedCursor;

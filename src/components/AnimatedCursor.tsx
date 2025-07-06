
import React, { useEffect, useState } from 'react';

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

  // Enhanced floating energy orbs
  const EnergyOrb = ({ delay, distance, size, opacity }: { 
    delay: number; 
    distance: number; 
    size: number;
    opacity: number;
  }) => (
    <div
      className={`absolute rounded-full transition-all duration-150 ${
        isMoving ? `opacity-${Math.floor(opacity * 100)}` : 'opacity-20'
      } ${isClicking ? 'scale-150' : 'scale-100'}`}
      style={{
        left: mousePosition.x + Math.cos((Date.now() * 0.002 + delay) * Math.PI) * distance - size/2,
        top: mousePosition.y + Math.sin((Date.now() * 0.002 + delay) * Math.PI) * distance - size/2,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, rgba(251, 191, 36, ${opacity}) 0%, rgba(253, 224, 71, ${opacity * 0.5}) 70%, transparent 100%)`,
        filter: `blur(${size * 0.1}px) drop-shadow(0 0 ${size * 0.5}px rgba(251, 191, 36, ${opacity}))`,
        animationDelay: `${delay * 0.3}s`,
      }}
    />
  );

  // Improved star particles
  const StarParticle = ({ delay, radius, size }: { delay: number; radius: number; size: number }) => (
    <div
      className={`absolute transition-all duration-200 ${
        isMoving ? 'opacity-70' : 'opacity-30'
      }`}
      style={{
        left: mousePosition.x + Math.cos((Date.now() * 0.003 + delay) * Math.PI) * radius - size/2,
        top: mousePosition.y + Math.sin((Date.now() * 0.003 + delay) * Math.PI) * radius - size/2,
        width: `${size}px`,
        height: `${size}px`,
        background: 'rgba(251, 191, 36, 0.9)',
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        animation: 'star-twinkle 1.5s ease-in-out infinite',
        animationDelay: `${delay * 0.2}s`,
        filter: `drop-shadow(0 0 ${size/2}px rgba(253, 224, 71, 0.8))`,
      }}
    />
  );

  // Enhanced electric trails
  const ElectricTrail = ({ delay, distance, length }: { delay: number; distance: number; length: number }) => (
    <div
      className={`absolute transition-all duration-100 ${
        isMoving ? 'opacity-60' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x + Math.cos((Date.now() * 0.004 + delay) * Math.PI) * distance,
        top: mousePosition.y + Math.sin((Date.now() * 0.004 + delay) * Math.PI) * distance,
        width: '2px',
        height: `${length}px`,
        background: 'linear-gradient(180deg, rgba(251, 191, 36, 0.8) 0%, rgba(253, 224, 71, 0.4) 50%, transparent 100%)',
        transform: `rotate(${Date.now() * 0.001 + delay * 60}deg)`,
        filter: 'blur(0.5px)',
        borderRadius: '1px',
      }}
    />
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Central Enhanced Core - reduced transition duration for better tracking */}
      <div
        className={`absolute transition-all duration-75 ease-out ${
          isMoving ? 'opacity-100 scale-100' : 'opacity-60 scale-75'
        } ${isClicking ? 'scale-125' : ''}`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          width: '16px',
          height: '16px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 1) 0%, rgba(253, 224, 71, 0.8) 70%, transparent 100%)',
          borderRadius: '50%',
          filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 24px rgba(253, 224, 71, 0.4))',
        }}
      />

      {/* Floating Energy Orbs - Multiple sizes and opacities */}
      {[...Array(6)].map((_, i) => (
        <EnergyOrb 
          key={`orb-${i}`}
          delay={i * 1.2}
          distance={30 + (i % 3) * 15}
          size={12 + (i % 3) * 4}
          opacity={0.6 - (i % 3) * 0.1}
        />
      ))}

      {/* Electric Trails */}
      {[...Array(10)].map((_, i) => (
        <ElectricTrail 
          key={`trail-${i}`}
          delay={i * 0.6}
          distance={18 + (i % 4) * 8}
          length={20 + (i % 3) * 10}
        />
      ))}

      {/* Star Particles */}
      {[...Array(8)].map((_, i) => (
        <StarParticle 
          key={`star-${i}`}
          delay={i * 0.8}
          radius={45 + (i % 2) * 15}
          size={6 + (i % 3) * 2}
        />
      ))}

      {/* Inner Energy Ring */}
      <div
        className={`absolute rounded-full transition-all duration-200 ${
          isMoving 
            ? 'opacity-50' 
            : 'opacity-20'
        } ${isClicking ? 'scale-150' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(251, 191, 36, 0.4)',
          background: 'radial-gradient(circle, transparent 60%, rgba(251, 191, 36, 0.1) 100%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Outer Energy Ring */}
      <div
        className={`absolute rounded-full border transition-all duration-200 ${
          isMoving 
            ? 'border-cosmic-gold/20 opacity-40' 
            : 'border-cosmic-gold/10 opacity-10'
        } ${isClicking ? 'scale-200 border-cosmic-gold/40' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          width: '60px',
          height: '60px',
          animation: isMoving ? 'spin 3s linear infinite' : 'none',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Pulsing Background Glow */}
      <div
        className={`absolute rounded-full transition-all duration-300 ${
          isMoving 
            ? 'opacity-30' 
            : 'opacity-10'
        } ${isClicking ? 'scale-300 opacity-50' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
          filter: 'blur(8px)',
          animation: isMoving ? 'glow-pulse 2s ease-in-out infinite' : 'none',
        }}
      />
    </div>
  );
};

export default AnimatedCursor;

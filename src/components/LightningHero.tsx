
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const LightningHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 starfield opacity-30" />
      
      {/* Lightning Constellation SVG */}
      <div className={`
        relative z-10 transform transition-all duration-2000 ease-out
        ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
      `}>
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="animate-lightning-glow"
        >
          {/* Constellation lines */}
          <g stroke="#fbbf24" strokeWidth="1" opacity="0.4">
            <line x1="50" y1="100" x2="120" y2="80" className="animate-pulse" />
            <line x1="120" y1="80" x2="200" y2="120" className="animate-pulse" />
            <line x1="280" y1="100" x2="350" y2="80" className="animate-pulse" />
            <line x1="280" y1="300" x2="350" y2="320" className="animate-pulse" />
            <line x1="50" y1="300" x2="120" y2="320" className="animate-pulse" />
          </g>

          {/* Constellation stars */}
          <g>
            {[
              { x: 50, y: 100 }, { x: 120, y: 80 }, { x: 200, y: 120 },
              { x: 280, y: 100 }, { x: 350, y: 80 }, { x: 350, y: 320 },
              { x: 280, y: 300 }, { x: 120, y: 320 }, { x: 50, y: 300 }
            ].map((star, index) => (
              <circle
                key={index}
                cx={star.x}
                cy={star.y}
                r="3"
                fill="#fde047"
                className="animate-star-twinkle"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
            ))}
          </g>

          {/* Central Lightning Bolt */}
          <g className="animate-lightning-glow">
            <path
              d="M200 80 L180 160 L220 160 L160 320 L240 180 L200 180 L220 80 Z"
              fill="url(#lightningGradient)"
              stroke="#fbbf24"
              strokeWidth="2"
            />
          </g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-gold rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`
        absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center
        transition-all duration-1000 delay-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-cosmic-starlight">Thunder</span>
          <span className="text-cosmic-gold"> Constellations</span>
        </h1>
        <p className="text-xl text-cosmic-starlight/80 mb-8 max-w-2xl">
          Illuminating the path between technology and compassionate care
        </p>
        <div className="flex justify-center">
          <Zap className="w-8 h-8 text-cosmic-gold animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LightningHero;

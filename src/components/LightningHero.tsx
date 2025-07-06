
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LightningHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Original Starfield Background - kept for additional depth */}
      <div className="absolute inset-0 starfield opacity-20" />
      
      {/* Enhanced Lightning Constellation SVG with Framer Motion */}
      <motion.div 
        className="relative z-30 mb-8"
        initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
        animate={{ 
          scale: isVisible ? 1 : 0.5, 
          opacity: isVisible ? 1 : 0,
          rotateY: isVisible ? 0 : -180
        }}
        transition={{ 
          duration: 2,
          ease: "easeOut",
          delay: 0.5
        }}
      >
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 400 400"
          className="animate-lightning-glow w-full max-w-sm md:max-w-md"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Enhanced Constellation lines with motion */}
          <g stroke="#fbbf24" strokeWidth="1" opacity="0.6">
            {[
              { x1: 50, y1: 100, x2: 120, y2: 80 },
              { x1: 120, y1: 80, x2: 200, y2: 120 },
              { x1: 280, y1: 100, x2: 350, y2: 80 },
              { x1: 280, y1: 300, x2: 350, y2: 320 },
              { x1: 50, y1: 300, x2: 120, y2: 320 }
            ].map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: index * 0.3 }}
                className="animate-pulse"
              />
            ))}
          </g>

          {/* Enhanced Constellation stars */}
          <g>
            {[
              { x: 50, y: 100 }, { x: 120, y: 80 }, { x: 200, y: 120 },
              { x: 280, y: 100 }, { x: 350, y: 80 }, { x: 350, y: 320 },
              { x: 280, y: 300 }, { x: 120, y: 320 }, { x: 50, y: 300 }
            ].map((star, index) => (
              <motion.circle
                key={index}
                cx={star.x}
                cy={star.y}
                r="3"
                fill="#fde047"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 500
                }}
                className="animate-star-twinkle"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
            ))}
          </g>

          {/* Enhanced Central Lightning Bolt */}
          <motion.g 
            className="animate-lightning-glow"
            whileHover={{ 
              filter: "drop-shadow(0 0 20px #fbbf24)",
              scale: 1.05 
            }}
          >
            <motion.path
              d="M200 80 L180 160 L220 160 L160 320 L240 180 L200 180 L220 80 Z"
              fill="url(#enhancedLightningGradient)"
              stroke="#fbbf24"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </motion.g>

          {/* Enhanced Gradient Definitions */}
          <defs>
            <linearGradient id="enhancedLightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="30%" stopColor="#fbbf24" />
              <stop offset="70%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Enhanced Main Content with Motion */}
      <motion.div 
        className="text-center z-30 max-w-4xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 50, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 1, 
          delay: 1.5,
          ease: "easeOut" 
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 2,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.span 
            className="text-cosmic-starlight block md:inline"
            whileHover={{ 
              textShadow: "0 0 20px rgba(248, 250, 252, 0.8)",
              scale: 1.05
            }}
          >
            Thunder
          </motion.span>
          <motion.span 
            className="text-cosmic-gold block md:inline md:ml-2"
            whileHover={{ 
              textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
              scale: 1.05
            }}
          >
            Constellations
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-cosmic-starlight/80 mb-8 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Illuminating the path between technology and compassionate care
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LightningHero;

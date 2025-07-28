import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

// hero section - spent way too long on these animations *nuzzles*
const LightningHero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50" />
      
      {/* Simple SVG without animations */}
      <div className="relative z-30 mb-4">
        <svg
          width="300"
          height="300"
          viewBox="0 0 400 400"
          className="w-full max-w-sm md:max-w-md"
        >
          {/* Simple constellation lines */}
          <g stroke="#fbbf24" strokeWidth="1" opacity="0.6">
            <line x1="50" y1="100" x2="120" y2="80" />
            <line x1="120" y1="80" x2="200" y2="120" />
            <line x1="280" y1="100" x2="350" y2="80" />
            <line x1="280" y1="300" x2="350" y2="320" />
            <line x1="50" y1="300" x2="120" y2="320" />
          </g>

          {/* Simple constellation stars */}
          <g>
            <circle cx="50" cy="100" r="3" fill="#fde047" />
            <circle cx="120" cy="80" r="3" fill="#fde047" />
            <circle cx="200" cy="120" r="3" fill="#fde047" />
            <circle cx="280" cy="100" r="3" fill="#fde047" />
            <circle cx="350" cy="80" r="3" fill="#fde047" />
            <circle cx="350" cy="320" r="3" fill="#fde047" />
            <circle cx="280" cy="300" r="3" fill="#fde047" />
            <circle cx="120" cy="320" r="3" fill="#fde047" />
            <circle cx="50" cy="300" r="3" fill="#fde047" />
          </g>

          {/* Simple lightning bolt */}
          <path
            d="M200 80 L180 160 L220 160 L160 320 L240 180 L200 180 L220 80 Z"
            fill="#fbbf24"
            stroke="#fbbf24"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Simple main content */}
      <div className="text-center z-30 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white block md:inline">
            Thunder
          </span>
          <span className="text-yellow-400 block md:inline md:ml-2">
            Constellations
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          Illuminating the path between technology and compassionate care
        </p>
      </div>
    </div>
  );
};

export default LightningHero;

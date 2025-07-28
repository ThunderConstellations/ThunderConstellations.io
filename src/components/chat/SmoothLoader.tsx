
import React from 'react';
import { motion } from 'framer-motion';

// smooth loader - this is probably overkill but looks nice UwU
const SmoothLoader = () => {
  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center py-8 animate-fade-in">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};

export default SmoothLoader;

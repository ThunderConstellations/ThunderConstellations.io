
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LightningHero from '../components/LightningHero';
import AIChat from '../components/AIChat';

const Home = () => {
  return (
    <motion.div 
      className="cosmic-bg min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <LightningHero />
      <div className="relative">
        <AIChat />
      </div>
    </motion.div>
  );
};

export default Home;

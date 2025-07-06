
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LightningHero from '../components/LightningHero';
import AIChat from '../components/AIChat';
import BackgroundLayers from '../components/graphics/BackgroundLayers';

const Home = () => {
  return (
    <motion.div 
      className="cosmic-bg min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <BackgroundLayers variant="homepage" />
      <LightningHero />
      <div className="relative">
        <AIChat />
      </div>
    </motion.div>
  );
};

export default Home;

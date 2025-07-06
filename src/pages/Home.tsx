
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LightningHero from '../components/LightningHero';
import AIChat from '../components/AIChat';
import BackgroundLayers from '../components/graphics/BackgroundLayers';
import ScrollIndicator from '../components/ScrollIndicator';

const Home = () => {
  return (
    <motion.div 
      className="cosmic-bg min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <BackgroundLayers variant="homepage" />
      
      {/* Hero Section */}
      <section className="relative">
        <LightningHero />
      </section>
      
      {/* Chat Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cosmic-starlight mb-4">
              Connect with <span className="text-cosmic-gold">AI Intelligence</span>
            </h2>
            <p className="text-cosmic-starlight/80 text-lg max-w-2xl mx-auto">
              Experience intelligent conversations powered by advanced AI technology
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <AIChat />
          </motion.div>
        </div>
      </section>
      
      <ScrollIndicator />
    </motion.div>
  );
};

export default Home;

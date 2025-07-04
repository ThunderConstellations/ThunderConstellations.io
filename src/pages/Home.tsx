
import React, { useState } from 'react';
import LightningHero from '../components/LightningHero';
import AIChat from '../components/AIChat';

const Home = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <LightningHero />
      <div className="relative">
        <AIChat />
      </div>
    </div>
  );
};

export default Home;


import React, { useState } from 'react';
import LightningHero from '../components/LightningHero';
import AIChat from '../components/AIChat';
import GitHubRepos from '../components/GitHubRepos';

const Home = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <LightningHero />
      <div className="relative">
        <AIChat />
        <div className="max-w-6xl mx-auto px-4 py-16">
          <GitHubRepos />
        </div>
      </div>
    </div>
  );
};

export default Home;

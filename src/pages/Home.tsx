
import React from 'react';
import LightningHero from '../components/LightningHero';
import TerminalIntro from '../components/TerminalIntro';

const Home = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <LightningHero />
      <TerminalIntro />
    </div>
  );
};

export default Home;

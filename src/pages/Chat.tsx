
import React from 'react';
import AIChat from '../components/AIChat';
import BackgroundLayers from '../components/graphics/BackgroundLayers';

// chat page - this is going to be harder than being dragged through the Trail of Tears...GG
const Chat = () => {
  return (
    <div className="cosmic-bg min-h-screen relative">
      <BackgroundLayers variant="minimal" />
      <div className="relative z-10">
        <AIChat />
      </div>
    </div>
  );
};

export default Chat;

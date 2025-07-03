
import React, { useState } from 'react';
import AIChat from '../components/AIChat';

const Chat = () => {
  const [isFullscreen, setIsFullscreen] = useState(true);

  return (
    <div className="cosmic-bg min-h-screen">
      <AIChat 
        isFullscreen={isFullscreen} 
        onToggleFullscreen={() => setIsFullscreen(!isFullscreen)} 
      />
    </div>
  );
};

export default Chat;

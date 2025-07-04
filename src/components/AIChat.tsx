
import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './chat/ChatHeader';
import ChatWelcome from './chat/ChatWelcome';
import ChatMessage from './chat/ChatMessage';
import TypingIndicator from './chat/TypingIndicator';
import QuickPrompts from './chat/QuickPrompts';
import ChatInput from './chat/ChatInput';

interface AIChatProps {
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onClose?: () => void;
}

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChat: React.FC<AIChatProps> = ({ isFullscreen = false, onToggleFullscreen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm here to discuss my background in healthcare technology and help answer questions about my experience bridging tech and compassionate care. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowPrompts(false);

    // Enhanced AI responses based on your background
    setTimeout(() => {
      const responses = [
        "My healthcare background spans 5+ years in care coordination and mental health support, combined with growing expertise in React, TypeScript, and full-stack development. I've led teams in building technology solutions that directly improved patient outcomes and streamlined clinical workflows.",
        "I specialize in creating healthcare technology that prioritizes both user experience and clinical effectiveness. My unique perspective comes from understanding both the technical requirements and the real-world healthcare challenges that solutions need to address.",
        "What distinguishes me is my ability to bridge the gap between technical implementation and healthcare needs. I've worked directly with care teams, understand clinical workflows, and can translate complex healthcare requirements into elegant technical solutions.",
        "I'm passionate about using technology to make healthcare more accessible and efficient. My experience includes mental health program coordination, care team leadership, and developing solutions that serve both providers and patients effectively.",
        "I'm actively pursuing certifications in cybersecurity and cloud platforms like Azure, while building on my healthcare foundation. I'm particularly interested in roles that combine my healthcare domain knowledge with growing technical expertise.",
        "My goal is to contribute to organizations that value both technical innovation and meaningful healthcare impact. I'm open to opportunities in the Chicago area or remote positions, with relocation considered for the right opportunity."
      ];

      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handlePromptSelect = (prompt: string) => {
    setInputValue(prompt);
    setShowPrompts(false);
  };

  // When used as main page content, use full screen styles
  const containerClasses = isFullscreen && !onClose 
    ? 'min-h-screen w-full flex flex-col'
    : `${isFullscreen 
        ? 'fixed inset-0 z-50' 
        : 'fixed bottom-6 right-6 w-96 h-[600px]'
      } glass-morphism rounded-2xl flex flex-col transition-all duration-500 ease-out
      transform ${isFullscreen ? 'scale-100' : 'hover:scale-[1.02]'}
      shadow-2xl shadow-cosmic-gold/10`;

  return (
    <div className={containerClasses}>
      <ChatHeader 
        isFullscreen={isFullscreen}
        onToggleFullscreen={onToggleFullscreen}
        onClose={onClose}
      />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ChatWelcome 
          isFullscreen={isFullscreen} 
          showWelcome={!onClose}
        />

        {messages.map((message, index) => (
          <ChatMessage 
            key={message.id}
            message={message}
            index={index}
          />
        ))}

        <TypingIndicator isVisible={isTyping} />

        <div ref={messagesEndRef} />
      </div>

      <QuickPrompts 
        isVisible={showPrompts && messages.length === 1}
        onPromptSelect={handlePromptSelect}
      />

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
        onKeyPress={handleKeyPress}
        disabled={isTyping}
      />
    </div>
  );
};

export default AIChat;

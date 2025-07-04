import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './chat/ChatHeader';
import ChatWelcome from './chat/ChatWelcome';
import ChatMessage from './chat/ChatMessage';
import TypingIndicator from './chat/TypingIndicator';
import QuickPrompts from './chat/QuickPrompts';
import ChatInput from './chat/ChatInput';
import TerminalMessage from './chat/TerminalMessage';
import { Message } from './chat/types';

interface AIChatProps {
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onClose?: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ isFullscreen = false, onToggleFullscreen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const [showTerminalIntro, setShowTerminalIntro] = useState(false);
  const [terminalComplete, setTerminalComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showTerminalIntro]);

  // Start terminal intro sequence after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setShowTerminalIntro(true);
      }, 1500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTerminalComplete = () => {
    setTerminalComplete(true);
    setShowPrompts(true);
  };

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

    // Updated AI responses based on your healthcare background
    setTimeout(() => {
      const responses = [
        "I have 5+ years of experience in healthcare, specializing in care coordination and mental health support. I've worked directly with patients and care teams to improve outcomes and streamline clinical workflows, developing a deep understanding of both the technical and human sides of healthcare.",
        "My background is in healthcare with a focus on care coordination and mental health. I've worked in clinical settings helping patients navigate complex care needs while also identifying opportunities to improve processes through technology solutions.",
        "I bring a unique perspective combining healthcare domain expertise with growing technical skills. My experience includes mental health program coordination, care team leadership, and developing workflows that serve both providers and patients effectively.",
        "My healthcare background spans mental health support and care coordination roles where I've worked directly with patients and clinical teams. I'm passionate about using my healthcare knowledge to build better technology solutions for the industry.",
        "I have extensive experience in healthcare, particularly in care coordination and mental health services. I've led initiatives that improved patient outcomes and team efficiency, and I'm now exploring how to leverage technology to solve healthcare challenges.",
        "My goal is to bridge my healthcare expertise with technology to create meaningful solutions. I'm interested in opportunities in the Chicago area or remote positions where I can apply both my clinical knowledge and problem-solving skills."
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

  // When used as main page content (no onClose prop), use full screen layout
  const isMainPage = !onClose;
  
  const containerClasses = isMainPage
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
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          <ChatWelcome 
            isFullscreen={isMainPage} 
            showWelcome={!showTerminalIntro && !terminalComplete && messages.length === 0}
          />

          {/* Terminal Intro Message */}
          {showTerminalIntro && (
            <TerminalMessage onComplete={handleTerminalComplete} />
          )}

          <div className="space-y-6">
            {messages.map((message, index) => (
              <ChatMessage 
                key={message.id}
                message={message}
                index={index}
              />
            ))}
          </div>

          <TypingIndicator isVisible={isTyping} />

          <div ref={messagesEndRef} />
        </div>
      </div>

      <QuickPrompts 
        isVisible={showPrompts && terminalComplete && messages.length === 0}
        onPromptSelect={handlePromptSelect}
      />

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendMessage}
        onKeyPress={handleKeyPress}
        disabled={isTyping || !terminalComplete}
      />
    </div>
  );
};

export default AIChat;


import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Minimize2, Maximize2, X, Sparkles, Zap } from 'lucide-react';

interface AIChatProps {
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onClose?: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ isFullscreen = false, onToggleFullscreen, onClose }) => {
  const [messages, setMessages] = useState([
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

    const userMessage = {
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

      const assistantMessage = {
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

  const quickPrompts = [
    "Tell me about your healthcare experience",
    "What technical skills do you have?",
    "How do you bridge healthcare and technology?",
    "What certifications are you pursuing?",
    "What type of role are you seeking?",
    "Describe your leadership experience"
  ];

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
      {/* Enhanced Header - only show controls when not main page */}
      {(onToggleFullscreen || onClose) && (
        <div className="flex items-center justify-between p-4 border-b border-cosmic-gold/20 bg-gradient-to-r from-cosmic-gold/5 to-cosmic-gold/10 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
                <Bot className="w-5 h-5 text-cosmic-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-cosmic-black" />
              <Sparkles className="absolute -top-2 -right-2 w-3 h-3 text-cosmic-gold animate-spin" />
            </div>
            <div>
              <h3 className="font-bold text-cosmic-gold text-lg">Career Assistant</h3>
              <p className="text-xs text-cosmic-starlight/70 animate-pulse">Ask me anything about my background!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {onToggleFullscreen && (
              <button
                onClick={onToggleFullscreen}
                className="text-cosmic-starlight hover:text-cosmic-gold transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-cosmic-gold/10"
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            )}
            {onClose && !isFullscreen && (
              <button
                onClick={onClose}
                className="text-cosmic-starlight hover:text-red-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-red-400/10"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Enhanced Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Welcome header for main page */}
        {isFullscreen && !onClose && (
          <div className="text-center py-8 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
                  <Bot className="w-8 h-8 text-cosmic-black" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-cosmic-gold animate-spin" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-cosmic-gold mb-2">Career Assistant</h1>
            <p className="text-cosmic-starlight/80 max-w-2xl mx-auto">
              Ask me anything about my healthcare technology background, technical skills, or career journey
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}
                       animate-fade-in transition-all duration-500 ease-out`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {message.type === 'assistant' && (
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cosmic-black" />
                </div>
              </div>
            )}
            
            <div className={`
              max-w-[80%] rounded-2xl p-4 backdrop-blur-sm transition-all duration-300
              ${message.type === 'user' 
                ? 'bg-gradient-to-br from-cosmic-gold/20 to-cosmic-gold/30 border border-cosmic-gold/40 ml-auto transform hover:scale-[1.02]' 
                : 'bg-gradient-to-br from-cosmic-dark/80 to-cosmic-dark/60 border border-cosmic-gold/20 transform hover:scale-[1.02]'
              }
              shadow-lg hover:shadow-xl hover:shadow-cosmic-gold/10
            `}>
              <p className="text-sm leading-relaxed text-cosmic-starlight">{message.content}</p>
              <span className="text-xs opacity-60 mt-3 block text-cosmic-starlight/50">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>

            {message.type === 'user' && (
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Enhanced Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 justify-start animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-dark flex items-center justify-center">
              <Bot className="w-4 h-4 text-cosmic-black" />
            </div>
            <div className="bg-gradient-to-br from-cosmic-dark/80 to-cosmic-dark/60 border border-cosmic-gold/20 rounded-2xl p-4">
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="ml-2 text-xs text-cosmic-starlight/70">Thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Quick Prompts */}
      {showPrompts && messages.length === 1 && (
        <div className="px-6 pb-4 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-cosmic-gold" />
            <p className="text-sm text-cosmic-gold font-medium">Try asking:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptSelect(prompt)}
                className="text-left text-sm p-4 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/15 
                         hover:from-cosmic-gold/20 hover:to-cosmic-gold/25 
                         text-cosmic-starlight border border-cosmic-gold/30 rounded-xl 
                         transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg
                         hover:shadow-cosmic-gold/20 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="group-hover:text-cosmic-gold transition-colors duration-200">
                  {prompt}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Input Area */}
      <div className="p-6 border-t border-cosmic-gold/20 bg-gradient-to-r from-cosmic-gold/5 to-cosmic-gold/10">
        <div className="flex gap-4 items-end max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about my experience, skills, or career goals..."
              rows={1}
              className="w-full bg-cosmic-dark/60 border border-cosmic-gold/30 rounded-xl px-6 py-4 
                       text-cosmic-starlight placeholder-cosmic-starlight/50 
                       focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                       transition-all duration-300 resize-none backdrop-blur-sm
                       hover:border-cosmic-gold/50 text-base"
              style={{ minHeight: '56px', maxHeight: '120px' }}
            />
            <div className="absolute bottom-3 right-4 text-xs text-cosmic-starlight/40">
              Press Enter to send
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="lightning-btn p-4 disabled:opacity-50 disabled:cursor-not-allowed
                     transform transition-all duration-300 hover:scale-105 active:scale-95
                     disabled:transform-none flex items-center justify-center
                     shadow-lg hover:shadow-xl hover:shadow-cosmic-gold/30 min-w-[56px] h-[56px]"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;


import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Minimize2, Maximize2, MessageSquare, X } from 'lucide-react';

const AIChat = ({ isFullscreen = false, onToggleFullscreen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm your AI career assistant. I can tell you about my experience in healthcare technology, answer questions about my projects, or help explain how my background bridges tech and compassionate care. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

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

    // Simulate AI response (replace with OpenRouter integration)
    setTimeout(() => {
      const responses = [
        "My background combines 5+ years in healthcare with deep technical expertise in React, TypeScript, and full-stack development. I've led teams in building care coordination platforms that improved patient outcomes.",
        "I specialize in building healthcare technology solutions that prioritize user experience and clinical workflows. My projects have ranged from mental health apps to care team dashboards.",
        "What sets me apart is my unique blend of technical skills and healthcare domain knowledge. I understand both the code and the clinical context, making me effective at building solutions that truly serve end users.",
        "I'm passionate about using technology to make healthcare more accessible and efficient. My experience spans frontend development, team leadership, and direct patient care coordination.",
        "I'd love to discuss how my experience in both healthcare and technology could contribute to your team's goals. What specific aspects of my background interest you most?"
      ];

      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPrompts = [
    "Tell me about your healthcare experience",
    "What technologies do you specialize in?",
    "Describe your leadership style",
    "How do you bridge tech and healthcare?"
  ];

  return (
    <div className={`
      ${isFullscreen 
        ? 'fixed inset-0 z-50' 
        : 'fixed bottom-6 right-6 w-96 h-[600px]'
      }
      glass-morphism rounded-xl flex flex-col transition-all duration-300
    `}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cosmic-gold/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bot className="w-8 h-8 text-cosmic-gold" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div>
            <h3 className="font-semibold text-cosmic-gold">Career Assistant</h3>
            <p className="text-xs text-cosmic-starlight/60">Ask me anything!</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="text-cosmic-starlight hover:text-cosmic-gold transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          )}
          {onClose && !isFullscreen && (
            <button
              onClick={onClose}
              className="text-cosmic-starlight hover:text-cosmic-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'assistant' && (
              <div className="flex-shrink-0">
                <Bot className="w-6 h-6 text-cosmic-gold" />
              </div>
            )}
            
            <div className={`chat-bubble ${message.type}`}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-60 mt-2 block">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>

            {message.type === 'user' && (
              <div className="flex-shrink-0">
                <User className="w-6 h-6 text-cosmic-gold" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <Bot className="w-6 h-6 text-cosmic-gold" />
            <div className="chat-bubble assistant">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-cosmic-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-cosmic-starlight/60 mb-3">Try asking:</p>
          <div className="grid grid-cols-1 gap-2">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInputValue(prompt)}
                className="text-left text-xs p-2 bg-cosmic-gold/10 hover:bg-cosmic-gold/20 
                         text-cosmic-gold border border-cosmic-gold/30 rounded-lg 
                         transition-colors duration-200"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-cosmic-gold/20">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg px-4 py-2 
                     text-cosmic-starlight placeholder-cosmic-starlight/50 
                     focus:outline-none focus:border-cosmic-gold transition-colors"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="lightning-btn p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;

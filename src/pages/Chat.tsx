
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';
import SmoothLoader from '../components/chat/SmoothLoader';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
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
    setShowWelcome(false);

    // Enhanced AI responses
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">Career Assistant</h1>
              <p className="text-sm text-gray-500">Ask me about my background and experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          {/* Welcome Message */}
          {showWelcome && messages.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Hi! I'm your career assistant</h2>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Ask me anything about my healthcare technology background, technical skills, or career journey
              </p>
              
              {/* Quick Questions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {[
                  "Tell me about your healthcare experience",
                  "What technical skills do you have?",
                  "How do you bridge healthcare and technology?",
                  "What type of role are you seeking?"
                ].map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="p-4 text-left bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200 text-gray-700 hover:text-blue-600"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {message.type === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`
                  max-w-[80%] rounded-2xl p-4 transition-all duration-300
                  ${message.type === 'user' 
                    ? 'bg-blue-500 text-white ml-auto' 
                    : 'bg-white border border-gray-200 shadow-sm'
                  }
                `}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>

                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <SmoothLoader isVisible={isTyping} />
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 p-4 sticky bottom-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 items-end">
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                rows={1}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 
                         text-gray-900 placeholder-gray-500 
                         focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                         transition-all duration-200 resize-none text-sm"
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed
                       text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95
                       disabled:transform-none flex items-center justify-center min-w-[44px] h-[44px]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;


import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  index: number;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, index }) => {
  return (
    <div
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
  );
};

export default ChatMessage;

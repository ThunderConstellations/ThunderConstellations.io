
import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  value, 
  onChange, 
  onSend, 
  onKeyPress, 
  disabled 
}) => {
  return (
    <div className="p-6 border-t border-cosmic-gold/20 bg-gradient-to-r from-cosmic-gold/5 to-cosmic-gold/10 backdrop-blur-sm sticky bottom-0">
      <div className="flex gap-4 items-end max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={onKeyPress}
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
          onClick={onSend}
          disabled={!value.trim() || disabled}
          className="lightning-btn p-4 disabled:opacity-50 disabled:cursor-not-allowed
                   transform transition-all duration-300 hover:scale-105 active:scale-95
                   disabled:transform-none flex items-center justify-center
                   shadow-lg hover:shadow-xl hover:shadow-cosmic-gold/30 min-w-[56px] h-[56px]"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

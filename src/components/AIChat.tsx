
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

  const generateResumeResponse = () => {
    return `Here's my professional resume:

**Austin Wood**
Healthcare Professional & Care Coordinator
📧 19austinwood96@gmail.com | 📍 Chicago, IL

**Professional Summary**
Experienced healthcare professional with 5+ years in mental health support and care coordination. Proven track record of improving patient outcomes through systematic care coordination and innovative program development.

**Experience**
• **Care Coordinator** (2019 - Present)
  - Coordinated comprehensive care for 150+ patients
  - Improved patient outcomes by 40% through systematic follow-up
  - Led quality improvement initiatives reducing readmission rates by 25%

• **Mental Health Support Specialist** (2017 - 2019)
  - Provided direct support to 75+ individuals
  - Led group therapy sessions with 85% completion rate
  - Implemented crisis intervention protocols

**Core Skills**
Care Coordination, Mental Health Support, Patient Advocacy, Crisis Intervention, Team Leadership, Process Improvement

**Certifications**
• Google IT Support Professional Certificate
• Mental Health First Aid Certification
• Crisis Intervention Training
• Healthcare Quality Management

Would you like me to provide a downloadable PDF version? I can also share specific sections like references or a cover letter if needed.`;
  };

  const generateIntelligentResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return generateResumeResponse();
    }
    
    if (lowerInput.includes('reference') || lowerInput.includes('recommendation')) {
      return `Here are my professional references:

**[Please provide your actual references]**

I'd be happy to share formal reference letters or contact information for any of these professionals who can speak to my healthcare experience and work quality.`;
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `You can reach me at:
📧 Email: 19austinwood96@gmail.com
📍 Location: Chicago, IL
💼 LinkedIn: austin-wood-a1b2c3
🐙 GitHub: ThunderConstellations

I'm open to opportunities in healthcare, care coordination, and roles that combine healthcare expertise with technology solutions.`;
    }
    
    if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      return `I have 5+ years of experience in healthcare, specializing in:

• **Care Coordination** - Managing comprehensive care for 150+ patients with complex medical and mental health needs
• **Mental Health Support** - Providing direct support and leading group therapy sessions
• **Program Leadership** - Developing initiatives that improved patient outcomes by 40%
• **Quality Improvement** - Implementing processes that reduced readmission rates by 25%

My background combines clinical expertise with strong leadership and process improvement skills.`;
    }
    
    if (lowerInput.includes('skill') || lowerInput.includes('abilities')) {
      return `My core competencies include:

**Healthcare Expertise:**
• Care Coordination & Case Management
• Mental Health Support & Crisis Intervention
• Patient Advocacy & Education
• Clinical Documentation & Compliance

**Leadership & Management:**
• Team Leadership & Development
• Process Improvement & Quality Assurance
• Program Management & Implementation
• Training & Mentoring

**Technical Skills:**
• Electronic Health Records (EHR)
• Healthcare Analytics & Reporting
• Google IT Support Professional
• Project Management Tools`;
    }
    
    if (lowerInput.includes('goal') || lowerInput.includes('future') || lowerInput.includes('career')) {
      return `My career goals focus on:

• Leveraging my healthcare expertise to drive positive change in patient care
• Exploring opportunities that combine clinical knowledge with innovative solutions
• Contributing to organizations that prioritize quality outcomes and patient experience
• Continuing professional development in healthcare technology and leadership

I'm particularly interested in roles in the Chicago area or remote positions where I can apply both my healthcare background and problem-solving skills.`;
    }

    // Default responses for general queries
    const responses = [
      "I'm Austin Wood, a healthcare professional with 5+ years of experience in care coordination and mental health support. I'm passionate about improving patient outcomes through innovative healthcare solutions.",
      "My expertise lies in healthcare coordination, having successfully managed care for 150+ patients while implementing quality improvement initiatives that reduced readmission rates by 25%.",
      "I bring a unique combination of clinical healthcare experience and leadership skills, with a track record of improving patient outcomes and team efficiency in mental health settings.",
      "With my background in mental health support and care coordination, I'm interested in opportunities that leverage healthcare expertise to create meaningful impact for patients and providers.",
      "I'm based in Chicago and open to discussing how my healthcare background and passion for process improvement could contribute to your organization's goals."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
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
    // Always show prompts after each response for continued interaction
    setTimeout(() => setShowPrompts(true), 2000);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: generateIntelligentResponse(inputValue),
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
        isVisible={showPrompts && terminalComplete}
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

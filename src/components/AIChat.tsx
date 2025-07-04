
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

  const generateResumeForPosition = (position: string) => {
    const lowerPosition = position.toLowerCase();
    
    if (lowerPosition.includes('it') || lowerPosition.includes('helpdesk') || lowerPosition.includes('technical') || lowerPosition.includes('support')) {
      return `**IT/Helpdesk Resume for Austin Wood**

**Austin Wood**
IT Support Professional
📧 19austinwood96@gmail.com | 📞 219.299.3702
📍 Chicago, IL 60626 | 🌐 auconstellations.wordpress.com

**Professional Summary**
Versatile and driven Help Desk and IT Support professional with leadership experience and a foundational background in troubleshooting, end-user support, and documentation systems. Google IT Support certified, with growing technical fluency in automation tools like N8N and code-assist platforms like Cursor.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
  - Manage daily store operations, supervising staff and supporting customer service tools, POS systems, and handheld tech
  - Troubleshoot on-site tech issues including barcode scanners, printers, and POS terminals
  - Provide training to new associates on digital systems, shift logs, and procedural tools

• **Lead Case Manager / RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Trained staff on digital documentation systems (Matrix), remote workflows, and file organization best practices
  - Maintained case files and created streamlined electronic record systems
  - Assisted with telehealth coordination and electronic communication across medical departments

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• In Progress: CompTIA+ and Microsoft Azure

**Technical Skills**
Help Desk Support, Technical Troubleshooting, Windows OS, Microsoft Office, Basic Linux, Cursor (code assistant), Digital Documentation Systems, Google Workspace, Matrix (EHR), N8N (workflow automation)`;
    }
    
    if (lowerPosition.includes('care') || lowerPosition.includes('coordinator') || lowerPosition.includes('health') || lowerPosition.includes('case') || lowerPosition.includes('manager')) {
      return `**Healthcare/Care Coordination Resume for Austin Wood**

**Austin Wood**
Care Coordinator / Case Manager
📧 19austinwood96@gmail.com | 📞 219.299.3702
📍 Chicago, IL 60626 | 🌐 auconstellations.wordpress.com

**Professional Summary**
Compassionate and experienced case manager with a strong foundation in care coordination, crisis intervention, documentation, and psycho-social support. Proven success working with diverse populations in mental health, long-term care, and transitional living environments.

**Professional Experience**
• **Lead Case Manager / RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Managed care plans for residents and supervised CNA staff through hands-on training and crisis support
  - Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups
  - Designed custom documentation and filing systems that improved COVID testing and lab compliance
  - Completed admission/discharge paperwork, medication tracking, and coordinated with healthcare providers

• **Lead MHP / PRSC, Bryn Mawr Care** (07/2019 – 09/2020)
  - Oversaw case management for 30+ residents, delivering 1:1 behavioral interventions and psychoeducational groups
  - Created treatment plans, completed intake assessments, and maintained timely documentation through Matrix
  - Acted as liaison between residents, medical staff, external programs, and legal guardians
  - Trained junior staff and developed internal guides to improve service quality and compliance

**Core Competencies**
Care Coordination, Case Management, Behavioral Health Support, Crisis Intervention, Psycho-Social Assessments, Electronic Documentation, Patient Advocacy, Interdisciplinary Team Collaboration, HIPAA Compliance, Cultural Sensitivity

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Compliance Training – CMS Certified (2020)`;
    }
    
    if (lowerPosition.includes('admin') || lowerPosition.includes('office') || lowerPosition.includes('administrative')) {
      return `**Administrative/Office Resume for Austin Wood**

**Austin Wood**
Administrative / Office Professional
📧 19austinwood96@gmail.com | 📞 219.299.3702
📍 Chicago, IL 60626 | 🌐 auconstellations.wordpress.com

**Summary**
Efficient administrative support professional with over 5 years of experience in documentation, filing systems, and process improvement across healthcare and retail environments. Proven success in managing records, leading clerical teams, and streamlining operations to improve accuracy and time efficiency.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
  - Oversee daily store operations, including inventory reporting, cash handling, and coordinating shift tasks
  - Train associates and delegate administrative responsibilities including data logging and restock documentation
  - Act as point-of-contact for vendor check-ins and invoice receipt accuracy

• **Lead Case Manager & RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Managed all intake, discharge, and case documentation for 100+ residents in a long-term care setting
  - Designed and maintained customized filing systems that significantly reduced retrieval time for resident medical histories
  - Ensured accuracy and compliance with all CMS documentation standards, including lab result processing and COVID records
  - Supervised clerical and care staff, maintaining a calm and structured office workflow

**Administrative Skills**
Filing & Documentation, Calendar Coordination, Customer Communication, Intake/Discharge Forms, Data Entry, Organizational Development, Office Workflow Management, Staff Supervision, Compliance Tracking, Digital File Systems, Front Desk Operations

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 CMS Certification (2020)
• Proficient: Microsoft Office Suite, Google Docs/Sheets, Matrix (Case Software), N8N (automation)`;
    }
    
    // Default general resume
    return `**Professional Resume for Austin Wood**

**Austin Wood**
📧 19austinwood96@gmail.com | 📞 219.299.3702
📍 Chicago, IL 60626 | 🌐 auconstellations.wordpress.com

**Summary**
Adaptable and mission-driven professional with 5+ years of experience in leadership, documentation, and service delivery across healthcare, retail, and administrative sectors. Google IT certified with growing knowledge of automation and tech tools.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
• **Lead Case Manager & RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
• **Lead MHP - PRSC, Bryn Mawr Care** (07/2019 – 09/2020)

**Education**
Associate of Psychology, Ivy Tech Community College
Minor in Computer Science / Web App Development (2016 – 2018)

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Training – CMS, 2020

I can provide more detailed information about any specific position or experience you'd like to know more about.`;
  };

  const generateIntelligentResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return generateResumeForPosition(input);
    }
    
    if (lowerInput.includes('reference') || lowerInput.includes('recommendation') || lowerInput.includes('letter')) {
      return `**Professional References for Austin Wood**

I have several professional reference letters available:

**1. Dr. Jacob Fyda, MD - Psychiatrist**
📧 jacobfyda@gmail.com | 📞 727-415-3993
*"Mr. Wood is quick at learning, very dynamic, and hard-working. He worked well with our most challenging patients... I have total confidence that Mr. Wood would be a valuable asset to any organization."*

**2. Jessie Lintz, MA, LPC - Social Services Director**
📞 773-889-1333
*"Austin was a hard worker, intelligent, and effective in their duties. Austin displayed appropriate and effective empathy and support to his clients... Austin proved to be an impactful and creative employee."*

**3. Cynthia M Czapla, MALS - Academic Advisor**
📧 cczapla@ivytech.edu
*"Austin is efficient, detail-oriented, and extremely competent... His excellent communication skills allowed him to connect with all kinds of people and to inspire them."*

Would you like me to provide the full text of any specific reference letter?`;
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `**Contact Information for Austin Wood**

📧 **Email:** 19austinwood96@gmail.com
📞 **Phone:** 219.299.3702
📍 **Location:** Chicago, IL 60626
🌐 **Website:** auconstellations.wordpress.com

**Professional Links:**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX

I'm available for interviews and ready to discuss opportunities in healthcare, administrative support, IT/helpdesk, or remote work positions.`;
    }
    
    if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      return `**Professional Experience Summary**

**Current Role:** Shift Lead at Walgreens (Feb 2024 – Present)
- Supervising retail operations and staff training

**Healthcare Experience:**
• **Lead Case Manager & RP Supervisor** - Grasmere Place (2020-2023)
  - Managed care for 100+ residents in long-term care setting
  - Designed filing systems that improved compliance and efficiency

• **Lead MHP - PRSC** - Bryn Mawr Care (2019-2020)
  - Supervised mental health professionals
  - Managed documentation and coordinated care for 30+ residents

**Key Achievements:**
- Improved COVID testing protocols to achieve 100% facility-wide participation
- Created custom documentation systems that reduced retrieval time
- Successfully managed complex caseloads while maintaining compliance standards

My background combines healthcare expertise, administrative skills, and emerging technical knowledge.`;
    }

    // Default responses for general queries
    const responses = [
      "I'm Austin Wood, a professional with 5+ years of experience in healthcare, administration, and team leadership. I'm Google IT certified and currently working as a Shift Lead while seeking my next career opportunity.",
      "My expertise spans care coordination, case management, administrative support, and basic IT troubleshooting. I have experience working with diverse populations and complex documentation systems.",
      "I bring a unique combination of healthcare experience, administrative skills, and technical knowledge, with a track record of improving processes and outcomes in every role I've held.",
      "With my background in mental health support, case management, and retail leadership, I'm well-suited for roles that require empathy, organization, and strong communication skills.",
      "I'm based in Chicago and open to discussing how my healthcare background, administrative expertise, and growing technical skills could contribute to your organization's goals."
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

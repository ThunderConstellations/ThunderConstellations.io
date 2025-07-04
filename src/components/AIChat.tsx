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

  const generatePositionSpecificResume = (position: string) => {
    const lowerPos = position.toLowerCase();
    
    if (lowerPos.includes('it') || lowerPos.includes('helpdesk') || lowerPos.includes('technical') || lowerPos.includes('support')) {
      return `**Austin Wood - IT Support / Helpdesk Resume**
📧 19austinwood96@gmail.com | 📱 219.299.3702 | 📍 Chicago, IL 60626
🌐 auconstellations.wordpress.com

**Professional Summary**
Versatile IT Support professional with leadership experience and foundational background in troubleshooting, end-user support, and documentation systems. Google IT Support certified, with growing technical fluency in automation tools like N8N and code-assist platforms like Cursor. Strong communication, adaptability, and problem-solving skills honed through years of hands-on experience in customer-facing and high-pressure support environments.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
  - Manage daily store operations, supervising staff and supporting customer service tools, POS systems, and handheld tech
  - Troubleshoot on-site tech issues including barcode scanners, printers, and POS terminals
  - Provide training to new associates on digital systems, shift logs, and procedural tools

• **Lead Case Manager / RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Trained staff on digital documentation systems (Matrix), remote workflows, and file organization
  - Maintained case files and created streamlined electronic record systems
  - Assisted with telehealth coordination and electronic communication

**Core Competencies**
Help Desk Support, Technical Troubleshooting, Remote Tech Support, PC & Peripheral Maintenance, AI Workflow Tools (Cursor), Customer Service, Windows Environments, Ticketing Systems, End-User Support, POS & Inventory Systems, Automation Tools (N8N), Documentation Systems

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP CMS COVID-19 Certification (2020)
• In Progress: CompTIA+ and Microsoft Azure

**Technical Skills**
Windows OS, Microsoft Office, Basic Linux (iSH Terminal), Cursor (code assistant), Digital Documentation Systems, Google Workspace, Matrix (EHR), N8N (workflow automation), Slack / Zoom / Remote Tools

Would you like me to provide reference letters or discuss specific technical skills?`;
    }
    
    if (lowerPos.includes('care') || lowerPos.includes('health') || lowerPos.includes('coord') || lowerPos.includes('case') || lowerPos.includes('medical')) {
      return `**Austin Wood - Care Coordinator / Case Manager Resume**
📧 19austinwood96@gmail.com | 📱 219.299.3702 | 📍 Chicago, IL 60626
🌐 auconstellations.wordpress.com

**Professional Summary**
Compassionate and experienced case manager with strong foundation in care coordination, crisis intervention, documentation, and psycho-social support. Proven success working with diverse populations in mental health, long-term care, and transitional living environments. Natural communicator and team leader, with extensive experience in documentation systems, healthcare collaboration, and staff training.

**Professional Experience**
• **Lead Case Manager / RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Managed care plans for 100+ residents and supervised CNA staff through hands-on training
  - Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups
  - Designed custom documentation and filing systems that improved COVID testing and lab compliance
  - Completed admission/discharge paperwork, medication tracking, and coordinated with healthcare providers

• **Lead MHP / PRSC, Bryn Mawr Care** (07/2019 – 09/2020)
  - Oversaw case management for 30+ residents, delivering 1:1 behavioral interventions
  - Created treatment plans, completed intake assessments, and maintained timely documentation through Matrix
  - Acted as liaison between residents, medical staff, external programs, and legal guardians
  - Trained junior staff and developed internal guides to improve service quality

**Core Competencies**
Care Coordination, Case Management, Behavioral Health Support, Crisis Intervention, Psycho-Social Assessments, Electronic Documentation, Patient Advocacy, Interdisciplinary Team Collaboration, HIPAA Compliance, Cultural Sensitivity, File Organization, Discharge Planning, Documentation Systems, Motivational Interviewing

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Compliance Training – CMS Certified (2020)
• Currently preparing for: CompTIA+ and Microsoft Azure

Would you like to see my professional references or discuss specific healthcare experience?`;
    }
    
    if (lowerPos.includes('admin') || lowerPos.includes('office') || lowerPos.includes('clerical')) {
      return `**Austin Wood - Administrative / Office Support Resume**
📧 19austinwood96@gmail.com | 📱 219.299.3702 | 📍 Chicago, IL 60626
🌐 auconstellations.wordpress.com

**Summary**
Efficient administrative support professional with over 5 years of experience in documentation, filing systems, and process improvement across healthcare and retail environments. Proven success in managing records, leading clerical teams, and streamlining operations to improve accuracy and time efficiency.

**Experience**
• **Lead Case Manager & RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Managed all intake, discharge, and case documentation for 100+ residents
  - Designed and maintained customized filing systems that significantly reduced retrieval time
  - Ensured accuracy and compliance with all CMS documentation standards
  - Supervised clerical and care staff, maintaining calm and structured office workflow

• **Lead MHP - PRSC, Bryn Mawr Care** (07/2019 – 09/2020)
  - Tracked documentation using Matrix case management software and led record audits
  - Scheduled and documented appointments for over 70 residents weekly
  - Created internal procedural documentation and manuals for new office employees
  - Maintained relationships with external agencies and legal guardians

**Administrative Skills**
Filing & Documentation, Calendar Coordination, Customer Communication, Intake/Discharge Forms, Data Entry, Organizational Development, Office Workflow Management, Staff Supervision, Compliance Tracking, Digital File Systems, Front Desk Operations

**Certifications & Systems**
Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
QSEP COVID-19 CMS Certification (2020)
Proficient: Microsoft Office Suite, Google Docs/Sheets, Matrix (Case Software), N8N (automation)

Would you like to see specific examples of process improvements I've implemented?`;
    }
    
    return generateGeneralResume();
  };

  const generateGeneralResume = () => {
    return `**Austin Wood - Professional Resume**
📧 19austinwood96@gmail.com | 📱 219.299.3702 | 📍 Chicago, IL 60626
🌐 auconstellations.wordpress.com

**Summary**
Motivated, adaptable professional with 5+ years of experience in leadership, documentation, and service delivery across healthcare, retail, and administrative sectors. Google IT certified with growing knowledge of automation and tech tools. Known for strong interpersonal skills, crisis management, and team coordination.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
  - Supervise store associates, manage daily operational tasks, and ensure compliance
  - Handle vendor relations, invoice processing, merchandise resets, and shift scheduling
  - Provide customer assistance, conflict resolution, and team leadership

• **Lead Case Manager & RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Oversaw resident care planning, intake/discharge documentation, and trained staff
  - Created filing systems that improved regulatory compliance and workflow speed
  - Conducted psycho-social groups, crisis response, and harm-reduction education

**Education**
Associate of Psychology, Ivy Tech Community College
Minor in Computer Science / Web App Development
• President, Virtual Studio (Programming & Design Group)
• Vice President, DECA
• Group Counseling Aide & Volunteer (3 years)

**Skills & Competencies**
Team Leadership, Documentation, Office Software, Case Management, Filing Systems, Task Delegation, Customer Service, Crisis Management, Staff Training, Basic AI/Automation Tools, Organization, Communication

**Certifications**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Training – CMS, 2020

Would you like position-specific information or references?`;
  };

  const generateReferences = () => {
    return `**Professional References for Austin Wood**

**Dr. Jacob Fyda, MD** - Psychiatrist
📧 jacobfyda@gmail.com | 📱 727-415-3993
📍 727 W Madison Street, Apt 4302, Chicago, IL 60620

*"Austin T. Wood assisted me in scheduled appointments for a large caseload of patients and coordinated their visits. He was tasked with organizing a clinic that was often dynamic and unpredictable. He was able to execute this flawlessly and was a great asset in my work there. Mr. Wood is quick at learning, very dynamic, and hard-working. He worked well with our most challenging patients."*

**Jessie Lintz, MA, LPC** - Social Services Director
📱 773-889-1333
📍 Central Nursing Home, 2450 N Central Ave, Chicago, IL 60639

*"Austin was an employee of mine for approximately a year as a MHP when I was Social Services Director at Bryn Mawr Care. They were a hard worker, intelligent, and effective in their duties. Austin displayed appropriate and effective empathy and support to his clients. They managed a caseload of 30 consumers and successfully completed documentation in a timely fashion."*

**Cynthia M Czapla, MALS** - Academic Advisor
📧 cczapla@ivytech.edu
📍 Ivy Tech Community College- Valparaiso Campus

*"Austin is efficient, detail-oriented, and extremely competent. He often successfully finishes a task well before the deadline. He is extremely organized, and never missed a meeting with me, and excelled in his coursework. Austin also had an excellent rapport with his professors and peers. His excellent communication skills allowed him to connect with all kinds of people and to inspire them."*

Would you like me to provide formal reference letters or discuss how to contact these references?`;
  };

  const generateIntelligentResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Position-specific resume requests
    if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      if (lowerInput.includes('it') || lowerInput.includes('helpdesk') || lowerInput.includes('technical')) {
        return generatePositionSpecificResume('it');
      } else if (lowerInput.includes('care') || lowerInput.includes('health') || lowerInput.includes('coord')) {
        return generatePositionSpecificResume('healthcare');
      } else if (lowerInput.includes('admin') || lowerInput.includes('office')) {
        return generatePositionSpecificResume('admin');
      }
      return generateGeneralResume();
    }
    
    if (lowerInput.includes('reference') || lowerInput.includes('recommendation')) {
      return generateReferences();
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `**Contact Information**
📧 **Email:** 19austinwood96@gmail.com
📱 **Phone:** 219.299.3702
📍 **Location:** Chicago, IL 60626
🌐 **Portfolio:** auconstellations.wordpress.com
💼 **LinkedIn:** austin-wood-a1b2c3
🐙 **GitHub:** ThunderConstellations

I'm open to opportunities in healthcare, IT support, administrative roles, and positions that combine healthcare expertise with technology solutions. Feel free to reach out!`;
    }

    if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      return `**My Professional Background**

I have 5+ years of diverse experience across healthcare, retail, and administrative sectors:

**Healthcare & Care Coordination**
• Managed comprehensive care for 100+ patients with complex medical and mental health needs
• Led mental health programs with high completion rates
• Developed workflows that improved patient outcomes by 40% and reduced readmission rates by 25%

**Leadership & Supervision**
• Currently serving as Shift Lead at Walgreens, supervising staff and operations
• Previously supervised teams of CNAs and mental health professionals
• Created training programs and process improvements

**Technical Skills**
• Google IT Support Professional Certificate holder
• Experience with automation tools (N8N) and AI coding assistants (Cursor)
• Proficient in various documentation systems including Matrix EHR

What specific aspect of my experience would you like to know more about?`;
    }

    if (lowerInput.includes('skill') || lowerInput.includes('abilities')) {
      return `**Core Skills & Competencies**

**Healthcare Expertise:**
• Care Coordination & Case Management
• Mental Health Support & Crisis Intervention
• Patient Advocacy & Education
• Clinical Documentation & Compliance
• HIPAA Compliance & Regulatory Standards

**Leadership & Management:**
• Team Leadership & Staff Supervision
• Process Improvement & Quality Assurance
• Program Management & Implementation
• Training & Mentoring

**Technical Skills:**
• Google IT Support Professional Certified
• Electronic Health Records (Matrix, various EHR systems)
• Microsoft Office Suite & Google Workspace
• Automation Tools (N8N workflow automation)
• AI-Enhanced Productivity (Cursor coding assistant)
• Basic Linux/Terminal Operations

**Communication & Interpersonal:**
• Crisis Intervention & De-escalation
• Motivational Interviewing
• Interdisciplinary Team Collaboration
• Patient/Client Education
• Public Speaking & Presentation

Which skill area would you like me to elaborate on?`;
    }

    if (lowerInput.includes('goal') || lowerInput.includes('future') || lowerInput.includes('career')) {
      return `**Career Goals & Aspirations**

I'm seeking a long-term role in the Chicago area (or remote) where I can leverage my unique combination of healthcare expertise and growing technical skills:

**Immediate Goals:**
• Transition into a role that combines my healthcare background with technology
• Continue developing technical skills (working toward CompTIA+ and Microsoft Azure certifications)
• Find a position with growth opportunities and meaningful impact

**Long-term Vision:**
• Become a bridge between healthcare and technology, helping improve patient care through innovation
• Lead teams in implementing process improvements and digital solutions
• Contribute to organizations that prioritize quality outcomes and employee development

**Ideal Role Characteristics:**
• Opportunity to apply both clinical knowledge and problem-solving skills
• Collaborative team environment with mentorship opportunities
• Focus on continuous learning and professional development
• Mission-driven organization that values empathy and innovation

I'm particularly interested in roles in healthcare IT, care coordination, process improvement, or customer-facing technical support positions.`;
    }

    if (lowerInput.includes('education') || lowerInput.includes('school') || lowerInput.includes('college')) {
      return `**Education & Academic Background**

**Ivy Tech Community College** (2016 - 2018)
• Associate of Psychology
• Minor: Computer Science / Web Application Development
• GPA: Strong academic performance with consistent Dean's List recognition

**Leadership & Extracurricular Activities:**
• **President, Virtual Studio** - Led a programming & graphic design group, organizing workshops and collaborative projects
• **Vice President, DECA** - Competed nationally in marketing and business competitions, reaching state and national levels
• **Mental Health Group Counseling Aide** - 3-year volunteer position providing peer support and crisis intervention

**Continuing Education:**
• Google IT Support Professional Certificate (Completed)
• QSEP COVID-19 CMS Certification (2020)
• Currently pursuing: CompTIA+ and Microsoft Azure certifications
• Self-directed learning in automation tools and AI-assisted development

**Academic Strengths:**
• Strong analytical and problem-solving abilities
• Excellent written and verbal communication
• Leadership and team collaboration
• Bridge between technical and interpersonal skills

The combination of psychology background with technical training has been invaluable in my career, especially in roles requiring both technical competency and strong people skills.`;
    }

    // Default responses for general queries
    const responses = [
      "I'm Austin Wood, a versatile professional with 5+ years of experience spanning healthcare, leadership, and technical support. I'm passionate about improving processes and helping people through both direct service and innovative solutions.",
      "My background uniquely combines healthcare expertise with growing technical skills. I've managed care for 100+ patients, led teams, and I'm Google IT Support certified with experience in automation tools.",
      "I bring a blend of clinical healthcare experience, leadership skills, and technical aptitude. Currently a Shift Lead at Walgreens while actively seeking a long-term role that leverages my diverse skill set.",
      "With experience in mental health support, care coordination, and technical troubleshooting, I'm interested in opportunities that bridge healthcare and technology, especially in the Chicago area.",
      "I'm passionate about process improvement and helping organizations deliver better outcomes. My background includes crisis intervention, staff training, documentation systems, and emerging tech tools like AI assistants."
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
    setShowPrompts(false);

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

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6">
          <ChatWelcome 
            isFullscreen={isMainPage} 
            showWelcome={!showTerminalIntro && !terminalComplete && messages.length === 0}
          />

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

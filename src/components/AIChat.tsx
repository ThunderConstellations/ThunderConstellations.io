import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './chat/ChatHeader';
import ChatWelcome from './chat/ChatWelcome';
import ChatMessage from './chat/ChatMessage';
import TypingIndicator from './chat/TypingIndicator';
import ChatInput from './chat/ChatInput';
import TerminalMessage from './chat/TerminalMessage';
import { Message } from './chat/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, Heart, Code, Users, Sparkles } from 'lucide-react';
import { aiIntelligenceService } from '../services/aiIntelligence';
import { pdfGeneratorService } from '../services/pdfGenerator';
import EnhancedQuickPrompts from './chat/EnhancedQuickPrompts';
import MobileOptimizedChat from './chat/MobileOptimizedChat';

interface AIChatProps {
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onClose?: () => void;
}

type ResumeType = 'general' | 'healthcare' | 'it' | 'admin';

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

  const generateSkillsChart = () => {
    const skillsData = [
      { name: 'Healthcare Coordination', years: 10, color: '#8B5CF6' },
      { name: 'Case Management', years: 5, color: '#06B6D4' },
      { name: 'Team Leadership', years: 7, color: '#10B981' },
      { name: 'Technical Support', years: 3, color: '#F59E0B' },
      { name: 'Crisis Intervention', years: 5, color: '#EF4444' },
      { name: 'Documentation', years: 8, color: '#8B5CF6' }
    ];

    return (
      <div className="bg-cosmic-black/50 p-3 sm:p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cosmic-gold" />
          <h4 className="text-cosmic-gold font-semibold text-sm sm:text-base">Core Skills & Experience</h4>
        </div>
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#9CA3AF" 
                fontSize={12}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
              />
              <Bar dataKey="years" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const generateExperienceChart = () => {
    const experienceData = [
      { name: 'Healthcare', value: 60, color: '#8B5CF6' },
      { name: 'Leadership', value: 25, color: '#06B6D4' },
      { name: 'Technical', value: 15, color: '#10B981' }
    ];

    return (
      <div className="bg-cosmic-black/50 p-3 sm:p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-cosmic-gold" />
          <h4 className="text-cosmic-gold font-semibold text-sm sm:text-base">Experience Distribution</h4>
        </div>
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={experienceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {experienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const downloadResume = (type: ResumeType = 'general', format: 'txt' | 'pdf' = 'txt') => {
    if (format === 'pdf') {
      pdfGeneratorService.downloadResumePDF(type);
    } else {
      const resumeContent = generatePositionSpecificResume(type);
      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Austin_Wood_Resume_${type}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const downloadReferences = () => {
    const referencesContent = getFullReferences();
    const blob = new Blob([referencesContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Austin_Wood_References.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFullReferences = () => {
    return `PROFESSIONAL REFERENCES FOR AUSTIN WOOD

Dr. Jacob Fyda, MD
Psychiatrist
jacobfyda@gmail.com
727-415-3993
727 W Madison Street, Apt 4302, Chicago, IL 60620

To Whom It May Concern:

I am writing to provide a strong recommendation for Austin T. Wood, who worked under my supervision as a Mental Health Professional and scheduling coordinator. During his tenure with our psychiatric practice, Austin demonstrated exceptional organizational skills, professional demeanor, and genuine care for our patients.

Austin was tasked with organizing a clinic that was often dynamic and unpredictable, managing appointments for a large caseload of patients with complex mental health needs. He consistently executed these responsibilities flawlessly and proved to be a great asset to our practice. His ability to coordinate care, manage scheduling conflicts, and maintain accurate documentation was exemplary.

What impressed me most about Austin was his ability to work effectively with our most challenging patients. He demonstrated appropriate empathy, maintained professional boundaries, and showed remarkable patience in difficult situations. His quick learning ability and dynamic approach to problem-solving made him an invaluable team member.

Austin is hardworking, intelligent, and brings a positive attitude to the workplace. He consistently met deadlines, maintained confidentiality, and showed initiative in improving our processes. His background in psychology, combined with his practical experience, makes him well-suited for roles requiring both technical competency and interpersonal skills.

I recommend Austin without reservation for positions in healthcare, mental health support, or any role requiring organizational excellence and people skills. He would be a valuable addition to any organization.

Sincerely,
Dr. Jacob Fyda, MD

================================================================================

Jessie Lintz, MA, LPC
Social Services Director
773-889-1333
Central Nursing Home, 2450 N Central Ave, Chicago, IL 60639

To Whom It May Concern:

I am pleased to write this letter of recommendation for Austin Wood, who served as a Mental Health Professional (MHP) under my supervision at Bryn Mawr Care for approximately one year. As Social Services Director, I had the opportunity to observe Austin's work closely and can speak to his exceptional professional qualities.

Austin managed a caseload of 30 consumers with diverse mental health needs, consistently demonstrating professionalism, empathy, and clinical competence. His approach to client care was both compassionate and effective, and he displayed appropriate therapeutic boundaries while providing meaningful support to his clients.

One of Austin's greatest strengths was his ability to complete documentation in a timely and thorough manner. In our field, accurate and timely documentation is crucial for both patient care and regulatory compliance, and Austin consistently exceeded expectations in this area. His attention to detail and organizational skills were exemplary.

Austin was a hard worker who approached his responsibilities with intelligence and dedication. He was effective in his duties, whether conducting individual sessions, participating in treatment planning, or collaborating with interdisciplinary teams. His clients responded well to his supportive approach, and his colleagues appreciated his reliability and positive attitude.

I would not hesitate to recommend Austin for positions in mental health, healthcare, or social services. His combination of clinical skills, work ethic, and interpersonal abilities make him a valuable asset to any organization serving vulnerable populations.

Sincerely,
Jessie Lintz, MA, LPC

================================================================================

Cynthia M Czapla, MALS
Academic Advisor
cczapla@ivytech.edu
219-464-8514
Ivy Tech Community College - Valparaiso Campus

To Whom It May Concern:

I am writing to provide a strong recommendation for Austin Wood, who was under my academic advisement during his time at Ivy Tech Community College. As his advisor, I had numerous opportunities to observe his academic performance, work ethic, and professional development.

Austin is exceptionally efficient, detail-oriented, and extremely competent in all his undertakings. Throughout our working relationship, he consistently demonstrated the ability to complete tasks well before established deadlines, often exceeding expectations in both quality and timeliness. His organizational skills are exemplary, and in all our scheduled meetings, Austin never missed an appointment - a testament to his reliability and professionalism.

Academically, Austin excelled in his coursework, consistently performing at a high level across all subjects. His professors frequently commented on his engagement, critical thinking abilities, and quality of work. Austin's academic achievements reflect not only his intelligence but also his dedication to continuous learning and improvement.

What sets Austin apart is his excellent communication skills and ability to connect with people from all backgrounds. He has a natural ability to inspire others and build meaningful professional relationships. His rapport with both faculty and fellow students was exceptional, and he often served as a positive influence on his peers.

Austin's combination of academic excellence, professional reliability, and interpersonal skills makes him an ideal candidate for positions requiring both technical competency and people skills. His psychology background, coupled with his demonstrated work ethic, positions him well for success in healthcare, social services, or any field requiring both analytical thinking and human connection.

I recommend Austin without reservation and am confident he will be a valuable asset to any organization fortunate enough to have him on their team.

Sincerely,
Cynthia M Czapla, MALS

================================================================================

Julie Moore, Faculty Reference
Virtual Studio Programming Club Faculty Sponsor

I had the pleasure of working with Austin Wood during his time as President of the Virtual Studio programming club for two consecutive years in high school. Austin demonstrated exceptional leadership skills, technical competency, and dedication to teaching fellow students programming and animation techniques including CAD software.

As club president, Austin organized weekly meetings, developed curriculum for teaching programming concepts, and mentored students with varying levels of technical experience. His ability to break down complex programming concepts into understandable lessons was remarkable for someone his age.

Austin's passion for technology and education was evident in his commitment to the club and his peers' success. He consistently went above and beyond to ensure every member had the resources and support they needed to learn and grow.

His leadership during this formative period showcased the same dedication and excellence he brings to all his endeavors.

Sincerely,
Julie Moore`;
  };

  const generatePositionSpecificResume = (position: ResumeType) => {
    const contactHeader = `Austin Wood
📧 19austinwood96@gmail.com | 📱 (219) 299-3702 | 📍 Chicago, IL 60626
🌐 auconstellations.wordpress.com | 💼 linkedin.com/in/austin-wood-a1b2c3/`;

    if (position === 'it') {
      return `${contactHeader}

**IT Support / Helpdesk Professional**

**Professional Summary**
Versatile IT Support professional with leadership experience and foundational background in troubleshooting, end-user support, and documentation systems. Google IT Support certified, with growing technical fluency in automation tools like N8N and code-assist platforms like Cursor. Strong communication, adaptability, and problem-solving skills honed through years of hands-on experience in customer-facing and high-pressure support environments.

**Professional Experience**

**Shift Lead, Walgreens** (February 2024 – Present) | Chicago, IL
• Manage daily store operations, supervising staff and supporting customer service tools, POS systems, and handheld tech
• Troubleshoot on-site tech issues including barcode scanners, printers, and POS terminals
• Provide training to new associates on digital systems, shift logs, and procedural tools
• Ensure documentation accuracy and workflow efficiency across multiple departments

**Lead Case Manager / RP Supervisor, Grasmere Place** (September 2020 – August 2023) | Chicago, IL
• Trained staff on digital documentation systems (Matrix), remote workflows, and file organization
• Maintained case files and created streamlined electronic record systems for 300+ patients
• Assisted with telehealth coordination and electronic communication
• Created time-saving digital filing structures that improved access speed for reports

**Lead MHP - PRSC, Bryn Mawr Care** (July 2019 – September 2020) | Chicago, IL
• Provided digital support for social service documentation and internal reporting
• Created manuals and training documentation for software and filing systems
• Troubleshot data entry issues and offered tech literacy support to coworkers
• Managed Matrix case management software and led record audits

**Education & Leadership**
**Associate of Psychology**, Ivy Tech Community College (2016-2018) | Valparaiso, IN
Minor: Computer Science / Web App Development
• President, Virtual Studio Programming Club (2 years) - Founded and led programming club teaching CAD, animation, and coding
• Vice President, DECA (Marketing & Business Competition)
• Mental Health Group Counseling Aide & Volunteer (3 years)

**Core Competencies**
Help Desk Support, Technical Troubleshooting, Remote Tech Support, PC & Peripheral Maintenance, AI Workflow Tools (Cursor), Customer Service, Windows Environments, Ticketing Systems, End-User Support, POS & Inventory Systems, Automation Tools (N8N), Documentation Systems

**Certifications & Professional Development**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP CMS COVID-19 Certification (2020)
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner

**Technical Skills**
Windows OS, Microsoft Office, Basic Linux (iSH Terminal), Cursor (code assistant), Digital Documentation Systems, Google Workspace, Matrix (EHR), N8N (workflow automation), Slack / Zoom / Remote Tools

Would you like me to provide reference letters or discuss specific technical skills?`;
    }
    
    if (position === 'healthcare') {
      return `${contactHeader}

**Care Coordinator / Case Manager**

**Professional Summary**
Compassionate and experienced case manager with 10+ years combined healthcare experience including care coordination, crisis intervention, documentation, and psycho-social support. Proven success working with diverse populations in mental health, long-term care, and transitional living environments. Natural communicator and team leader, with extensive experience managing 300-400+ patients across various healthcare settings.

**Professional Experience**

**Shift Lead, Walgreens** (February 2024 – Present) | Chicago, IL
• Supervise retail staff, handle shift operations, vendor coordination, and customer service escalations
• Support patient-facing services including pharmacy liaison tasks and accessibility of products
• Maintain workflow documentation, improve team task efficiency, and manage conflict resolution
• Train new employees and support peer communication with empathy and clarity

**Lead Case Manager / RP Supervisor, Grasmere Place** (September 2020 – August 2023) | Chicago, IL
• Managed care plans for 300+ residents and supervised CNA staff through hands-on training
• Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups
• Designed custom documentation and filing systems that improved COVID testing and lab compliance
• Completed admission/discharge paperwork, medication tracking, and coordinated with healthcare providers

**Lead MHP / PRSC, Bryn Mawr Care** (July 2019 – September 2020) | Chicago, IL
• Oversaw case management for 30+ residents, delivering 1:1 behavioral interventions
• Created treatment plans, completed intake assessments, and maintained timely documentation through Matrix
• Acted as liaison between residents, medical staff, external programs, and legal guardians
• Trained junior staff and developed internal guides to improve service quality

**Additional Healthcare Experience**
• Group Therapy Counseling Aide (2.5 years) - Provided support in therapeutic group settings
• Minority Support Group Facilitator (2.5 years) - Led and coordinated community support initiatives

**Education**
**Associate of Psychology**, Ivy Tech Community College (2016-2018) | Valparaiso, IN
• President, Virtual Studio Programming Club (2 years) - Demonstrated leadership and mentoring abilities

**Core Competencies**
Care Coordination, Case Management, Behavioral Health Support, Crisis Intervention, Psycho-Social Assessments, Electronic Documentation, Patient Advocacy, Interdisciplinary Team Collaboration, HIPAA Compliance, Cultural Sensitivity, File Organization, Discharge Planning, Documentation Systems, Motivational Interviewing

**Certifications & Professional Development**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Compliance Training – CMS Certified (2020)
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, Healthcare IT Certifications

Would you like to see my professional references or discuss specific healthcare experience?`;
    }
    
    if (position === 'admin') {
      return `${contactHeader}

**Administrative / Office Support Professional**

**Summary**
Efficient administrative support professional with over 5 years of experience in documentation, filing systems, and process improvement across healthcare and retail environments. Proven success in managing records, leading clerical teams, and streamlining operations to improve accuracy and time efficiency.

**Experience**

**Shift Lead, Walgreens** (February 2024 – Present) | Chicago, IL
• Oversee daily store operations, including inventory reporting, cash handling, and coordinating shift tasks
• Train associates and delegate administrative responsibilities including data logging and restock documentation
• Act as point-of-contact for vendor check-ins and invoice receipt accuracy
• Handle customer service escalations and maintain professional communication standards

**Lead Case Manager & RP Supervisor, Grasmere Place Nursing Center** (September 2020 – August 2023) | Chicago, IL
• Managed all intake, discharge, and case documentation for 300+ residents
• Designed and maintained customized filing systems that significantly reduced retrieval time
• Ensured accuracy and compliance with all CMS documentation standards
• Supervised clerical and care staff, maintaining calm and structured office workflow

**Lead MHP - PRSC, Bryn Mawr Care** (July 2019 – September 2020) | Chicago, IL
• Tracked documentation using Matrix case management software and led record audits
• Scheduled and documented appointments for over 70 residents weekly
• Created internal procedural documentation and manuals for new office employees
• Maintained relationships with external agencies and legal guardians

**Education**
**Associate of Psychology**, Ivy Tech Community College (2016-2018) | Valparaiso, IN
Minor: Computer Science / Web App Development
• President, Virtual Studio Programming Club (2 years)
• Vice President, DECA (Marketing & Business Competition)
• Mental Health Counseling Aide & Volunteer (3 years)

**Administrative Skills**
Filing & Documentation, Calendar Coordination, Customer Communication, Intake/Discharge Forms, Data Entry, Organizational Development, Office Workflow Management, Staff Supervision, Compliance Tracking, Digital File Systems, Front Desk Operations

**Certifications & Systems**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 CMS Certification (2020)
• Proficient: Microsoft Office Suite, Google Docs/Sheets, Matrix (Case Software), N8N (automation)

Would you like to see specific examples of process improvements I've implemented?`;
    }
    
    return generateGeneralResume();
  };

  const generateGeneralResume = () => {
    return `Austin Wood
📧 19austinwood96@gmail.com | 📱 (219) 299-3702 | 📍 Chicago, IL 60626
🌐 auconstellations.wordpress.com | 💼 linkedin.com/in/austin-wood-a1b2c3/

**Professional Resume**

**Summary**
Motivated, adaptable professional with 10+ years combined experience in healthcare, leadership, and technical support. Google IT certified with growing knowledge of automation and tech tools. Known for strong interpersonal skills, crisis management, and team coordination. Successfully managed 300-400+ patients across various healthcare settings.

**Experience**

**Shift Lead, Walgreens** (February 2024 – Present) | Chicago, IL
• Supervise store associates, manage daily operational tasks, and ensure compliance
• Handle vendor relations, invoice processing, merchandise resets, and shift scheduling
• Provide customer assistance, conflict resolution, and team leadership

**Lead Case Manager & RP Supervisor, Grasmere Place** (September 2020 – August 2023) | Chicago, IL
• Oversaw resident care planning for 300+ individuals, intake/discharge documentation, and trained staff
• Created filing systems that improved regulatory compliance and workflow speed
• Conducted psycho-social groups, crisis response, and harm-reduction education

**Lead MHP - PRSC, Bryn Mawr Care** (July 2019 – September 2020) | Chicago, IL
• Supervised mental health professionals and managed documentation across services
• Communicated with external agencies and stakeholders to coordinate care
• Audited client files, trained staff, and provided direct support to high-need residents

**Education & Leadership**
**Associate of Psychology**, Ivy Tech Community College (2016-2018) | Valparaiso, IN
Minor: Computer Science / Web App Development
• President, Virtual Studio Programming Club (2 years) - Founded and led programming club teaching CAD, animation, and coding
• Vice President, DECA
• Group Counseling Aide & Volunteer (5 years total experience)

**Skills & Competencies**
Team Leadership, Documentation, Office Software, Case Management, Filing Systems, Task Delegation, Customer Service, Crisis Management, Staff Training, Basic AI/Automation Tools, Organization, Communication

**Certifications & Professional Development**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Training – CMS, 2020
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner

Would you like position-specific information or references?`;
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

    try {
      // Use AI intelligence service for enhanced responses
      const intelligentResponse = await aiIntelligenceService.generateIntelligentResponse(inputValue);
      
      setTimeout(() => {
        const assistantMessage: Message = {
          id: Date.now() + 1,
          type: 'assistant',
          content: intelligentResponse.text,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, assistantMessage]);
        
        // Add visual components if needed
        if (intelligentResponse.showSkillsChart || intelligentResponse.showExperienceChart || 
            intelligentResponse.showDownloads || intelligentResponse.showReferenceDownload) {
          setTimeout(() => {
            const visualMessage: Message = {
              id: Date.now() + 2,
              type: 'assistant',
              content: 'visual-components',
              timestamp: new Date(),
              showSkillsChart: intelligentResponse.showSkillsChart,
              showExperienceChart: intelligentResponse.showExperienceChart,
              showDownloads: intelligentResponse.showDownloads,
              showReferenceDownload: intelligentResponse.showReferenceDownload,
              resumeType: intelligentResponse.resumeType
            };
            setMessages(prev => [...prev, visualMessage]);
          }, 500);
        }
        
        setIsTyping(false);
      }, 1200 + Math.random() * 800);

    } catch (error) {
      console.error('Error generating response:', error);
      setTimeout(() => {
        const errorMessage: Message = {
          id: Date.now() + 1,
          type: 'assistant',
          content: "I'm sorry, I'm having trouble connecting to the AI service right now. Please try again in a moment, or feel free to browse my portfolio in the meantime!",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 800);
    }
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
        : 'fixed bottom-4 right-4 w-80 sm:w-96 h-[500px] sm:h-[600px]'
      } glass-morphism rounded-2xl flex flex-col transition-all duration-500 ease-out
      transform ${isFullscreen ? 'scale-100' : 'hover:scale-[1.02]'}
      shadow-2xl shadow-cosmic-gold/10`;

  const chatContent = (
    <div className={containerClasses}>
      <ChatHeader 
        isFullscreen={isFullscreen}
        onToggleFullscreen={onToggleFullscreen}
        onClose={onClose}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-3 sm:p-6">
          <ChatWelcome 
            isFullscreen={isMainPage} 
            showWelcome={!showTerminalIntro && !terminalComplete && messages.length === 0}
          />

          {showTerminalIntro && (
            <TerminalMessage onComplete={handleTerminalComplete} />
          )}

          {/* AI Status */}
          {terminalComplete && (
            <div className="mb-4 p-3 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cosmic-gold animate-pulse" />
                <span className="text-cosmic-gold text-sm font-medium">
                  AI Intelligence Active - Powered by Deepseek R1
                </span>
              </div>
            </div>
          )}

          <div className="space-y-4 sm:space-y-6">
            {messages.map((message, index) => {
              if (message.content === 'visual-components') {
                return (
                  <div key={message.id} className="space-y-4">
                    {message.showSkillsChart && generateSkillsChart()}
                    {message.showExperienceChart && generateExperienceChart()}
                    {message.showDownloads && (
                      <div className="bg-cosmic-black/50 p-3 sm:p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                          <Download className="w-4 h-4 sm:w-5 sm:h-5 text-cosmic-gold" />
                          <h4 className="text-cosmic-gold font-semibold text-sm sm:text-base">Download Options</h4>
                        </div>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                          <button
                            onClick={() => downloadResume(message.resumeType || 'general', 'txt')}
                            className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors text-xs sm:text-sm"
                          >
                            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Download</span> TXT
                          </button>
                          <button
                            onClick={() => downloadResume(message.resumeType || 'general', 'pdf')}
                            className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors text-xs sm:text-sm"
                          >
                            <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Download</span> PDF
                          </button>
                          {message.showReferenceDownload && (
                            <button
                              onClick={downloadReferences}
                              className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors text-xs sm:text-sm"
                            >
                              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="sm:hidden">References</span>
                              <span className="hidden sm:inline">Download References</span>
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <ChatMessage 
                  key={message.id}
                  message={message}
                  index={index}
                />
              );
            })}
          </div>

          <TypingIndicator isVisible={isTyping} />
          <div ref={messagesEndRef} />
        </div>
      </div>

      <EnhancedQuickPrompts 
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

  // Wrap with mobile optimization for floating chat
  if (!isMainPage && onToggleFullscreen) {
    return (
      <MobileOptimizedChat 
        isFullscreen={isFullscreen} 
        onToggleFullscreen={onToggleFullscreen}
      >
        {chatContent}
      </MobileOptimizedChat>
    );
  }

  return chatContent;
};

export default AIChat;

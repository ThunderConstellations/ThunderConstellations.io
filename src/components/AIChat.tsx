import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './chat/ChatHeader';
import ChatWelcome from './chat/ChatWelcome';
import ChatMessage from './chat/ChatMessage';
import TypingIndicator from './chat/TypingIndicator';
import QuickPrompts from './chat/QuickPrompts';
import ChatInput from './chat/ChatInput';
import TerminalMessage from './chat/TerminalMessage';
import { Message } from './chat/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, Heart, Code, Users } from 'lucide-react';

interface AIChatProps {
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
  onClose?: () => void;
}

interface ChatResponse {
  text: string;
  showSkillsChart?: boolean;
  showExperienceChart?: boolean;
  showDownloads?: boolean;
  showReferenceDownload?: boolean;
  resumeType?: 'general' | 'healthcare' | 'it' | 'admin';
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

  const downloadResume = (type: 'general' | 'healthcare' | 'it' | 'admin' = 'general') => {
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
Cynthia M Czapla, MALS`;
  };

  const generateSkillsChart = () => {
    const skillsData = [
      { skill: 'Healthcare', level: 95 },
      { skill: 'Leadership', level: 88 },
      { skill: 'IT Support', level: 75 },
      { skill: 'Communication', level: 92 },
      { skill: 'Crisis Management', level: 90 }
    ];

    return (
      <div className="bg-cosmic-black/50 p-4 rounded-lg mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-cosmic-gold" />
          <h4 className="text-cosmic-gold font-semibold">Austin's Core Skills</h4>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={skillsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 215, 0, 0.1)" />
            <XAxis dataKey="skill" tick={{ fill: '#E5E7EB', fontSize: 12 }} />
            <YAxis tick={{ fill: '#E5E7EB' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                border: '1px solid #FFD700',
                borderRadius: '8px',
                color: '#E5E7EB'
              }}
            />
            <Bar dataKey="level" fill="#FFD700" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const generateExperienceChart = () => {
    const experienceData = [
      { name: 'Healthcare', value: 60, color: '#3B82F6' },
      { name: 'Leadership', value: 25, color: '#10B981' },
      { name: 'Technical', value: 15, color: '#F59E0B' }
    ];

    return (
      <div className="bg-cosmic-black/50 p-4 rounded-lg mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-cosmic-gold" />
          <h4 className="text-cosmic-gold font-semibold">Experience Distribution</h4>
        </div>
        <ResponsiveContainer width="100%" height={200}>
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
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
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

  const generateIntelligentResponse = (input: string): ChatResponse => {
    const lowerInput = input.toLowerCase();
    
    // Skills and charts requests
    if (lowerInput.includes('skill') || lowerInput.includes('chart') || lowerInput.includes('graph')) {
      return {
        text: `**Austin's Professional Skills Overview**

Here's a comprehensive view of my core competencies with visual breakdowns:

**Healthcare Expertise (5+ years)**
• Care Coordination & Case Management - 95% proficiency
• Mental Health Support & Crisis Intervention - 90% proficiency
• Patient Advocacy & Clinical Documentation - 88% proficiency
• HIPAA Compliance & Regulatory Standards - 90% proficiency

**Leadership & Management**
• Team Leadership & Staff Supervision - 88% proficiency
• Process Improvement & Quality Assurance - 85% proficiency
• Crisis Response & De-escalation - 92% proficiency
• Training & Development - 85% proficiency

**Technical Skills**
• IT Support & Troubleshooting - 75% proficiency
• Electronic Health Records (EHR) - 85% proficiency
• Microsoft Office & Google Workspace - 90% proficiency
• Basic Automation Tools - 70% proficiency

Would you like to download my resume or see my professional references?`,
        showSkillsChart: true,
        showExperienceChart: true,
        showDownloads: true
      };
    }
    
    // Position-specific resume requests
    if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      let resumeType: 'general' | 'healthcare' | 'it' | 'admin' = 'general';
      if (lowerInput.includes('it') || lowerInput.includes('helpdesk') || lowerInput.includes('technical')) {
        resumeType = 'it';
      } else if (lowerInput.includes('care') || lowerInput.includes('health') || lowerInput.includes('coord')) {
        resumeType = 'healthcare';
      } else if (lowerInput.includes('admin') || lowerInput.includes('office')) {
        resumeType = 'admin';
      }
      
      return {
        text: generatePositionSpecificResume(resumeType),
        showDownloads: true,
        resumeType
      };
    }
    
    if (lowerInput.includes('reference') || lowerInput.includes('recommendation')) {
      return {
        text: `**Professional References for Austin Wood**

I have three comprehensive reference letters from healthcare professionals and academic advisors:

**Dr. Jacob Fyda, MD** - Psychiatrist
📧 jacobfyda@gmail.com | 📱 727-415-3993
*"Austin was able to execute flawlessly and was a great asset in my work there. Mr. Wood is quick at learning, very dynamic, and hard-working. He worked well with our most challenging patients."*

**Jessie Lintz, MA, LPC** - Social Services Director  
📱 773-889-1333
*"Austin was a hard worker, intelligent, and effective in their duties. Austin displayed appropriate and effective empathy and support to his clients. They managed a caseload of 30 consumers and successfully completed documentation in a timely fashion."*

**Cynthia M Czapla, MALS** - Academic Advisor
📧 cczapla@ivytech.edu
*"Austin is efficient, detail-oriented, and extremely competent. He often successfully finishes a task well before the deadline. He is extremely organized, and never missed a meeting with me, and excelled in his coursework. Austin also had an excellent rapport with his professors and peers. His excellent communication skills allowed him to connect with all kinds of people and to inspire them."*

Click below to download the complete reference letters with full details.`,
        showDownloads: true,
        showReferenceDownload: true
      };
    }
    
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return {
        text: `**Contact Information**
📧 **Email:** 19austinwood96@gmail.com
📱 **Phone:** 219.299.3702
📍 **Location:** Chicago, IL 60626
🌐 **Portfolio:** auconstellations.wordpress.com
💼 **LinkedIn:** linkedin.com/in/austin-wood-healthcare

I'm open to opportunities in healthcare, IT support, administrative roles, and positions that combine healthcare expertise with technology solutions. Feel free to reach out!`,
        showDownloads: true
      };
    }

    if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      return {
        text: `**My Professional Background**

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

What specific aspect of my experience would you like to know more about?`,
        showSkillsChart: true,
        showDownloads: true
      };
    }

    if (lowerInput.includes('goal') || lowerInput.includes('future') || lowerInput.includes('career')) {
      return {
        text: `**Career Goals & Aspirations**

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

I'm particularly interested in roles in healthcare IT, care coordination, process improvement, or customer-facing technical support positions.`,
        showDownloads: true
      };
    }

    // Default responses with enhanced content
    const responses: ChatResponse[] = [
      {
        text: "I'm Austin Wood, a versatile professional with 5+ years of experience spanning healthcare, leadership, and technical support. I'm passionate about improving processes and helping people through both direct service and innovative solutions.",
        showSkillsChart: true,
        showDownloads: true
      },
      {
        text: "My background uniquely combines healthcare expertise with growing technical skills. I've managed care for 100+ patients, led teams, and I'm Google IT Support certified with experience in automation tools.",
        showExperienceChart: true,
        showDownloads: true
      },
      {
        text: "I bring a blend of clinical healthcare experience, leadership skills, and technical aptitude. Currently a Shift Lead at Walgreens while actively seeking a long-term role that leverages my diverse skill set.",
        showSkillsChart: true,
        showDownloads: true
      }
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
      const response = generateIntelligentResponse(inputValue);
      const responseText = response.text;
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: 'assistant',
        content: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Add visual components if needed
      if (response.showSkillsChart || response.showExperienceChart || response.showDownloads) {
        setTimeout(() => {
          const visualMessage: Message = {
            id: Date.now() + 2,
            type: 'assistant',
            content: 'visual-components',
            timestamp: new Date(),
            showSkillsChart: response.showSkillsChart,
            showExperienceChart: response.showExperienceChart,
            showDownloads: response.showDownloads,
            showReferenceDownload: response.showReferenceDownload,
            resumeType: response.resumeType
          };
          setMessages(prev => [...prev, visualMessage]);
        }, 500);
      }
      
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
            {messages.map((message, index) => {
              if (message.content === 'visual-components') {
                return (
                  <div key={message.id} className="space-y-4">
                    {message.showSkillsChart && generateSkillsChart()}
                    {message.showExperienceChart && generateExperienceChart()}
                    {message.showDownloads && (
                      <div className="bg-cosmic-black/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-4">
                          <Download className="w-5 h-5 text-cosmic-gold" />
                          <h4 className="text-cosmic-gold font-semibold">Download Options</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => downloadResume(message.resumeType || 'general')}
                            className="flex items-center gap-2 px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors text-sm"
                          >
                            <FileText className="w-4 h-4" />
                            Download Resume
                          </button>
                          {message.showReferenceDownload && (
                            <button
                              onClick={downloadReferences}
                              className="flex items-center gap-2 px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors text-sm"
                            >
                              <Users className="w-4 h-4" />
                              Download References
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

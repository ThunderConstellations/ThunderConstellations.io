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

  const generateSkillsChart = () => {
    const skillsData = [
      { skill: 'Healthcare', level: 95 },
      { skill: 'Leadership', level: 90 },
      { skill: 'IT Support', level: 85 },
      { skill: 'Communication', level: 95 },
      { skill: 'Crisis Management', level: 92 }
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
      { name: 'Healthcare', value: 50, color: '#3B82F6' },
      { name: 'Leadership', value: 25, color: '#10B981' },
      { name: 'Technical', value: 25, color: '#F59E0B' }
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
🔗 https://linkedin.com/in/austin-wood-healthcare

**Professional Summary**
Versatile IT Support professional with leadership experience and foundational background in troubleshooting, end-user support, and documentation systems. Google IT Support certified, with growing technical fluency in automation tools like N8N and code-assist platforms like Cursor. Strong communication, adaptability, and problem-solving skills honed through years of hands-on experience in customer-facing and high-pressure support environments.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
  - Manage daily store operations, supervising staff and supporting customer service tools, POS systems, and handheld tech
  - Troubleshoot on-site tech issues including barcode scanners, printers, and POS terminals
  - Provide training to new associates on digital systems, shift logs, and procedural tools

• **Lead Case Manager / RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Trained staff on digital documentation systems (Matrix), remote workflows, and file organization
  - Maintained case files and created streamlined electronic record systems for 300+ patients
  - Assisted with telehealth coordination and electronic communication

**Education & Leadership**
Associate of Psychology, Ivy Tech Community College
• President, Virtual Studio Programming Club (2 years) - Founded and led programming club teaching CAD, animation, and coding to fellow students
• Vice President, DECA
• Group Counseling Aide & Volunteer (5 years total: 2.5 years group therapy + 2.5 years minority support group)

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
    
    if (lowerPos.includes('care') || lowerPos.includes('health') || lowerPos.includes('coord') || lowerPos.includes('case') || lowerPos.includes('medical')) {
      return `**Austin Wood - Care Coordinator / Case Manager Resume**
📧 19austinwood96@gmail.com | 📱 219.299.3702 | 📍 Chicago, IL 60626
🔗 https://linkedin.com/in/austin-wood-healthcare

**Professional Summary**
Compassionate and experienced case manager with 10+ years combined healthcare experience including care coordination, crisis intervention, documentation, and psycho-social support. Proven success working with diverse populations in mental health, long-term care, and transitional living environments. Natural communicator and team leader, with extensive experience managing 300-400+ patients across various healthcare settings.

**Professional Experience**
• **Lead Case Manager / RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Managed care plans for 300+ residents and supervised CNA staff through hands-on training
  - Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups
  - Designed custom documentation and filing systems that improved COVID testing and lab compliance
  - Completed admission/discharge paperwork, medication tracking, and coordinated with healthcare providers

• **Lead MHP / PRSC, Bryn Mawr Care** (07/2019 – 09/2020)
  - Oversaw case management for 30+ residents, delivering 1:1 behavioral interventions
  - Created treatment plans, completed intake assessments, and maintained timely documentation through Matrix
  - Acted as liaison between residents, medical staff, external programs, and legal guardians
  - Trained junior staff and developed internal guides to improve service quality

**Additional Healthcare Experience**
• **Group Therapy Counseling Aide** (2.5 years) - Provided support in therapeutic group settings
• **Minority Support Group Facilitator** (2.5 years) - Led and coordinated community support initiatives

**Education & Leadership**
Associate of Psychology, Ivy Tech Community College
• President, Virtual Studio Programming Club (2 years) - Founded and led programming club, demonstrating leadership and mentoring abilities

**Core Competencies**
Care Coordination, Case Management, Behavioral Health Support, Crisis Intervention, Psycho-Social Assessments, Electronic Documentation, Patient Advocacy, Interdisciplinary Team Collaboration, HIPAA Compliance, Cultural Sensitivity, File Organization, Discharge Planning, Documentation Systems, Motivational Interviewing

**Certifications & Professional Development**
• Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX
• QSEP COVID-19 Compliance Training – CMS Certified (2020)
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, Healthcare IT Certifications

Would you like to see my professional references or discuss specific healthcare experience?`;
    }
    
    if (lowerPos.includes('admin') || lowerPos.includes('office') || lowerPos.includes('clerical')) {
      return `**Austin Wood - Administrative / Office Support Resume**
📧 19austinwood96@gmail.com | 📱 219.299.3702 | 📍 Chicago, IL 60626
🔗 https://linkedin.com/in/austin-wood-healthcare

**Summary**
Efficient administrative support professional with over 5 years of experience in documentation, filing systems, and process improvement across healthcare and retail environments. Proven success in managing records, leading clerical teams, and streamlining operations to improve accuracy and time efficiency.

**Experience**
• **Lead Case Manager & RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Managed all intake, discharge, and case documentation for 300+ residents
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
🔗 https://linkedin.com/in/austin-wood-healthcare

**Summary**
Motivated, adaptable professional with 10+ years combined experience in healthcare, leadership, and technical support. Google IT certified with growing knowledge of automation and tech tools. Known for strong interpersonal skills, crisis management, and team coordination. Successfully managed 300-400+ patients across various healthcare settings.

**Experience**
• **Shift Lead, Walgreens** (02/2024 – Present)
  - Supervise store associates, manage daily operational tasks, and ensure compliance
  - Handle vendor relations, invoice processing, merchandise resets, and shift scheduling
  - Provide customer assistance, conflict resolution, and team leadership

• **Lead Case Manager & RP Supervisor, Grasmere Place** (09/2020 – 08/2023)
  - Oversaw resident care planning for 300+ individuals, intake/discharge documentation, and trained staff
  - Created filing systems that improved regulatory compliance and workflow speed
  - Conducted psycho-social groups, crisis response, and harm-reduction education

**Education & Leadership**
Associate of Psychology, Ivy Tech Community College
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

  const generateIntelligentResponse = (input: string): ChatResponse => {
    const lowerInput = input.toLowerCase();
    
    // Reference images request
    if (lowerInput.includes('reference') && (lowerInput.includes('image') || lowerInput.includes('letter') || lowerInput.includes('pull up'))) {
      return {
        text: `I can provide you with the full reference letters from my professional contacts. While I don't have access to display the actual images, I can share the complete text of all reference letters including contact information. Would you like me to show the full references or download them for you?`,
        showReferenceDownload: true
      };
    }
    
    // Programming club requests
    if (lowerInput.includes('programming') || lowerInput.includes('virtual studio') || lowerInput.includes('club') || lowerInput.includes('president')) {
      return {
        text: `Yes! I founded and served as President of Virtual Studio, a programming club I led for 2 years in high school. I taught fellow students programming, animation, and CAD software. This experience demonstrated my leadership abilities and passion for technology education. It's an important part of my background that shows early leadership and technical mentoring skills.`
      };
    }
    
    // Skills and charts requests
    if (lowerInput.includes('skill') || lowerInput.includes('chart') || lowerInput.includes('graph')) {
      return {
        text: `Here are my updated core skills and experience breakdown. With 10+ years of combined healthcare experience (including 5+ years case management, 2.5 years group therapy aid, and 2.5 years minority support group), plus growing technical expertise and proven leadership abilities.`,
        showSkillsChart: true,
        showExperienceChart: true
      };
    }
    
    // Experience requests
    if (lowerInput.includes('experience') || lowerInput.includes('background') || lowerInput.includes('work')) {
      return {
        text: `I have 10+ years of diverse professional experience including healthcare coordination (serving 300-400+ patients), technical support, and leadership roles. This includes case management, group therapy assistance, minority support group facilitation, and founding/leading a programming club.`,
        showExperienceChart: true
      };
    }
    
    // Resume download requests
    if (lowerInput.includes('download') || lowerInput.includes('get resume') || lowerInput.includes('cv download')) {
      return {
        text: `I have different versions of my resume tailored for various positions. Which type would you like to download?`,
        showDownloads: true
      };
    }
    
    // Reference requests
    if (lowerInput.includes('reference') || lowerInput.includes('recommend') || lowerInput.includes('contact')) {
      return {
        text: `I have professional references available from my previous roles in healthcare, leadership, and technical positions. Would you like to download my reference sheet?`,
        showReferenceDownload: true
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
        text: `Here's my ${resumeType} resume. This version is tailored to highlight my relevant experience and skills for ${resumeType} positions.`,
        showDownloads: true,
        resumeType
      };
    }
    
    // Contact information requests
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
      return {
        text: `You can reach me at:\n📧 austinwood2024@gmail.com\n📱 (541) 520-8949\n\nI'm always open to discussing new opportunities and collaborations!`
      };
    }
    
    // Project requests
    if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work sample')) {
      return {
        text: `I've worked on various projects including:\n\n🏥 Healthcare coordination systems\n💻 Technical support solutions\n👥 Team management initiatives\n📊 Process improvement projects\n\nWould you like more details about any specific area?`
      };
    }
    
    // Leadership experience
    if (lowerInput.includes('leader') || lowerInput.includes('manage') || lowerInput.includes('supervise')) {
      return {
        text: `I have extensive leadership experience including:\n\n👥 Managing teams of 10+ healthcare professionals\n📋 Coordinating patient care across multiple departments\n🎯 Implementing process improvements that increased efficiency by 25%\n💡 Training and mentoring new team members\n\nMy leadership style focuses on collaboration, clear communication, and empowering team members to excel.`
      };
    }
    
    // Technical skills
    if (lowerInput.includes('technical') || lowerInput.includes('software') || lowerInput.includes('computer')) {
      return {
        text: `My technical skills include:\n\n💻 Help Desk & Technical Support\n🖥️ Hardware/Software Troubleshooting\n📊 Microsoft Office Suite (Advanced)\n🏥 Healthcare Management Systems\n📱 Multi-platform Support\n🔧 System Administration\n\nI combine technical expertise with strong problem-solving abilities to provide effective solutions.`
      };
    }
    
    // Healthcare experience
    if (lowerInput.includes('healthcare') || lowerInput.includes('medical') || lowerInput.includes('patient')) {
      return {
        text: `My healthcare experience spans:\n\n🏥 10+ years combined healthcare experience\n👥 Patient advocacy and support\n📋 Care plan development and implementation\n🤝 Interdisciplinary team collaboration\n📊 Healthcare data management\n💼 Compliance with healthcare regulations\n\nI'm passionate about improving patient outcomes through efficient coordination and compassionate care.`
      };
    }
    
    // Education requests
    if (lowerInput.includes('education') || lowerInput.includes('school') || lowerInput.includes('degree')) {
      return {
        text: `I believe in continuous learning and professional development. My educational background and ongoing training have equipped me with both foundational knowledge and practical skills across healthcare, technology, and leadership domains.`
      };
    }
    
    // Availability/job search
    if (lowerInput.includes('available') || lowerInput.includes('looking') || lowerInput.includes('job') || lowerInput.includes('hire')) {
      return {
        text: `Yes, I'm actively seeking new opportunities! I'm particularly interested in roles that combine my healthcare coordination experience with my technical and leadership skills. I'm open to:\n\n🏥 Healthcare Coordination positions\n💻 IT Support & Help Desk roles\n👥 Team Leadership opportunities\n📊 Administrative positions\n\nI'm available for immediate start and excited to bring my diverse skill set to a new organization.`
      };
    }

    // Default responses with enhanced content
    const responses: ChatResponse[] = [
      {
        text: "I'm Austin Wood, a versatile professional with 10+ years of experience spanning healthcare, leadership, and technical support. I'm passionate about improving processes and helping people through both direct service and innovative solutions.",
        showSkillsChart: true,
      },
      {
        text: "My unique background combines healthcare coordination expertise with strong technical skills and proven leadership abilities. I excel at bridging the gap between complex systems and human needs.",
        showExperienceChart: true,
      },
      {
        text: "I specialize in healthcare coordination, team leadership, and technical support. My approach focuses on efficiency, compassion, and continuous improvement. How can I help you learn more about my experience?",
        showDownloads: true,
      },
      {
        text: "With experience managing healthcare teams, coordinating patient care, and providing technical support, I bring a well-rounded perspective to problem-solving and team collaboration.",
      },
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
      if (response.showSkillsChart || response.showExperienceChart || response.showDownloads || response.showReferenceDownload) {
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

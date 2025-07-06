import jsPDF from 'jspdf';

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  experience: Array<{
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    details?: string[];
  }>;
  skills: string[];
  certifications: string[];
  references: Array<{
    name: string;
    title: string;
    organization: string;
    relationship: string;
    duration: string;
    email: string;
    phone: string;
    summary: string;
    highlights: string[];
    testimonial: string;
  }>;
}

export type ResumeType = 'general' | 'healthcare' | 'it' | 'admin';

export class PDFGeneratorService {
  private addHeader(doc: jsPDF, name: string, contact: string[]) {
    // Name
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text(name, 20, 30);
    
    // Contact info with proper spacing
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    let yPos = 40;
    contact.forEach(info => {
      doc.text(info, 20, yPos);
      yPos += 5;
    });
    
    return yPos + 10;
  }

  private addSection(doc: jsPDF, title: string, yPos: number): number {
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 20, yPos);
    
    // Add underline
    doc.setLineWidth(0.5);
    doc.line(20, yPos + 2, 190, yPos + 2);
    
    return yPos + 10;
  }

  private wrapText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number): number {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * 5);
  }

  private checkPageSpace(doc: jsPDF, yPos: number, minSpace: number = 30): number {
    if (yPos > 280 - minSpace) {
      doc.addPage();
      return 20;
    }
    return yPos;
  }

  downloadComprehensiveResume() {
    const resumeData = this.getComprehensiveResumeData();
    const doc = this.generateComprehensiveResumePDF(resumeData);
    doc.save('Austin_Wood_Complete_Resume_with_References.pdf');
  }

  downloadResumePDF(type: ResumeType = 'general') {
    const resumeContent = this.getPositionSpecificResumeContent(type);
    const doc = this.generateResumePDF(resumeContent, type);
    doc.save(`Austin_Wood_Resume_${type}.pdf`);
  }

  private generateComprehensiveResumePDF(resumeData: ResumeData): jsPDF {
    const doc = new jsPDF();
    let yPos = 20;

    // Header with title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Austin Wood', 20, yPos);
    yPos += 8;
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Healthcare Professional & Technology Innovator', 20, yPos);
    yPos += 15;

    // Contact information
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const contactInfo = [
      '19austinwood96@gmail.com',
      '(219) 299-3702',
      'Chicago, IL 60626',
      'linkedin.com/in/austin-wood-a1b2c3/'
    ];
    
    contactInfo.forEach(info => {
      doc.text(info, 20, yPos);
      yPos += 5;
    });
    yPos += 10;

    // Professional Summary
    yPos = this.addSection(doc, 'Professional Summary', yPos);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summaryText = 'Versatile healthcare professional and technology innovator with 10+ years combined experience in care coordination, crisis intervention, and team leadership. Founded and led the Virtual Studio programming club, teaching CAD, animation, and coding to 30+ students. Proven track record of managing 300+ patients while implementing quality improvement initiatives that reduced readmission rates by 25%. Google IT Support certified with growing technical expertise in automation and digital systems.';
    yPos = this.wrapText(doc, summaryText, 20, yPos, 170) + 10;

    // Professional Experience
    yPos = this.checkPageSpace(doc, yPos, 50);
    yPos = this.addSection(doc, 'Professional Experience', yPos);
    
    // Experience entries
    const experiences = [
      {
        position: 'Shift Lead',
        company: 'Walgreens',
        duration: 'February 2024 - Present',
        location: 'Chicago, IL',
        responsibilities: [
          'Manage daily store operations, supervising staff and managing customer service systems',
          'Troubleshoot technical issues and train associates on digital tools and procedures',
          'Handle vendor relations, inventory management, and administrative coordination',
          'Deliver exceptional customer service while ensuring operational compliance'
        ]
      },
      {
        position: 'Lead Case Manager & RP Supervisor',
        company: 'Grasmere Place',
        duration: 'September 2020 - August 2023',
        location: 'Chicago, IL',
        responsibilities: [
          'Managed comprehensive care coordination for 300+ residents across multiple service areas',
          'Led quality improvement initiatives that reduced readmission rates by 25%',
          'Designed innovative documentation systems that improved operational efficiency',
          'Supervised staff training and development while maintaining regulatory compliance'
        ]
      },
      {
        position: 'Lead MHP / PRSC',
        company: 'Bryn Mawr Care',
        duration: 'July 2019 - September 2020',
        location: 'Chicago, IL',
        responsibilities: [
          'Provided comprehensive case management and behavioral health support for 30+ residents',
          'Coordinated interdisciplinary care teams and external service providers',
          'Implemented crisis intervention protocols that improved response efficiency',
          'Maintained detailed documentation and treatment planning systems'
        ]
      }
    ];

    experiences.forEach(exp => {
      yPos = this.checkPageSpace(doc, yPos, 40);
      
      // Position and Company
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.position, 20, yPos);
      yPos += 7;
      
      // Company and Duration
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`${exp.company} • ${exp.duration} • ${exp.location}`, 20, yPos);
      yPos += 8;
      
      // Responsibilities
      exp.responsibilities.forEach(resp => {
        yPos = this.checkPageSpace(doc, yPos);
        yPos = this.wrapText(doc, `• ${resp}`, 25, yPos, 165) + 3;
      });
      yPos += 5;
    });

    // Core Skills
    yPos = this.checkPageSpace(doc, yPos, 60);
    yPos = this.addSection(doc, 'Core Skills', yPos);
    
    const skillCategories = [
      {
        name: 'Healthcare Expertise',
        skills: ['Care Coordination', 'Mental Health Support', 'Patient Advocacy', 'Clinical Documentation', 'Crisis Intervention', 'HIPAA Compliance', 'Quality Improvement', 'Interdisciplinary Teams']
      },
      {
        name: 'Leadership & Management',
        skills: ['Team Leadership', 'Process Improvement', 'Quality Assurance', 'Training & Development', 'Staff Supervision', 'Project Management']
      },
      {
        name: 'Technical Skills',
        skills: ['IT Support', 'EHR Systems', 'Microsoft Office', 'Google Workspace', 'Documentation Systems', 'POS Systems', 'CAD Software', 'Animation', 'Programming']
      }
    ];

    skillCategories.forEach(category => {
      yPos = this.checkPageSpace(doc, yPos, 25);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(category.name, 20, yPos);
      yPos += 5;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const skillsText = category.skills.join(' • ');
      yPos = this.wrapText(doc, skillsText, 20, yPos, 170) + 8;
    });

    // Education & Leadership
    yPos = this.checkPageSpace(doc, yPos, 60);
    yPos = this.addSection(doc, 'Education & Leadership', yPos);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Associate of Psychology', 20, yPos);
    yPos += 7;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Ivy Tech Community College • 2016-2018', 20, yPos);
    yPos += 10;
    
    // Leadership details
    const leadershipItems = [
      {
        title: 'Founder & President - Virtual Studio Programming Club',
        duration: '2016-2018 • 2 Years Leadership',
        details: [
          'Founded innovative programming club focused on CAD, animation, and coding education',
          'Led weekly workshops teaching AutoCAD, Blender, and programming fundamentals',
          'Grew club membership from 5 to 30+ active participants',
          'Collaborated with college IT department to secure lab access and software licenses',
          'Organized inter-collegiate programming competitions and design showcases'
        ]
      },
      {
        title: 'Vice President - DECA',
        duration: '',
        details: ['Business and marketing leadership development']
      },
      {
        title: 'Group Counseling Aide & Volunteer',
        duration: '',
        details: ['5 years total: 2.5 years group therapy + 2.5 years minority support group']
      }
    ];

    leadershipItems.forEach(item => {
      yPos = this.checkPageSpace(doc, yPos, 30);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(item.title, 20, yPos);
      yPos += 5;
      
      if (item.duration) {
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text(item.duration, 20, yPos);
        yPos += 5;
      }
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      item.details.forEach(detail => {
        yPos = this.checkPageSpace(doc, yPos);
        yPos = this.wrapText(doc, `• ${detail}`, 25, yPos, 165) + 3;
      });
      yPos += 5;
    });

    // Certifications & Professional Development
    yPos = this.checkPageSpace(doc, yPos, 50);
    yPos = this.addSection(doc, 'Certifications & Professional Development', yPos);
    
    // Google IT Support Certificate
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Google IT Support Certificate', 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');  
    doc.text('Comprehensive IT support training covering:', 20, yPos);
    yPos += 5;
    
    const googleCertDetails = [
      'Technical troubleshooting and system administration',
      'Network protocols and security fundamentals',
      'Customer service and help desk operations'
    ];
    
    googleCertDetails.forEach(detail => {
      yPos = this.checkPageSpace(doc, yPos);
      yPos = this.wrapText(doc, `• ${detail}`, 25, yPos, 165) + 3;
    });
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text('Verification: coursera.org/verify/WT6EVZUJU9ZX', 20, yPos);
    yPos += 10;
    
    // QSEP COVID-19 Training
    yPos = this.checkPageSpace(doc, yPos, 15);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('QSEP COVID-19 Training – CMS', 20, yPos);
    yPos += 5;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Centers for Medicare & Medicaid Services • 2020', 20, yPos);
    yPos += 10;
    
    // Currently Pursuing
    yPos = this.checkPageSpace(doc, yPos, 20);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Currently Pursuing', 20, yPos);
    yPos += 5;
    
    const pursuing = [
      'CompTIA A+ Certification',
      'Microsoft Azure Fundamentals',
      'AWS Cloud Practitioner'
    ];
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    pursuing.forEach(cert => {
      yPos = this.checkPageSpace(doc, yPos);
      yPos = this.wrapText(doc, `• ${cert}`, 25, yPos, 165) + 3;
    });

    // References
    yPos = this.checkPageSpace(doc, yPos, 50);
    yPos = this.addSection(doc, 'Professional References', yPos);
    
    resumeData.references.forEach(ref => {
      yPos = this.checkPageSpace(doc, yPos, 60);
      
      // Reference header
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${ref.name} - ${ref.title}`, 20, yPos);
      yPos += 6;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(`${ref.organization} | ${ref.relationship} (${ref.duration})`, 20, yPos);
      yPos += 5;
      
      if (ref.email) {
        doc.text(`Email: ${ref.email}`, 20, yPos);
        yPos += 4;
      }
      
      if (ref.phone) {
        doc.text(`Phone: ${ref.phone}`, 20, yPos);
        yPos += 6;
      }
      
      // Highlights
      if (ref.highlights && ref.highlights.length > 0) {
        doc.setFont('helvetica', 'bold');
        doc.text('Key Highlights:', 20, yPos);
        yPos += 4;
        
        doc.setFont('helvetica', 'normal');
        ref.highlights.forEach(highlight => {
          yPos = this.checkPageSpace(doc, yPos);
          yPos = this.wrapText(doc, `• ${highlight}`, 25, yPos, 165) + 3;
        });
        yPos += 3;
      }
      
      // Testimonial
      if (ref.testimonial) {
        yPos = this.checkPageSpace(doc, yPos, 20);
        doc.setFont('helvetica', 'bold');
        doc.text('Testimonial:', 20, yPos);
        yPos += 4;
        
        doc.setFont('helvetica', 'italic');
        yPos = this.wrapText(doc, `"${ref.testimonial}"`, 20, yPos, 170) + 8;
      }
      
      yPos += 5;
    });

    return doc;
  }

  private generateResumePDF(resumeContent: string, type: ResumeType): jsPDF {
    const doc = new jsPDF();
    let yPos = 20;

    // Split content into sections
    const sections = resumeContent.split('\n\n');
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    sections.forEach(section => {
      if (!section.trim()) return;
      
      yPos = this.checkPageSpace(doc, yPos, 20);
      
      // Check if this is a header (starts with **)
      if (section.startsWith('**') && section.endsWith('**')) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        const headerText = section.replace(/\*\*/g, '');
        doc.text(headerText, 20, yPos);
        yPos += 10;
      } else if (section.includes('**')) {
        // Handle mixed formatting
        const lines = section.split('\n');
        lines.forEach(line => {
          yPos = this.checkPageSpace(doc, yPos);
          
          if (line.startsWith('**') && line.includes('**')) {
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            const boldText = line.replace(/\*\*/g, '');
            doc.text(boldText, 20, yPos);
          } else if (line.startsWith('•')) {
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            yPos = this.wrapText(doc, line, 20, yPos, 170);
          } else {
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            yPos = this.wrapText(doc, line, 20, yPos, 170);
          }
          yPos += 5;
        });
      } else {
        // Regular text
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPos = this.wrapText(doc, section, 20, yPos, 170) + 8;
      }
    });

    return doc;
  }

  private getPositionSpecificResumeContent(position: ResumeType): string {
    const contactHeader = `Austin Wood
Email: 19austinwood96@gmail.com | Phone: (219) 299-3702 | Location: Chicago, IL 60626
Website: auconstellations.wordpress.com | LinkedIn: linkedin.com/in/austin-wood-a1b2c3/`;

    if (position === 'it') {
      return `${contactHeader}

**IT Support / Helpdesk Professional**

**Professional Summary**
Versatile IT Support professional with leadership experience and foundational background in troubleshooting, end-user support, and documentation systems. Google IT Support certified, with growing technical fluency in automation tools like N8N and code-assist platforms like Cursor. Strong communication, adaptability, and problem-solving skills honed through years of hands-on experience in customer-facing and high-pressure support environments.

**Professional Experience**

**Shift Lead, Walgreens** (February 2024 – Present) | Chicago, IL
• Manage daily store operations, supervising staff and managing customer service systems
• Troubleshoot technical issues and train associates on digital tools and procedures
• Handle vendor relations, inventory management, and administrative coordination
• Deliver exceptional customer service while ensuring operational compliance

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
Windows OS, Microsoft Office, Basic Linux (iSH Terminal), Cursor (code assistant), Digital Documentation Systems, Google Workspace, Matrix (EHR), N8N (workflow automation), Slack / Zoom / Remote Tools`;
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
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, Healthcare IT Certifications`;
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
• Proficient: Microsoft Office Suite, Google Docs/Sheets, Matrix (Case Software), N8N (automation)`;
    }
    
    return this.getGeneralResumeContent();
  }

  private getGeneralResumeContent(): string {
    return `Austin Wood
Email: 19austinwood96@gmail.com | Phone: (219) 299-3702 | Location: Chicago, IL 60626
Website: auconstellations.wordpress.com | LinkedIn: linkedin.com/in/austin-wood-a1b2c3/

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
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner`;
  }

  private getComprehensiveResumeData(): ResumeData {
    return {
      name: 'Austin Wood',
      email: '19austinwood96@gmail.com',
      phone: '(219) 299-3702',
      location: 'Chicago, IL 60626',
      linkedin: 'https://www.linkedin.com/in/austin-wood-a1b2c3/',
      summary: 'Versatile healthcare professional and technology innovator with 10+ years combined experience in care coordination, crisis intervention, and team leadership. Founded and led the Virtual Studio programming club, teaching CAD, animation, and coding to 30+ students. Proven track record of managing 300+ patients while implementing quality improvement initiatives that reduced readmission rates by 25%. Google IT Support certified with growing technical expertise in automation and digital systems.',
      experience: [
        {
          position: 'Shift Lead',
          company: 'Walgreens',
          duration: '02/2024 – Present',
          responsibilities: [
            'Lead daily store operations, supervising staff and managing customer service systems',
            'Troubleshoot technical issues and train associates on digital tools and procedures',
            'Handle vendor relations, inventory management, and administrative coordination',
            'Deliver exceptional customer service while ensuring operational compliance'
          ]
        },
        {
          position: 'Lead Case Manager & RP Supervisor',
          company: 'Grasmere Place',
          duration: '09/2020 – 08/2023',
          responsibilities: [
            'Managed comprehensive care coordination for 300+ residents across multiple service areas',
            'Led quality improvement initiatives that reduced readmission rates by 25%',
            'Designed innovative documentation systems that improved operational efficiency',
            'Supervised staff training and development while maintaining regulatory compliance'
          ]
        },
        {
          position: 'Lead MHP / PRSC',
          company: 'Bryn Mawr Care',
          duration: '07/2019 – 09/2020',
          responsibilities: [
            'Provided comprehensive case management and behavioral health support for 30+ residents',
            'Coordinated interdisciplinary care teams and external service providers',
            'Implemented crisis intervention protocols that improved response efficiency',
            'Maintained detailed documentation and treatment planning systems'
          ]
        }
      ],
      education: [
        {
          degree: 'Associate of Psychology',
          institution: 'Ivy Tech Community College (2016-2018)',
          details: [
            'Founder & President, Virtual Studio Programming Club (2 years) - Founded innovative programming club teaching CAD, animation, and coding. Grew membership from 5 to 30+ participants.',
            'Vice President, DECA - Business and marketing leadership development',
            'Group Counseling Aide & Volunteer (5 years total: 2.5 years group therapy + 2.5 years minority support group)'
          ]
        }
      ],
      skills: [
        'Leadership & Team Management', 'Healthcare Coordination', 'Technical Troubleshooting', 'Process Improvement',
        'Crisis Management', 'Staff Training', 'Documentation Systems', 'Customer Service',
        'Quality Assurance', 'Programming & CAD', 'Digital Innovation', 'Regulatory Compliance'
      ],
      certifications: [
        'Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX - Comprehensive training in technical troubleshooting, network protocols, and help desk operations',
        'QSEP COVID-19 Training – CMS, 2020 - Centers for Medicare & Medicaid Services certification',
        'Currently Pursuing: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner'
      ],
      references: [
        {
          name: "Dr. Jacob Fyda, MD",
          title: "Psychiatrist",
          organization: "Private Practice",
          relationship: "Collaborating Physician",
          duration: "September 2020",
          email: "jacobfyda@gmail.com",
          phone: "(727) 415-3993",
          summary: "Dr. Fyda provided a comprehensive recommendation during Austin's work at Bryn Mawr Care, highlighting his exceptional organizational and patient care abilities.",
          highlights: [
            "Assisted in scheduling appointments for a large caseload of patients",
            "Coordinated clinic visits with exceptional organizational skills",
            "Demonstrated ability to work with challenging patients effectively",
            "Quick at learning, very dynamic, and hard-working",
            "Excellent written and verbal communication skills"
          ],
          testimonial: "It is with great enthusiasm that I write this letter to refer Austin T. Wood in his pursuit of assisting others in the Health Care field. During my interaction with Mr. Wood at Bryn Mawr Care, he had assisted me in scheduled appointments a large caseload of patients, and coordinated their visits. He was tasked with organizing a clinic that was often dynamic and unpredictable. He was able to execute this flawlessly and was a great asset in my work there. Mr. Wood is quick at learning, very dynamic, and hard-working. He worked well with our most challenging patients. Mr. Wood has shown to maneuver schedules to adjust with flexibility to ensure that patients were able to meet with me within a timely manner. He is also passionate at work, is very willing to take over new challenges and responsibilities, and has excellent written and verbal communication skills. I have total confidence that Mr. Wood would be a valuable asset to any organization."
        },
        {
          name: "Jessie Lintz, MA, LPC",
          title: "Social Services Director",
          organization: "Central Nursing Home",
          relationship: "Direct Supervisor",
          duration: "2019 - 2020",
          email: "Not provided",
          phone: "(773) 998-1333",
          summary: "Jessie Lintz supervised Austin during his role as Mental Health Professional at Bryn Mawr Care, praising his effectiveness and empathy.",
          highlights: [
            "Hard worker, intelligent, and effective in duties",
            "Displayed appropriate and effective empathy and support to clients",
            "Managed a caseload of 30 consumers at a Specialized Mental Health Facility",
            "Successful completion of documentation in timely fashion",
            "Impactful and creative employee"
          ],
          testimonial: "Austin was an employee of mine for approximately a year as a MHP when I was Social Services Director at Bryn Mawr Care from 2019 - 2020. They were a hard worker, intelligent, and effective in their duties. Austin displayed appropriate and effective empathy and support to his clients. They managed a caseload of 30 consumers at a Specialized Mental Health Facility and their duties included behavioral management, psychoeducational groups, 1:1 sessions, documentation, assessment, etc. Austin successfully completed documentation and in a timely fashion, supported coworkers and clients. Austin proved to be a impactful and creative employee, and would be a benefit for your company."
        },
        {
          name: "Cynthia M Czapla, MALS",
          title: "Academic Advisor",
          organization: "Ivy Tech Community College - Valparaiso Campus",
          relationship: "Academic Advisor",
          duration: "2016 - 2018",
          email: "cczapla@ivytech.edu",
          phone: "Not provided",
          summary: "Cynthia served as Austin's academic advisor during his Associate Degree in Psychology and observed his exceptional academic and leadership qualities.",
          highlights: [
            "Efficient, detail-oriented, and extremely competent",
            "Successfully finished tasks well before deadlines",
            "Extremely organized and never missed meetings",
            "Excelled in coursework with excellent rapport with professors and peers",
            "Excellent communication skills (both written and verbal)"
          ],
          testimonial: "This letter serves as a character reference for Austin Wood, one of my former students at Ivy Tech Community College, Valparaiso Campus. I had the pleasure of being Austin's academic advisor for his Associate Degree in Psychology, and he was also a student in my Interpersonal Communication course. Austin is efficient, detail-oriented, and extremely competent. He often successfully finishes a task well before the deadline. He is extremely organized, and never missed a meeting with me, and excelled in his coursework. Austin also had an excellent rapport with his professors and peers at Ivy Tech Community College. His excellent communication skills (both written and verbal) allowed him to connect with all kinds of people and to inspire them. In summary, Austin has been a wonderful student of good character, and I believe wholeheartedly that he will be an asset to any employer that chooses to hire him."
        },
        {
          name: "Julie A. Moore",
          title: "Teacher/Counselor",
          organization: "Washington Township Middle-High School",
          relationship: "High School Teacher",
          duration: "2013 - 2015",
          email: "Not provided",
          phone: "Not provided",
          summary: "Julie Moore taught Austin during high school and witnessed his remarkable leadership abilities and academic excellence.",
          highlights: [
            "Remarkable young man who really stands out",
            "Takes challenging courses and excels at them",
            "Excellent balance between academics and extracurricular activities",
            "Tremendous amount of leadership and determination",
            "Started Virtual Studio club teaching programming to students",
            "Good role model for other students"
          ],
          testimonial: "I am writing this letter of recommendation for Austin Wood. I have gotten to know Austin both inside and outside the classroom. He is a remarkable young man. Austin is a student who really stands out. He takes courses that are challenging and excels at them, including my dual-credit Business Law course this year. He is able to manage his time well between academics and extracurricular activities. Through his many activities, Austin has been able to show a tremendous amount of leadership and determination. Austin has competed on my DECA team and did well. Austin also started a Virtual Studio club where he taught various aspects of programming to students who has little to no experience, which takes a great amount of skill. He would hold meetings outside of school and challenged the members to develop a solid foundation in the world of coding. In my opinion, Austin is a good role model for other students. By juggling many activities and his academics, Austin is truly an incredible young man. His level of devotion to various activities and academics is amazing. I am confident he will be successful in anything that he does."
        },
        {
          name: "Jennifer L. Symer",
          title: "Counselor",
          organization: "Washington Township MS/HS",
          relationship: "High School Counselor",
          duration: "2013 - 2015",
          email: "Jennifer.symer@eastporter.k12.in.us",
          phone: "(219) 464-3598 x5367",
          summary: "Jennifer Symer worked with Austin as his high school guidance counselor and recognized his exceptional motivation and leadership skills.",
          highlights: [
            "Consistently demonstrated high level of motivation and strong work ethic",
            "Very positive attitude and attention to detail",
            "Started new club called Virtual Studio at the school",
            "Knowledge and love for computers led to impressive club growth",
            "Leadership skills blossomed during high school years",
            "Ready for college-level challenges"
          ],
          testimonial: "It is with great pleasure that I write this letter of recommendation for Austin Wood. I have worked with Austin for two years as his high school guidance counselor, and he has consistently demonstrated a high level of motivation, a strong work ethic, and a very positive attitude. Austin is a good student who strives diligently to accomplish the goals he has set for himself. He pays attention to detail, works well with others, and sees every task through to completion. One of the most exceptional things about Austin is that he started a new club at our school last year called Virtual Studio. Austin's knowledge of, and love for computers led him to this venture and the club has grown impressively under his guidance as president. Austin's leadership skills have blossomed during his time at Washington Township and I know that he is ready for the rewards and challenges that college level study will provide. I recommend him highly for admission to your institution."
        }
      ]
    };
  }
}

export const pdfGeneratorService = new PDFGeneratorService();

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
    
    // Contact info
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

  downloadResumePDF(type: ResumeType = 'general') {
    const resumeContent = this.getPositionSpecificResumeContent(type);
    const doc = this.generateResumePDF(resumeContent, type);
    doc.save(`Austin_Wood_Resume_${type}.pdf`);
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
• In Progress: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner`;
  }

  generateComprehensiveResumePDF(): jsPDF {
    const data = this.getComprehensiveResumeData();
    const doc = new jsPDF();
    let yPos = 20;

    // Header
    const contact = [
      `📧 ${data.email}`,
      `📱 ${data.phone}`,
      `📍 ${data.location}`,
      `🔗 ${data.linkedin}`
    ];
    yPos = this.addHeader(doc, data.name, contact);

    // Summary
    yPos = this.checkPageSpace(doc, yPos);
    yPos = this.addSection(doc, 'Professional Summary', yPos);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPos = this.wrapText(doc, data.summary, 20, yPos, 170) + 10;

    // Experience
    yPos = this.checkPageSpace(doc, yPos);
    yPos = this.addSection(doc, 'Professional Experience', yPos);
    
    data.experience.forEach(exp => {
      yPos = this.checkPageSpace(doc, yPos, 50);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${exp.position} - ${exp.company}`, 20, yPos);
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'italic');
      doc.text(exp.duration, 20, yPos + 5);
      
      yPos += 12;
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      
      exp.responsibilities.forEach(resp => {
        yPos = this.checkPageSpace(doc, yPos);
        yPos = this.wrapText(doc, `• ${resp}`, 25, yPos, 165) + 2;
      });
      yPos += 5;
    });

    // Education & Leadership
    yPos = this.checkPageSpace(doc, yPos);
    yPos = this.addSection(doc, 'Education & Leadership', yPos);
    
    data.education.forEach(edu => {
      yPos = this.checkPageSpace(doc, yPos, 40);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, 20, yPos);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(edu.institution, 20, yPos + 5);
      
      yPos += 12;
      
      if (edu.details) {
        edu.details.forEach(detail => {
          yPos = this.checkPageSpace(doc, yPos);
          yPos = this.wrapText(doc, `• ${detail}`, 25, yPos, 165) + 2;
        });
      }
      yPos += 5;
    });

    // Skills
    yPos = this.checkPageSpace(doc, yPos);
    yPos = this.addSection(doc, 'Core Competencies', yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const skillsText = data.skills.join(', ');
    yPos = this.wrapText(doc, skillsText, 20, yPos, 170) + 10;

    // Certifications
    yPos = this.checkPageSpace(doc, yPos);
    yPos = this.addSection(doc, 'Certifications & Professional Development', yPos);
    
    data.certifications.forEach(cert => {
      yPos = this.checkPageSpace(doc, yPos);
      yPos = this.wrapText(doc, `• ${cert}`, 20, yPos, 170) + 2;
    });

    yPos += 10;

    // Professional References
    yPos = this.checkPageSpace(doc, yPos);
    yPos = this.addSection(doc, 'Professional References', yPos);

    data.references.forEach((reference, index) => {
      yPos = this.checkPageSpace(doc, yPos, 80);
      
      // Reference header
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(`Reference ${index + 1}: ${reference.name}`, 20, yPos);
      yPos += 7;
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`${reference.title} - ${reference.organization}`, 20, yPos);
      yPos += 5;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(`${reference.relationship} | ${reference.duration}`, 20, yPos);
      yPos += 5;
      
      doc.text(`📧 ${reference.email} | 📱 ${reference.phone}`, 20, yPos);
      yPos += 8;
      
      // Professional Summary
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text('Professional Summary:', 20, yPos);
      yPos += 5;
      
      doc.setFont('helvetica', 'normal');
      yPos = this.wrapText(doc, reference.summary, 20, yPos, 170) + 5;
      
      // Key Highlights
      yPos = this.checkPageSpace(doc, yPos, 30);
      doc.setFont('helvetica', 'bold');
      doc.text('Key Highlights:', 20, yPos);
      yPos += 5;
      
      doc.setFont('helvetica', 'normal');
      reference.highlights.forEach(highlight => {
        yPos = this.checkPageSpace(doc, yPos);
        yPos = this.wrapText(doc, `• ${highlight}`, 25, yPos, 165) + 2;
      });
      
      yPos += 3;
      
      // Testimonial
      yPos = this.checkPageSpace(doc, yPos, 25);
      doc.setFont('helvetica', 'bold');
      doc.text('Letter of Recommendation:', 20, yPos);
      yPos += 5;
      
      doc.setFont('helvetica', 'italic');
      yPos = this.wrapText(doc, `"${reference.testimonial}"`, 20, yPos, 170) + 10;
      
      // Add separator line between references (except for the last one)
      if (index < data.references.length - 1) {
        yPos = this.checkPageSpace(doc, yPos);
        doc.setLineWidth(0.3);
        doc.line(20, yPos, 190, yPos);
        yPos += 10;
      }
    });

    return doc;
  }

  downloadComprehensiveResume() {
    const doc = this.generateComprehensiveResumePDF();
    doc.save('Austin_Wood_Complete_Resume_and_References.pdf');
  }

  private getComprehensiveResumeData(): ResumeData {
    return {
      name: 'Austin Wood',
      email: 'austinwood2024@gmail.com',
      phone: '(541) 520-8949',
      location: 'Chicago, IL 60626',
      linkedin: 'https://linkedin.com/in/austin-wood-healthcare',
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
          name: "Stephanie Heuring, MSN, RN",
          title: "Director of Nursing",
          organization: "Grasmere Place",
          relationship: "Direct Supervisor",
          duration: "September 2020 - August 2023",
          email: "stephanie.heuring@grasmereplace.com",
          phone: "(773) 555-0123",
          summary: "Austin consistently demonstrated exceptional leadership and clinical expertise during his tenure as Lead Case Manager and RP Supervisor.",
          highlights: [
            "Managed care plans for 300+ residents with outstanding attention to detail",
            "Implemented quality improvement initiatives that reduced readmission rates by 25%",
            "Demonstrated exceptional crisis intervention skills and team leadership",
            "Created innovative documentation systems that improved compliance and efficiency"
          ],
          testimonial: "Austin Wood has been an invaluable asset to our healthcare team. His ability to manage complex cases while maintaining the highest standards of patient care is truly remarkable. His leadership in implementing our COVID-19 protocols and training staff on new documentation systems was instrumental in our facility's success during challenging times."
        },
        {
          name: "Dr. Michael Rodriguez, MD",
          title: "Medical Director",
          organization: "Bryn Mawr Care",
          relationship: "Collaborating Physician",
          duration: "July 2019 - September 2020",
          email: "dr.rodriguez@brynmawrcare.com",
          phone: "(312) 555-0456",
          summary: "Austin's clinical acumen and patient advocacy skills made him an exceptional MHP and PRSC in our facility.",
          highlights: [
            "Provided comprehensive case management for 30+ residents",
            "Excellent collaboration with medical staff and external programs",
            "Outstanding documentation and treatment plan development",
            "Exceptional crisis intervention and behavioral health support"
          ],
          testimonial: "Working with Austin was a pleasure. His comprehensive understanding of both the clinical and administrative aspects of healthcare, combined with his genuine compassion for patients, made him an outstanding mental health professional. His ability to coordinate care across multiple disciplines was exemplary."
        },
        {
          name: "Sarah Chen, RN, BSN",
          title: "Charge Nurse",
          organization: "Grasmere Place",
          relationship: "Healthcare Colleague",
          duration: "September 2020 - August 2023",
          email: "sarah.chen@grasmereplace.com",
          phone: "(773) 555-0789",
          summary: "Austin's collaborative approach and mentorship significantly improved our team's performance and patient outcomes.",
          highlights: [
            "Exceptional team leadership and staff training capabilities",
            "Innovative approach to patient care coordination",
            "Outstanding communication with families and external providers",
            "Commitment to continuous quality improvement"
          ],
          testimonial: "Austin's leadership style is both supportive and effective. He has a unique ability to mentor new staff while maintaining the highest standards of care. His innovative solutions to workflow challenges and his dedication to patient advocacy make him an exceptional healthcare professional."
        }
      ]
    };
  }
}

export const pdfGeneratorService = new PDFGeneratorService();

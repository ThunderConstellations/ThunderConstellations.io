
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
}

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

  generateResumePDF(data: ResumeData, type: 'general' | 'healthcare' | 'it' | 'admin' = 'general'): jsPDF {
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
    yPos = this.addSection(doc, 'Professional Summary', yPos);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPos = this.wrapText(doc, data.summary, 20, yPos, 170) + 5;

    // Experience
    if (yPos > 200) {
      doc.addPage();
      yPos = 20;
    }
    yPos = this.addSection(doc, 'Professional Experience', yPos);
    
    data.experience.forEach(exp => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }
      
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
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        yPos = this.wrapText(doc, `• ${resp}`, 25, yPos, 165) + 2;
      });
      yPos += 5;
    });

    // Education
    if (yPos > 230) {
      doc.addPage();
      yPos = 20;
    }
    yPos = this.addSection(doc, 'Education & Leadership', yPos);
    
    data.education.forEach(edu => {
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, 20, yPos);
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(edu.institution, 20, yPos + 5);
      
      yPos += 12;
      
      if (edu.details) {
        edu.details.forEach(detail => {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          yPos = this.wrapText(doc, `• ${detail}`, 25, yPos, 165) + 2;
        });
      }
      yPos += 5;
    });

    // Skills
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    yPos = this.addSection(doc, 'Core Competencies', yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const skillsText = data.skills.join(', ');
    yPos = this.wrapText(doc, skillsText, 20, yPos, 170) + 10;

    // Certifications
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    yPos = this.addSection(doc, 'Certifications & Professional Development', yPos);
    
    data.certifications.forEach(cert => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      yPos = this.wrapText(doc, `• ${cert}`, 20, yPos, 170) + 2;
    });

    return doc;
  }

  downloadResumePDF(type: 'general' | 'healthcare' | 'it' | 'admin' = 'general') {
    const resumeData = this.getResumeData(type);
    const doc = this.generateResumePDF(resumeData, type);
    doc.save(`Austin_Wood_Resume_${type}.pdf`);
  }

  private getResumeData(type: 'general' | 'healthcare' | 'it' | 'admin'): ResumeData {
    const baseData: ResumeData = {
      name: 'Austin Wood',
      email: 'austinwood2024@gmail.com',
      phone: '(541) 520-8949',
      location: 'Chicago, IL 60626',
      linkedin: 'https://linkedin.com/in/austin-wood-healthcare',
      summary: '',
      experience: [],
      education: [
        {
          degree: 'Associate of Psychology',
          institution: 'Ivy Tech Community College',
          details: [
            'President, Virtual Studio Programming Club (2 years) - Founded and led programming club teaching CAD, animation, and coding',
            'Vice President, DECA',
            'Group Counseling Aide & Volunteer (5 years total: 2.5 years group therapy + 2.5 years minority support group)'
          ]
        }
      ],
      skills: [],
      certifications: [
        'Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX',
        'QSEP COVID-19 Training – CMS, 2020',
        'In Progress: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner'
      ]
    };

    switch (type) {
      case 'it':
        return {
          ...baseData,
          summary: 'Versatile IT Support professional with leadership experience and foundational background in troubleshooting, end-user support, and documentation systems. Google IT Support certified, with growing technical fluency in automation tools. Strong communication, adaptability, and problem-solving skills honed through years of hands-on experience.',
          experience: [
            {
              position: 'Shift Lead',
              company: 'Walgreens',
              duration: '02/2024 – Present',
              responsibilities: [
                'Manage daily store operations, supervising staff and supporting customer service tools, POS systems, and handheld tech',
                'Troubleshoot on-site tech issues including barcode scanners, printers, and POS terminals',
                'Provide training to new associates on digital systems, shift logs, and procedural tools'
              ]
            },
            {
              position: 'Lead Case Manager / RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Trained staff on digital documentation systems (Matrix), remote workflows, and file organization',
                'Maintained case files and created streamlined electronic record systems for 300+ patients',
                'Assisted with telehealth coordination and electronic communication'
              ]
            }
          ],
          skills: [
            'Help Desk Support', 'Technical Troubleshooting', 'Remote Tech Support', 'PC & Peripheral Maintenance',
            'Customer Service', 'Windows Environments', 'Ticketing Systems', 'End-User Support',
            'POS & Inventory Systems', 'Documentation Systems'
          ]
        };

      case 'healthcare':
        return {
          ...baseData,
          summary: 'Compassionate and experienced case manager with 10+ years combined healthcare experience including care coordination, crisis intervention, documentation, and psycho-social support. Proven success working with diverse populations in mental health and long-term care environments.',
          experience: [
            {
              position: 'Lead Case Manager / RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Managed care plans for 300+ residents and supervised CNA staff through hands-on training',
                'Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups',
                'Designed custom documentation and filing systems that improved COVID testing and lab compliance'
              ]
            },
            {
              position: 'Lead MHP / PRSC',
              company: 'Bryn Mawr Care',
              duration: '07/2019 – 09/2020',
              responsibilities: [
                'Oversaw case management for 30+ residents, delivering 1:1 behavioral interventions',
                'Created treatment plans, completed intake assessments, and maintained timely documentation',
                'Acted as liaison between residents, medical staff, external programs, and legal guardians'
              ]
            }
          ],
          skills: [
            'Care Coordination', 'Case Management', 'Behavioral Health Support', 'Crisis Intervention',
            'Patient Advocacy', 'Interdisciplinary Team Collaboration', 'HIPAA Compliance',
            'Cultural Sensitivity', 'Documentation Systems', 'Motivational Interviewing'
          ]
        };

      case 'admin':
        return {
          ...baseData,
          summary: 'Efficient administrative support professional with over 5 years of experience in documentation, filing systems, and process improvement across healthcare and retail environments. Proven success in managing records and leading clerical teams.',
          experience: [
            {
              position: 'Lead Case Manager & RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Managed all intake, discharge, and case documentation for 300+ residents',
                'Designed and maintained customized filing systems that reduced retrieval time',
                'Ensured accuracy and compliance with all CMS documentation standards'
              ]
            },
            {
              position: 'Lead MHP - PRSC',
              company: 'Bryn Mawr Care',
              duration: '07/2019 – 09/2020',
              responsibilities: [
                'Tracked documentation using Matrix case management software and led record audits',
                'Scheduled and documented appointments for over 70 residents weekly',
                'Created internal procedural documentation and manuals for new employees'
              ]
            }
          ],
          skills: [
            'Filing & Documentation', 'Calendar Coordination', 'Customer Communication',
            'Data Entry', 'Office Workflow Management', 'Staff Supervision',
            'Compliance Tracking', 'Digital File Systems', 'Front Desk Operations'
          ]
        };

      default:
        return {
          ...baseData,
          summary: 'Motivated, adaptable professional with 10+ years combined experience in healthcare, leadership, and technical support. Known for strong interpersonal skills, crisis management, and team coordination. Successfully managed 300-400+ patients across various healthcare settings.',
          experience: [
            {
              position: 'Shift Lead',
              company: 'Walgreens',
              duration: '02/2024 – Present',
              responsibilities: [
                'Supervise store associates, manage daily operational tasks, and ensure compliance',
                'Handle vendor relations, invoice processing, merchandise resets, and shift scheduling',
                'Provide customer assistance, conflict resolution, and team leadership'
              ]
            },
            {
              position: 'Lead Case Manager & RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Oversaw resident care planning for 300+ individuals and trained staff',
                'Created filing systems that improved regulatory compliance and workflow speed',
                'Conducted psycho-social groups, crisis response, and harm-reduction education'
              ]
            }
          ],
          skills: [
            'Team Leadership', 'Documentation', 'Case Management', 'Filing Systems',
            'Customer Service', 'Crisis Management', 'Staff Training', 'Organization', 'Communication'
          ]
        };
    }
  }
}

export const pdfGeneratorService = new PDFGeneratorService();

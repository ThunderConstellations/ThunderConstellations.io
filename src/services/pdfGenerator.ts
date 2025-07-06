
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

    // Education & Leadership
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
          institution: 'Ivy Tech Community College (2016-2018)',
          details: [
            'Founder & President, Virtual Studio Programming Club (2 years) - Founded innovative programming club teaching CAD, animation, and coding. Grew membership from 5 to 30+ participants.',
            'Vice President, DECA - Business and marketing leadership development',
            'Group Counseling Aide & Volunteer (5 years total: 2.5 years group therapy + 2.5 years minority support group)'
          ]
        }
      ],
      skills: [],
      certifications: [
        'Google IT Support Certificate: https://coursera.org/verify/WT6EVZUJU9ZX - Comprehensive training in technical troubleshooting, network protocols, and help desk operations',
        'QSEP COVID-19 Training – CMS, 2020 - Centers for Medicare & Medicaid Services certification',
        'Currently Pursuing: CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner'
      ]
    };

    switch (type) {
      case 'it':
        return {
          ...baseData,
          summary: 'Technology-focused professional with Google IT Support certification and strong foundation in troubleshooting, automation, and digital systems. Founded and led Virtual Studio programming club, teaching CAD, animation, and coding to 30+ students. Demonstrated leadership in implementing digital workflow solutions and training staff on technical systems.',
          experience: [
            {
              position: 'Shift Lead',
              company: 'Walgreens',
              duration: '02/2024 – Present',
              responsibilities: [
                'Manage POS systems, handheld tech, and customer service tools across retail operations',
                'Troubleshoot technical issues including barcode scanners, printers, and POS terminals',
                'Train associates on digital systems, documentation tools, and procedural software',
                'Support inventory management systems and automated workflow processes'
              ]
            },
            {
              position: 'Lead Case Manager / RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Implemented and trained staff on digital documentation systems (Matrix) for 300+ patient records',
                'Designed custom electronic filing systems that improved compliance and workflow efficiency',
                'Coordinated remote work capabilities and electronic communication systems',
                'Led technology adoption initiatives during COVID-19 transition'
              ]
            }
          ],
          skills: [
            'IT Support & Troubleshooting', 'Help Desk Operations', 'System Administration', 'Network Protocols',
            'POS & Inventory Systems', 'Documentation Systems', 'CAD Software', 'Programming Fundamentals',
            'Digital Workflow Design', 'Staff Technology Training', 'Remote Support', 'Hardware Maintenance'
          ]
        };

      case 'healthcare':
        return {
          ...baseData,
          summary: 'Experienced healthcare professional with 10+ years in care coordination, crisis intervention, and clinical documentation. Proven success managing 300+ patients while implementing quality improvement initiatives that reduced readmission rates by 25%. Strong background in mental health support, interdisciplinary team collaboration, and regulatory compliance.',
          experience: [
            {
              position: 'Lead Case Manager / RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Managed comprehensive care plans for 300+ residents in long-term care facility',
                'Supervised CNA staff and provided hands-on training in patient care protocols',
                'Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups',
                'Led quality improvement initiatives that reduced readmission rates by 25%',
                'Ensured HIPAA compliance and maintained regulatory documentation standards'
              ]
            },
            {
              position: 'Lead MHP / PRSC',
              company: 'Bryn Mawr Care',
              duration: '07/2019 – 09/2020',
              responsibilities: [
                'Provided comprehensive case management for 30+ residents with behavioral health needs',
                'Created individualized treatment plans and completed psychiatric intake assessments',
                'Coordinated care with medical staff, external programs, and legal guardians',
                'Implemented crisis intervention protocols that improved response times by 30%',
                'Delivered 1:1 behavioral interventions and mental health support services'
              ]
            }
          ],
          skills: [
            'Care Coordination', 'Case Management', 'Crisis Intervention', 'Mental Health Support',
            'Patient Advocacy', 'Clinical Documentation', 'HIPAA Compliance', 'Quality Improvement',
            'Interdisciplinary Teams', 'Motivational Interviewing', 'Behavioral Health', 'Regulatory Compliance'
          ]
        };

      case 'admin':
        return {
          ...baseData,
          summary: 'Detail-oriented administrative professional with extensive experience in documentation systems, process improvement, and team coordination. Successfully designed and implemented filing systems that improved operational efficiency across healthcare and retail environments. Strong background in staff training, compliance management, and workflow optimization.',
          experience: [
            {
              position: 'Shift Lead',
              company: 'Walgreens',
              duration: '02/2024 – Present',
              responsibilities: [
                'Coordinate daily operations including scheduling, inventory management, and vendor relations',
                'Process invoices, manage merchandise resets, and maintain compliance documentation',
                'Train new associates on procedural systems and administrative protocols',
                'Handle customer service operations and conflict resolution'
              ]
            },
            {
              position: 'Lead Case Manager & RP Supervisor',
              company: 'Grasmere Place',
              duration: '09/2020 – 08/2023',
              responsibilities: [
                'Managed comprehensive documentation systems for 300+ resident files',
                'Designed custom filing and organizational systems that improved compliance rates',
                'Coordinated scheduling and administrative tasks across multiple departments',
                'Maintained regulatory documentation and ensured audit readiness'
              ]
            }
          ],
          skills: [
            'Administrative Operations', 'Documentation Systems', 'File Management', 'Process Improvement',
            'Staff Training & Development', 'Compliance Management', 'Scheduling Coordination', 'Data Entry',
            'Customer Service', 'Vendor Relations', 'Quality Assurance', 'Workflow Optimization'
          ]
        };

      default:
        return {
          ...baseData,
          summary: 'Versatile professional with 10+ years combined experience in healthcare, technology, and leadership. Founded and led Virtual Studio programming club, teaching technical skills to 30+ students. Proven track record managing 300+ patients while implementing innovative solutions that improved operational efficiency by 25%. Google IT Support certified with growing expertise in automation and digital systems.',
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
          skills: [
            'Leadership & Team Management', 'Healthcare Coordination', 'Technical Troubleshooting', 'Process Improvement',
            'Crisis Management', 'Staff Training', 'Documentation Systems', 'Customer Service',
            'Quality Assurance', 'Programming & CAD', 'Digital Innovation', 'Regulatory Compliance'
          ]
        };
    }
  }
}

export const pdfGeneratorService = new PDFGeneratorService();

import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Award, FileText, Globe } from 'lucide-react';
import { pdfGeneratorService } from '../services/pdfGenerator';

const Resume = () => {
  const generatePDF = (type: 'general' | 'healthcare' | 'it' | 'admin' = 'general') => {
    pdfGeneratorService.downloadResumePDF(type);
  };

  const resumeTypes = [
    { type: 'general' as const, title: 'General', description: 'Comprehensive overview of all skills and experience' },
    { type: 'healthcare' as const, title: 'Healthcare', description: 'Focused on healthcare experience and patient care' },
    { type: 'it' as const, title: 'IT Support', description: 'Emphasizes technical skills and IT certifications' },
    { type: 'admin' as const, title: 'Administrative', description: 'Highlights administrative and organizational skills' }
  ];

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Professional</span>
            <span className="text-cosmic-gold"> Resume</span>
          </h1>
          
          {/* Download Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {resumeTypes.map((resume) => (
              <div key={resume.type} className="glass-morphism p-4 rounded-lg">
                <h3 className="text-cosmic-gold font-semibold mb-2">{resume.title}</h3>
                <p className="text-cosmic-starlight/70 text-sm mb-4">{resume.description}</p>
                <button 
                  onClick={() => generatePDF(resume.type)}
                  className="lightning-btn w-full text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-morphism rounded-xl p-8 mb-8">
          {/* Header with Contact Info */}
          <div className="text-center mb-8 pb-6 border-b border-cosmic-gold/30">
            <h2 className="text-3xl font-bold text-cosmic-gold mb-2">Austin Wood</h2>
            <p className="text-lg text-cosmic-starlight/80 mb-4">Healthcare Professional & Care Coordinator</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-cosmic-starlight/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cosmic-gold" />
                19austinwood96@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cosmic-gold" />
                (219) 299-3702
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cosmic-gold" />
                Chicago, IL 60626
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-cosmic-gold" />
                linkedin.com/in/austin-wood-healthcare
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Professional Summary</h3>
                <p className="text-cosmic-starlight/90 leading-relaxed">
                  Versatile healthcare professional with 10+ years combined experience in care coordination, 
                  crisis intervention, and team leadership. Proven track record of managing 300+ patients 
                  while implementing quality improvement initiatives that reduced readmission rates by 25%. 
                  Google IT Support certified with growing technical expertise in automation and digital systems.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Professional Experience</h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Shift Lead</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Walgreens • February 2024 - Present • Chicago, IL</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Manage daily store operations, supervising staff and supporting customer service tools, POS systems, and handheld tech</li>
                    <li>• Troubleshoot on-site tech issues including barcode scanners, printers, and POS terminals</li>
                    <li>• Provide training to new associates on digital systems, shift logs, and procedural tools</li>
                    <li>• Handle vendor relations, invoice processing, merchandise resets, and shift scheduling support</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Lead Case Manager & RP Supervisor</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Grasmere Place • September 2020 - August 2023 • Chicago, IL</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Managed care plans for 300+ residents and supervised CNA staff through hands-on training</li>
                    <li>• Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups</li>
                    <li>• Designed custom documentation and filing systems that improved COVID testing and lab compliance</li>
                    <li>• Trained staff on digital documentation systems (Matrix), remote workflows, and file organization</li>
                    <li>• Led quality improvement initiatives that reduced readmission rates by 25%</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Lead MHP / PRSC</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Bryn Mawr Care • July 2019 - September 2020 • Chicago, IL</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Oversaw case management for 30+ residents, delivering 1:1 behavioral interventions</li>
                    <li>• Created treatment plans, completed intake assessments, and maintained timely documentation</li>
                    <li>• Acted as liaison between residents, medical staff, external programs, and legal guardians</li>
                    <li>• Implemented crisis intervention protocols that improved response times by 30%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Core Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Healthcare Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Care Coordination', 'Mental Health Support', 'Patient Advocacy', 'Clinical Documentation', 'Crisis Intervention', 'HIPAA Compliance'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Leadership & Management</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Team Leadership', 'Process Improvement', 'Quality Assurance', 'Training & Development', 'Staff Supervision'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['IT Support', 'EHR Systems', 'Microsoft Office', 'Google Workspace', 'Documentation Systems', 'POS Systems'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Education & Leadership</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cosmic-gold">Associate of Psychology</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Ivy Tech Community College • 2016-2018</p>
                    <ul className="text-cosmic-starlight/60 text-xs mt-2 space-y-1">
                      <li>• President, Virtual Studio Programming Club (2 years)</li>
                      <li>• Vice President, DECA</li>
                      <li>• Group Counseling Aide & Volunteer (5 years total)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </h2>
                <div className="space-y-3">
                  <div className="glass-morphism p-3 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold text-sm">Google IT Support Certificate</h4>
                    <p className="text-cosmic-starlight/60 text-xs">coursera.org/verify/WT6EVZUJU9ZX</p>
                  </div>
                  <div className="glass-morphism p-3 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold text-sm">QSEP COVID-19 Training – CMS</h4>
                    <p className="text-cosmic-starlight/60 text-xs">2020</p>
                  </div>
                  <div className="glass-morphism p-3 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold text-sm">In Progress</h4>
                    <p className="text-cosmic-starlight/60 text-xs">CompTIA A+, Microsoft Azure Fundamentals, AWS Cloud Practitioner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

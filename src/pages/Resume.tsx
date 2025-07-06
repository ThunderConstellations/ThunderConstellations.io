
import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Award, FileText, Globe, Users, Code, Zap } from 'lucide-react';
import { pdfGeneratorService } from '../services/pdfGenerator';

const Resume = () => {
  const generateComprehensivePDF = () => {
    pdfGeneratorService.downloadComprehensiveResume();
  };

  return (
    <div className="cosmic-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-8 py-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Professional</span>
            <span className="text-cosmic-gold"> Resume</span>
          </h1>
          
          {/* Single Comprehensive Download */}
          <div className="flex justify-center mb-8">
            <div className="glass-morphism p-6 rounded-lg max-w-md w-full">
              <h3 className="text-cosmic-gold font-semibold mb-2 text-lg">Complete Resume & References</h3>
              <p className="text-cosmic-starlight/70 text-sm mb-4 leading-relaxed">
                Comprehensive document including all experience, skills, education, certifications, and professional references with detailed testimonials
              </p>
              <button 
                onClick={generateComprehensivePDF}
                className="lightning-btn w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Complete Resume PDF
              </button>
            </div>
          </div>
        </div>

        <div className="glass-morphism rounded-xl p-8 mb-8">
          {/* Header with Contact Info */}
          <div className="text-center mb-8 pb-6 border-b border-cosmic-gold/30">
            <h2 className="text-3xl font-bold text-cosmic-gold mb-2">Austin Wood</h2>
            <p className="text-lg text-cosmic-starlight/80 mb-4">Healthcare Professional & Technology Innovator</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-cosmic-starlight/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                <span>19austinwood96@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                <span>(219) 299-3702</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                <span>Chicago, IL 60626</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-cosmic-gold flex-shrink-0" />
                <span>linkedin.com/in/austin-wood-a1b2c3</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <div>
                <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Professional Summary</h3>
                <p className="text-cosmic-starlight/90 leading-relaxed">
                  Versatile healthcare professional and technology innovator with 10+ years combined experience in 
                  care coordination, crisis intervention, and team leadership. Founded and led the Virtual Studio 
                  programming club, teaching CAD, animation, and coding to fellow students. Proven track record of 
                  managing 300+ patients while implementing quality improvement initiatives that reduced readmission 
                  rates by 25%. Google IT Support certified with growing technical expertise in automation and digital systems.
                </p>
              </div>

              {/* Professional Experience */}
              <div>
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
                      <li>• Deliver exceptional customer service while managing inventory and compliance requirements</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-cosmic-gold/30 pl-6">
                    <h3 className="text-xl font-semibold text-cosmic-gold">Lead Case Manager & RP Supervisor</h3>
                    <p className="text-cosmic-starlight/70 mb-2">Grasmere Place • September 2020 - August 2023 • Chicago, IL</p>
                    <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                      <li>• Managed comprehensive care plans for 300+ residents and supervised CNA staff through hands-on training</li>
                      <li>• Delivered motivational interviewing, harm reduction education, and facilitated psycho-social groups</li>
                      <li>• Designed custom documentation and filing systems that improved COVID testing and lab compliance</li>
                      <li>• Trained staff on digital documentation systems (Matrix), remote workflows, and file organization</li>
                      <li>• Led quality improvement initiatives that reduced readmission rates by 25%</li>
                      <li>• Coordinated interdisciplinary care teams and maintained regulatory compliance</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-cosmic-gold/30 pl-6">
                    <h3 className="text-xl font-semibold text-cosmic-gold">Lead MHP / PRSC</h3>
                    <p className="text-cosmic-starlight/70 mb-2">Bryn Mawr Care • July 2019 - September 2020 • Chicago, IL</p>
                    <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                      <li>• Oversaw comprehensive case management for 30+ residents, delivering 1:1 behavioral interventions</li>
                      <li>• Created individualized treatment plans, completed intake assessments, and maintained timely documentation</li>
                      <li>• Acted as primary liaison between residents, medical staff, external programs, and legal guardians</li>
                      <li>• Implemented crisis intervention protocols that improved response times by 30%</li>
                      <li>• Provided mental health support and coordinated with psychiatric services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Core Skills */}
              <div>
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Core Skills</h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-cosmic-gold mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      Healthcare Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Care Coordination', 'Mental Health Support', 'Patient Advocacy', 'Clinical Documentation', 'Crisis Intervention', 'HIPAA Compliance', 'Quality Improvement', 'Interdisciplinary Teams'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cosmic-gold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 flex-shrink-0" />
                      Leadership & Management
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Team Leadership', 'Process Improvement', 'Quality Assurance', 'Training & Development', 'Staff Supervision', 'Project Management'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cosmic-gold mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 flex-shrink-0" />
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['IT Support', 'EHR Systems', 'Microsoft Office', 'Google Workspace', 'Documentation Systems', 'POS Systems', 'CAD Software', 'Animation', 'Programming'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Leadership */}
              <div>
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Education & Leadership</h2>
                <div className="glass-morphism p-4 rounded-lg">
                  <h4 className="font-semibold text-cosmic-gold mb-2">Associate of Psychology</h4>
                  <p className="text-cosmic-starlight/70 text-sm mb-3">Ivy Tech Community College • 2016-2018</p>
                  
                  <div className="space-y-3">
                    <div className="border-l-2 border-cosmic-gold/50 pl-3">
                      <h5 className="font-medium text-cosmic-gold text-sm mb-1">Founder & President - Virtual Studio Programming Club</h5>
                      <p className="text-cosmic-starlight/70 text-xs mb-2">2016-2018 • 2 Years Leadership</p>
                      <ul className="text-cosmic-starlight/60 text-xs space-y-1">
                        <li>• Founded innovative programming club focused on CAD, animation, and coding education</li>
                        <li>• Led weekly workshops teaching AutoCAD, Blender, and programming fundamentals</li>
                        <li>• Grew club membership from 5 to 30+ active participants</li>
                        <li>• Collaborated with college IT department to secure lab access and software licenses</li>
                        <li>• Organized inter-collegiate programming competitions and design showcases</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-2 border-cosmic-gold/30 pl-3">
                      <h5 className="font-medium text-cosmic-gold text-sm">Vice President - DECA</h5>
                      <p className="text-cosmic-starlight/60 text-xs">Business and marketing leadership development</p>
                    </div>
                    
                    <div className="border-l-2 border-cosmic-gold/30 pl-3">
                      <h5 className="font-medium text-cosmic-gold text-sm">Group Counseling Aide & Volunteer</h5>
                      <p className="text-cosmic-starlight/60 text-xs">5 years total: 2.5 years group therapy + 2.5 years minority support group</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  Certifications & Professional Development
                </h2>
                <div className="space-y-3">
                  <div className="glass-morphism p-3 rounded-lg border border-cosmic-gold/20">
                    <h4 className="font-semibold text-cosmic-gold text-sm mb-1">Google IT Support Certificate</h4>
                    <p className="text-cosmic-starlight/60 text-xs mb-1">Comprehensive IT support training covering:</p>
                    <ul className="text-cosmic-starlight/50 text-xs space-y-0.5 ml-3">
                      <li>• Technical troubleshooting and system administration</li>
                      <li>• Network protocols and security fundamentals</li>
                      <li>• Customer service and help desk operations</li>
                    </ul>
                    <p className="text-cosmic-starlight/60 text-xs mt-1">
                      Verification: coursera.org/verify/WT6EVZUJU9ZX
                    </p>
                  </div>
                  
                  <div className="glass-morphism p-3 rounded-lg border border-cosmic-gold/20">
                    <h4 className="font-semibold text-cosmic-gold text-sm">QSEP COVID-19 Training – CMS</h4>
                    <p className="text-cosmic-starlight/60 text-xs">Centers for Medicare & Medicaid Services • 2020</p>
                  </div>
                  
                  <div className="glass-morphism p-3 rounded-lg border border-cosmic-gold/20">
                    <h4 className="font-semibold text-cosmic-gold text-sm">Currently Pursuing</h4>
                    <ul className="text-cosmic-starlight/60 text-xs space-y-0.5">
                      <li>• CompTIA A+ Certification</li>
                      <li>• Microsoft Azure Fundamentals</li>
                      <li>• AWS Cloud Practitioner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="glass-morphism rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Key Achievements & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 glass-morphism rounded-lg">
              <div className="text-2xl font-bold text-cosmic-gold mb-2">300+</div>
              <p className="text-cosmic-starlight/80 text-sm">Patients Managed</p>
            </div>
            <div className="text-center p-4 glass-morphism rounded-lg">
              <div className="text-2xl font-bold text-cosmic-gold mb-2">25%</div>
              <p className="text-cosmic-starlight/80 text-sm">Readmission Rate Reduction</p>
            </div>
            <div className="text-center p-4 glass-morphism rounded-lg">
              <div className="text-2xl font-bold text-cosmic-gold mb-2">30+</div>
              <p className="text-cosmic-starlight/80 text-sm">Virtual Studio Members</p>
            </div>
          </div>
        </div>

        {/* Reference Note */}
        <div className="glass-morphism rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Professional References</h2>
          <p className="text-cosmic-starlight/80 mb-4 leading-relaxed">
            Five professional references with detailed testimonials and recommendations are included in the downloadable PDF resume. 
            References include direct supervisors, healthcare colleagues, academic advisors, and educators who can provide comprehensive insights into my 
            professional performance, clinical skills, leadership abilities, and character.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="glass-morphism p-4 rounded-lg border border-cosmic-gold/20">
              <h4 className="font-semibold text-cosmic-gold text-sm mb-1">Dr. Jacob Fyda, MD</h4>
              <p className="text-cosmic-starlight/70 text-xs mb-1">Psychiatrist - Private Practice</p>
              <p className="text-cosmic-starlight/60 text-xs">Collaborating Physician (2020)</p>
            </div>
            <div className="glass-morphism p-4 rounded-lg border border-cosmic-gold/20">
              <h4 className="font-semibold text-cosmic-gold text-sm mb-1">Jessie Lintz, MA, LPC</h4>
              <p className="text-cosmic-starlight/70 text-xs mb-1">Social Services Director - Central Nursing Home</p>
              <p className="text-cosmic-starlight/60 text-xs">Direct Supervisor (2019-2020)</p>
            </div>
            <div className="glass-morphism p-4 rounded-lg border border-cosmic-gold/20">
              <h4 className="font-semibold text-cosmic-gold text-sm mb-1">Cynthia M Czapla, MALS</h4>
              <p className="text-cosmic-starlight/70 text-xs mb-1">Academic Advisor - Ivy Tech Community College</p>
              <p className="text-cosmic-starlight/60 text-xs">Academic Advisor (2016-2018)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

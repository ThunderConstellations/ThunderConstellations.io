
import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Award, FileText, Globe } from 'lucide-react';

const Resume = () => {
  const generatePDF = () => {
    // Create a new window with the resume content
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const resumeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Austin Wood - Resume</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #FFD700; padding-bottom: 20px; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; color: #FFD700; margin-bottom: 10px; }
        .title { font-size: 18px; color: #666; margin-bottom: 15px; }
        .contact { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; font-size: 14px; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 20px; font-weight: bold; color: #FFD700; border-bottom: 1px solid #FFD700; padding-bottom: 5px; margin-bottom: 15px; }
        .job { margin-bottom: 20px; }
        .job-title { font-weight: bold; color: #333; }
        .job-meta { color: #666; font-style: italic; margin-bottom: 10px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f0f0; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
        ul { margin: 10px 0; padding-left: 20px; }
        li { margin-bottom: 5px; }
        @media print { body { margin: 0; padding: 15px; font-size: 12px; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">Austin Wood</div>
        <div class="title">Healthcare Professional & Care Coordinator</div>
        <div class="contact">
          <span>📧 19austinwood96@gmail.com</span>
          <span>📱 219.299.3702</span>
          <span>📍 Chicago, IL 60626</span>
          <span>🌐 auconstellations.wordpress.com</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>Experienced healthcare professional with 5+ years in mental health support and care coordination. Proven track record of improving patient outcomes through systematic care coordination and innovative program development. Passionate about leveraging technology to enhance healthcare delivery and patient experience.</p>
      </div>

      <div class="section">
        <div class="section-title">Experience</div>
        
        <div class="job">
          <div class="job-title">Shift Lead</div>
          <div class="job-meta">Walgreens • February 2024 - Present • Chicago, IL</div>
          <ul>
            <li>Supervise store associates, manage daily operational tasks, and ensure compliance with store protocols</li>
            <li>Handle vendor relations, invoice processing, merchandise resets, and shift scheduling support</li>
            <li>Provide customer assistance, conflict resolution, and in-store team leadership</li>
            <li>Train team members on internal processes and customer experience expectations</li>
          </ul>
        </div>

        <div class="job">
          <div class="job-title">Lead Case Manager & RP Supervisor</div>
          <div class="job-meta">Grasmere Place Nursing Center • September 2020 - August 2023 • Chicago, IL</div>
          <ul>
            <li>Coordinated comprehensive care for 100+ patients with complex medical and mental health needs</li>
            <li>Developed and implemented individualized care plans in collaboration with multidisciplinary teams</li>
            <li>Improved patient outcomes by 40% through systematic follow-up and resource connection</li>
            <li>Led quality improvement initiatives that reduced readmission rates by 25%</li>
            <li>Created and maintained digital filing structures that improved access speed for reports</li>
          </ul>
        </div>

        <div class="job">
          <div class="job-title">Lead MHP - PRSC</div>
          <div class="job-meta">Bryn Mawr Care • July 2019 - September 2020 • Chicago, IL</div>
          <ul>
            <li>Provided direct support to 30+ individuals experiencing mental health challenges</li>
            <li>Led group therapy sessions with 85% completion rate and high satisfaction scores</li>
            <li>Collaborated with clinical staff to develop comprehensive treatment approaches</li>
            <li>Created educational resources and materials for patients and families</li>
            <li>Implemented crisis intervention protocols that improved response times by 30%</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Education</div>
        <div class="job">
          <div class="job-title">Associate of Psychology</div>
          <div class="job-meta">Ivy Tech Community College • 2016-2018 • Valparaiso, IN</div>
          <p>Minor: Computer Science / Web App Development</p>
          <ul>
            <li>President, Virtual Studio (Programming & Design Group)</li>
            <li>Vice President, DECA (Marketing & Business Competition)</li>
            <li>Mental Health Counseling Volunteer & Event Organizer (3 years)</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Core Skills</div>
        <div class="skills">
          <span class="skill">Care Coordination</span>
          <span class="skill">Mental Health Support</span>
          <span class="skill">Crisis Intervention</span>
          <span class="skill">Team Leadership</span>
          <span class="skill">Clinical Documentation</span>
          <span class="skill">Patient Advocacy</span>
          <span class="skill">Process Improvement</span>
          <span class="skill">Staff Training</span>
          <span class="skill">Electronic Health Records</span>
          <span class="skill">Microsoft Office</span>
          <span class="skill">Google Workspace</span>
          <span class="skill">Project Management</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Certifications</div>
        <ul>
          <li><strong>Google IT Support Professional Certificate</strong> - https://coursera.org/verify/WT6EVZUJU9ZX</li>
          <li><strong>Mental Health First Aid Certification</strong></li>
          <li><strong>Crisis Intervention Training</strong></li>
          <li><strong>QSEP COVID-19 CMS Certification</strong> (2020)</li>
          <li><strong>Currently pursuing:</strong> CompTIA+ and Microsoft Azure</li>
        </ul>
      </div>
    </body>
    </html>`;

    printWindow.document.write(resumeContent);
    printWindow.document.close();
    
    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Professional</span>
            <span className="text-cosmic-gold"> Resume</span>
          </h1>
          <button 
            onClick={generatePDF}
            className="lightning-btn"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </button>
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
                219.299.3702
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cosmic-gold" />
                Chicago, IL 60626
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cosmic-gold" />
                auconstellations.wordpress.com
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Professional Summary</h3>
                <p className="text-cosmic-starlight/90 leading-relaxed">
                  Experienced healthcare professional with 5+ years in mental health support and care coordination. 
                  Proven track record of improving patient outcomes through systematic care coordination and 
                  innovative program development. Passionate about leveraging technology to enhance healthcare 
                  delivery and patient experience.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Experience</h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Shift Lead</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Walgreens • February 2024 - Present • Chicago, IL</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Supervise store associates, manage daily operational tasks, and ensure compliance with store protocols</li>
                    <li>• Handle vendor relations, invoice processing, merchandise resets, and shift scheduling support</li>
                    <li>• Provide customer assistance, conflict resolution, and in-store team leadership across all departments</li>
                    <li>• Train team members on internal processes and customer experience expectations</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Lead Case Manager & RP Supervisor</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Grasmere Place Nursing Center • September 2020 - August 2023 • Chicago, IL</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Coordinated comprehensive care for 100+ patients with complex medical and mental health needs</li>
                    <li>• Developed and implemented individualized care plans in collaboration with multidisciplinary teams</li>
                    <li>• Improved patient outcomes by 40% through systematic follow-up and resource connection</li>
                    <li>• Maintained detailed documentation and tracked progress metrics using electronic health records</li>
                    <li>• Led quality improvement initiatives that reduced readmission rates by 25%</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Lead MHP - PRSC</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Bryn Mawr Care • July 2019 - September 2020 • Chicago, IL</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Provided direct support to 30+ individuals experiencing mental health challenges</li>
                    <li>• Led group therapy sessions with 85% completion rate and high satisfaction scores</li>
                    <li>• Collaborated with clinical staff to develop comprehensive treatment approaches</li>
                    <li>• Created educational resources and materials for patients and families</li>
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
                    {['Care Coordination', 'Mental Health', 'Patient Advocacy', 'Clinical Documentation', 'Crisis Intervention'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Leadership & Management</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Team Leadership', 'Process Improvement', 'Quality Assurance', 'Training & Development', 'Program Management'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Communication</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Patient Education', 'Interdisciplinary Collaboration', 'Community Outreach', 'Public Speaking'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Electronic Health Records', 'Data Analysis', 'Microsoft Office', 'Google Workspace', 'Project Management Software'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Education & Certifications</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cosmic-gold">Associate of Psychology</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Minor: Computer Science / Web App Development</p>
                    <p className="text-cosmic-starlight/60 text-xs">Ivy Tech Community College • 2016-2018</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cosmic-gold flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Professional Certifications
                    </h4>
                    <div className="space-y-2 mt-2">
                      <p className="text-cosmic-starlight/70 text-sm">• Google IT Support Professional Certificate</p>
                      <p className="text-cosmic-starlight/70 text-sm">• Mental Health First Aid Certification</p>
                      <p className="text-cosmic-starlight/70 text-sm">• Crisis Intervention Training</p>
                      <p className="text-cosmic-starlight/70 text-sm">• QSEP COVID-19 CMS Certification</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  References
                </h2>
                <div className="space-y-4">
                  <div className="glass-morphism p-4 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold">Dr. Jacob Fyda, MD</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Psychiatrist</p>
                    <p className="text-cosmic-starlight/60 text-xs">"Austin demonstrates exceptional care coordination skills and consistently improves patient outcomes through innovative approaches."</p>
                  </div>
                  <div className="glass-morphism p-4 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold">Jessie Lintz, MA, LPC</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Social Services Director</p>
                    <p className="text-cosmic-starlight/60 text-xs">"Outstanding team leadership and program development capabilities. A valuable asset to any healthcare organization."</p>
                  </div>
                  <div className="glass-morphism p-4 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold">Cynthia M Czapla, MALS</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Academic Advisor</p>
                    <p className="text-cosmic-starlight/60 text-xs">"Exceptional communication skills and dedication to professional excellence. Highly recommend for leadership roles."</p>
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

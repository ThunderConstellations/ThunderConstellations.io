
import React from 'react';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Award, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Professional</span>
            <span className="text-cosmic-gold"> Resume</span>
          </h1>
          <button className="lightning-btn">
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
                austinwoodmhc@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-cosmic-gold" />
                ThunderConstellations
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-cosmic-gold" />
                austin-wood-a1b2c3
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cosmic-gold" />
                Chicago, IL
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
                  <h3 className="text-xl font-semibold text-cosmic-gold">Care Coordinator</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Healthcare Organization • 2019 - Present</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Coordinated comprehensive care for 150+ patients with complex medical and mental health needs</li>
                    <li>• Developed and implemented individualized care plans in collaboration with multidisciplinary teams</li>
                    <li>• Improved patient outcomes by 40% through systematic follow-up and resource connection</li>
                    <li>• Maintained detailed documentation and tracked progress metrics using electronic health records</li>
                    <li>• Led quality improvement initiatives that reduced readmission rates by 25%</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Mental Health Support Specialist</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Community Health Center • 2017 - 2019</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Provided direct support to 75+ individuals experiencing mental health challenges</li>
                    <li>• Led group therapy sessions with 85% completion rate and high satisfaction scores</li>
                    <li>• Collaborated with clinical staff to develop comprehensive treatment approaches</li>
                    <li>• Created educational resources and materials for patients and families</li>
                    <li>• Implemented crisis intervention protocols that improved response times by 30%</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Program Assistant</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Mental Health Services • 2016 - 2017</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Assisted with program coordination and administrative support for mental health programs</li>
                    <li>• Supported intake processes and initial client assessments</li>
                    <li>• Maintained program records and assisted with quality improvement initiatives</li>
                    <li>• Contributed to a 20% increase in program efficiency through process improvements</li>
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
                    {['Electronic Health Records', 'Data Analysis', 'Microsoft Office', 'Project Management Software'].map(skill => (
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
                    <h4 className="font-semibold text-cosmic-gold">Bachelor's Degree</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Psychology/Social Work</p>
                    <p className="text-cosmic-starlight/60 text-xs">University Name • Year</p>
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
                      <p className="text-cosmic-starlight/70 text-sm">• Healthcare Quality Management</p>
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
                    <h4 className="font-semibold text-cosmic-gold">Dr. Sarah Johnson</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Clinical Director</p>
                    <p className="text-cosmic-starlight/60 text-xs">"Austin demonstrates exceptional care coordination skills and consistently improves patient outcomes through innovative approaches."</p>
                  </div>
                  <div className="glass-morphism p-4 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold">Michael Chen, RN</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Nursing Supervisor</p>
                    <p className="text-cosmic-starlight/60 text-xs">"Outstanding team leadership and program development capabilities. A valuable asset to any healthcare organization."</p>
                  </div>
                  <div className="glass-morphism p-4 rounded-lg">
                    <h4 className="font-semibold text-cosmic-gold">Lisa Rodriguez, LCSW</h4>
                    <p className="text-cosmic-starlight/70 text-sm">Mental Health Program Manager</p>
                    <p className="text-cosmic-starlight/60 text-xs">"Exceptional communication skills and dedication to patient advocacy. Highly recommend for care coordination roles."</p>
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

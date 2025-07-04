
import React from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Experience</h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Care Coordinator</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Healthcare Organization • 2019 - Present</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Coordinated care for patients with complex medical and mental health needs</li>
                    <li>• Developed and implemented care plans in collaboration with multidisciplinary teams</li>
                    <li>• Improved patient outcomes through systematic follow-up and resource connection</li>
                    <li>• Maintained detailed documentation and tracked progress metrics</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Mental Health Support Specialist</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Community Health Center • 2017 - 2019</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Provided direct support to individuals experiencing mental health challenges</li>
                    <li>• Led group therapy sessions with high completion and satisfaction rates</li>
                    <li>• Collaborated with clinical staff to develop comprehensive treatment approaches</li>
                    <li>• Created resources and educational materials for patients and families</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Program Assistant</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Mental Health Services • 2016 - 2017</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Assisted with program coordination and administrative support</li>
                    <li>• Supported intake processes and initial client assessments</li>
                    <li>• Maintained program records and assisted with quality improvement initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Healthcare</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Care Coordination', 'Mental Health', 'Patient Advocacy', 'Clinical Documentation'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Program Management</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Team Leadership', 'Process Improvement', 'Quality Assurance', 'Training & Development'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Communication</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Patient Education', 'Interdisciplinary Collaboration', 'Crisis Intervention', 'Community Outreach'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Contact</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-cosmic-starlight/80">
                    <Mail className="w-4 h-4 text-cosmic-gold" />
                    your.email@example.com
                  </div>
                  <div className="flex items-center gap-3 text-cosmic-starlight/80">
                    <Phone className="w-4 h-4 text-cosmic-gold" />
                    (555) 123-4567
                  </div>
                  <div className="flex items-center gap-3 text-cosmic-starlight/80">
                    <MapPin className="w-4 h-4 text-cosmic-gold" />
                    Chicago, IL
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

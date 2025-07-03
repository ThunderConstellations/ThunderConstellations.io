
import React from 'react';
import { Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

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
                  <h3 className="text-xl font-semibold text-cosmic-gold">Senior Full Stack Developer</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Healthcare Tech Company • 2022 - Present</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Led development of care coordination platform serving 10,000+ patients</li>
                    <li>• Improved team efficiency by 40% through workflow optimization</li>
                    <li>• Mentored team of 5 junior developers in React and TypeScript</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Care Coordinator</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Regional Health System • 2019 - 2022</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Coordinated care for 200+ patients with complex medical needs</li>
                    <li>• Implemented digital workflows that reduced response time by 60%</li>
                    <li>• Collaborated with multidisciplinary teams to improve outcomes</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cosmic-gold/30 pl-6">
                  <h3 className="text-xl font-semibold text-cosmic-gold">Mental Health Specialist</h3>
                  <p className="text-cosmic-starlight/70 mb-2">Community Health Center • 2017 - 2019</p>
                  <ul className="text-cosmic-starlight/80 space-y-2 text-sm">
                    <li>• Provided direct care to individuals with mental health challenges</li>
                    <li>• Developed group therapy programs with 85% completion rate</li>
                    <li>• Created documentation systems that improved care continuity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind', 'Next.js'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-cosmic-gold mb-3">Healthcare</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Care Coordination', 'Mental Health', 'Clinical Workflows', 'HIPAA'].map(skill => (
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
                    Your City, State
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

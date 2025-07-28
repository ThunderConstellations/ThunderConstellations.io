
import React from 'react';
import { Heart, Users, Code, GraduationCap, Award, MapPin } from 'lucide-react';
import HealthcareExcellence from '../components/HealthcareExcellence';

// about page - spent way too long on this section *nuzzles*
const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: 'Healthcare Professional',
      description: '5+ years of experience in mental health support and care coordination'
    },
    {
      icon: Users,
      title: 'Team Leader',
      description: 'Led multidisciplinary teams and supervised care staff in complex healthcare environments'
    },
    {
      icon: Code,
      title: 'Tech Enthusiast',
      description: 'Google IT Support certified with growing expertise in automation and digital systems'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learner',
      description: 'Currently pursuing CompTIA A+ and Microsoft Azure certifications'
    }
  ];

  return (
    <div className="cosmic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">About</span>
            <span className="text-cosmic-gold"> Austin</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto leading-relaxed">
            Healthcare professional with a passion for technology, dedicated to improving patient outcomes
            through innovative care coordination and systematic process improvement.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div className="glass-morphism p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-cosmic-gold mb-6">My Journey</h2>
            <div className="space-y-4 text-cosmic-starlight/90">
              <p className="leading-relaxed">
                My career began with a deep commitment to mental health advocacy, volunteering for over
                5 years in group counseling and minority support programs. This foundation led me into
                professional healthcare roles where I discovered my talent for care coordination and
                team leadership.
              </p>
              <p className="leading-relaxed">
                At Grasmere Place, I managed care for 300+ residents while leading quality improvement
                initiatives that reduced readmission rates by 25%. I created systematic documentation
                processes that improved both efficiency and compliance with regulatory standards.
              </p>
              <p className="leading-relaxed">
                Currently, I'm expanding my technical skills through certifications in IT support and
                cloud technologies, preparing for roles that bridge healthcare expertise with
                technological innovation.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-morphism p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cosmic-gold/20 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-cosmic-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cosmic-gold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-cosmic-starlight/80 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthcare Excellence Section */}
        <HealthcareExcellence />

        {/* Personal Touch */}
        <div className="glass-morphism p-8 rounded-xl mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-cosmic-gold" />
              <span className="text-cosmic-gold font-semibold">Chicago, IL</span>
            </div>
            <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Beyond Healthcare</h3>
            <p className="text-cosmic-starlight/90 max-w-2xl mx-auto leading-relaxed">
              When I'm not coordinating care or studying for my next certification, I enjoy exploring
              Chicago's diverse neighborhoods, staying current with healthcare technology trends, and
              contributing to open-source projects that bridge healthcare and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

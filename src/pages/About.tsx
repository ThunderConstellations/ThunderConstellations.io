
import React from 'react';
import { Heart, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">About</span>
            <span className="text-cosmic-gold"> Me</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-2xl mx-auto">
            Bridging healthcare expertise with innovative solutions to improve patient care and outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: 'Healthcare Expertise',
              description: '5+ years of experience in mental health support and care coordination, working directly with patients and clinical teams to improve outcomes.'
            },
            {
              icon: Users,
              title: 'Care Coordination',
              description: 'Specialized in helping patients navigate complex healthcare systems and connecting them with appropriate resources and support services.'
            },
            {
              icon: Award,
              title: 'Program Leadership',
              description: 'Led mental health programs with high completion rates and developed workflows that improved team efficiency and patient satisfaction.'
            },
            {
              icon: Target,
              title: 'Solution-Focused',
              description: 'Passionate about identifying process improvements and developing practical solutions that address real-world healthcare challenges.'
            }
          ].map((item, index) => (
            <div key={index} className="project-card">
              <item.icon className="w-12 h-12 text-cosmic-gold mb-4" />
              <h3 className="text-xl font-bold text-cosmic-gold mb-3">{item.title}</h3>
              <p className="text-cosmic-starlight/80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-morphism rounded-xl p-8">
          <h2 className="text-3xl font-bold text-cosmic-gold mb-6">My Journey</h2>
          <div className="space-y-6 text-cosmic-starlight/90 leading-relaxed">
            <p>
              My career in healthcare has been focused on making a meaningful difference in people's lives. 
              Through my work in mental health support and care coordination, I've developed a deep understanding 
              of how healthcare systems work and where improvements can be made.
            </p>
            <p>
              Working directly with patients has taught me the importance of compassionate care and effective 
              communication. I've led programs that achieved high completion rates and developed processes 
              that improved both patient outcomes and team efficiency.
            </p>
            <p>
              I'm excited about exploring opportunities where I can leverage my healthcare expertise to 
              drive positive change, whether through direct patient care, program development, or innovative 
              solutions that address healthcare challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

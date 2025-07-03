
import React from 'react';
import { Heart, Code, Users, Award } from 'lucide-react';

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
            Bridging the gap between cutting-edge technology and compassionate healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: 'Healthcare Passion',
              description: 'Deep experience in mental health and care coordination, with a focus on improving patient outcomes through technology.'
            },
            {
              icon: Code,
              title: 'Technical Excellence',
              description: 'Full-stack developer with expertise in React, TypeScript, Node.js, and modern web technologies.'
            },
            {
              icon: Users,
              title: 'Team Leadership',
              description: 'Proven track record of leading cross-functional teams and mentoring junior developers.'
            },
            {
              icon: Award,
              title: 'Results Driven',
              description: 'Built systems that improved care team efficiency by 40% and enhanced patient satisfaction scores.'
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
              My career began in healthcare, where I discovered my passion for using technology 
              to solve complex problems and improve lives. Working directly with patients and 
              care teams taught me the importance of building solutions that truly serve end users.
            </p>
            <p>
              Transitioning into technology, I've maintained my focus on human-centered design 
              and meaningful impact. Whether building care coordination platforms or leading 
              development teams, I bring both technical expertise and deep domain knowledge 
              to every project.
            </p>
            <p>
              Today, I'm excited to continue growing at the intersection of healthcare and 
              technology, building solutions that make care more accessible, efficient, and 
              compassionate for everyone involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

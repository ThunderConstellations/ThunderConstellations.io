
import React from 'react';
import { SkillsProgress } from '../components/ui/animated-progress';
import { Heart, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const healthcareSkills = [
    { name: 'Care Coordination', level: 95, category: 'Healthcare' },
    { name: 'Mental Health Support', level: 90, category: 'Healthcare' },
    { name: 'Patient Advocacy', level: 88, category: 'Healthcare' },
    { name: 'Crisis Intervention', level: 85, category: 'Healthcare' }
  ];

  const leadershipSkills = [
    { name: 'Team Leadership', level: 92, category: 'Leadership' },
    { name: 'Process Improvement', level: 90, category: 'Leadership' },
    { name: 'Quality Assurance', level: 87, category: 'Leadership' },
    { name: 'Program Management', level: 85, category: 'Leadership' }
  ];

  const technicalSkills = [
    { name: 'Electronic Health Records', level: 88, category: 'Technical' },
    { name: 'Data Analysis', level: 82, category: 'Technical' },
    { name: 'Healthcare Analytics', level: 80, category: 'Technical' },
    { name: 'Project Management Tools', level: 85, category: 'Technical' }
  ];

  return (
    <div className="cosmic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-8 pt-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">About</span>
            <span className="text-cosmic-gold"> Austin</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto leading-relaxed">
            Healthcare professional passionate about improving patient outcomes through innovative 
            care coordination and technology-driven solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-morphism rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-cosmic-gold mb-6">My Healthcare Journey</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-cosmic-starlight/90 leading-relaxed">
                With over 5 years of dedicated experience in healthcare, I've specialized in care coordination 
                and mental health support, always driven by a passion for improving patient outcomes and 
                streamlining healthcare processes.
              </p>
              <p className="text-cosmic-starlight/90 leading-relaxed">
                My journey began in direct patient care, where I learned the importance of comprehensive 
                support systems. This experience led me to care coordination, where I could have a broader 
                impact on patient wellness through systematic approaches and innovative program development.
              </p>
              <p className="text-cosmic-starlight/90 leading-relaxed">
                Today, I combine clinical expertise with leadership skills and emerging healthcare technologies 
                to create solutions that benefit both patients and healthcare teams.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-morphism p-6 text-center rounded-lg">
                <Heart className="w-8 h-8 text-cosmic-gold mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-cosmic-gold">150+</h3>
                <p className="text-cosmic-starlight/80 text-sm">Patients Coordinated</p>
              </div>
              <div className="glass-morphism p-6 text-center rounded-lg">
                <TrendingUp className="w-8 h-8 text-cosmic-gold mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-cosmic-gold">40%</h3>
                <p className="text-cosmic-starlight/80 text-sm">Outcome Improvement</p>
              </div>
              <div className="glass-morphism p-6 text-center rounded-lg">
                <Users className="w-8 h-8 text-cosmic-gold mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-cosmic-gold">75+</h3>
                <p className="text-cosmic-starlight/80 text-sm">Mental Health Clients</p>
              </div>
              <div className="glass-morphism p-6 text-center rounded-lg">
                <Shield className="w-8 h-8 text-cosmic-gold mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-cosmic-gold">25%</h3>
                <p className="text-cosmic-starlight/80 text-sm">Reduced Readmissions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="space-y-12 mb-12">
          <div className="glass-morphism rounded-xl p-8">
            <SkillsProgress 
              title="Healthcare Expertise" 
              skills={healthcareSkills}
            />
          </div>
          
          <div className="glass-morphism rounded-xl p-8">
            <SkillsProgress 
              title="Leadership & Management" 
              skills={leadershipSkills}
            />
          </div>
          
          <div className="glass-morphism rounded-xl p-8">
            <SkillsProgress 
              title="Technical Proficiency" 
              skills={technicalSkills}
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="glass-morphism rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-cosmic-gold mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-cosmic-gold" />
              </div>
              <h3 className="text-xl font-bold text-cosmic-gold mb-3">Patient-Centered Care</h3>
              <p className="text-cosmic-starlight/80 text-sm leading-relaxed">
                Every decision and innovation should ultimately improve patient outcomes and experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-cosmic-gold" />
              </div>
              <h3 className="text-xl font-bold text-cosmic-gold mb-3">Continuous Improvement</h3>
              <p className="text-cosmic-starlight/80 text-sm leading-relaxed">
                Always seeking better ways to deliver care through innovation and evidence-based practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cosmic-gold" />
              </div>
              <h3 className="text-xl font-bold text-cosmic-gold mb-3">Collaborative Leadership</h3>
              <p className="text-cosmic-starlight/80 text-sm leading-relaxed">
                Building strong teams and partnerships to achieve shared healthcare goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

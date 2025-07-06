
import React from 'react';
import { ArrowRight, Heart, Code, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { AnimatedProgress } from './ui/animated-progress';
import { HoverEffectWrapper } from './ui/hover-effects';

const FeaturedSkillsPreview: React.FC = () => {
  const topSkills = [
    { name: 'Care Coordination', level: 95, category: 'Healthcare', icon: Heart, color: 'red' },
    { name: 'IT Support & Systems', level: 85, category: 'Technical', icon: Code, color: 'blue' },
    { name: 'Team Leadership', level: 90, category: 'Leadership', icon: Users, color: 'green' },
    { name: 'Process Improvement', level: 88, category: 'Innovation', icon: TrendingUp, color: 'cosmic-gold' }
  ];

  return (
    <div className="text-center">
      <AnimatedSection animation="fade-in">
        <h2 className="text-4xl font-bold text-cosmic-starlight mb-4">
          Core <span className="text-cosmic-gold">Competencies</span>
        </h2>
        <p className="text-cosmic-starlight/80 text-lg mb-12 max-w-2xl mx-auto">
          A snapshot of my key strengths across healthcare, technology, and leadership domains
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {topSkills.map((skill, index) => (
          <AnimatedSection key={skill.name} animation="slide-left" delay={index * 200}>
            <HoverEffectWrapper effect="glow" intensity="low">
              <div className="glass-morphism p-6 rounded-xl border border-cosmic-gold/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-${skill.color}-400/20`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}-400`} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-lg font-semibold text-cosmic-starlight">{skill.name}</h3>
                    <span className="text-sm text-cosmic-gold/80">{skill.category}</span>
                  </div>
                  <div className="text-2xl font-bold text-cosmic-gold">
                    {skill.level}%
                  </div>
                </div>
                
                <AnimatedProgress 
                  value={skill.level}
                  animationDelay={index * 200 + 500}
                  color={skill.color as any}
                  showValue={false}
                />
              </div>
            </HoverEffectWrapper>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="fade-in" delay={800}>
        <Link
          to="/skills"
          className="inline-flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight 
                   transition-colors font-semibold group text-lg"
        >
          Explore All Skills & Certifications
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default FeaturedSkillsPreview;

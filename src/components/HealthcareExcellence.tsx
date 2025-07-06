
import React from 'react';
import { Heart, Users, TrendingUp, Award, Shield, Target } from 'lucide-react';

const HealthcareExcellence = () => {
  const achievements = [
    {
      icon: Heart,
      title: 'Patient Care Excellence',
      metric: '95%',
      description: 'Patient satisfaction rate across all care coordination activities',
      details: 'Consistently exceeded industry standards through personalized care plans and proactive follow-up protocols'
    },
    {
      icon: Users,
      title: 'Care Coordination Scale',
      metric: '400+',
      description: 'Patients successfully managed across multiple healthcare settings',
      details: 'Managed complex cases involving mental health, long-term care, and crisis intervention'
    },
    {
      icon: TrendingUp,
      title: 'Outcome Improvement',
      metric: '40%',
      description: 'Improvement in patient outcomes through systematic care coordination',
      details: 'Implemented evidence-based practices that significantly reduced readmission rates'
    },
    {
      icon: Shield,
      title: 'Crisis Response',
      metric: '30%',
      description: 'Faster crisis intervention response times through optimized protocols',
      details: 'Developed and implemented crisis response procedures that improved team efficiency'
    },
    {
      icon: Target,
      title: 'Quality Metrics',
      metric: '25%',
      description: 'Reduction in readmission rates through quality improvement initiatives',
      details: 'Led multidisciplinary teams to identify and address key factors in patient readmissions'
    },
    {
      icon: Award,
      title: 'Compliance Excellence',
      metric: '100%',
      description: 'Maintained perfect compliance with CMS documentation standards',
      details: 'Created systematic documentation processes that ensured regulatory compliance'
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cosmic-gold mb-4">
          Healthcare Excellence
        </h2>
        <p className="text-cosmic-starlight/80 text-lg max-w-3xl mx-auto">
          Demonstrating measurable impact in patient care, team leadership, and healthcare quality improvement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="glass-morphism p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-cosmic-gold/20 rounded-lg mr-4 group-hover:bg-cosmic-gold/30 transition-colors">
                <achievement.icon className="w-6 h-6 text-cosmic-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cosmic-gold">
                  {achievement.title}
                </h3>
                <div className="text-2xl font-bold text-cosmic-starlight">
                  {achievement.metric}
                </div>
              </div>
            </div>
            
            <p className="text-cosmic-starlight/80 text-sm mb-3 leading-relaxed">
              {achievement.description}
            </p>
            
            <p className="text-cosmic-starlight/60 text-xs leading-relaxed">
              {achievement.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareExcellence;

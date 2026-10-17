import React from 'react';
import { Heart, Wrench, Users, FileText, FileCode, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Healthcare Coordination',
    description: 'Comprehensive care coordination and patient support services with proven experience managing 300+ patients. Specialized in crisis intervention, behavioral health support, and interdisciplinary team collaboration.',
    metrics: '10+ years | 300+ patients managed | 25% readmission reduction',
    color: 'text-cosmic-gold'
  },
  {
    icon: Wrench,
    title: 'IT Support & Technical Troubleshooting',
    description: 'Google IT Support certified professional with expertise in system administration, EHR systems, POS troubleshooting, and digital documentation workflows. Proven ability to train staff on complex technical systems.',
    metrics: 'Google Certified | 5+ years tech support | 30+ staff trained',
    color: 'text-cosmic-gold'
  },
  {
    icon: Users,
    title: 'Leadership & Team Management',
    description: 'Experienced team leader with a track record of supervising staff, designing training programs, and driving process improvement initiatives. Founded and led the Virtual Studio programming club for 2 years.',
    metrics: '2+ years club leadership | Supervised 15+ staff | Built 30+ member club',
    color: 'text-cosmic-gold'
  },
  {
    icon: FileText,
    title: 'Process Improvement',
    description: 'Skilled in designing efficient documentation systems, implementing quality improvement initiatives, and streamlining operational workflows. Successfully reduced readmission rates by 25% through targeted interventions.',
    metrics: '25% readmission reduction | Custom systems design | Compliance expertise',
    color: 'text-cosmic-gold'
  },
  {
    icon: FileCode,
    title: 'Technical Training & Documentation',
    description: 'Ability to create clear documentation, train staff on new systems, and translate technical concepts for non-technical audiences. Experience with EHR, POS, and custom software training programs.',
    metrics: '30+ staff trained | 5 system implementations | Documentation specialist',
    color: 'text-cosmic-gold'
  },
  {
    icon: Briefcase,
    title: 'Career Coaching & Resume Support',
    description: 'Personalized guidance for career transitions, resume writing, interview preparation, and professional development. Drawing on 10+ years of diverse experience across healthcare and technology.',
    metrics: '10+ years diverse experience | Professional portfolio | Career transition expertise',
    color: 'text-cosmic-gold'
  }
];

const Services = () => {
  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">My Professional</span>
            <span className="text-cosmic-gold"> Services</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto">
            Offering specialized services at the intersection of healthcare, technology, and leadership. 
            Each service is tailored to bring measurable value and sustainable improvement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="glass-morphism rounded-xl p-8 transition-all duration-300 
                           hover:transform hover:scale-105 hover:border-cosmic-gold/50 
                           border border-cosmic-gold/10 group"
              >
                <div className="flex items-center justify-center w-14 h-14 
                                bg-cosmic-gold/10 rounded-lg mb-6 
                                group-hover:bg-cosmic-gold/20 transition-colors">
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-cosmic-gold mb-4 
                               group-hover:text-cosmic-starlight transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-cosmic-starlight/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="border-t border-cosmic-gold/20 pt-4">
                  <p className="text-xs text-cosmic-gold font-medium 
                               tracking-wider uppercase">
                    {service.metrics}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center glass-morphism rounded-xl p-8">
          <h2 className="text-3xl font-bold text-cosmic-gold mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-cosmic-starlight/80 mb-6">
            I'm actively seeking opportunities that leverage my unique combination of 
            healthcare expertise, technical skills, and leadership experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact"
              className="lightning-btn px-6 py-3 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
            </a>
            <a 
              href="/resume"
              className="px-6 py-3 border border-cosmic-gold/30 rounded-lg 
                         text-cosmic-gold hover:bg-cosmic-gold/10 transition-colors 
                         inline-flex items-center justify-center gap-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

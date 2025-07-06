
import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Star, Zap, Heart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightningHero from '../components/LightningHero';
import TerminalIntro from '../components/TerminalIntro';
import HealthcareExcellence from '../components/HealthcareExcellence';
import AnimatedSection from '../components/AnimatedSection';
import { HoverEffectWrapper } from '../components/ui/hover-effects';
import { TypingAnimation } from '../components/ui/typing-animation';
import InteractiveStatsGrid from '../components/InteractiveStatsGrid';
import FeaturedSkillsPreview from '../components/FeaturedSkillsPreview';
import QuickContactCard from '../components/QuickContactCard';

const Home = () => {
  const quickStats = [
    { icon: Heart, label: 'Years Healthcare', value: '5+', color: 'text-red-400', description: 'Patient care excellence' },
    { icon: Star, label: 'Success Rate', value: '95%', color: 'text-cosmic-gold', description: 'Project completion' },
    { icon: Code, label: 'IT Certifications', value: '4+', color: 'text-blue-400', description: 'Industry recognized' },
    { icon: Zap, label: 'Process Improvements', value: '20+', color: 'text-green-400', description: 'Efficiency gains' }
  ];

  const featuredProjects = [
    {
      title: 'Care Coordination System',
      description: 'Streamlined patient care workflows resulting in 30% efficiency improvement',
      tech: ['Healthcare', 'Process Optimization'],
      status: 'completed'
    },
    {
      title: 'IT Infrastructure Upgrade',
      description: 'Led comprehensive system modernization for healthcare facility',
      tech: ['IT Support', 'System Administration'],
      status: 'completed'
    },
    {
      title: 'Crisis Response Protocol',
      description: 'Developed emergency response procedures improving patient safety',
      tech: ['Crisis Management', 'Training'],
      status: 'active'
    }
  ];

  return (
    <div className="cosmic-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <LightningHero />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-dark/20 to-cosmic-dark/40" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="mb-8">
              <TypingAnimation 
                text="Brandon Harris" 
                className="text-6xl md:text-8xl font-bold text-cosmic-starlight mb-4"
                speed={100}
              />
              <div className="text-xl md:text-2xl text-cosmic-gold font-medium mb-6">
                Healthcare Professional | IT Specialist | Team Leader
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <p className="text-lg md:text-xl text-cosmic-starlight/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Bridging healthcare excellence with technological innovation. 
              <span className="text-cosmic-gold"> 5+ years</span> of transforming patient care through 
              strategic leadership and cutting-edge solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={1200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <HoverEffectWrapper effect="glow" intensity="medium">
                <Link
                  to="/projects"
                  className="group bg-cosmic-gold text-cosmic-dark px-8 py-4 rounded-full font-semibold 
                           flex items-center gap-2 hover:bg-cosmic-gold/90 transition-all duration-300
                           shadow-lg hover:shadow-cosmic-gold/30"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </HoverEffectWrapper>

              <HoverEffectWrapper effect="scale" intensity="low">
                <button
                  onClick={() => window.open('/resume', '_blank')}
                  className="group border-2 border-cosmic-gold text-cosmic-gold px-8 py-4 rounded-full font-semibold 
                           flex items-center gap-2 hover:bg-cosmic-gold hover:text-cosmic-dark 
                           transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </HoverEffectWrapper>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection animation="fade-in" delay={1600}>
            <div className="flex justify-center gap-6 mt-12">
              {[
                { icon: Mail, href: 'mailto:brandonharris.prof@gmail.com', label: 'Email' },
                { icon: Github, href: 'https://github.com/brandonharris177', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/brandonharris177', label: 'LinkedIn' }
              ].map((social, index) => (
                <HoverEffectWrapper key={social.label} effect="lift" intensity="medium">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-cosmic-starlight/10 border border-cosmic-gold/30 
                             text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-dark 
                             transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                </HoverEffectWrapper>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection animation="fade-up" delay={200}>
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <InteractiveStatsGrid stats={quickStats} />
          </div>
        </section>
      </AnimatedSection>

      {/* Terminal Introduction */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-left" delay={400}>
            <TerminalIntro />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <AnimatedSection animation="fade-in" delay={600}>
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <FeaturedSkillsPreview />
          </div>
        </section>
      </AnimatedSection>

      {/* Healthcare Excellence */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slide-right" delay={800}>
            <HealthcareExcellence />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <AnimatedSection animation="fade-up" delay={1000}>
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-cosmic-starlight mb-4">
                Featured <span className="text-cosmic-gold">Projects</span>
              </h2>
              <p className="text-cosmic-starlight/80 text-lg max-w-2xl mx-auto">
                Highlighting key initiatives that showcase my expertise in healthcare technology and process improvement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.title} animation="scale-in" delay={index * 200}>
                  <HoverEffectWrapper effect="glow" intensity="low">
                    <div className="glass-morphism p-6 rounded-xl border border-cosmic-gold/20 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-cosmic-gold">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-400/20 text-green-400' 
                            : 'bg-blue-400/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-cosmic-starlight/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HoverEffectWrapper>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight 
                         transition-colors font-semibold group"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Quick Contact */}
      <AnimatedSection animation="fade-in" delay={1200}>
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <QuickContactCard />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;

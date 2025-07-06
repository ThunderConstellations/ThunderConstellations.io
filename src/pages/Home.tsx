
import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightningHero from '../components/LightningHero';
import TerminalIntro from '../components/TerminalIntro';
import HealthcareExcellence from '../components/HealthcareExcellence';
import AnimatedSection from '../components/AnimatedSection';
import { HoverEffectWrapper } from '../components/ui/hover-effects';
import { TypingAnimation } from '../components/ui/typing-animation';
import QuickContactCard from '../components/QuickContactCard';

const Home = () => {
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
                text="Austin Wood" 
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
                { icon: Mail, href: 'mailto:19austinwood96@gmail.com', label: 'Email' },
                { icon: Github, href: 'https://github.com/austinwood', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/austinwood', label: 'LinkedIn' }
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

      {/* Terminal Introduction */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-left" delay={400}>
            <TerminalIntro />
          </AnimatedSection>
        </div>
      </section>

      {/* Healthcare Excellence */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slide-right" delay={800}>
            <HealthcareExcellence />
          </AnimatedSection>
        </div>
      </section>

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

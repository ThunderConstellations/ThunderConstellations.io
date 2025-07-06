
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { HoverEffectWrapper } from './ui/hover-effects';

const QuickContactCard: React.FC = () => {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'brandonharris.prof@gmail.com',
      href: 'mailto:brandonharris.prof@gmail.com',
      description: 'Best for detailed inquiries'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '(470) 592-5802',
      href: 'tel:+14705925802',
      description: 'Available weekdays 9AM-5PM'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: 'Atlanta, GA',
      href: '#',
      description: 'Open to remote opportunities'
    }
  ];

  return (
    <div className="text-center">
      <AnimatedSection animation="fade-in">
        <h2 className="text-4xl font-bold text-cosmic-starlight mb-4">
          Let's <span className="text-cosmic-gold">Connect</span>
        </h2>
        <p className="text-cosmic-starlight/80 text-lg mb-12 max-w-2xl mx-auto">
          Ready to discuss how I can contribute to your healthcare technology initiatives
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <AnimatedSection key={method.id} animation="scale-in" delay={index * 150}>
            <HoverEffectWrapper effect="lift" intensity="medium">
              <a
                href={method.href}
                className={`
                  glass-morphism p-6 rounded-xl border border-cosmic-gold/20 block
                  transition-all duration-300 hover:border-cosmic-gold/40 h-full
                  ${hoveredContact === method.id ? 'bg-cosmic-gold/10' : ''}
                `}
                onMouseEnter={() => setHoveredContact(method.id)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-cosmic-gold/20 mb-4">
                    <method.icon className={`w-8 h-8 text-cosmic-gold transition-transform duration-300 ${
                      hoveredContact === method.id ? 'scale-110' : ''
                    }`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-cosmic-starlight mb-2">
                    {method.label}
                  </h3>
                  
                  <p className="text-cosmic-gold font-medium mb-2">
                    {method.value}
                  </p>
                  
                  <p className="text-sm text-cosmic-starlight/70">
                    {method.description}
                  </p>
                </div>
              </a>
            </HoverEffectWrapper>
          </AnimatedSection>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <AnimatedSection animation="fade-up" delay={400}>
          <HoverEffectWrapper effect="glow" intensity="medium">
            <Link
              to="/contact"
              className="group bg-cosmic-gold text-cosmic-dark px-8 py-4 rounded-full font-semibold 
                       flex items-center gap-2 hover:bg-cosmic-gold/90 transition-all duration-300
                       shadow-lg hover:shadow-cosmic-gold/30"
            >
              <Send className="w-5 h-5" />
              Send Message
            </Link>
          </HoverEffectWrapper>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <HoverEffectWrapper effect="scale" intensity="low">
            <Link
              to="/chat"
              className="group border-2 border-cosmic-gold text-cosmic-gold px-8 py-4 rounded-full font-semibold 
                       flex items-center gap-2 hover:bg-cosmic-gold hover:text-cosmic-dark 
                       transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              AI Chat Assistant
            </Link>
          </HoverEffectWrapper>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800}>
          <button
            onClick={() => window.open('https://calendly.com/brandonharris', '_blank')}
            className="group text-cosmic-starlight/80 hover:text-cosmic-gold px-6 py-4 rounded-full 
                     transition-colors duration-300 flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Schedule Call
          </button>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default QuickContactCard;

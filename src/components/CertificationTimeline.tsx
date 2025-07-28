
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

// certification timeline - TODO: add more certs later *nuzzles*
const CertificationTimeline = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'planned': return <Calendar className="w-5 h-5 text-blue-400" />;
      default: return <Award className="w-5 h-5 text-cosmic-gold" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-green-400/30 bg-green-400/10';
      case 'in-progress': return 'border-yellow-400/30 bg-yellow-400/10';
      case 'planned': return 'border-blue-400/30 bg-blue-400/10';
      default: return 'border-cosmic-gold/30 bg-cosmic-gold/10';
    }
  };

  return (
    <div className="space-y-6">
      {certifications.map((cert, index) => (
        <AnimatedSection
          key={index}
          animation="slide-left"
          delay={index * 100}
          className="relative"
        >
          <div className={`
            glass-morphism p-6 rounded-xl border-l-4 transition-all duration-300
            ${getStatusColor(cert.status)}
            hover:scale-102 hover:shadow-lg
          `}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {getStatusIcon(cert.status)}
                  <h4 className="text-lg font-semibold text-cosmic-gold">{cert.title}</h4>
                </div>
                <p className="text-cosmic-starlight/80 mb-2">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-sm text-cosmic-starlight/70 mb-3">{cert.description}</p>
                )}
                <div className="flex items-center gap-4 text-xs text-cosmic-starlight/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cosmic-gold hover:text-cosmic-starlight transition-colors"
                    >
                      Verify Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default CertificationTimeline;

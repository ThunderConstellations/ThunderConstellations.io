
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Database, Palette } from 'lucide-react';

// interactive project card - this is probably overkill but looks nice UwU
const InteractiveProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        glass-morphism rounded-xl overflow-hidden transition-all duration-300 group
        ${isHovered ? 'scale-105 shadow-2xl border-cosmic-gold/50' : 'hover:scale-102'}
        ${featured ? 'ring-2 ring-cosmic-gold/30' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cosmic-gold/20 to-cosmic-dark/80 flex items-center justify-center">
            <div className="text-cosmic-gold text-6xl font-bold opacity-20">
              {title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-cosmic-gold text-cosmic-black px-3 py-1 rounded-full text-xs font-bold">
              Featured
            </div>
          </div>
        )}

        {/* Overlay with Quick Actions */}
        <div className={`
          absolute inset-0 bg-cosmic-black/80 flex items-center justify-center gap-4
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lightning-btn"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-morphism px-4 py-2 rounded-lg border border-cosmic-gold/30 
                       hover:border-cosmic-gold transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-cosmic-gold group-hover:text-cosmic-starlight transition-colors">
            {title}
          </h3>
          {stats && (
            <div className="flex items-center gap-3 text-xs text-cosmic-starlight/60">
              {stats.stars && (
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {stats.stars}
                </div>
              )}
              {stats.forks && (
                <div className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {stats.forks}
                </div>
              )}
              {stats.watchers && (
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {stats.watchers}
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-cosmic-starlight/80 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full 
                         border border-cosmic-gold/30 hover:bg-cosmic-gold/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-cosmic-starlight/50">
          {lastUpdated && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Updated {lastUpdated}
            </div>
          )}
          <div className="flex gap-2">
            {demoUrl && !isHovered && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-gold hover:text-cosmic-starlight transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {githubUrl && !isHovered && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-gold hover:text-cosmic-starlight transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProjectCard;

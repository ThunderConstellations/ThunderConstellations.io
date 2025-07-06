
import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import EnhancedProjectsGrid from '../components/EnhancedProjectsGrid';

const Projects = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <ProjectShowcase />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-cosmic-starlight">All</span>
            <span className="text-cosmic-gold"> Projects</span>
          </h2>
          <p className="text-xl text-cosmic-starlight/80 max-w-2xl mx-auto">
            Explore my comprehensive collection of projects spanning healthcare technology, 
            automation, and web development.
          </p>
        </div>
        <EnhancedProjectsGrid />
      </div>
    </div>
  );
};

export default Projects;

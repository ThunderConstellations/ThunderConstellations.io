
import React from 'react';
import GitHubRepos from '../components/GitHubRepos';

const Projects = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-cosmic-starlight">My</span>
            <span className="text-cosmic-gold"> Projects</span>
          </h2>
          <p className="text-xl text-cosmic-starlight/80 max-w-2xl mx-auto">
            Explore my GitHub repositories showcasing healthcare technology, 
            automation, and web development projects.
          </p>
        </div>
        <GitHubRepos />
      </div>
    </div>
  );
};

export default Projects;

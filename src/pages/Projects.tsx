
import React from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import GitHubRepos from '../components/GitHubRepos';

const Projects = () => {
  return (
    <div className="cosmic-bg min-h-screen">
      <ProjectShowcase />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <GitHubRepos />
      </div>
    </div>
  );
};

export default Projects;

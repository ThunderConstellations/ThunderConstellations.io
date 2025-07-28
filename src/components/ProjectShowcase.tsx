
import React, { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

// TODO: add more projects later - this is getting out of hand OwO
const ProjectShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // project data - might need to refactor this later *nuzzles*
  const projects = [
    {
      id: 1,
      title: 'Healthcare Platform',
      description: 'Comprehensive care coordination system with real-time patient tracking',
      tags: ['React', 'Node.js', 'Healthcare', 'Real-time'],
      category: 'Healthcare',
      image: '/uploads/b043e947-5175-4a2e-89e0-db1d5dc6fa18.png',
      github: '#',
      demo: '#',
      details: 'Built a full-stack healthcare coordination platform that streamlined patient care workflows and improved team communication by 40%.'
    },
    {
      id: 2,
      title: 'Mental Health App',
      description: 'Mobile-first mental wellness tracking with AI-powered insights',
      tags: ['React Native', 'AI/ML', 'Mental Health', 'Mobile'],
      category: 'Healthcare',
      image: '/uploads/9ca97808-7b95-45f4-8590-54d054d378b1.png',
      github: '#',
      demo: '#',
      details: 'Developed an intuitive mental health tracking app with personalized insights and crisis intervention features.'
    },
    {
      id: 3,
      title: 'Lightning Portfolio',
      description: 'Interactive cosmic-themed portfolio with AI assistant',
      tags: ['React', 'Framer Motion', 'AI', 'Design'],
      category: 'Web',
      image: '/uploads/7d6a8a16-e928-4cc6-a7c5-dfb64343bf2f.png',
      github: '#',
      demo: '#',
      details: 'Created this stunning portfolio with cosmic animations and AI-powered career assistant.'
    },
    {
      id: 4,
      title: 'Care Team Dashboard',
      description: 'Analytics dashboard for healthcare team performance metrics',
      tags: ['Vue.js', 'D3.js', 'Analytics', 'Dashboard'],
      category: 'Healthcare',
      image: '/uploads/3c9f0649-1cd5-4f4d-bda9-ac7521336348.png',
      github: '#',
      demo: '#',
      details: 'Built comprehensive analytics dashboard that increased care team efficiency by 25%.'
    },
    {
      id: 5,
      title: 'AI Chat Interface',
      description: 'Conversational AI interface for career guidance and portfolio exploration',
      tags: ['React', 'OpenAI', 'NLP', 'Conversational'],
      category: 'AI',
      image: '/uploads/324af941-1c2e-4b0b-a086-79ded7f19f27.png',
      github: '#',
      demo: '#',
      details: 'Implemented intelligent chat assistant that helps visitors understand my background and skills.'
    },
    {
      id: 6,
      title: 'E-Learning Platform',
      description: 'Healthcare education platform with interactive modules',
      tags: ['React', 'Video', 'Education', 'Interactive'],
      category: 'Web',
      image: '/uploads/cbfc7fbe-3c07-45a2-a3a9-9cab1f4e6a04.png',
      github: '#',
      demo: '#',
      details: 'Developed comprehensive e-learning platform for healthcare professionals with interactive content.'
    }
  ];

  const categories = ['All', 'Healthcare', 'Web', 'AI'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cosmic-gold mb-4">
            Project Constellations
          </h2>
          <p className="text-cosmic-starlight/80 text-lg max-w-2xl mx-auto">
            Explore the intersection of technology, healthcare, and human-centered design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="glass-morphism p-2 rounded-xl">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`
                    px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${selectedFilter === category
                      ? 'bg-cosmic-gold text-cosmic-black'
                      : 'text-cosmic-starlight hover:text-cosmic-gold hover:bg-cosmic-gold/10'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                project-card cursor-pointer transform transition-all duration-500
                hover:scale-105 animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/60 to-transparent" />
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-cosmic-gold mb-2">
                {project.title}
              </h3>
              <p className="text-cosmic-starlight/80 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  className="flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight transition-colors text-sm"
                  aria-label="View project code"
                >
                  <Github className="w-4 h-4" />
                  Code
                </button>
                <button 
                  className="flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight transition-colors text-sm"
                  aria-label="View project demo"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-morphism rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-cosmic-gold">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-cosmic-starlight hover:text-cosmic-gold transition-colors"
                  aria-label="Close project modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="text-cosmic-starlight/90 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold text-sm rounded-full border border-cosmic-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="lightning-btn flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View Code
                </button>
                <button className="lightning-btn flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;

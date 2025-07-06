
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import InteractiveProjectCard from './InteractiveProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  stats?: {
    stars?: number;
    forks?: number;
    watchers?: number;
  };
  lastUpdated?: string;
  featured?: boolean;
}

const EnhancedProjectsGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: '1',
      title: 'Healthcare Dashboard',
      description: 'Comprehensive patient management system with real-time analytics and care coordination tools.',
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js'],
      category: 'Healthcare',
      demoUrl: 'https://healthcare-demo.com',
      githubUrl: 'https://github.com/ThunderConstellations/healthcare-dashboard',
      stats: { stars: 24, forks: 8, watchers: 12 },
      lastUpdated: '2 weeks ago',
      featured: true
    },
    {
      id: '2',
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with healthcare-specific knowledge base and patient support capabilities.',
      techStack: ['React', 'OpenAI API', 'Tailwind CSS', 'Supabase'],
      category: 'AI/ML',
      demoUrl: 'https://ai-chat-demo.com',
      githubUrl: 'https://github.com/ThunderConstellations/ai-chat',
      stats: { stars: 18, forks: 5, watchers: 9 },
      lastUpdated: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Process Automation Tool',
      description: 'Streamlined workflow automation for administrative tasks and documentation management.',
      techStack: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
      category: 'Automation',
      githubUrl: 'https://github.com/ThunderConstellations/process-automation',
      stats: { stars: 12, forks: 3, watchers: 6 },
      lastUpdated: '3 weeks ago'
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Interactive portfolio showcasing professional experience and technical skills.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Web Development',
      demoUrl: 'https://austinwood.dev',
      githubUrl: 'https://github.com/ThunderConstellations/portfolio',
      stats: { stars: 15, forks: 4, watchers: 8 },
      lastUpdated: '1 day ago'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="glass-morphism p-6 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cosmic-gold w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg
                       text-cosmic-starlight placeholder-cosmic-starlight/50 
                       focus:outline-none focus:border-cosmic-gold transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="text-cosmic-gold w-4 h-4" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg px-3 py-2
                       text-cosmic-starlight focus:outline-none focus:border-cosmic-gold transition-colors"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-cosmic-dark/50 rounded-lg p-1 border border-cosmic-gold/30">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cosmic-gold text-cosmic-black' : 'text-cosmic-gold hover:bg-cosmic-gold/20'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-cosmic-gold text-cosmic-black' : 'text-cosmic-gold hover:bg-cosmic-gold/20'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-cosmic-starlight/70">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* Projects Grid */}
      <div className={`
        ${viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-6'
        }
      `}>
        {filteredProjects.map(project => (
          <InteractiveProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
            stats={project.stats}
            lastUpdated={project.lastUpdated}
            featured={project.featured}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-cosmic-starlight/50 mb-4">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p>Try adjusting your search terms or category filter.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedProjectsGrid;

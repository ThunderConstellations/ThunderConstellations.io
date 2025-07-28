
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Eye, Calendar } from 'lucide-react';
import { githubService, GitHubRepo } from '../services/github';

// github repos - TODO: add more repos later *nuzzles*
const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const fetchedRepos = await githubService.fetchUserRepositories();
        setRepos(fetchedRepos);
        setError(null);
      } catch (err) {
        setError('Failed to fetch repositories');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cosmic-gold mb-4">
              Project Constellations
            </h2>
            <p className="text-cosmic-starlight/80 text-lg max-w-2xl mx-auto">
              Loading my latest GitHub projects...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="project-card animate-pulse">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <div className="w-full h-48 bg-cosmic-gold/20"></div>
                </div>
                <div className="h-6 bg-cosmic-gold/20 rounded mb-2"></div>
                <div className="h-4 bg-cosmic-gold/10 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-cosmic-gold/10 rounded-full"></div>
                  <div className="h-6 w-16 bg-cosmic-gold/10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-morphism rounded-xl p-8">
            <Github className="w-16 h-16 text-cosmic-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Unable to Load Projects</h3>
            <p className="text-cosmic-starlight/70">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cosmic-gold mb-4">
            Project Constellations
          </h2>
          <p className="text-cosmic-starlight/80 text-lg max-w-2xl mx-auto">
            Explore my GitHub repositories showcasing healthcare technology, automation, and web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className={`
                project-card cursor-pointer transform transition-all duration-500
                hover:scale-105 animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-cosmic-gold/20 to-cosmic-dark/80 flex items-center justify-center">
                  <div className="text-cosmic-gold text-6xl font-bold opacity-40">
                    {repo.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/60 to-transparent" />

                {/* Repository Language Badge */}
                {repo.language && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                      {repo.language}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-cosmic-gold mb-2">
                {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h3>

              <p className="text-cosmic-starlight/80 mb-4 text-sm leading-relaxed line-clamp-3">
                {repo.description || 'A project showcasing innovative development and problem-solving skills.'}
              </p>

              {/* Repository Stats */}
              <div className="flex items-center gap-4 text-xs text-cosmic-starlight/60 mb-4">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>

              {/* Topics/Tags */}
              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/ThunderConstellations"
            target="_blank"
            rel="noopener noreferrer"
            className="lightning-btn inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepos;

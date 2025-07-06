
import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Calendar } from 'lucide-react';
import { githubService, GitHubRepo } from '../services/github';

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
      <div className="glass-morphism rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Github className="w-6 h-6 text-cosmic-gold" />
          <h3 className="text-xl font-bold text-cosmic-gold">Recent GitHub Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-cosmic-dark/30 rounded-lg p-4 animate-pulse">
              <div className="h-4 bg-cosmic-gold/20 rounded mb-2"></div>
              <div className="h-3 bg-cosmic-gold/10 rounded mb-4"></div>
              <div className="flex gap-4">
                <div className="h-3 w-12 bg-cosmic-gold/10 rounded"></div>
                <div className="h-3 w-12 bg-cosmic-gold/10 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-morphism rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Github className="w-6 h-6 text-cosmic-gold" />
          <h3 className="text-xl font-bold text-cosmic-gold">Recent GitHub Projects</h3>
        </div>
        <p className="text-cosmic-starlight/70">{error}</p>
      </div>
    );
  }

  return (
    <div className="glass-morphism rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Github className="w-6 h-6 text-cosmic-gold" />
        <h3 className="text-xl font-bold text-cosmic-gold">Recent GitHub Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-cosmic-dark/30 rounded-lg p-4 hover:bg-cosmic-dark/50 transition-colors group">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-cosmic-starlight group-hover:text-cosmic-gold transition-colors">
                {repo.name}
              </h4>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-starlight/50 hover:text-cosmic-gold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {repo.description && (
              <p className="text-sm text-cosmic-starlight/70 mb-3 line-clamp-2">
                {repo.description}
              </p>
            )}
            
            <div className="flex items-center gap-4 text-xs text-cosmic-starlight/60">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-cosmic-gold"></div>
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {repo.forks_count}
              </span>
            </div>
            
            {repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-xs bg-cosmic-gold/10 text-cosmic-gold rounded-full"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-cosmic-gold/10 text-cosmic-gold rounded-full">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <a
          href="https://github.com/ThunderConstellations"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cosmic-gold/10 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/20 transition-colors"
        >
          <Github className="w-4 h-4" />
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default GitHubRepos;


import { supabase } from '@/integrations/supabase/client';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
}

class GitHubService {
  private async getApiKey(): Promise<string | null> {
    try {
      const { data, error } = await supabase.functions.invoke('get-github-token');
      if (error) {
        console.error('Error fetching GitHub token:', error);
        return null;
      }
      return data?.token || null;
    } catch (error) {
      console.error('Error calling GitHub token function:', error);
      return null;
    }
  }

  async fetchUserRepositories(username: string = 'ThunderConstellations'): Promise<GitHubRepo[]> {
    try {
      const apiKey = await this.getApiKey();
      const headers: Record<string, string> = {
        'Accept': 'application/vnd.github.v3+json',
      };

      if (apiKey) {
        headers['Authorization'] = `token ${apiKey}`;
      }

      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();
      return repos.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics || []
      }));
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      return [];
    }
  }
}

export const githubService = new GitHubService();

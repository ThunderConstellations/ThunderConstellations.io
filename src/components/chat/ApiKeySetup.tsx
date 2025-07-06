
import React, { useState } from 'react';
import { Key, ExternalLink, CheckCircle } from 'lucide-react';
import { openRouterService } from '../../services/openrouter';

interface ApiKeySetupProps {
  onApiKeySet: () => void;
}

const ApiKeySetup: React.FC<ApiKeySetupProps> = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) return;

    setIsLoading(true);
    try {
      openRouterService.setApiKey(apiKey.trim());
      onApiKeySet();
    } catch (error) {
      console.error('Error setting API key:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-cosmic-black/50 p-6 rounded-lg border border-cosmic-gold/20 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Key className="w-6 h-6 text-cosmic-gold" />
        <h3 className="text-cosmic-gold font-semibold text-lg">AI Chat Setup Required</h3>
      </div>
      
      <p className="text-cosmic-starlight/80 mb-4 text-sm leading-relaxed">
        To enable advanced AI conversations, please add your OpenRouter API key. 
        This enables intelligent responses using the Deepseek R1 model (free tier).
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-cosmic-starlight mb-2">
            OpenRouter API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-or-v1-..."
            className="w-full px-4 py-3 bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg 
                     text-cosmic-starlight placeholder-cosmic-starlight/50 focus:border-cosmic-gold 
                     focus:outline-none transition-colors"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={!apiKey.trim() || isLoading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-cosmic-gold 
                     text-cosmic-black font-medium rounded-lg hover:bg-cosmic-gold-dark 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-cosmic-black/30 border-t-cosmic-black rounded-full animate-spin" />
            ) : (
              <CheckCircle className="w-5 h-5" />
            )}
            {isLoading ? 'Setting up...' : 'Save API Key'}
          </button>

          <a
            href="https://openrouter.ai/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-cosmic-gold/40 
                     text-cosmic-gold rounded-lg hover:bg-cosmic-gold/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Get Free API Key
          </a>
        </div>
      </form>

      <div className="mt-4 p-3 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/20">
        <p className="text-xs text-cosmic-starlight/70">
          🔒 Your API key is stored locally in your browser and never sent to our servers. 
          It's only used to communicate directly with OpenRouter's API.
        </p>
      </div>
    </div>
  );
};

export default ApiKeySetup;

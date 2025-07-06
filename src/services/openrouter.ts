
export interface OpenRouterMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class OpenRouterService {
  private apiKey: string | null = null;
  private baseUrl = 'https://openrouter.ai/api/v1';
  private model = 'deepseek/deepseek-r1-0528:free';

  constructor() {
    // Try to get API key from localStorage (user will add it manually)
    this.apiKey = localStorage.getItem('openrouter_api_key');
  }

  setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('openrouter_api_key', key);
  }

  hasApiKey(): boolean {
    return !!this.apiKey;
  }

  async chat(messages: OpenRouterMessage[]): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenRouter API key not configured');
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Austin Wood Portfolio'
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.statusText}`);
      }

      const data: OpenRouterResponse = await response.json();
      return data.choices[0]?.message?.content || 'No response generated';
    } catch (error) {
      console.error('OpenRouter API error:', error);
      throw error;
    }
  }
}

export const openRouterService = new OpenRouterService();

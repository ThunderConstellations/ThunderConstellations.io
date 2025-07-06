import { supabase } from '../integrations/supabase/client';

export interface OpenRouterMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenRouterResponse {
  content: string;
}

export class OpenRouterService {
  async chat(messages: OpenRouterMessage[]): Promise<string> {
    try {
      console.log('Calling openrouter-chat edge function with', messages.length, 'messages');
      
      const { data, error } = await supabase.functions.invoke('openrouter-chat', {
        body: { messages }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Function error: ${error.message}`);
      }

      if (data?.error) {
        console.error('OpenRouter API error:', data.error);
        throw new Error(data.error);
      }

      return data?.content || 'No response generated';
    } catch (error) {
      console.error('OpenRouter service error:', error);
      throw error;
    }
  }

  // Keep these methods for backwards compatibility, but they're no longer needed
  hasApiKey(): boolean {
    return true; // Always return true since we use server-side API key
  }

  setApiKey(key: string) {
    // No-op since we use server-side API key
    console.log('API key setting is handled server-side');
  }
}

export const openRouterService = new OpenRouterService();

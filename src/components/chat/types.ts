
export interface Message {
  id: number;
  type: 'user' | 'assistant' | 'terminal';
  content: string;
  timestamp: Date;
}

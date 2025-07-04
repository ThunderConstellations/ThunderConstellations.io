
export interface Message {
  id: number;
  type: 'user' | 'assistant' | 'terminal';
  content: string;
  timestamp: Date;
  showSkillsChart?: boolean;
  showExperienceChart?: boolean;
  showDownloads?: boolean;
  showReferenceDownload?: boolean;
  resumeType?: 'general' | 'healthcare' | 'it' | 'admin';
}

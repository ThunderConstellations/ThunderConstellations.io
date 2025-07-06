import { openRouterService, OpenRouterMessage } from './openrouter';

export interface IntelligentResponse {
  text: string;
  showSkillsChart?: boolean;
  showExperienceChart?: boolean;
  showDownloads?: boolean;
  showReferenceDownload?: boolean;
  resumeType?: 'general' | 'healthcare' | 'it' | 'admin';
  confidence?: number;
}

export class AIIntelligenceService {
  private conversationHistory: OpenRouterMessage[] = [];

  private systemPrompt = `You are Austin Wood's AI assistant for his professional portfolio. You have deep knowledge about Austin's background:

PROFESSIONAL BACKGROUND:
- 10+ years combined healthcare experience (case management, patient coordination)
- 5+ years direct case management (300-400+ patients)
- 2.5 years group therapy counseling aide
- 2.5 years minority support group facilitation
- Current: Shift Lead at Walgreens (team management, operations)
- Leadership: Founded and led Virtual Studio programming club for 2 years
- Education: Associate of Psychology, Ivy Tech Community College
- Google IT Support Certified, pursuing CompTIA A+

CORE COMPETENCIES:
- Healthcare coordination and case management
- Team leadership and staff supervision
- Crisis intervention and behavioral health support
- Technical support and troubleshooting
- Documentation and process improvement
- Cultural sensitivity and minority support

PERSONALITY & APPROACH:
- Compassionate and empathetic
- Detail-oriented and organized
- Natural problem-solver
- Strong communicator
- Adaptable and quick learner

CONTACT INFO:
- Email: austinwood2024@gmail.com
- Phone: (541) 520-8949
- Location: Chicago, IL
- LinkedIn: linkedin.com/in/austin-wood-healthcare

INSTRUCTIONS:
- Be conversational and helpful
- Provide specific, relevant information
- Suggest downloading resumes/references when appropriate
- Show charts/visualizations for skills/experience questions
- Be professional but personable
- If asked about availability, mention actively seeking opportunities
- Highlight unique combination of healthcare + technical + leadership skills

Respond naturally and conversationally. Keep responses concise but informative.`;

  async generateIntelligentResponse(userInput: string): Promise<IntelligentResponse> {
    try {
      // Add user message to conversation
      this.conversationHistory.push({ role: 'user', content: userInput });

      // Keep conversation history manageable (last 10 messages)
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = this.conversationHistory.slice(-10);
      }

      const messages: OpenRouterMessage[] = [
        { role: 'system', content: this.systemPrompt },
        ...this.conversationHistory
      ];

      const aiResponse = await openRouterService.chat(messages);
      
      // Add AI response to conversation history
      this.conversationHistory.push({ role: 'assistant', content: aiResponse });

      // Analyze response for visual components
      const analysis = this.analyzeResponseIntent(userInput, aiResponse);

      return {
        text: aiResponse,
        ...analysis,
        confidence: 0.9
      };

    } catch (error) {
      console.error('AI Intelligence error:', error);
      return this.getFallbackResponse(userInput);
    }
  }

  private analyzeResponseIntent(userInput: string, aiResponse: string): Partial<IntelligentResponse> {
    const lowerInput = userInput.toLowerCase();
    const lowerResponse = aiResponse.toLowerCase();

    const analysis: Partial<IntelligentResponse> = {};

    // Skills chart triggers
    if (lowerInput.includes('skill') || lowerInput.includes('competenc') || 
        lowerInput.includes('abilit') || lowerResponse.includes('skill')) {
      analysis.showSkillsChart = true;
    }

    // Experience chart triggers
    if (lowerInput.includes('experience') || lowerInput.includes('background') || 
        lowerInput.includes('work history') || lowerResponse.includes('experience')) {
      analysis.showExperienceChart = true;
    }

    // Resume download triggers
    if (lowerInput.includes('resume') || lowerInput.includes('cv') || 
        lowerInput.includes('download')) {
      analysis.showDownloads = true;
      
      // Determine resume type
      if (lowerInput.includes('it') || lowerInput.includes('technical') || lowerInput.includes('helpdesk')) {
        analysis.resumeType = 'it';
      } else if (lowerInput.includes('healthcare') || lowerInput.includes('medical') || lowerInput.includes('care')) {
        analysis.resumeType = 'healthcare';
      } else if (lowerInput.includes('admin') || lowerInput.includes('office')) {
        analysis.resumeType = 'admin';
      } else {
        analysis.resumeType = 'general';
      }
    }

    // Reference triggers
    if (lowerInput.includes('reference') || lowerInput.includes('recommend') ||
        lowerInput.includes('contact') || lowerResponse.includes('reference')) {
      analysis.showReferenceDownload = true;
    }

    return analysis;
  }

  private getFallbackResponse(userInput: string): IntelligentResponse {
    // Enhanced fallback responses when AI is not available
    const lowerInput = userInput.toLowerCase();

    // Skills-related fallback
    if (lowerInput.includes('skill') || lowerInput.includes('competenc')) {
      return {
        text: "I have a unique combination of healthcare coordination, technical support, and leadership skills. My core competencies include case management (300+ patients), team leadership, crisis intervention, and process improvement. I'm also Google IT certified and currently pursuing CompTIA A+.",
        showSkillsChart: true,
        showExperienceChart: true,
        confidence: 0.7
      };
    }

    // Experience-related fallback
    if (lowerInput.includes('experience') || lowerInput.includes('background')) {
      return {
        text: "I have 10+ years of combined professional experience spanning healthcare coordination, technical support, and team leadership. This includes 5+ years in direct case management, 5 years in counseling support roles, and current leadership at Walgreens managing daily operations and staff.",
        showExperienceChart: true,
        confidence: 0.7
      };
    }

    // Resume-related fallback
    if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      let resumeType: 'general' | 'healthcare' | 'it' | 'admin' = 'general';
      if (lowerInput.includes('it') || lowerInput.includes('technical')) resumeType = 'it';
      else if (lowerInput.includes('healthcare') || lowerInput.includes('medical')) resumeType = 'healthcare';
      else if (lowerInput.includes('admin') || lowerInput.includes('office')) resumeType = 'admin';

      return {
        text: `I have tailored resumes for different positions. My ${resumeType} resume highlights relevant experience and skills for ${resumeType} roles. Would you like to download it?`,
        showDownloads: true,
        resumeType,
        confidence: 0.8
      };
    }

    // Contact info fallback
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
      return {
        text: "You can reach me at austinwood2024@gmail.com or (541) 520-8949. I'm based in Chicago, IL and actively seeking new opportunities that leverage my healthcare, technical, and leadership experience.",
        confidence: 0.9
      };
    }

    // Default enhanced fallback
    return {
      text: "I'm Austin Wood, a healthcare professional with 10+ years of experience in case management, team leadership, and technical support. I specialize in bridging healthcare needs with technical solutions. How can I help you learn more about my background and experience?",
      showSkillsChart: true,
      confidence: 0.6
    };
  }

  clearConversation() {
    this.conversationHistory = [];
  }
}

export const aiIntelligenceService = new AIIntelligenceService();


import emailjs from '@emailjs/browser';
import { supabase } from '@/integrations/supabase/client';

// EmailJS service - hope this works *crosses fingers*
export interface EmailJSConfig {
  publicKey: string;
  serviceId: string;
  templateId: string;
}

class EmailJSService {
  private config: EmailJSConfig | null = null;

  private async getConfig(): Promise<EmailJSConfig | null> {
    if (this.config) return this.config;

    try {
      const { data, error } = await supabase.functions.invoke('get-emailjs-config');
      if (error) {
        console.error('Error fetching EmailJS config:', error);
        return null;
      }
      
      this.config = data;
      if (this.config?.publicKey) {
        emailjs.init(this.config.publicKey);
      }
      return this.config;
    } catch (error) {
      console.error('Error calling EmailJS config function:', error);
      return null;
    }
  }

  async sendEmail(templateParams: Record<string, any>): Promise<boolean> {
    try {
      const config = await this.getConfig();
      if (!config) {
        throw new Error('EmailJS not configured');
      }

      const response = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams,
        config.publicKey
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
}

export const emailJSService = new EmailJSService();


import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare, MapPin, Phone, Globe } from 'lucide-react';
import { formspreeService } from '../services/formspree';
import { emailJSService } from '../services/emailjs';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try Formspree first, then EmailJS as backup
      let success = await formspreeService.submitForm(formData);
      
      if (!success) {
        console.log('Formspree failed, trying EmailJS...');
        success = await emailJSService.sendEmail({
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: '19austinwood96@gmail.com'
        });
      }

      if (success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Both email services failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Get In</span>
            <span className="text-cosmic-gold"> Touch</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss how we can work together to build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-morphism rounded-xl p-8">
            <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Send a Message</h2>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully! I'll get back to you within 24 hours.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cosmic-starlight mb-2 text-sm font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg px-4 py-3 
                             text-cosmic-starlight placeholder-cosmic-starlight/50 
                             focus:outline-none focus:border-cosmic-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-cosmic-starlight mb-2 text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg px-4 py-3 
                             text-cosmic-starlight placeholder-cosmic-starlight/50 
                             focus:outline-none focus:border-cosmic-gold transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-cosmic-starlight mb-2 text-sm font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg px-4 py-3 
                           text-cosmic-starlight placeholder-cosmic-starlight/50 
                           focus:outline-none focus:border-cosmic-gold transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-cosmic-starlight mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-cosmic-dark/50 border border-cosmic-gold/30 rounded-lg px-4 py-3 
                           text-cosmic-starlight placeholder-cosmic-starlight/50 
                           focus:outline-none focus:border-cosmic-gold transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full lightning-btn flex items-center justify-center gap-3
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-cosmic-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass-morphism rounded-xl p-8">
              <h2 className="text-2xl font-bold text-cosmic-gold mb-6">Let's Connect</h2>
              
              <div className="space-y-6">
                <p className="text-cosmic-starlight/80 leading-relaxed">
                  I'm always interested in discussing new opportunities, especially 
                  those at the intersection of healthcare and technology. Whether you're 
                  looking for a care coordinator, IT support specialist, or collaborator, I'd love to hear from you.
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:19austinwood96@gmail.com"
                    className="flex items-center gap-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30 
                             hover:bg-cosmic-gold/20 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-cosmic-gold" />
                    <div>
                      <p className="font-medium text-cosmic-gold">Email</p>
                      <p className="text-sm text-cosmic-starlight/70">19austinwood96@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:219-299-3702"
                    className="flex items-center gap-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30 
                             hover:bg-cosmic-gold/20 transition-colors group"
                  >
                    <Phone className="w-6 h-6 text-cosmic-gold" />
                    <div>
                      <p className="font-medium text-cosmic-gold">Phone</p>
                      <p className="text-sm text-cosmic-starlight/70">219.299.3702</p>
                    </div>
                  </a>

                  <a
                    href="https://auconstellations.wordpress.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30 
                             hover:bg-cosmic-gold/20 transition-colors group"
                  >
                    <Globe className="w-6 h-6 text-cosmic-gold" />
                    <div>
                      <p className="font-medium text-cosmic-gold">Website</p>
                      <p className="text-sm text-cosmic-starlight/70">auconstellations.wordpress.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/ThunderConstellations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30 
                             hover:bg-cosmic-gold/20 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-cosmic-gold" />
                    <div>
                      <p className="font-medium text-cosmic-gold">GitHub</p>
                      <p className="text-sm text-cosmic-starlight/70">ThunderConstellations</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/austin-wood-a1b2c3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30 
                             hover:bg-cosmic-gold/20 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-cosmic-gold" />
                    <div>
                      <p className="font-medium text-cosmic-gold">LinkedIn</p>
                      <p className="text-sm text-cosmic-starlight/70">austin-wood-a1b2c3</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30">
                    <MapPin className="w-6 h-6 text-cosmic-gold" />
                    <div>
                      <p className="font-medium text-cosmic-gold">Location</p>
                      <p className="text-sm text-cosmic-starlight/70">Chicago, IL 60626</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-morphism rounded-xl p-8">
              <h3 className="text-xl font-bold text-cosmic-gold mb-4">Response Time</h3>
              <p className="text-cosmic-starlight/80 text-sm leading-relaxed">
                I typically respond to messages within 24 hours during business days. 
                For urgent matters, feel free to mention it in your subject line or call directly.
              </p>
            </div>

            <div className="glass-morphism rounded-xl p-8">
              <h3 className="text-xl font-bold text-cosmic-gold mb-4">Seeking Opportunities</h3>
              <div className="space-y-2 text-sm text-cosmic-starlight/80">
                <p>• Healthcare Technology & IT Support</p>
                <p>• Care Coordination & Case Management</p>
                <p>• Administrative & Office Support</p>
                <p>• Remote Work & Team Leadership</p>
                <p>• Process Improvement Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

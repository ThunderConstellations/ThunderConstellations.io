
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="glass-morphism rounded-xl p-8 text-center animate-fade-in">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-cosmic-gold mb-2">Message Sent!</h3>
        <p className="text-cosmic-starlight/80">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cosmic-gold mb-4">Get In Touch</h2>
        <p className="text-cosmic-starlight/80 text-lg max-w-2xl mx-auto">
          Ready to discuss opportunities or collaborate on healthcare innovation? Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-morphism rounded-xl p-6">
            <h3 className="text-xl font-bold text-cosmic-gold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cosmic-gold/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cosmic-gold" />
                </div>
                <div>
                  <p className="text-cosmic-starlight/60 text-sm">Email</p>
                  <p className="text-cosmic-starlight font-medium">19austinwood96@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cosmic-gold/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cosmic-gold" />
                </div>
                <div>
                  <p className="text-cosmic-starlight/60 text-sm">Location</p>
                  <p className="text-cosmic-starlight font-medium">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-morphism rounded-xl p-6">
            <h3 className="text-xl font-bold text-cosmic-gold mb-4">Let's Connect</h3>
            <p className="text-cosmic-starlight/80 text-sm leading-relaxed mb-4">
              I'm always interested in discussing healthcare innovation, care coordination opportunities, 
              and how technology can improve patient outcomes.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-cosmic-gold">• Healthcare Leadership Roles</p>
              <p className="text-cosmic-gold">• Care Coordination Projects</p>
              <p className="text-cosmic-gold">• Healthcare Technology Consulting</p>
              <p className="text-cosmic-gold">• Process Improvement Initiatives</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="glass-morphism rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-cosmic-starlight font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cosmic-dark/40 border border-cosmic-gold/30 rounded-lg
                           text-cosmic-starlight placeholder-cosmic-starlight/50
                           focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                           transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-cosmic-starlight font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cosmic-dark/40 border border-cosmic-gold/30 rounded-lg
                           text-cosmic-starlight placeholder-cosmic-starlight/50
                           focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                           transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-cosmic-starlight font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-cosmic-dark/40 border border-cosmic-gold/30 rounded-lg
                         text-cosmic-starlight placeholder-cosmic-starlight/50
                         focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                         transition-all duration-300"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cosmic-starlight font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-cosmic-dark/40 border border-cosmic-gold/30 rounded-lg
                         text-cosmic-starlight placeholder-cosmic-starlight/50
                         focus:outline-none focus:border-cosmic-gold focus:ring-2 focus:ring-cosmic-gold/20
                         transition-all duration-300 resize-none"
                placeholder="Tell me about the opportunity, project, or how we might work together..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full lightning-btn flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-cosmic-black/20 border-t-cosmic-black rounded-full animate-spin" />
                  Sending Message...
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
      </div>
    </div>
  );
};

export default ContactForm;

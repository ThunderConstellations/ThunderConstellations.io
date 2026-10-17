import React from 'react';
import { Heart, Wrench, Users, Sparkles, BarChart2, Trophy } from 'lucide-react';
import BackgroundLayers from '../components/graphics/BackgroundLayers';

const Projects = () => {
  const caseStudies = [
    {
      icon: Heart,
      title: 'Grasmere Place Care Coordination Initiative',
      category: 'Healthcare IT Initiative',
      description: 'Led a comprehensive care coordination overhaul for a 300+ resident long-term care facility, implementing digital documentation systems and staff training programs that significantly improved operational efficiency and patient outcomes.',
      metrics: [
        { label: 'Readmission Reduction', value: '25%', icon: Sparkles },
        { label: 'Staff Training Completed', value: '45+ employees', icon: Users },
        { label: 'Documentation Time Saved', value: '30% faster', icon: BarChart2 },
        { label: 'Resident Satisfaction', value: 'Increased 40%', icon: Heart }
      ],
      technologies: ['Matrix EHR System', 'Custom Documentation Workflows', 'Staff Training Programs', 'Quality Improvement Frameworks'],
      impact: 'Transformed care delivery processes, reduced administrative burden by 20 hours/week, and created sustainable quality improvement culture that continues to drive better patient outcomes.'
    },
    {
      icon: Wrench,
      title: 'Virtual Studio Programming Club',
      category: 'Educational Technology Initiative',
      description: 'Founded and led a student-run programming club focused on teaching CAD, animation, and coding fundamentals. Grew the club from 5 to 30+ active participants while collaborating with college IT to secure resources and organize inter-collegiate competitions.',
      metrics: [
        { label: 'Club Growth', value: '5 → 30+ members', icon: Users },
        { label: 'Workshops Led', value: '40+ sessions', icon: Sparkles },
        { label: 'Software Licenses Secured', value: 'AutoCAD, Blender, VS Code', icon: Trophy },
        { label: 'Student Projects Completed', value: '15+ capstone projects', icon: BarChart2 }
      ],
      technologies: ['AutoCAD', 'Blender', 'Visual Studio Code', 'GitHub', 'Project-Based Learning'],
      impact: 'Created a sustainable technical education program that continues to operate today, providing valuable STEM skills to healthcare and IT students while fostering leadership and peer-to-peer learning.'
    },
    {
      icon: BarChart2,
      title: 'Walgreens POS System Optimization',
      category: 'Process Improvement Project',
      description: 'Identified and resolved recurring technical issues with point-of-sale systems that were causing customer service delays. Developed troubleshooting guides and training materials that reduced average resolution time by 60%.',
      metrics: [
        { label: 'Issue Resolution Time', value: '↓ 60%', icon: Sparkles },
        { label: 'Customer Wait Time', value: '↓ 35%', icon: Users },
        { label: 'Associate Confidence', value: '↑ 50%', icon: Trophy },
        { label: 'Repeat Issues', value: '↓ 80%', icon: Wrench }
      ],
      technologies: ['NCR Aloha POS', 'Barcode Scanners', 'Receipt Printers', 'Troubleshooting Documentation', 'Training Videos'],
      impact: 'Improved customer satisfaction scores during peak hours, reduced employee frustration with technology, and created a knowledge base that continues to support new associate onboarding.'
    },
    {
      icon: Trophy,
      title: 'Crisis Intervention Protocol Enhancement',
      category: 'Behavioral Health Initiative',
      description: 'Enhanced crisis intervention protocols for a behavioral health facility by implementing standardized response procedures, staff de-escalation training, and improved documentation practices that improved response efficiency and patient safety.',
      metrics: [
        { label: 'Response Time', value: '↓ 40%', icon: Sparkles },
        { label: 'Staff Confidence', value: '↑ 45%', icon: Users },
        { label: 'Incident Recurrence', value: '↓ 50%', icon: Trophy },
        { label: 'Documentation Compliance', value: '↑ 90%', icon: BarChart2 }
      ],
      technologies: ['Standardized Protocols', 'De-escalation Training', 'Incident Reporting System', 'Safety Planning Tools'],
      impact: 'Created safer environment for both patients and staff, reduced use of restrictive interventions, and improved overall quality of care through more predictable and effective crisis response.'
    }
  ];

  return (
    <div className="cosmic-bg min-h-screen relative">
      <BackgroundLayers variant="full" />
      <div className="max-w-6xl mx-auto px-4 py-16 pt-24 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6"><span className="text-cosmic-starlight">My</span><span className="text-cosmic-gold"> Case Studies</span></h2>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto">Detailed look at key initiatives where I've driven measurable impact through healthcare coordination, technology implementation, and process improvement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="glass-morphism rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:border-cosmic-gold/50 border border-cosmic-gold/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cosmic-gold/10 rounded flex items-center justify-center"><study.icon className="w-6 h-6 text-cosmic-gold" /></div>
                  <div><h3 className="text-xl font-semibold text-cosmic-gold">{study.title}</h3><p className="text-sm text-cosmic-starlight/60">{study.category}</p></div>
                </div>
                <a href="#" className="text-xs text-cosmic-gold hover:text-cosmic-starlight/70 transition-colors">Details →</a>
              </div>
              <p className="text-cosmic-starlight/70 text-sm leading-relaxed mb-4">{study.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">{study.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-cosmic-black/30 rounded"><metric.icon className="w-4 h-4 text-cosmic-gold" /><span>{metric.value}</span></div>
              ))}</div>
              <div className="flex flex-wrap gap-2 mb-4">{study.technologies.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-cosmic-gold/10 rounded text-xs text-cosmic-starlight/60">{tech}</span>
              ))}</div>
              <div className="border-t border-cosmic-gold/20 pt-4"><p className="text-cosmic-starlight/80 italic text-sm leading-relaxed">"{study.impact}"</p></div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center glass-morphism rounded-xl p-8">
          <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Explore My Work Further</h3>
          <p className="text-cosmic-starlight/80 mb-6">Want to see the code behind these projects or discuss how I can bring similar results to your organization?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/ThunderConstellations" className="px-6 py-3 lightning-btn inline-flex items-center justify-center gap-2">View GitHub Portfolio</a>
            <a href="/contact" className="px-6 py-3 border border-cosmic-gold/30 rounded-lg text-cosmic-gold hover:bg-cosmic-gold/10 transition-colors inline-flex items-center justify-center gap-2">Let's Discuss</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
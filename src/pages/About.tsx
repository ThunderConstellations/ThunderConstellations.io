
import React from 'react';
import { Heart, Users, Award, Target, Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';
import { SkillsProgress } from '../components/ui/animated-progress';

const About = () => {
  const healthcareSkills = [
    { name: 'Care Coordination', level: 95, category: 'Healthcare' },
    { name: 'Crisis Intervention', level: 90, category: 'Healthcare' },
    { name: 'Patient Advocacy', level: 88, category: 'Healthcare' },
    { name: 'Clinical Documentation', level: 92, category: 'Healthcare' },
    { name: 'Mental Health Support', level: 85, category: 'Healthcare' }
  ];

  const leadershipSkills = [
    { name: 'Team Leadership', level: 88, category: 'Leadership' },
    { name: 'Staff Training', level: 90, category: 'Leadership' },
    { name: 'Process Improvement', level: 85, category: 'Leadership' },
    { name: 'Conflict Resolution', level: 82, category: 'Leadership' },
    { name: 'Project Management', level: 78, category: 'Leadership' }
  ];

  const technicalSkills = [
    { name: 'IT Support & Troubleshooting', level: 75, category: 'Technical' },
    { name: 'Documentation Systems', level: 90, category: 'Technical' },
    { name: 'Process Automation', level: 65, category: 'Technical' },
    { name: 'Microsoft Office Suite', level: 85, category: 'Technical' },
    { name: 'Problem Solving', level: 92, category: 'Technical' }
  ];

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-20">
        {/* Hero Section with Name Prominence */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-cosmic-gold">Austin Wood</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cosmic-gold to-cosmic-starlight mx-auto mb-6"></div>
            <h2 className="text-3xl font-semibold mb-4">
              <span className="text-cosmic-starlight">Healthcare Professional</span>
              <span className="text-cosmic-gold"> & </span>
              <span className="text-cosmic-starlight">Technology Enthusiast</span>
            </h2>
          </div>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto leading-relaxed">
            Bridging healthcare expertise with innovative technology solutions to improve patient care, 
            streamline processes, and drive meaningful outcomes in healthcare settings.
          </p>
        </div>

        {/* Enhanced Contact Info Bar */}
        <div className="glass-morphism rounded-xl p-6 mb-12 border border-cosmic-gold/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-cosmic-starlight/90">
            <div className="flex items-center gap-3 p-3 bg-cosmic-gold/10 rounded-lg">
              <Mail className="w-5 h-5 text-cosmic-gold" />
              <div>
                <p className="text-xs text-cosmic-gold font-medium">Email</p>
                <p className="text-sm">19austinwood96@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-cosmic-gold/10 rounded-lg">
              <Phone className="w-5 h-5 text-cosmic-gold" />
              <div>
                <p className="text-xs text-cosmic-gold font-medium">Phone</p>
                <p className="text-sm">(312) 869-0851</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-cosmic-gold/10 rounded-lg">
              <MapPin className="w-5 h-5 text-cosmic-gold" />
              <div>
                <p className="text-xs text-cosmic-gold font-medium">Location</p>
                <p className="text-sm">Chicago, IL 60626</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-cosmic-gold/10 rounded-lg">
              <Github className="w-5 h-5 text-cosmic-gold" />
              <div>
                <p className="text-xs text-cosmic-gold font-medium">GitHub</p>
                <p className="text-sm">ThunderConstellations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: 'Healthcare Excellence',
              description: '5+ years of dedicated experience in mental health support and care coordination, working directly with patients and clinical teams to achieve improved outcomes and quality of life.',
              highlights: ['Crisis Intervention Certified', 'Mental Health First Aid', 'Patient Advocacy']
            },
            {
              icon: Users,
              title: 'Care Coordination Specialist',
              description: 'Expert in helping patients navigate complex healthcare systems, connecting them with appropriate resources, and ensuring continuity of care across multiple providers.',
              highlights: ['Resource Navigation', 'Multi-provider Coordination', 'Patient Support']
            },
            {
              icon: Award,
              title: 'Program Leadership',
              description: 'Proven track record leading mental health programs with high completion rates, developing efficient workflows, and implementing process improvements.',
              highlights: ['Team Management', 'Process Optimization', 'Quality Improvement']
            },
            {
              icon: Target,
              title: 'Technology Integration',
              description: 'Passionate about leveraging technology to address healthcare challenges, with growing expertise in IT support and process automation.',
              highlights: ['IT Support Certified', 'Process Automation', 'Documentation Systems']
            }
          ].map((item, index) => (
            <div key={index} className="project-card group hover:border-cosmic-gold/50 transition-all duration-300">
              <item.icon className="w-12 h-12 text-cosmic-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-cosmic-gold mb-3">{item.title}</h3>
              <p className="text-cosmic-starlight/80 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight, i) => (
                  <span key={i} className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills - Enhanced Sections */}
        <div className="space-y-12 mb-16">
          <div className="glass-morphism rounded-xl p-8 border border-cosmic-gold/20">
            <SkillsProgress 
              skills={healthcareSkills}
              title="Healthcare & Clinical Expertise"
              className="mb-0"
            />
          </div>

          <div className="glass-morphism rounded-xl p-8 border border-cosmic-gold/20">
            <SkillsProgress 
              skills={leadershipSkills}
              title="Leadership & Management"
              className="mb-0"
            />
          </div>

          <div className="glass-morphism rounded-xl p-8 border border-cosmic-gold/20">
            <SkillsProgress 
              skills={technicalSkills}
              title="Technical & Administrative"
              className="mb-0"
            />
          </div>
        </div>

        {/* Enhanced Professional Journey */}
        <div className="glass-morphism rounded-xl p-8 mb-12 border border-cosmic-gold/20">
          <h2 className="text-3xl font-bold text-cosmic-gold mb-6">Austin's Professional Journey</h2>
          <div className="space-y-6 text-cosmic-starlight/90 leading-relaxed">
            <div className="border-l-4 border-cosmic-gold/50 pl-6">
              <h3 className="text-xl font-semibold text-cosmic-gold mb-2">Healthcare Foundation</h3>
              <p className="mb-4">
                My career in healthcare has been built on a foundation of compassionate care and dedication to improving patient outcomes. 
                Through direct patient interaction and clinical support, I've developed a comprehensive understanding of healthcare systems 
                and the critical importance of effective communication and coordination.
              </p>
            </div>
            
            <div className="border-l-4 border-cosmic-gold/50 pl-6">
              <h3 className="text-xl font-semibold text-cosmic-gold mb-2">Leadership Excellence</h3>
              <p className="mb-4">
                Leading mental health programs has taught me the value of team collaboration and process improvement. 
                I've successfully managed programs with completion rates exceeding industry standards while developing 
                workflows that enhanced both patient satisfaction and team efficiency.
              </p>
            </div>

            <div className="border-l-4 border-cosmic-gold/50 pl-6">
              <h3 className="text-xl font-semibold text-cosmic-gold mb-2">Technology Integration</h3>
              <p className="mb-4">
                Recognizing the growing importance of technology in healthcare, I've pursued IT certifications and 
                developed skills in process automation and documentation systems. This unique combination of healthcare 
                expertise and technical knowledge positions me to drive innovation in healthcare technology.
              </p>
            </div>

            <div className="border-l-4 border-cosmic-gold/50 pl-6">
              <h3 className="text-xl font-semibold text-cosmic-gold mb-2">Future Vision</h3>
              <p>
                I'm excited about opportunities to leverage my healthcare expertise alongside emerging technologies 
                to create solutions that address real-world healthcare challenges, improve patient care, and 
                streamline healthcare processes for better outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Certifications & Achievements */}
        <div className="glass-morphism rounded-xl p-8 border border-cosmic-gold/20">
          <h2 className="text-3xl font-bold text-cosmic-gold mb-6 flex items-center gap-3">
            <Award className="w-8 h-8" />
            Professional Certifications & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/20 rounded-lg border border-cosmic-gold/30">
                <Award className="w-6 h-6 text-cosmic-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-cosmic-gold">Google IT Support Professional Certificate</h4>
                  <p className="text-cosmic-starlight/70 text-sm mb-2">Comprehensive technical troubleshooting and IT support skills</p>
                  <p className="text-xs text-cosmic-gold">• Hardware/Software Troubleshooting • Network Administration • Customer Service</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/20 rounded-lg border border-cosmic-gold/30">
                <Award className="w-6 h-6 text-cosmic-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-cosmic-gold">Mental Health First Aid Certification</h4>
                  <p className="text-cosmic-starlight/70 text-sm mb-2">Crisis intervention and mental health support training</p>
                  <p className="text-xs text-cosmic-gold">• Crisis Recognition • De-escalation Techniques • Resource Connection</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/20 rounded-lg border border-cosmic-gold/30">
                <Award className="w-6 h-6 text-cosmic-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-cosmic-gold">Crisis Intervention Training</h4>
                  <p className="text-cosmic-starlight/70 text-sm mb-2">Advanced emergency response and de-escalation certification</p>
                  <p className="text-xs text-cosmic-gold">• Emergency Response • De-escalation • Safety Protocols</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cosmic-gold/10 to-cosmic-gold/20 rounded-lg border border-cosmic-gold/30">
                <Award className="w-6 h-6 text-cosmic-gold mt-1" />
                <div>
                  <h4 className="font-semibold text-cosmic-gold">QSEP COVID-19 CMS Certification</h4>
                  <p className="text-cosmic-starlight/70 text-sm mb-2">Healthcare compliance and safety protocols expertise</p>
                  <p className="text-xs text-cosmic-gold">• Compliance Standards • Safety Protocols • Quality Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

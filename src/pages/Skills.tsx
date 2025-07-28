
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Brain, Heart, Code, Users, Award, TrendingUp, Target, Zap } from 'lucide-react';
import SkillsRadarChart from '../components/SkillsRadarChart';
import SkillsBarChart from '../components/SkillsBarChart';
import SkillMeter from '../components/SkillMeter';
import SkillsComparison from '../components/SkillsComparison';
import CertificationTimeline from '../components/CertificationTimeline';
import AnimatedSection from '../components/AnimatedSection';

// skills page - this is probably overkill but looks nice OwO
const Skills = () => {
  const healthcareSkills = [
    { skill: 'Care Coordination', level: 95, years: 5 },
    { skill: 'Mental Health Support', level: 90, years: 4 },
    { skill: 'Crisis Intervention', level: 88, years: 4 },
    { skill: 'Patient Advocacy', level: 92, years: 5 },
    { skill: 'Clinical Documentation', level: 85, years: 3 },
    { skill: 'HIPAA Compliance', level: 90, years: 5 }
  ];

  const technicalSkills = [
    { skill: 'IT Support', level: 75 },
    { skill: 'EHR Systems', level: 85 },
    { skill: 'Process Automation', level: 70 },
    { skill: 'Microsoft Office', level: 90 },
    { skill: 'Google Workspace', level: 88 },
    { skill: 'Documentation Systems', level: 92 }
  ];

  const leadershipData = [
    { category: 'Team Management', score: 90 },
    { category: 'Crisis Response', score: 95 },
    { category: 'Training & Development', score: 85 },
    { category: 'Process Improvement', score: 88 },
    { category: 'Communication', score: 92 },
    { category: 'Problem Solving', score: 90 }
  ];

  const skillsComparison = [
    { category: 'Healthcare', current: 90, target: 95 },
    { category: 'Leadership', current: 88, target: 92 },
    { category: 'Technical', current: 78, target: 85 },
    { category: 'Communication', current: 92, target: 95 },
    { category: 'Innovation', current: 75, target: 88 },
    { category: 'Analytics', current: 70, target: 82 }
  ];

  const certifications = [
    {
      title: 'Google IT Support Certificate',
      issuer: 'Google / Coursera',
      date: 'Completed 2024',
      status: 'completed' as const,
      description: 'Comprehensive IT support fundamentals including troubleshooting, networking, and system administration.',
      verificationUrl: 'https://coursera.org/verify/WT6EVZUJU9ZX'
    },
    {
      title: 'CompTIA A+',
      issuer: 'CompTIA',
      date: 'In Progress 2024',
      status: 'in-progress' as const,
      description: 'Industry-standard certification for IT technicians covering hardware, software, and troubleshooting.'
    },
    {
      title: 'QSEP COVID-19 Training',
      issuer: 'Centers for Medicare & Medicaid Services',
      date: 'Completed 2020',
      status: 'completed' as const,
      description: 'Specialized training in healthcare safety protocols during pandemic response.'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'Planned Q2 2024',
      status: 'planned' as const,
      description: 'Cloud computing fundamentals and Azure services overview.'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Planned Q3 2024',
      status: 'planned' as const,
      description: 'Foundational understanding of AWS cloud platform and services.'
    }
  ];

  const experienceBreakdown = [
    { name: 'Healthcare', value: 60, color: '#3B82F6' },
    { name: 'Leadership', value: 25, color: '#10B981' },
    { name: 'Technical', value: 15, color: '#F59E0B' }
  ];

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-7xl mx-auto pt-20">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-cosmic-starlight">Skills &</span>
              <span className="text-cosmic-gold"> Expertise</span>
            </h1>
            <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto">
              A comprehensive view of my professional competencies across healthcare, technology, and leadership domains
            </p>
          </div>
        </AnimatedSection>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Heart, label: 'Years in Healthcare', value: '5+', color: 'text-red-400' },
            { icon: Users, label: 'Patients Served', value: '400+', color: 'text-blue-400' },
            { icon: Award, label: 'Certifications', value: '4', color: 'text-cosmic-gold' },
            { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'text-green-400' }
          ].map((stat, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <div className="glass-morphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-cosmic-gold mb-1">{stat.value}</div>
                <div className="text-sm text-cosmic-starlight/70">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="slide-left" delay={200}>
            <SkillsBarChart data={healthcareSkills} title="Healthcare Expertise" />
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={400}>
            <SkillsRadarChart data={leadershipData} title="Leadership Profile" />
          </AnimatedSection>
        </div>

        {/* Skills Comparison & Development Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="fade-up" delay={600}>
            <SkillsComparison
              title="Current vs Target Skills"
              data={skillsComparison}
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="glass-morphism p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-cosmic-gold mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Experience Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={experienceBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {experienceBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid #FFD700',
                      borderRadius: '8px',
                      color: '#E5E7EB'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Detailed Technical Skills */}
        <AnimatedSection animation="fade-in" delay={1000}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cosmic-gold mb-8 text-center flex items-center justify-center gap-2">
              <Code className="w-8 h-8" />
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <SkillMeter
                  key={skill.skill}
                  skill={skill.skill}
                  level={skill.level}
                  category="technical"
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Healthcare Skills Grid */}
        <AnimatedSection animation="fade-in" delay={1200}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cosmic-gold mb-8 text-center flex items-center justify-center gap-2">
              <Heart className="w-8 h-8" />
              Healthcare Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {healthcareSkills.map((skill, index) => (
                <SkillMeter
                  key={skill.skill}
                  skill={skill.skill}
                  level={skill.level}
                  years={skill.years}
                  category="healthcare"
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Certifications Timeline */}
        <AnimatedSection animation="fade-up" delay={1400}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-cosmic-gold mb-8 text-center flex items-center justify-center gap-2">
              <Award className="w-8 h-8" />
              Professional Development Journey
            </h3>
            <CertificationTimeline certifications={certifications} />
          </div>
        </AnimatedSection>

        {/* Growth Mindset Section */}
        <AnimatedSection animation="scale-in" delay={1600}>
          <div className="glass-morphism p-8 rounded-xl text-center">
            <Zap className="w-12 h-12 text-cosmic-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Continuous Growth Mindset</h3>
            <p className="text-cosmic-starlight/90 max-w-3xl mx-auto mb-6">
              I believe in the power of continuous learning and skill development. My approach combines
              hands-on experience with formal certifications, always staying current with industry best
              practices and emerging technologies in healthcare and IT.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Lifelong Learning', 'Innovation', 'Excellence', 'Collaboration'].map((value, index) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-full border border-cosmic-gold/30 
                           hover:bg-cosmic-gold/30 transition-colors"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;

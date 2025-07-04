
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Brain, Heart, Code, Users, Award, TrendingUp } from 'lucide-react';

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
    { skill: 'IT Support', level: 75, category: 'Technical' },
    { skill: 'EHR Systems', level: 85, category: 'Healthcare Tech' },
    { skill: 'Process Automation', level: 70, category: 'Technical' },
    { skill: 'Microsoft Office', level: 90, category: 'Software' },
    { skill: 'Google Workspace', level: 88, category: 'Software' },
    { skill: 'Documentation Systems', level: 92, category: 'Healthcare Tech' }
  ];

  const leadershipData = [
    { category: 'Team Management', score: 90 },
    { category: 'Crisis Response', score: 95 },
    { category: 'Training & Development', score: 85 },
    { category: 'Process Improvement', score: 88 },
    { category: 'Communication', score: 92 },
    { category: 'Problem Solving', score: 90 }
  ];

  const experienceBreakdown = [
    { name: 'Healthcare', value: 60, color: '#3B82F6' },
    { name: 'Leadership', value: 25, color: '#10B981' },
    { name: 'Technical', value: 15, color: '#F59E0B' }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-7xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Skills &</span>
            <span className="text-cosmic-gold"> Expertise</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto">
            A comprehensive view of my professional competencies across healthcare, technology, and leadership domains
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Heart, label: 'Years in Healthcare', value: '5+', color: 'text-red-400' },
            { icon: Users, label: 'Patients Served', value: '100+', color: 'text-blue-400' },
            { icon: Award, label: 'Certifications', value: '4', color: 'text-cosmic-gold' },
            { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'text-green-400' }
          ].map((stat, index) => (
            <div key={index} className="glass-morphism p-6 rounded-xl text-center">
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-cosmic-gold mb-1">{stat.value}</div>
              <div className="text-sm text-cosmic-starlight/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Healthcare Skills Bar Chart */}
          <div className="glass-morphism p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-cosmic-gold mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Healthcare Expertise
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={healthcareSkills}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 215, 0, 0.1)" />
                <XAxis 
                  dataKey="skill" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fill: '#E5E7EB', fontSize: 12 }}
                />
                <YAxis tick={{ fill: '#E5E7EB' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    border: '1px solid #FFD700',
                    borderRadius: '8px',
                    color: '#E5E7EB'
                  }}
                  formatter={(value, name) => [`${value}%`, 'Proficiency']}
                />
                <Bar dataKey="level" fill="#FFD700" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Leadership Radar Chart */}
          <div className="glass-morphism p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-cosmic-gold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Leadership Profile
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={leadershipData}>
                <PolarGrid stroke="rgba(255, 215, 0, 0.2)" />
                <PolarAngleAxis tick={{ fill: '#E5E7EB', fontSize: 12 }} />
                <PolarRadiusAxis 
                  tick={{ fill: '#E5E7EB', fontSize: 10 }} 
                  domain={[0, 100]}
                />
                <Radar 
                  name="Skills" 
                  dataKey="score" 
                  stroke="#FFD700" 
                  fill="#FFD700" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Distribution Pie Chart */}
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

          {/* Technical Skills List */}
          <div className="glass-morphism p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-cosmic-gold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Technical Competencies
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-cosmic-starlight font-medium">{skill.skill}</div>
                    <div className="text-cosmic-starlight/60 text-sm">{skill.category}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-cosmic-starlight/20 rounded-full h-2">
                      <div 
                        className="bg-cosmic-gold h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-cosmic-gold font-medium w-12 text-right">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Growth */}
        <div className="mt-12 glass-morphism p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-cosmic-gold mb-6 text-center">Professional Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Google IT Support', status: 'Certified', year: '2024' },
              { title: 'Mental Health First Aid', status: 'Certified', year: '2023' },
              { title: 'Crisis Intervention', status: 'Certified', year: '2022' },
              { title: 'CompTIA A+', status: 'In Progress', year: '2024' }
            ].map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-cosmic-gold/10 to-cosmic-gold/20 p-4 rounded-lg border border-cosmic-gold/30">
                <div className="text-cosmic-gold font-semibold mb-2">{cert.title}</div>
                <div className="text-cosmic-starlight/70 text-sm mb-1">{cert.status}</div>
                <div className="text-cosmic-starlight/50 text-xs">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

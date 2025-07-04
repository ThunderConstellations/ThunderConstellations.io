
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import { SearchComponent } from '../components/ui/search-functionality';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Healthcare Technology: Bridging Care and Innovation',
      excerpt: 'Exploring how technology can enhance patient care while maintaining the human touch that makes healthcare meaningful.',
      content: `Healthcare technology is rapidly evolving, but the most successful implementations are those that enhance rather than replace human connection. As someone who has worked directly with patients and now explores technical solutions, I believe the future lies in thoughtful integration.

## Key Areas of Innovation

**Electronic Health Records (EHR) Optimization**
My experience with Matrix and other EHR systems has shown me both the potential and the pain points. The future of EHR lies in better interoperability and user-centered design.

**Care Coordination Platforms**
Having coordinated care for 100+ patients, I've seen firsthand how fragmented communication can impact outcomes. Technology should streamline these connections, not complicate them.

**Mental Health Support Tools**
Digital tools can extend the reach of mental health services, but they must be designed with empathy and clinical oversight.

## The Human Element

Technology should amplify our ability to care, not diminish it. The most effective healthcare technologies I've encountered are those that give clinicians more time to focus on what matters most: the patient relationship.`,
      author: 'Austin Wood',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Healthcare Technology',
      tags: ['Healthcare', 'Technology', 'Innovation', 'Patient Care']
    },
    {
      id: '2',
      title: 'From Psychology to IT: A Journey in Problem-Solving',
      excerpt: 'How my background in psychology has shaped my approach to technical challenges and user support.',
      content: `The transition from psychology to IT might seem unusual, but the skills are more transferable than you might think. Both fields require systematic problem-solving, empathy, and the ability to translate complex concepts into understandable terms.

## Psychology Principles in IT Support

**Active Listening**
In both counseling and IT support, the first step is truly understanding the problem. Sometimes the stated issue isn't the real issue.

**De-escalation Techniques**
Crisis intervention skills translate directly to handling frustrated users and high-pressure technical situations.

**Systems Thinking**
Understanding how human behavior fits into larger systems helps me approach technical problems holistically.

## Building Technical Skills

My journey through the Google IT Support Certificate program reinforced many concepts I already understood about systematic problem-solving. The technical knowledge was new, but the approach felt familiar.

**Automation and Efficiency**
Tools like N8N and Cursor represent the intersection of technical capability and process improvement – something I've been passionate about throughout my career.

## The Future

I'm excited about roles that combine technical skills with people skills, where understanding both the technology and the human element creates better solutions for everyone.`,
      author: 'Austin Wood',
      date: '2024-12-10',
      readTime: '4 min read',
      category: 'Career Development',
      tags: ['Career Change', 'Psychology', 'IT Support', 'Problem Solving']
    },
    {
      id: '3',
      title: 'Process Improvement in Healthcare: Small Changes, Big Impact',
      excerpt: 'Real-world examples of how systematic improvements can transform patient care and staff efficiency.',
      content: `During my time as a Lead Case Manager, I discovered that small, systematic changes could dramatically improve both patient outcomes and staff satisfaction. Here are some approaches that made a real difference.

## Documentation Efficiency

**The Problem**: Staff spent excessive time searching for resident information, leading to delays in care and frustration.

**The Solution**: I redesigned our filing system with color-coded categories and standardized naming conventions. This reduced information retrieval time by 60%.

**The Impact**: Nurses could spend more time with patients, and regulatory compliance improved significantly.

## COVID-19 Testing Protocols

**The Challenge**: Achieving 100% testing compliance across the facility while minimizing disruption to daily routines.

**The Approach**: Created visual scheduling systems and pre-populated documentation templates.

**The Result**: Consistent 100% compliance rate with reduced stress for both staff and residents.

## Crisis Response Procedures

**The Need**: Standardized approaches to mental health crises that maintained dignity while ensuring safety.

**The Implementation**: Developed step-by-step protocols with decision trees and trained all staff on de-escalation techniques.

**The Outcome**: Reduced incident reports and improved resident satisfaction scores.

## Key Principles

1. **Involve the Front Line**: The best improvement ideas come from people doing the work daily.
2. **Start Small**: Pilot changes with small groups before facility-wide implementation.
3. **Measure Impact**: Track both quantitative metrics and qualitative feedback.
4. **Continuous Iteration**: No process is perfect – be prepared to adjust and improve.

These experiences taught me that process improvement isn't about imposing solutions from above – it's about creating systems that help people do their best work.`,
      author: 'Austin Wood',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Process Improvement',
      tags: ['Healthcare', 'Process Improvement', 'Leadership', 'Efficiency']
    }
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const searchItems = blogPosts.map(post => ({
    id: post.id,
    title: post.title,
    content: post.excerpt + ' ' + post.content,
    category: post.category,
    url: `#${post.id}`
  }));

  const handleSearchResult = (item: any) => {
    const post = blogPosts.find(p => p.id === item.id);
    if (post) {
      setSelectedPost(post);
    }
  };

  if (selectedPost) {
    return (
      <div className="cosmic-bg min-h-screen p-8">
        <div className="max-w-4xl mx-auto pt-20">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center gap-2 text-cosmic-gold hover:text-cosmic-starlight transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </button>

          <article className="glass-morphism rounded-xl p-8">
            <header className="mb-8 pb-6 border-b border-cosmic-gold/30">
              <h1 className="text-4xl font-bold text-cosmic-gold mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-cosmic-starlight/70 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {selectedPost.category}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedPost.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <div className="text-cosmic-starlight/90 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Tech &</span>
            <span className="text-cosmic-gold"> Healthcare Blog</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-2xl mx-auto mb-8">
            Insights on healthcare technology, process improvement, and the intersection of empathy and innovation
          </p>

          <div className="max-w-md mx-auto mb-8">
            <SearchComponent
              items={searchItems}
              onResultClick={handleSearchResult}
              placeholder="Search blog posts..."
              className="w-full"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cosmic-gold text-cosmic-black'
                  : 'bg-cosmic-gold/20 text-cosmic-gold hover:bg-cosmic-gold/30 border border-cosmic-gold/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="project-card cursor-pointer group"
              onClick={() => setSelectedPost(post)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-cosmic-gold/20 text-cosmic-gold text-xs rounded-full border border-cosmic-gold/30">
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-bold text-cosmic-gold mb-3 group-hover:text-cosmic-starlight transition-colors">
                {post.title}
              </h2>

              <p className="text-cosmic-starlight/80 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-cosmic-starlight/60 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-cosmic-gold group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="flex flex-wrap gap-1 mt-3">
                {post.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-cosmic-gold/10 text-cosmic-gold text-xs rounded border border-cosmic-gold/20"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 text-cosmic-starlight/50 text-xs">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-cosmic-starlight/60 text-lg">
              No posts found in the "{selectedCategory}" category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

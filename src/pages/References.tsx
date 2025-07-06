
import React from 'react';
import { Download, Mail, Phone, MapPin, Award, Users, Building, Calendar, ExternalLink } from 'lucide-react';

const References = () => {
  const references = [
    {
      id: 1,
      name: "Dr. Jacob Fyda, MD",
      title: "Psychiatrist",
      organization: "Private Practice",
      relationship: "Collaborating Physician",
      duration: "September 2020",
      email: "jacobfyda@gmail.com",
      phone: "(727) 415-3993",
      address: "727 W Madison Street, Apt 4302, Chicago, IL 60620",
      summary: "Dr. Fyda provided a comprehensive recommendation during Austin's work at Bryn Mawr Care, highlighting his exceptional organizational and patient care abilities.",
      highlights: [
        "Assisted in scheduling appointments for a large caseload of patients",
        "Coordinated clinic visits with exceptional organizational skills",
        "Demonstrated ability to work with challenging patients effectively",
        "Quick at learning, very dynamic, and hard-working",
        "Excellent written and verbal communication skills"
      ],
      testimonial: "It is with great enthusiasm that I write this letter to refer Austin T. Wood in his pursuit of assisting others in the Health Care field. During my interaction with Mr. Wood at Bryn Mawr Care, he had assisted me in scheduled appointments a large caseload of patients, and coordinated their visits. He was tasked with organizing a clinic that was often dynamic and unpredictable. He was able to execute this flawlessly and was a great asset in my work there. Mr. Wood is quick at learning, very dynamic, and hard-working. He worked well with our most challenging patients. Mr. Wood has shown to maneuver schedules to adjust with flexibility to ensure that patients were able to meet with me within a timely manner. He is also passionate at work, is very willing to take over new challenges and responsibilities, and has excellent written and verbal communication skills. I have total confidence that Mr. Wood would be a valuable asset to any organization. If you have any questions please feel free to reach out to me.",
      letterImage: "/lovable-uploads/63ed8dbe-b07f-4949-8a78-114e79d972b3.png"
    },
    {
      id: 2,
      name: "Jessie Lintz, MA, LPC",
      title: "Social Services Director",
      organization: "Central Nursing Home",
      relationship: "Direct Supervisor",
      duration: "2019 - 2020",
      email: "Not provided",
      phone: "(773) 998-1333",
      address: "2450 N Central Ave, Chicago, IL 60639",
      summary: "Jessie Lintz supervised Austin during his role as Mental Health Professional at Bryn Mawr Care, praising his effectiveness and empathy.",
      highlights: [
        "Hard worker, intelligent, and effective in duties",
        "Displayed appropriate and effective empathy and support to clients",
        "Managed a caseload of 30 consumers at a Specialized Mental Health Facility",
        "Successful completion of documentation in timely fashion",
        "Impactful and creative employee"
      ],
      testimonial: "Austin was an employee of mine for approximately a year as a MHP when I was Social Services Director at Bryn Mawr Care from 2019 - 2020. They were a hard worker, intelligent, and effective in their duties. Austin displayed appropriate and effective empathy and support to his clients. They managed a caseload of 30 consumers at a Specialized Mental Health Facility and their duties included behavioral management, psychoeducational groups, 1:1 sessions, documentation, assessment, etc. Austin successfully completed documentation and in a timely fashion, supported coworkers and clients. Austin proved to be a impactful and creative employee, and would be a benefit for your company. If you have any questions, please call me at 773-889-1333.",
      letterImage: "/lovable-uploads/39ad4e64-b2a0-45c7-9bbe-32de01dfb637.png"
    },
    {
      id: 3,
      name: "Cynthia M Czapla, MALS",
      title: "Academic Advisor",
      organization: "Ivy Tech Community College - Valparaiso Campus",
      relationship: "Academic Advisor",
      duration: "2016 - 2018",
      email: "cczapla@ivytech.edu",
      phone: "Not provided",
      address: "Ivy Tech Community College, Valparaiso Campus",
      summary: "Cynthia served as Austin's academic advisor during his Associate Degree in Psychology and observed his exceptional academic and leadership qualities.",
      highlights: [
        "Efficient, detail-oriented, and extremely competent",
        "Successfully finished tasks well before deadlines",
        "Extremely organized and never missed meetings",
        "Excelled in coursework with excellent rapport with professors and peers",
        "Excellent communication skills (both written and verbal)"
      ],
      testimonial: "This letter serves as a character reference for Austin Wood, one of my former students at Ivy Tech Community College, Valparaiso Campus. I had the pleasure of being Austin's academic advisor for his Associate Degree in Psychology, and he was also a student in my Interpersonal Communication course. Austin is efficient, detail-oriented, and extremely competent. He often successfully finishes a task well before the deadline. He is extremely organized, and never missed a meeting with me, and excelled in his coursework. Austin also had an excellent rapport with his professors and peers at Ivy Tech Community College. His excellent communication skills (both written and verbal) allowed him to connect with all kinds of people and to inspire them. In summary, Austin has been a wonderful student of good character, and I believe wholeheartedly that he will be an asset to any employer that chooses to hire him.",
      letterImage: "/lovable-uploads/5895fdec-427b-4e89-95cb-4bc9000a8dcb.png"
    },
    {
      id: 4,
      name: "Julie A. Moore",
      title: "Teacher/Counselor",
      organization: "Washington Township Middle-High School",
      relationship: "High School Teacher",
      duration: "2013 - 2015",
      email: "Not provided",
      phone: "Not provided",
      address: "Washington Township School, East Porter County School Corporation",
      summary: "Julie Moore taught Austin during high school and witnessed his remarkable leadership abilities and academic excellence.",
      highlights: [
        "Remarkable young man who really stands out",
        "Takes challenging courses and excels at them",
        "Excellent balance between academics and extracurricular activities",
        "Tremendous amount of leadership and determination",
        "Started Virtual Studio club teaching programming to students",
        "Good role model for other students"
      ],
      testimonial: "I am writing this letter of recommendation for Austin Wood. I have gotten to know Austin both inside and outside the classroom. He is a remarkable young man. Austin is a student who really stands out. He takes courses that are challenging and excels at them, including my dual-credit Business Law course this year. He is able to manage his time well between academics and extracurricular activities. Through his many activities, Austin has been able to show a tremendous amount of leadership and determination. Austin has competed on my DECA team and did well. Austin also started a Virtual Studio club where he taught various aspects of programming to students who has little to no experience, which takes a great amount of skill. He would hold meetings outside of school and challenged the members to develop a solid foundation in the world of coding. In my opinion, Austin is a good role model for other students. By juggling many activities and his academics, Austin is truly an incredible young man. His level of devotion to various activities and academics is amazing. I am confident he will be successful in anything that he does.",
      letterImage: "/lovable-uploads/2e49d4d3-f919-4b4c-89fc-fd77915dc6b6.png"
    },
    {
      id: 5,
      name: "Jennifer L. Symer",
      title: "Counselor",
      organization: "Washington Township MS/HS",
      relationship: "High School Counselor",
      duration: "2013 - 2015",
      email: "Jennifer.symer@eastporter.k12.in.us",
      phone: "(219) 464-3598 x5367",
      address: "Washington Township School, East Porter County School Corporation",
      summary: "Jennifer Symer worked with Austin as his high school guidance counselor and recognized his exceptional motivation and leadership skills.",
      highlights: [
        "Consistently demonstrated high level of motivation and strong work ethic",
        "Very positive attitude and attention to detail",
        "Started new club called Virtual Studio at the school",
        "Knowledge and love for computers led to impressive club growth",
        "Leadership skills blossomed during high school years",
        "Ready for college-level challenges"
      ],
      testimonial: "It is with great pleasure that I write this letter of recommendation for Austin Wood. I have worked with Austin for two years as his high school guidance counselor, and he has consistently demonstrated a high level of motivation, a strong work ethic, and a very positive attitude. Austin is a good student who strives diligently to accomplish the goals he has set for himself. He pays attention to detail, works well with others, and sees every task through to completion. One of the most exceptional things about Austin is that he started a new club at our school last year called Virtual Studio. Austin's knowledge of, and love for computers led him to this venture and the club has grown impressively under his guidance as president. Austin's leadership skills have blossomed during his time at Washington Township and I know that he is ready for the rewards and challenges that college level study will provide. I recommend him highly for admission to your institution.",
      letterImage: "/lovable-uploads/eb1813ae-44b6-4b32-bc87-978f8606588e.png"
    }
  ];

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Professional</span>
            <span className="text-cosmic-gold"> References</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto">
            Character references and professional recommendations from healthcare professionals, 
            academic advisors, and educators who have worked directly with me throughout my career and education.
          </p>
        </div>

        {/* Reference Cards */}
        <div className="space-y-8">
          {references.map((reference) => (
            <div key={reference.id} className="glass-morphism rounded-xl p-8 border border-cosmic-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Reference Details */}
                <div className="lg:col-span-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-cosmic-gold mb-2">{reference.name}</h3>
                    <p className="text-lg text-cosmic-starlight/90 mb-1">{reference.title}</p>
                    <div className="flex items-center gap-2 text-cosmic-starlight/70 mb-2">
                      <Building className="w-4 h-4" />
                      <span>{reference.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cosmic-starlight/70 mb-2">
                      <Users className="w-4 h-4" />
                      <span>{reference.relationship}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cosmic-starlight/70 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{reference.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-6">
                    {reference.email !== "Not provided" && (
                      <div className="flex items-center gap-2 text-cosmic-starlight/60">
                        <Mail className="w-4 h-4 text-cosmic-gold" />
                        <span>{reference.email}</span>
                      </div>
                    )}
                    {reference.phone !== "Not provided" && (
                      <div className="flex items-center gap-2 text-cosmic-starlight/60">
                        <Phone className="w-4 h-4 text-cosmic-gold" />
                        <span>{reference.phone}</span>
                      </div>
                    )}
                    {reference.address && (
                      <div className="flex items-start gap-2 text-cosmic-starlight/60">
                        <MapPin className="w-4 h-4 text-cosmic-gold mt-0.5" />
                        <span className="text-xs">{reference.address}</span>
                      </div>
                    )}
                  </div>

                  {/* Reference Letter Image */}
                  <div className="mb-4">
                    <button 
                      onClick={() => window.open(reference.letterImage, '_blank')}
                      className="group glass-morphism p-3 rounded-lg border border-cosmic-gold/30 hover:border-cosmic-gold/60 transition-all duration-300 hover:scale-105 w-full"
                    >
                      <div className="flex items-center gap-2 text-cosmic-gold mb-2">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-semibold">View Original Letter</span>
                      </div>
                      <img 
                        src={reference.letterImage} 
                        alt={`Reference letter from ${reference.name}`}
                        className="w-full h-32 object-cover rounded border border-cosmic-gold/20 group-hover:border-cosmic-gold/40 transition-colors"
                      />
                    </button>
                  </div>
                </div>

                {/* Reference Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cosmic-gold mb-3">Professional Summary</h4>
                    <p className="text-cosmic-starlight/90 leading-relaxed">{reference.summary}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cosmic-gold mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {reference.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-cosmic-starlight/80">
                          <Award className="w-4 h-4 text-cosmic-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-morphism p-4 rounded-lg border border-cosmic-gold/20">
                    <h4 className="text-lg font-semibold text-cosmic-gold mb-3">Letter of Recommendation</h4>
                    <blockquote className="text-cosmic-starlight/90 italic leading-relaxed text-sm">
                      "{reference.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center glass-morphism p-8 rounded-xl border border-cosmic-gold/20">
          <h2 className="text-2xl font-bold text-cosmic-gold mb-4">Reference Verification</h2>
          <p className="text-cosmic-starlight/80 mb-6">
            All references are available for direct contact and can provide additional details 
            about my professional performance, clinical skills, and character.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-cosmic-starlight/70">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cosmic-gold" />
              19austinwood96@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cosmic-gold" />
              (219) 299-3702
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cosmic-gold" />
              Chicago, IL 60626
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;

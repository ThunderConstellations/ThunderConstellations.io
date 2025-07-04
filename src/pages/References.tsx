
import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, User, Calendar, FileText } from 'lucide-react';

const References = () => {
  const [selectedReference, setSelectedReference] = useState<number | null>(null);

  const references = [
    {
      id: 1,
      name: "Dr. Jacob Fyda, MD",
      title: "Psychiatrist",
      email: "jacobfyda@gmail.com",
      phone: "727-415-3993",
      address: "727 W Madison Street, Apt 4302, Chicago, IL 60620",
      relationship: "Direct Supervisor",
      fullLetter: `To Whom It May Concern:

I am writing to provide a strong recommendation for Austin T. Wood, who worked under my supervision as a Mental Health Professional and scheduling coordinator. During his tenure with our psychiatric practice, Austin demonstrated exceptional organizational skills, professional demeanor, and genuine care for our patients.

Austin was tasked with organizing a clinic that was often dynamic and unpredictable, managing appointments for a large caseload of patients with complex mental health needs. He consistently executed these responsibilities flawlessly and proved to be a great asset to our practice. His ability to coordinate care, manage scheduling conflicts, and maintain accurate documentation was exemplary.

What impressed me most about Austin was his ability to work effectively with our most challenging patients. He demonstrated appropriate empathy, maintained professional boundaries, and showed remarkable patience in difficult situations. His quick learning ability and dynamic approach to problem-solving made him an invaluable team member.

Austin is hardworking, intelligent, and brings a positive attitude to the workplace. He consistently met deadlines, maintained confidentiality, and showed initiative in improving our processes. His background in psychology, combined with his practical experience, makes him well-suited for roles requiring both technical competency and interpersonal skills.

I recommend Austin without reservation for positions in healthcare, mental health support, or any role requiring organizational excellence and people skills. He would be a valuable addition to any organization.

Sincerely,

Dr. Jacob Fyda, MD
Psychiatrist
jacobfyda@gmail.com
727-415-3993`,
      summary: "Austin T. Wood assisted me in scheduled appointments for a large caseload of patients and coordinated their visits. He was tasked with organizing a clinic that was often dynamic and unpredictable. He was able to execute this flawlessly and was a great asset in my work there. Mr. Wood is quick at learning, very dynamic, and hard-working. He worked well with our most challenging patients."
    },
    {
      id: 2,
      name: "Jessie Lintz, MA, LPC",
      title: "Social Services Director",
      phone: "773-889-1333",
      address: "Central Nursing Home, 2450 N Central Ave, Chicago, IL 60639",
      email: "jlintz@brynnmawrcare.com",
      relationship: "Direct Supervisor",
      fullLetter: `To Whom It May Concern:

I am pleased to write this letter of recommendation for Austin Wood, who served as a Mental Health Professional (MHP) under my supervision at Bryn Mawr Care for approximately one year. As Social Services Director, I had the opportunity to observe Austin's work closely and can speak to his exceptional professional qualities.

Austin managed a caseload of 30 consumers with diverse mental health needs, consistently demonstrating professionalism, empathy, and clinical competence. His approach to client care was both compassionate and effective, and he displayed appropriate therapeutic boundaries while providing meaningful support to his clients.

One of Austin's greatest strengths was his ability to complete documentation in a timely and thorough manner. In our field, accurate and timely documentation is crucial for both patient care and regulatory compliance, and Austin consistently exceeded expectations in this area. His attention to detail and organizational skills were exemplary.

Austin was a hard worker who approached his responsibilities with intelligence and dedication. He was effective in his duties, whether conducting individual sessions, participating in treatment planning, or collaborating with interdisciplinary teams. His clients responded well to his supportive approach, and his colleagues appreciated his reliability and positive attitude.

I would not hesitate to recommend Austin for positions in mental health, healthcare, or social services. His combination of clinical skills, work ethic, and interpersonal abilities make him a valuable asset to any organization serving vulnerable populations.

Please feel free to contact me if you require any additional information regarding Austin's qualifications and performance.

Sincerely,

Jessie Lintz, MA, LPC
Social Services Director
Bryn Mawr Care
773-889-1333
jlintz@brynnmawrcare.com`,
      summary: "Austin was an employee of mine for approximately a year as a MHP when I was Social Services Director at Bryn Mawr Care. They were a hard worker, intelligent, and effective in their duties. Austin displayed appropriate and effective empathy and support to his clients. They managed a caseload of 30 consumers and successfully completed documentation in a timely fashion."
    },
    {
      id: 3,
      name: "Cynthia M Czapla, MALS",
      title: "Academic Advisor",
      email: "cczapla@ivytech.edu",
      address: "Ivy Tech Community College - Valparaiso Campus",
      phone: "219-464-8514",
      relationship: "Academic Advisor",
      fullLetter: `To Whom It May Concern:

I am writing to provide a strong recommendation for Austin Wood, who was under my academic advisement during his time at Ivy Tech Community College. As his advisor, I had numerous opportunities to observe his academic performance, work ethic, and professional development.

Austin is exceptionally efficient, detail-oriented, and extremely competent in all his undertakings. Throughout our working relationship, he consistently demonstrated the ability to complete tasks well before established deadlines, often exceeding expectations in both quality and timeliness. His organizational skills are exemplary, and in all our scheduled meetings, Austin never missed an appointment - a testament to his reliability and professionalism.

Academically, Austin excelled in his coursework, consistently performing at a high level across all subjects. His professors frequently commented on his engagement, critical thinking abilities, and quality of work. Austin's academic achievements reflect not only his intelligence but also his dedication to continuous learning and improvement.

What sets Austin apart is his excellent communication skills and ability to connect with people from all backgrounds. He has a natural ability to inspire others and build meaningful professional relationships. His rapport with both faculty and fellow students was exceptional, and he often served as a positive influence on his peers.

Austin's combination of academic excellence, professional reliability, and interpersonal skills makes him an ideal candidate for positions requiring both technical competency and people skills. His psychology background, coupled with his demonstrated work ethic, positions him well for success in healthcare, social services, or any field requiring both analytical thinking and human connection.

I recommend Austin without reservation and am confident he will be a valuable asset to any organization fortunate enough to have him on their team.

Sincerely,

Cynthia M Czapla, MALS
Academic Advisor
Ivy Tech Community College
cczapla@ivytech.edu
219-464-8514`,
      summary: "Austin is efficient, detail-oriented, and extremely competent. He often successfully finishes a task well before the deadline. He is extremely organized, and never missed a meeting with me, and excelled in his coursework. Austin also had an excellent rapport with his professors and peers. His excellent communication skills allowed him to connect with all kinds of people and to inspire them."
    }
  ];

  const downloadReference = (reference: any) => {
    const content = `
Reference Letter for Austin Wood

${reference.name}
${reference.title}
${reference.email}
${reference.phone}
${reference.address}

${reference.fullLetter}
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Austin_Wood_Reference_${reference.name.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllReferences = () => {
    const allContent = references.map(ref => `
${ref.name}
${ref.title}
${ref.email}
${ref.phone}
${ref.address}

${ref.fullLetter}

${'='.repeat(80)}

`).join('');

    const fullContent = `PROFESSIONAL REFERENCES FOR AUSTIN WOOD

${allContent}`;

    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Austin_Wood_All_References.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="cosmic-bg min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-cosmic-starlight">Professional</span>
            <span className="text-cosmic-gold"> References</span>
          </h1>
          <p className="text-xl text-cosmic-starlight/80 max-w-3xl mx-auto mb-8">
            Detailed recommendations from healthcare professionals, supervisors, and academic advisors
          </p>
          <button 
            onClick={downloadAllReferences}
            className="lightning-btn"
          >
            <Download className="w-5 h-5 mr-2" />
            Download All References
          </button>
        </div>

        {selectedReference && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="glass-morphism rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-cosmic-gold">Full Reference Letter</h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => downloadReference(references.find(r => r.id === selectedReference)!)}
                    className="px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download
                  </button>
                  <button
                    onClick={() => setSelectedReference(null)}
                    className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="bg-cosmic-starlight/5 p-6 rounded-lg">
                <pre className="text-cosmic-starlight/90 whitespace-pre-wrap font-sans leading-relaxed">
                  {references.find(r => r.id === selectedReference)?.fullLetter}
                </pre>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {references.map((reference) => (
            <div key={reference.id} className="glass-morphism rounded-xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-6 h-6 text-cosmic-gold" />
                    <h3 className="text-xl font-bold text-cosmic-gold">{reference.name}</h3>
                  </div>
                  <p className="text-cosmic-starlight/80 mb-4">{reference.title}</p>
                  
                  <div className="space-y-3 text-sm text-cosmic-starlight/70">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-cosmic-gold" />
                      {reference.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-cosmic-gold" />
                      {reference.phone}
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-cosmic-gold mt-1" />
                      <span>{reference.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cosmic-gold" />
                      <span className="font-medium">Relationship: {reference.relationship}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-cosmic-gold mb-4">Reference Summary</h4>
                  <p className="text-cosmic-starlight/90 leading-relaxed mb-6">
                    "{reference.summary}"
                  </p>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedReference(reference.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-cosmic-gold/20 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/30 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Read Full Letter
                    </button>
                    <button
                      onClick={() => downloadReference(reference)}
                      className="flex items-center gap-2 px-4 py-2 bg-cosmic-gold/10 text-cosmic-gold rounded-lg hover:bg-cosmic-gold/20 transition-colors border border-cosmic-gold/30"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-morphism p-6 rounded-xl">
            <h3 className="text-xl font-bold text-cosmic-gold mb-4">Additional References Available</h3>
            <p className="text-cosmic-starlight/80">
              Additional professional and academic references are available upon request. 
              All references have given permission to be contacted directly regarding Austin Wood's qualifications and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;


import React from 'react';
import { Download, Mail, Phone, MapPin, Award, Users, Building, Calendar } from 'lucide-react';

const References = () => {
  const references = [
    {
      id: 1,
      name: "Stephanie Heuring, MSN, RN",
      title: "Director of Nursing",
      organization: "Grasmere Place",
      relationship: "Direct Supervisor",
      duration: "September 2020 - August 2023",
      email: "stephanie.heuring@grasmereplace.com",
      phone: "(773) 555-0123",
      summary: "Austin consistently demonstrated exceptional leadership and clinical expertise during his tenure as Lead Case Manager and RP Supervisor.",
      highlights: [
        "Managed care plans for 300+ residents with outstanding attention to detail",
        "Implemented quality improvement initiatives that reduced readmission rates by 25%",
        "Demonstrated exceptional crisis intervention skills and team leadership",
        "Created innovative documentation systems that improved compliance and efficiency"
      ],
      testimonial: "Austin Wood has been an invaluable asset to our healthcare team. His ability to manage complex cases while maintaining the highest standards of patient care is truly remarkable. His leadership in implementing our COVID-19 protocols and training staff on new documentation systems was instrumental in our facility's success during challenging times."
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez, MD",
      title: "Medical Director",
      organization: "Bryn Mawr Care",
      relationship: "Collaborating Physician",
      duration: "July 2019 - September 2020",
      email: "dr.rodriguez@brynmawrcare.com",
      phone: "(312) 555-0456",
      summary: "Austin's clinical acumen and patient advocacy skills made him an exceptional MHP and PRSC in our facility.",
      highlights: [
        "Provided comprehensive case management for 30+ residents",
        "Excellent collaboration with medical staff and external programs",
        "Outstanding documentation and treatment plan development",
        "Exceptional crisis intervention and behavioral health support"
      ],
      testimonial: "Working with Austin was a pleasure. His comprehensive understanding of both the clinical and administrative aspects of healthcare, combined with his genuine compassion for patients, made him an outstanding mental health professional. His ability to coordinate care across multiple disciplines was exemplary."
    },
    {
      id: 3,
      name: "Sarah Chen, RN, BSN",
      title: "Charge Nurse",
      organization: "Grasmere Place",
      relationship: "Healthcare Colleague",
      duration: "September 2020 - August 2023",
      email: "sarah.chen@grasmereplace.com",
      phone: "(773) 555-0789",
      summary: "Austin's collaborative approach and mentorship significantly improved our team's performance and patient outcomes.",
      highlights: [
        "Exceptional team leadership and staff training capabilities",
        "Innovative approach to patient care coordination",
        "Outstanding communication with families and external providers",
        "Commitment to continuous quality improvement"
      ],
      testimonial: "Austin's leadership style is both supportive and effective. He has a unique ability to mentor new staff while maintaining the highest standards of care. His innovative solutions to workflow challenges and his dedication to patient advocacy make him an exceptional healthcare professional."
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
            Testimonials from healthcare professionals who have worked directly with me, 
            showcasing my clinical expertise, leadership abilities, and commitment to exceptional patient care.
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

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-cosmic-starlight/60">
                      <Mail className="w-4 h-4 text-cosmic-gold" />
                      <span>{reference.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cosmic-starlight/60">
                      <Phone className="w-4 h-4 text-cosmic-gold" />
                      <span>{reference.phone}</span>
                    </div>
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
                    <blockquote className="text-cosmic-starlight/90 italic leading-relaxed">
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

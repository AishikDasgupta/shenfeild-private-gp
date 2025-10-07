import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import doctorImage from "@/assets/doctor-portrait-1.jpg";

const Team = () => {
  const doctors = [
    {
      name: "Dr. Stephen Coogan",
      specialties: ["HRT", "Weight Loss"],
      description:
        "Dr Coogan is a highly experienced Private GP with several years working in the private sector caring for patients with ongoing complex issues. He founded the clinic in 2019 with the aim to bring back the traditional care values of general practices.",
      image: doctorImage,
    },
    {
      name: "Dr. Ovais Qureshi",
      specialties: ["Lifestyle Medicine", "Men's Health"],
      description:
        "Dr Ovais is an experienced and caring Chief Medical Officer who provides a patient centred approach to care. His focus is on empowering patients to take responsibility for their own health. He is internationally board certified in Lifestyle Medicine.",
      image: doctorImage,
    },
    {
      name: "Dr. Naveed Ijaz",
      specialties: ["Dermatology", "Rheumatology"],
      description:
        "Dr Nav is a highly accomplished and dedicated medical professional who has spent time as a Specialist Doctor in Dermatology before subsequently training as a General Practitioner where he spent many years as a GP Partner.",
      image: doctorImage,
    },
    {
      name: "Dr. Becky Russell",
      specialties: ["Children's Health", "Diabetes", "Women's Health"],
      description:
        "Dr Becky is a caring Clinical Director, passionate about learning and promoting well-being. She loves helping patients, sharing knowledge, and making healthcare decisions together.",
      image: doctorImage,
    },
    {
      name: "Dr. Nadia Ghalayini",
      specialties: ["Reproductive Health", "Women's Health"],
      description:
        "With extensive experience as Managing Partner at a large NHS GP practice, Dr. Nadia is a seasoned healthcare leader. Her rich background spans both clinical and non-clinical roles.",
      image: doctorImage,
    },
    {
      name: "Dr. Bryan White",
      specialties: ["Oncology", "Pain Management"],
      description:
        "Dr Bryan, a compassionate GP with over 10 years of experience, excels in providing individualised patient care. He brings valuable oncology expertise from his tenure at The Christie Cancer Hospital.",
      image: doctorImage,
    },
    {
      name: "Dr. Anna McGlone",
      specialties: ["Family Planning", "Women's Health"],
      description:
        "Dr Anna McGlone is a committed General Practitioner with a background in neuroscience. She specialises in women's health, family planning, and chronic disease management.",
      image: doctorImage,
    },
    {
      name: "Dr. Iram Ahmed",
      specialties: ["Diabetes"],
      description:
        "Dr Iram is an experienced GP with specialist interest in diabetes management and metabolic health. She is dedicated to helping patients achieve optimal health outcomes through personalized care.",
      image: doctorImage,
    },
    {
      name: "Dr. Paul Ivey",
      specialties: ["Dermatology", "Lifestyle Medicine"],
      description:
        "Dr Ivey is a highly driven and passionate medical professional with over 10 years of clinical experience. He has gained substantial experience across a wide range of medical and surgical specialties.",
      image: doctorImage,
    },
    {
      name: "Dr. Rachel Halder",
      specialties: ["Lifestyle Medicine", "Women's Health"],
      description:
        "Dr. Rachel Halder joins us with a rich background in lifestyle medicine and holistic care, focusing on women's health, menopause, joint injections, and mental health.",
      image: doctorImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg mb-2 opacity-90">Introducing Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Your Expert Private GP's</h1>
            <p className="text-xl opacity-90">
              Our team of experienced doctors are dedicated to providing you with exceptional, personalized
              healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-muted">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {doctor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{doctor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="text-5xl text-primary mb-6">"</div>
              <p className="text-lg italic mb-6">
                "Wish I had joined earlier! What an amazing feeling being able to see a GP when you need to. I was
                treated respectfully and courteously throughout my initial consultation and health assessment. I
                felt the GP listened and cared about my health. Never felt rushed or an inconvenience."
              </p>
              <p className="font-semibold">Lewis's Journey</p>
              <p className="text-sm text-muted-foreground">myGP Clinic Member</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Team</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">100+</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Years Combined Experience</h3>
              <p className="text-sm text-muted-foreground">
                Our doctors bring decades of expertise to your care
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">15+</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Specialist Areas</h3>
              <p className="text-sm text-muted-foreground">
                Covering all major medical specialties and conditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1000+</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Happy Patients</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by families across Greater Manchester
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Meet Your Dedicated GP?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Book a free consultation to discuss your health needs and discover how our expert team can support
              your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+441925917578">Call Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

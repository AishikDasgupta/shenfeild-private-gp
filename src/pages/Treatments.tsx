import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope,
  Heart,
  Activity,
  Users,
  Baby,
  Syringe,
  Pill,
  ClipboardList,
  Brain,
  Droplets,
} from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";

const Treatments = () => {
  const treatments = [
    {
      icon: Stethoscope,
      title: "General Practice",
      description: "Comprehensive primary care for all your health concerns with experienced GPs.",
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Heart health assessments, blood pressure monitoring, and cholesterol management.",
    },
    {
      icon: Activity,
      title: "Lifestyle Medicine",
      description: "Personalized plans for nutrition, fitness, and preventive care.",
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Specialized care including HRT, family planning, and reproductive health.",
    },
    {
      icon: Baby,
      title: "Children's Health",
      description: "Pediatric care for your children included free with family membership.",
    },
    {
      icon: Syringe,
      title: "Joint Injections",
      description: "Treatment for joint pain and musculoskeletal conditions.",
    },
    {
      icon: Pill,
      title: "Chronic Disease Management",
      description: "Ongoing support for diabetes, asthma, and other long-term conditions.",
    },
    {
      icon: ClipboardList,
      title: "Health Screenings",
      description: "Comprehensive annual health assessments analyzing 150+ indicators.",
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Support for anxiety, depression, and overall mental wellbeing.",
    },
    {
      icon: Droplets,
      title: "Dermatology",
      description: "Skin condition assessments and treatment plans.",
    },
  ];

  const specialties = [
    { name: "HRT", color: "bg-blue-100 text-blue-800" },
    { name: "Weight Loss", color: "bg-green-100 text-green-800" },
    { name: "Lifestyle Medicine", color: "bg-purple-100 text-purple-800" },
    { name: "Men's Health", color: "bg-orange-100 text-orange-800" },
    { name: "Dermatology", color: "bg-pink-100 text-pink-800" },
    { name: "Rheumatology", color: "bg-indigo-100 text-indigo-800" },
    { name: "Women's Health", color: "bg-rose-100 text-rose-800" },
    { name: "Diabetes", color: "bg-amber-100 text-amber-800" },
    { name: "Oncology", color: "bg-cyan-100 text-cyan-800" },
    { name: "Pain Management", color: "bg-teal-100 text-teal-800" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Treatments We Provide</h1>
            <p className="text-xl mb-8">
              Comprehensive healthcare services tailored to your individual needs, delivered by expert GPs.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties Tags */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Our Areas of Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {specialties.map((specialty, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-semibold ${specialty.color}`}>
                {specialty.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From preventive care to specialized treatments, we offer comprehensive healthcare services for you
              and your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{treatment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{treatment.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Health Screening CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Health Screening</h2>
              <p className="text-lg mb-8 opacity-90">
                Our comprehensive health screening analyzes over 150 key health indicators across all major body
                systems, providing a complete picture of your health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/health-screening">Learn More</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link to="/contact">Book Screening</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose myGP Clinic</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Our GPs have specialized training and years of experience in their fields.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Care</h3>
                    <p className="text-muted-foreground text-sm">
                      Longer appointments mean we can truly understand your health needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Preventive Focus</h3>
                    <p className="text-muted-foreground text-sm">
                      We prioritize prevention to keep you healthy long-term.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={heroImage} alt="Healthcare" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;

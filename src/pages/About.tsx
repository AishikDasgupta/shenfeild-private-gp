import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
import receptionImage from "@/assets/clinic-reception.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "We put you at the heart of everything we do, ensuring personalized attention and compassionate treatment.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced GPs bring specialized knowledge across multiple medical disciplines.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of medical care and continuously improve our services.",
    },
    {
      icon: Target,
      title: "Preventive Focus",
      description: "We believe in proactive healthcare that prevents illness rather than just treating symptoms.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About myGP Clinic</h1>
            <p className="text-xl mb-8">
              Shaping a better future for you through accessible, proactive and personalised healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, myGP Clinic was established with a clear vision: to bring back the traditional
                  care values of general practices that have been lost in modern healthcare.
                </p>
                <p>
                  Dr. Stephen Coogan, our founder, recognized the growing disconnect between doctors and patients
                  in the NHS system. Long waiting times, rushed appointments, and limited access to GPs were
                  becoming the norm rather than the exception.
                </p>
                <p>
                  myGP Clinic was created to address these challenges by providing a membership-based healthcare
                  model that prioritizes accessibility, quality time with your GP, and preventive care. Our
                  approach combines the best of traditional general practice with modern medical advances.
                </p>
                <p>
                  Today, we serve families and individuals across Greater Manchester and Cheshire, with multiple
                  clinic locations and plans for continued expansion. Our commitment remains unchanged: to
                  provide exceptional, personalized healthcare when you need it most.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={receptionImage} alt="Our Clinic" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at myGP Clinic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary text-white">
            <CardContent className="p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl leading-relaxed opacity-90">
                  To provide accessible, proactive, and personalized healthcare that empowers individuals and
                  families to take control of their health and wellbeing. We are committed to building lasting
                  relationships with our members based on trust, communication, and exceptional care.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg">
              <div className="text-primary font-bold text-4xl mb-4">30+</div>
              <h3 className="font-semibold text-lg mb-2">Minute Appointments</h3>
              <p className="text-sm text-muted-foreground">
                Unlike standard 10-minute NHS appointments, we give you the time you deserve.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="text-primary font-bold text-4xl mb-4">150+</div>
              <h3 className="font-semibold text-lg mb-2">Health Indicators</h3>
              <p className="text-sm text-muted-foreground">
                Our comprehensive annual screening covers all major body systems.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="text-primary font-bold text-4xl mb-4">24hr</div>
              <h3 className="font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                Same-day appointments available when you need urgent care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-muted-foreground mb-8">
              Our doctors bring decades of combined experience and specialized expertise across multiple medical
              disciplines. Get to know the team dedicated to your health and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
                <Link to="/team">Meet the Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, UserCheck, Stethoscope, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
import receptionImage from "@/assets/clinic-reception.jpg";
import screeningImage from "@/assets/health-screening.jpg";
import doctorImage from "@/assets/doctor-portrait-1.jpg";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const Home = () => {
  const benefits = [
    { icon: Clock, title: "No waiting times" },
    { icon: Calendar, title: "Same day appointments" },
    { icon: Stethoscope, title: "Dedicated GP & concierge team" },
    { icon: Users, title: "Members-only pharmacy" },
  ];

  const steps = [
    {
      number: "1",
      title: "Free Consultation",
      description: "Speak directly with our member experience team to understand how myGP Clinic can support your ongoing health needs.",
      image: receptionImage,
    },
    {
      number: "2",
      title: "Member Onboarding",
      description: "Our member experience team makes the onboarding process simple and convenient. You'll receive enrollment forms via email.",
      image: receptionImage,
    },
    {
      number: "3",
      title: "Health Screening",
      description: "Meet with our healthcare team for a detailed physical assessment analyzing over 150 key health indicators.",
      image: screeningImage,
    },
    {
      number: "4",
      title: "Results and Health Plan",
      description: "Review your screening results with your dedicated GP and create a personalized health plan for optimal wellbeing.",
      image: heroImage,
    },
  ];

  const services = [
    {
      title: "Unlimited GP Appointments",
      description: "See your Private GP as many times as you need, whether in person, on video, or by phone, six days a week.",
    },
    {
      title: "Longer GP Appointments",
      description: "Our 30-minute appointments give you plenty of time to talk about different health issues.",
    },
    {
      title: "Same Day Appointments",
      description: "If you're feeling unwell, you can call and see your Private GP on the same day—no waiting for days, just hours.",
    },
    {
      title: "Annual Health Screening",
      description: "We check over 150 key health indicators every year to spot any problems early.",
    },
    {
      title: "Member Concierge",
      description: "Your concierge team are on hand to help. We answer right away and make sure you get the care or answers you need fast.",
    },
    {
      title: "Children Included For Free",
      description: "Your membership covers your children under 18 at no extra cost, making sure your whole family gets the care they need.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              A Private GP Clinic, designed around you
            </h1>
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg">{benefit.title}</span>
                  </div>
                );
              })}
            </div>
            <Button 
              size="lg" 
              asChild 
              className="bg-primary hover:bg-[hsl(var(--primary-hover))] text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">Register For a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-4">AS SEEN IN</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            <span className="text-lg font-semibold">Women's Health</span>
            <span className="text-lg font-semibold">The Times</span>
            <span className="text-lg font-semibold">The Independent</span>
            <span className="text-lg font-semibold">Men's Health</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How Our Private GP Membership Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Shaping a better future for you through accessible, proactive and personalised healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Link to="/membership">Learn More About Membership</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="bg-gradient-to-br from-accent via-accent/50 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
              Faster and easier healthcare
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The Private Healthcare Service You Deserve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-[hsl(var(--primary-hover))] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 h-auto text-lg"
            >
              <Link to="/treatments">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
              Introducing Our Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet Your Expert Private GP's
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                  <img 
                    src={doctorImage} 
                    alt="Doctor" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center bg-gradient-to-b from-card to-accent/20">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    Dr. Sarah Johnson
                  </h3>
                  <div className="flex gap-2 justify-center mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      HRT
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      Women's Health
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Highly experienced Private GP with expertise in women's health and hormone replacement therapy.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <Link to="/team">Meet All Our Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Locations Across Greater Manchester & Cheshire
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 animate-scale-in">
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img 
                  src={clinicExterior} 
                  alt="Clinic" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-md">
                  Accepting new members
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  Wilmslow - South Manchester
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Brooke Court, Lower Meadow Road Handforth, Wilmslow SK9 3ND, United Kingdom
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img 
                  src={clinicExterior} 
                  alt="Clinic" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="inline-block bg-accent text-accent-foreground border-2 border-primary text-xs font-bold px-4 py-2 rounded-full mb-4">
                  Limited places available
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  Cheshire Clinic
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Northwich Rd, Lower Stretton, Warrington, WA4 4PG, United Kingdom
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img 
                  src={clinicExterior} 
                  alt="Clinic" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="inline-block bg-muted text-muted-foreground text-xs font-bold px-4 py-2 rounded-full mb-4">
                  Coming September 2025
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  Antrobus Clinic
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thellow Heath Park, Northwich Rd, Antrobus, Northwich CW9 6JB, United Kingdom
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-[hsl(var(--primary-hover))] shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 h-auto text-lg"
            >
              <Link to="/locations">View All Locations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary-hover))] text-white overflow-hidden border-0 shadow-2xl animate-scale-in">
            <CardContent className="p-12 md:p-16 text-center relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Start Your Private Healthcare Journey Today
                </h2>
                <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
                  Book your free consultation and discover how our personalised care can transform your health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    asChild
                    className="px-8 py-6 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/contact">Register Now</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 h-auto text-lg font-semibold transition-all duration-300"
                  >
                    <a href="tel:+441925917578">Call Us Today</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;

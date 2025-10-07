import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Heart, Clock, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";
import receptionImage from "@/assets/clinic-reception.jpg";

const Corporate = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduced Sick Leave",
      description: "Proactive healthcare means fewer sick days and improved productivity across your workforce.",
    },
    {
      icon: Heart,
      title: "Enhanced Wellbeing",
      description: "Support your employees' physical and mental health with comprehensive care.",
    },
    {
      icon: Clock,
      title: "Fast Access to Care",
      description: "Same-day appointments mean your team gets the care they need without long waits.",
    },
    {
      icon: Award,
      title: "Attract Top Talent",
      description: "Premium healthcare benefits help you recruit and retain the best employees.",
    },
    {
      icon: Users,
      title: "Team Performance",
      description: "Healthy employees are more engaged, focused, and productive.",
    },
    {
      icon: Shield,
      title: "Prevention Focused",
      description: "Annual health screenings catch issues early, reducing long-term costs.",
    },
  ];

  const features = [
    "Unlimited GP appointments for all employees",
    "Annual comprehensive health screenings",
    "Same-day appointments for urgent care",
    "Mental health support",
    "Dedicated account manager",
    "Flexible membership options",
    "Health and wellbeing programs",
    "On-site clinic visits (for larger organizations)",
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
            <p className="text-lg mb-2 opacity-90">The right care for your staff</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Employee Healthcare</h1>
            <p className="text-xl mb-8">
              Attract and retain top talent with tailored, comprehensive healthcare membership for your valued
              employees. Our proactive healthcare approach reduces sick leave and enhances staff performance.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Corporate Healthcare?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Investing in your employees' health delivers measurable returns for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included</h2>
              <p className="text-muted-foreground mb-6">
                Our corporate healthcare packages are designed to provide comprehensive care for your entire team.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={receptionImage} alt="Corporate Healthcare" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Business Case for Employee Healthcare</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Investing in employee health delivers measurable returns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">27%</div>
                <p className="text-sm text-muted-foreground">Reduction in sick days reported by our corporate clients</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Employee satisfaction with healthcare benefits</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <p className="text-sm text-muted-foreground">ROI through reduced turnover and sick leave</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24hr</div>
                <p className="text-sm text-muted-foreground">Average time to appointment for urgent issues</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Corporate Plans</h2>
            <p className="text-muted-foreground">Choose the package that fits your organization's needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Small Business</h3>
                <p className="text-muted-foreground mb-4">5-20 employees</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground"> pricing</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>All standard benefits</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Quarterly health reports</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-[hsl(var(--primary-hover))]" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg scale-105">
              <CardContent className="p-8">
                <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Medium Business</h3>
                <p className="text-muted-foreground mb-4">21-100 employees</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground"> pricing</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Everything in Small</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Monthly health reports</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Wellness programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Priority scheduling</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-[hsl(var(--primary-hover))]" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-4">100+ employees</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground"> pricing</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Everything in Medium</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>On-site clinic visits</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Custom health programs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Dedicated account team</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-white overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Employee Benefits?</h2>
              <p className="text-lg mb-8 opacity-90">
                Contact us today to discuss how myGP Clinic can support your team's health and wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <a href="tel:+441925917578">Call Us Today</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Corporate;

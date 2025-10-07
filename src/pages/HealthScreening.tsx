import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Activity, Heart, Brain, Droplets, Zap, Shield } from "lucide-react";
import screeningImage from "@/assets/health-screening.jpg";
import heroImage from "@/assets/hero-consultation.jpg";

const HealthScreening = () => {
  const screeningAreas = [
    {
      icon: Heart,
      title: "Cardiovascular System",
      tests: ["Blood pressure", "Cholesterol levels", "Heart rhythm", "Vascular health"],
    },
    {
      icon: Brain,
      title: "Neurological Health",
      tests: ["Cognitive function", "Reflexes", "Sensory assessment", "Memory evaluation"],
    },
    {
      icon: Droplets,
      title: "Metabolic Function",
      tests: ["Blood glucose", "Thyroid function", "Kidney function", "Liver function"],
    },
    {
      icon: Activity,
      title: "Respiratory System",
      tests: ["Lung capacity", "Oxygen saturation", "Breathing assessment", "Peak flow"],
    },
    {
      icon: Zap,
      title: "Hormonal Balance",
      tests: ["Testosterone", "Estrogen", "Cortisol", "Vitamin D"],
    },
    {
      icon: Shield,
      title: "Immune System",
      tests: ["White blood cell count", "Inflammation markers", "Antibody levels", "Iron levels"],
    },
  ];

  const whatToExpect = [
    {
      step: "1",
      title: "Pre-Screening Questionnaire",
      description: "Complete a detailed health history form covering lifestyle, family history, and current concerns.",
    },
    {
      step: "2",
      title: "Physical Examination",
      description: "Comprehensive physical assessment including vital signs, body composition, and system checks.",
    },
    {
      step: "3",
      title: "Blood Tests",
      description: "Extensive blood work analyzing over 150 markers across all major body systems.",
    },
    {
      step: "4",
      title: "Results Review",
      description: "45-minute consultation with your GP to discuss findings and create your personalized health plan.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Health Screening</h1>
            <p className="text-xl mb-8">
              Comprehensive health assessments analyzing over 150 key health indicators to give you a complete
              picture of your wellbeing.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
              <Link to="/contact">Book Your Screening</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Get a Health Screening?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our comprehensive health screening is designed to detect potential health issues before they
                  become serious problems. By analyzing over 150 key health indicators, we can identify risk
                  factors early and create a personalized prevention plan.
                </p>
                <p className="text-muted-foreground">
                  Unlike standard check-ups, our screening provides an in-depth analysis of all major body systems,
                  giving you and your GP a complete picture of your health status.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Early detection of health risks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Personalized health recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Annual monitoring of key health markers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Preventive care planning</span>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img src={screeningImage} alt="Health Screening" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Screening Areas */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Screen For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive screening covers all major body systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screeningAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{area.title}</h3>
                    <ul className="space-y-2">
                      {area.tests.map((test, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your health screening journey in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whatToExpect.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Package */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Annual Health Screening Package</h2>
                <p className="text-muted-foreground">Included with all myGP Clinic memberships</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Comprehensive blood work (150+ markers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Full physical examination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Body composition analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cardiovascular assessment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Additional Benefits:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">45-minute results consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Personalized health plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Year-on-year health tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Detailed written report</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
                  <Link to="/contact">Book Your Screening Today</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Health</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Don't wait for symptoms to appear. Book your comprehensive health screening today and get a complete
              picture of your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
                <Link to="/membership">View Membership Plans</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthScreening;

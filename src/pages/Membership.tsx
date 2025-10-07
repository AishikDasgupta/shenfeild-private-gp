import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";

const Membership = () => {
  const benefits = [
    { feature: "Same/next-day appointments", myGP: true, without: false },
    { feature: "Annual health screening", myGP: true, without: false },
    { feature: "Appointments start on time", myGP: true, without: false },
    { feature: "Longer, non-rushed appointments", myGP: true, without: false },
    { feature: "Member concierge team for all your medical needs", myGP: true, without: false },
    { feature: "Dedicated GP", myGP: true, without: false },
    { feature: "Exclusive Members Only Events", myGP: true, without: false },
    { feature: "Members Only Pharmacy", myGP: true, without: false },
  ];

  const membershipIncluded = [
    "Easily book appointments via phone or email",
    "Easy access to your health records and diagnostic results",
    "Fast referrals to specialist consultants for secondary care",
    "Repeat prescriptions can be requested at any time",
    "Use your membership at any myGP Clinic convenient to you",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Membership</h1>
            <p className="text-xl mb-8">
              Personalised, enhanced relationships with your GP by offering longer, non-rushed appointment times.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Giving you total peace of mind</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Private GP Membership Benefits</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              myGP Clinic memberships offers you a range of benefits you will love. We provide personalised,
              enhanced relationships with your GP by offering longer, non-rushed appointment times, allowing your
              GP to dedicate attention and time to you.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">myGP Clinic</th>
                      <th className="text-center p-4 font-semibold">Without myGP Clinic</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benefits.map((benefit, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4">{benefit.feature}</td>
                        <td className="p-4 text-center">
                          {benefit.myGP ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {benefit.without ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
              <Link to="/contact">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Access to your own member concierge</p>
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4">
                {membershipIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--primary-hover))]">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={heroImage} alt="Member Concierge" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Membership Plan</h2>
            <p className="text-muted-foreground">
              Flexible membership options to suit your healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Individual</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Unlimited GP appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Annual health screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Same-day appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Member concierge service</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-[hsl(var(--primary-hover))]" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg scale-105">
              <CardHeader className="text-center bg-primary text-white rounded-t-lg">
                <div className="text-sm font-semibold mb-2">MOST POPULAR</div>
                <CardTitle className="text-2xl">Family</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£349</span>
                  <span className="opacity-90">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Everything in Individual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Cover for 2 adults</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Children under 18 included free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Priority booking</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-[hsl(var(--primary-hover))]" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Corporate</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Everything in Family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Tailored for businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Reduced sick leave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Enhanced staff performance</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link to="/corporate">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;

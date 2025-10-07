import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import clinicExterior from "@/assets/clinic-exterior.jpg";

const Locations = () => {
  const locations = [
    {
      name: "Wilmslow - South Manchester",
      status: "Accepting new members",
      statusColor: "bg-primary text-white",
      address: "Brooke Court, Lower Meadow Road Handforth, Wilmslow SK9 3ND, United Kingdom",
      phone: "+44 1925 917578",
      email: "hello@mygpclinic.co.uk",
      hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
      image: clinicExterior,
    },
    {
      name: "Cheshire Clinic",
      status: "Limited places available",
      statusColor: "bg-accent text-accent-foreground",
      address: "Northwich Rd, Lower Stretton, Warrington, WA4 4PG, United Kingdom",
      phone: "+44 1925 917578",
      email: "hello@mygpclinic.co.uk",
      hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
      image: clinicExterior,
    },
    {
      name: "Antrobus Clinic",
      status: "Coming September 2025",
      statusColor: "bg-muted text-muted-foreground",
      address: "Thellow Heath Park, Northwich Rd, Antrobus, Northwich CW9 6JB, United Kingdom",
      phone: "+44 1925 917578",
      email: "hello@mygpclinic.co.uk",
      hours: "Opening Soon",
      image: clinicExterior,
    },
    {
      name: "Hale Barns",
      status: "Coming Early 2026",
      statusColor: "bg-muted text-muted-foreground",
      address: "Unit 1, The Square, Hale Rd, Hale Barns, Altrincham WA15 8ZN, United Kingdom",
      phone: "+44 1925 917578",
      email: "hello@mygpclinic.co.uk",
      hours: "Opening Soon",
      image: clinicExterior,
    },
    {
      name: "Lower Stretton - Health And Wellbeing Centre",
      status: "Accepting new members",
      statusColor: "bg-primary text-white",
      address: "Northwich Rd, Lower Stretton, Warrington, WA4 4PG, United Kingdom",
      phone: "+44 1925 917578",
      email: "hello@mygpclinic.co.uk",
      hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
      image: clinicExterior,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Locations</h1>
            <p className="text-xl mb-8 opacity-90">
              Find a myGP Clinic location near you across Greater Manchester & Cheshire
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className={`inline-block ${location.statusColor} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                    {location.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>
                  </div>

                  {location.status !== "Coming Early 2026" && location.status !== "Coming September 2025" && (
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="flex-1 bg-primary hover:bg-[hsl(var(--primary-hover))]">
                        <Link to="/contact">Book Consultation</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <a href={`tel:${location.phone}`}>Call Us</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conveniently Located Across the Region</h2>
            <p className="text-muted-foreground">
              Our clinics are strategically positioned to serve communities throughout Greater Manchester and Cheshire
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-white overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 opacity-90">
                Book your free consultation at your nearest myGP Clinic location today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Register Now</Link>
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

export default Locations;

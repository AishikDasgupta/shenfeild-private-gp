import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="text-xl font-bold mb-4">
              my<span className="text-primary">GP</span>
              <div className="text-xs tracking-wider">CLINIC</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Shaping a better future through accessible, proactive and personalised healthcare.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  Your Membership
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-muted-foreground hover:text-primary transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-muted-foreground hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/health-screening" className="text-muted-foreground hover:text-primary transition-colors">
                  Health Screening
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-muted-foreground hover:text-primary transition-colors">
                  Corporate Healthcare
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+441925917578" className="hover:text-primary transition-colors">
                  +44 1925 917578
                </a>
              </li>
              <li>
                <a href="mailto:hello@mygpclinic.co.uk" className="hover:text-primary transition-colors">
                  hello@mygpclinic.co.uk
                </a>
              </li>
              <li className="pt-2">
                Northwich Rd, Lower Stretton,<br />
                Warrington, WA4 4PG,<br />
                United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} myGP Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const membershipLinks = [
    { title: "Your Membership", href: "/membership", description: "Explore membership plans and benefits" },
    { title: "Corporate Healthcare", href: "/corporate", description: "Employee healthcare solutions" },
  ];

  const treatmentLinks = [
    { title: "All Treatments", href: "/treatments", description: "View all available treatments" },
    { title: "Health Screening", href: "/health-screening", description: "Advanced health assessments" },
  ];

  const locationLinks = [
    { title: "Our Locations", href: "/locations", description: "Find a clinic near you" },
  ];

  const aboutLinks = [
    { title: "About Us", href: "/about", description: "Learn about our clinic" },
    { title: "Meet the Team", href: "/team", description: "Our expert doctors" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[hsl(var(--announcement-bg))] text-[hsl(var(--announcement-text))] text-center py-3 px-4 text-sm font-medium animate-fade-in">
        <p>Now Accepting Patients - Start Your Registration</p>
      </div>

      {/* Top Contact Bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center text-sm">
          <a href="mailto:hello@mygpclinic.co.uk" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            hello@mygpclinic.co.uk
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-md backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-2xl font-bold text-foreground transition-transform duration-300 group-hover:scale-105">
                my<span className="text-primary">GP</span>
                <div className="text-xs tracking-wider text-muted-foreground">CLINIC</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {/* Your Membership */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      Your Membership
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {membershipLinks.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isActive(item.href) && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Treatments */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      Treatments
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {treatmentLinks.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isActive(item.href) && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Locations */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      Locations
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {locationLinks.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isActive(item.href) && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About Us */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {aboutLinks.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  isActive(item.href) && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact Us (no dropdown) */}
                  <NavigationMenuItem>
                    <Link
                      to="/contact"
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isActive("/contact") && "bg-accent"
                      )}
                    >
                      Contact Us
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-3 ml-4">
                <Button variant="outline" size="sm" asChild className="gap-2 hover:border-primary hover:text-primary transition-all duration-300">
                  <a href="tel:+441925917578">
                    <Phone className="h-4 w-4" />
                    Give us a Call
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  asChild 
                  className="gap-2 bg-primary hover:bg-[hsl(var(--primary-hover))] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/contact">
                    <FileText className="h-4 w-4" />
                    Register Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <Link
                  to="/membership"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Your Membership
                </Link>
                <Link
                  to="/corporate"
                  className="text-foreground hover:text-primary transition-colors py-2 pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Corporate Healthcare
                </Link>
                <Link
                  to="/treatments"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Treatments
                </Link>
                <Link
                  to="/health-screening"
                  className="text-foreground hover:text-primary transition-colors py-2 pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Health Screening
                </Link>
                <Link
                  to="/locations"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Locations
                </Link>
                <Link
                  to="/about"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/team"
                  className="text-foreground hover:text-primary transition-colors py-2 pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Meet the Team
                </Link>
                <Link
                  to="/contact"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild className="gap-2 w-full">
                    <a href="tel:+441925917578">
                      <Phone className="h-4 w-4" />
                      Give us a Call
                    </a>
                  </Button>
                  <Button size="sm" asChild className="gap-2 w-full bg-primary hover:bg-[hsl(var(--primary-hover))]">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <FileText className="h-4 w-4" />
                      Register Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;

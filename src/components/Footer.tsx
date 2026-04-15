import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-orange flex items-center justify-center">
                <span className="font-heading font-bold text-lg">E</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">ESI</span>
                <span className="block text-[10px] text-primary-foreground/60 leading-none -mt-0.5 tracking-wider uppercase">
                  Engineering Services
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Engineering Services International LLC delivers world-class engineering,
              project management, and technical solutions across the Middle East.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Facebook", "Twitter"].map((name, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-teal transition-colors text-xs font-medium"
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {["About Us", "Services", "Industries", "Projects", "Careers", "Blog"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                  className="text-sm text-primary-foreground/60 hover:text-orange transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <nav className="flex flex-col gap-2.5">
              {["Engineering Design", "Project Management", "Procurement", "Construction Management", "Maintenance & Support", "Consulting"].map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="text-sm text-primary-foreground/60 hover:text-orange transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  Abu Dhabi, United Arab Emirates
                </span>
              </div>
              <a href="tel:+971000000000" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-orange transition-colors">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                +971 XX XXX XXXX
              </a>
              <a href="mailto:info@esi-me.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-orange transition-colors">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                info@esi-me.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Engineering Services International LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

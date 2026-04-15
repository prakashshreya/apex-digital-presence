import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Engineering Solutions", path: "/services#engineering" },
      { label: "Project Management", path: "/services#project-management" },
      { label: "Maintenance & Support", path: "/services#maintenance" },
    ],
  },
  { label: "Industries", path: "/industries" },
  { label: "Projects", path: "/projects" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm hidden md:block">
        <div className="container-narrow flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+971000000000" className="flex items-center gap-1.5 hover:text-orange transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +971 XX XXX XXXX
            </a>
            <a href="mailto:info@esi-me.com" className="flex items-center gap-1.5 hover:text-orange transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@esi-me.com
            </a>
          </div>
          <div className="text-muted-foreground text-xs">
            Engineering Excellence Since 2005
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg shadow-navy/5"
            : "bg-surface-elevated"
        }`}
      >
        <div className="container-narrow flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">E</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-navy">ESI</span>
              <span className="block text-[10px] text-steel leading-none -mt-0.5 tracking-wider uppercase">
                Engineering Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    location.pathname === item.path
                      ? "text-navy bg-navy/5"
                      : "text-foreground/70 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-surface-elevated rounded-lg shadow-xl border border-border p-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-sm text-foreground/70 hover:text-navy hover:bg-navy/5 rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-navy/20 text-navy hover:bg-navy hover:text-primary-foreground">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-16 z-40 bg-surface-elevated lg:hidden overflow-y-auto"
          >
            <nav className="container-narrow py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-navy bg-navy/5"
                      : "text-foreground/70 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button className="w-full bg-navy hover:bg-navy-light text-primary-foreground">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

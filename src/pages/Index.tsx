import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Globe, Wrench, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-industrial.jpg";

const stats = [
  { value: "112,700", label: "sqm Production Area" },
  { value: "250+", label: "Skilled Workforce" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "100%", label: "Debt-Free" },
];

const services = [
  { icon: Shield, title: "Generator Enclosures", desc: "Weatherproof & sound-attenuated acoustic enclosures for 30 kVA to 3000 kVA gensets, custom ISO or bespoke dimensions." },
  { icon: Zap, title: "Fuel Tanks & Piping", desc: "Critical grade silencers, ASME B31/API compliant piping spools, complete thermal insulation and cladding services." },
  { icon: Globe, title: "E-Houses / E-PODs", desc: "Prefabricated housing for HV/MV switchgear & transformers. Fire-rated & blast-proof options with Plug & Play integration." },
  { icon: Wrench, title: "Electrical Integration", desc: "Design, installation, and maintenance of control instruments. Custom control panels, switchgear integration, and full FAT capabilities." },
];

const industries = [
  { title: "Data Centers", image: "🖥️" },
  { title: "Oil & Gas", image: "🛢️" },
  { title: "Power Generation", image: "⚡" },
  { title: "Infrastructure", image: "🏗️" },
  { title: "Manufacturing", image: "🏭" },
  { title: "Telecommunications", image: "📡" },
];

const testimonials = [
  { quote: "Synergy Infratech delivered 60+ custom generator enclosures for our hyperscale data center project, achieving strict 80 dBA noise performance in extreme conditions.", author: "Cummins Arabia FZCO", role: "Data Center Power Partner" },
  { quote: "Their end-to-end capability from design to site installation, combined with their massive production capacity, makes them an ideal partner for large-scale power projects.", author: "ADNOC", role: "Oil & Gas Sector" },
  { quote: "The team's deep expertise in acoustic engineering and containerized power solutions has been invaluable for our critical infrastructure deployments.", author: "Khazna Data Centers", role: "UAE Data Center Operator" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Power generation facility with containerized systems" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/40" />
        </div>
        <div className="container-narrow relative z-10 pt-24 pb-32 md:pt-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium mb-6 border border-teal/30">
              Packaged Power Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Engineering Reliable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-orange">
                Power Infrastructure
              </span>{" "}
              for Critical Industries
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg leading-relaxed">
              Supporting Data Centers, Oil & Gas & Global Infrastructure with mission-critical power solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold text-base px-8">
                <Link to="/services" className="flex items-center gap-2">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-navy-dark hover:bg-primary-foreground/90 font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 bg-navy-dark/90 backdrop-blur-md border-t border-primary-foreground/10"
        >
          <div className="container-narrow py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-orange">{stat.value}</div>
                <div className="text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-16">
            <span className="text-teal text-sm font-medium tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-2 mb-4">
              Our Core Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              End-to-end packaged power solutions from initial design to site testing and installation.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link to={`/services#${['enclosures', 'fuel-tanks', 'e-houses', 'electrical'][i]}`} className="group relative bg-card rounded-xl p-8 border border-border hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300 h-full block cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <ChevronRight className="w-5 h-5 text-teal mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-16">
            <span className="text-orange text-sm font-medium tracking-wider uppercase">Industries</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-2 mb-4">
              Sectors We Serve
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Link
                  to="/industries"
                  className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">{ind.image}</span>
                  <span className="font-heading font-semibold text-sm text-foreground">{ind.title}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Logo Slider */}
      <section className="py-16 bg-surface">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-10">
            <span className="text-teal text-sm font-medium tracking-wider uppercase">Trusted Partners</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">
              Trusted by Industry Leaders
            </h2>
          </AnimatedSection>
          <div className="logo-slider">
            <div className="logo-slider-track">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16 px-8">
                  {["ADNOC", "Cummins", "Khazna", "Caterpillar", "Perkins", "MTU", "Kohler", "Volvo Penta"].map((name) => (
                    <div
                      key={`${setIdx}-${name}`}
                      className="flex-shrink-0 px-6 py-4 bg-card rounded-lg border border-border grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    >
                      <span className="font-heading font-bold text-lg text-foreground whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-navy">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-16">
            <span className="text-teal text-sm font-medium tracking-wider uppercase">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-foreground mt-2 mb-4">
              What Our Partners Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10 h-full flex flex-col">
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                  <div>
                    <div className="font-heading font-semibold text-primary-foreground text-sm">{t.author}</div>
                    <div className="text-primary-foreground/50 text-xs">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-light">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Power Your Next Project?
            </h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 text-lg">
              Contact us today to discuss how Synergy Infratech Power Systems can deliver mission-critical power solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold px-8 hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Link to="/services" className="flex items-center gap-2">View Solutions</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
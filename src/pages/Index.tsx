import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Globe, Users, Award, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-industrial.jpg";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "18+", label: "Years Experience" },
  { value: "15+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  { icon: Shield, title: "Engineering Design", desc: "Comprehensive engineering solutions from concept to detailed design for industrial facilities." },
  { icon: Zap, title: "Power Systems", desc: "Complete power generation and distribution solutions for critical infrastructure." },
  { icon: Globe, title: "Project Management", desc: "End-to-end project management ensuring on-time, on-budget delivery." },
  { icon: Users, title: "Procurement", desc: "Strategic sourcing and supply chain management for complex projects." },
  { icon: Award, title: "Quality Assurance", desc: "Rigorous quality control processes meeting international standards." },
  { icon: Clock, title: "Maintenance & Support", desc: "24/7 maintenance and technical support for operational excellence." },
];

const industries = [
  { title: "Oil & Gas", image: "🛢️" },
  { title: "Power Generation", image: "⚡" },
  { title: "Infrastructure", image: "🏗️" },
  { title: "Water & Utilities", image: "💧" },
  { title: "Petrochemical", image: "🏭" },
  { title: "Renewable Energy", image: "☀️" },
];

const testimonials = [
  { quote: "ESI delivered exceptional results on our refinery expansion project. Their technical expertise and project management capabilities are world-class.", author: "Ahmed Al-Rashid", role: "VP Operations, ADNOC" },
  { quote: "We've partnered with ESI on multiple power infrastructure projects. Their commitment to quality and safety is unmatched in the region.", author: "Sarah Thompson", role: "Director, Emirates Power" },
  { quote: "The engineering solutions provided by ESI transformed our facility's operational efficiency by over 40%. Highly recommended.", author: "Mohammad Hassan", role: "Plant Manager, Gulf Industries" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Industrial facility at sunset" className="w-full h-full object-cover" width={1920} height={1080} />
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
              Engineering Excellence Since 2005
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Engineering the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-orange">
                Future
              </span>{" "}
              of Industry
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg leading-relaxed">
              Delivering world-class engineering solutions across Oil & Gas, Power, and Infrastructure sectors throughout the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold text-base px-8">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-navy-dark hover:bg-primary-foreground/90 font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote
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
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive engineering and project management solutions tailored to meet the demands of modern industry.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative bg-card rounded-xl p-8 border border-border hover:border-teal/30 hover:shadow-xl hover:shadow-teal/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <ChevronRight className="w-5 h-5 text-teal mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
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

      {/* Testimonials */}
      <section className="section-padding bg-navy">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-16">
            <span className="text-teal text-sm font-medium tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-foreground mt-2 mb-4">
              Trusted by Industry Leaders
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 text-lg">
              Contact us today to discuss how ESI can deliver engineering excellence for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange hover:bg-orange-light text-accent-foreground font-semibold px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

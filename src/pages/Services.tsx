import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Zap, Globe, Wrench, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesPower from "@/assets/services-power.jpg";

const services = [
  {
    id: "enclosures",
    icon: Shield,
    title: "Acoustic Generator Enclosures",
    desc: "Weatherproof & sound-attenuated designs ranging from 65 dBA @ 1m to 85 dBA options. Suitable for 30 kVA to 3000 kVA gensets with custom ISO container or bespoke dimensions for rapid deployment. Our enclosures are engineered for extreme ambient conditions and comply with international noise and safety standards.",
    features: ["Weatherproof & Sound-Attenuated", "30 kVA to 3000 kVA Range", "Custom ISO or Bespoke Dimensions", "High-Ambient Temperature Performance"],
  },
  {
    id: "fuel-tanks",
    icon: Zap,
    title: "Fuel Tanks & Piping Systems",
    desc: "Complete fuel storage and distribution systems including critical grade silencers (cylindrical, square, or hockey puck), ASME B31/API compliant piping spools, and comprehensive thermal insulation and cladding services. From containerized tanks to frac tanks and UL-listed compliant solutions.",
    features: ["Critical Grade Silencers", "ASME B31 / API Compliant", "Thermal Insulation & Cladding", "UL Listed & Compliant Tanks"],
  },
  {
    id: "e-houses",
    icon: Globe,
    title: "E-Houses / E-PODs",
    desc: "Prefabricated modular housing for HV/MV switchgear and transformers. Available in fire-rated and blast-proof configurations, fully integrated with lighting, Fire & Gas (F&G) systems, and cabling for complete Plug & Play deployment on site.",
    features: ["HV/MV Switchgear Housing", "Fire-Rated & Blast-Proof Options", "Plug & Play Integration", "F&G System Integration"],
  },
  {
    id: "electrical",
    icon: Wrench,
    title: "Electrical Integration (E&I)",
    desc: "Complete design, installation, and maintenance of control instruments. Custom control panels and switchgear integration with full Factory Acceptance Testing (FAT) capabilities. We deliver turnkey electrical packages including power cabling to switchgear and complete system commissioning.",
    features: ["Custom Control Panels", "Switchgear Integration", "Factory Acceptance Testing", "Turnkey Electrical Packages"],
  },
];

const Services = () => (
  <Layout>
    <PageHero title="Our Solutions" subtitle="End-to-end packaged power solutions engineered for mission-critical reliability." breadcrumb="Services" />

    {/* Overview */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <span className="text-teal text-sm font-medium tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-6">
              Integrated Power Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Synergy Infratech Power Systems provides complete solutions from initial design to site testing and installation. Our end-to-end commitment transforms complex requirements into reliable, deployed infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Backed by experienced fabrication crews, in-house engineering experts, and 112,700 sqm of production space, we deliver mission-critical power solutions for Data Centers, Oil & Gas, and Global Infrastructure projects.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={servicesPower} alt="Data center power infrastructure" className="rounded-xl shadow-2xl" loading="lazy" width={800} height={600} />
          </AnimatedSection>
        </div>

        {/* Services grid */}
        <div className="space-y-8">
          {services.map((s) => (
            <AnimatedSection key={s.id} delay={0.1}>
              <div id={s.id} className="scroll-mt-24 group bg-card rounded-xl border border-border p-8 md:p-10 hover:border-teal/30 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <s.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                          <ChevronRight className="w-3.5 h-3.5 text-teal" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-navy">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Need a Custom Power Solution?
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
            Our engineering team is ready to discuss your specific requirements and deliver a tailored solution.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-orange hover:bg-orange-light text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Us <ChevronRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Services;
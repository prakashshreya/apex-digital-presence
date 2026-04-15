import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Zap, Globe, Users, Award, Clock, Wrench, Settings, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicesPower from "@/assets/services-power.jpg";

const services = [
  { id: "engineering", icon: Shield, title: "Engineering Design", desc: "From feasibility studies to detailed design, our engineering team delivers solutions across mechanical, electrical, civil, and instrumentation disciplines. We leverage the latest CAD/CAE tools and simulation software to optimize designs for safety, efficiency, and cost.", features: ["Conceptual & Detailed Design", "3D Modeling & Simulation", "Process Engineering", "Structural Analysis"] },
  { id: "project-management", icon: Globe, title: "Project Management", desc: "Our PMO delivers projects on time and within budget using proven methodologies. We provide full project lifecycle management from initiation through closeout, ensuring alignment with client objectives.", features: ["Planning & Scheduling", "Cost Control", "Risk Management", "Stakeholder Communication"] },
  { id: "power-systems", icon: Zap, title: "Power Systems", desc: "Complete power generation and distribution solutions including substations, transmission lines, and control systems for industrial and utility-scale applications.", features: ["Substation Design", "Protection Systems", "Power Quality Analysis", "Grid Integration"] },
  { id: "procurement", icon: Users, title: "Procurement & Supply Chain", desc: "Strategic sourcing, vendor management, and logistics coordination to ensure timely delivery of materials and equipment for complex industrial projects.", features: ["Vendor Qualification", "Material Tracking", "Expediting", "Logistics Management"] },
  { id: "quality", icon: Award, title: "Quality & HSE", desc: "Comprehensive quality assurance and health, safety, and environmental management programs that exceed international standards and regulatory requirements.", features: ["ISO 9001 / 14001 / 45001", "Safety Audits", "Environmental Impact", "Compliance Management"] },
  { id: "maintenance", icon: Clock, title: "Maintenance & Support", desc: "24/7 maintenance, turnaround, and technical support services to maximize asset uptime and operational efficiency across industrial facilities.", features: ["Preventive Maintenance", "Turnaround Management", "Emergency Response", "Asset Management"] },
  { id: "construction", icon: Wrench, title: "Construction Management", desc: "On-site construction supervision and management ensuring quality workmanship, safety compliance, and adherence to project timelines.", features: ["Site Supervision", "Progress Monitoring", "Change Management", "Commissioning Support"] },
  { id: "consulting", icon: Settings, title: "Technical Consulting", desc: "Expert consulting services in process optimization, energy efficiency, digital transformation, and regulatory compliance for industrial operations.", features: ["Process Optimization", "Energy Audits", "Digital Transformation", "Regulatory Advisory"] },
];

const Services = () => (
  <Layout>
    <PageHero title="Our Services" subtitle="Comprehensive engineering and project management solutions for modern industry." breadcrumb="Services" />

    {/* Overview image */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection>
            <span className="text-teal text-sm font-medium tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-6">
              End-to-End Engineering Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ESI provides a complete range of engineering, procurement, construction management, and technical consulting services. Our multidisciplinary approach enables us to deliver integrated solutions that optimize performance and reduce costs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With deep expertise across Oil & Gas, Power, Water, and Infrastructure sectors, we bring industry-specific knowledge to every engagement.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={servicesPower} alt="Power infrastructure" className="rounded-xl shadow-2xl" loading="lazy" width={800} height={600} />
          </AnimatedSection>
        </div>

        {/* Services grid */}
        <div className="space-y-8">
          {services.map((s, i) => (
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
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
            Our team is ready to discuss your specific requirements and deliver a tailored engineering solution.
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

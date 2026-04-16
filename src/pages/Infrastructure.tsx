import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Factory, MapPin, Wrench, Cpu, ChevronRight } from "lucide-react";

const facilities = [
  {
    name: "UAE Manufacturing Facility No. 1",
    location: "Hamriyah Free Zone, Sharjah",
    area: "5,000 sqm",
    desc: "Central hub for project management, final assembly, and dedicated storage.",
  },
  {
    name: "UAE Manufacturing Facility No. 2",
    location: "Sajaa Industrial Area, Sharjah",
    area: "9,000 sqm",
    desc: "Optimized for parallel production lines and rapid deployment.",
  },
  {
    name: "UAE Mega-Yard 3",
    location: "Sharjah Industrial Area",
    area: "63,500 sqm",
    desc: "Dedicated to high-volume assembly and proposed future expansion.",
  },
  {
    name: "India Office & Factory",
    location: "Chakan, Pune, Maharashtra",
    area: "36,500 sqm",
    desc: "Centre for project management, fabrication, final assembly, and dedicated storage.",
  },
];

const capabilities = [
  { icon: Factory, title: "Simultaneous Assembly", desc: "Handling multiple 50MW+ Data Center packages concurrently across our expansive facilities." },
  { icon: Wrench, title: "Heavy Fabrication", desc: "Specialized yards for constructing oversized fuel tanks, structural steel, and containerized systems." },
  { icon: Cpu, title: "E&I Integration", desc: "Clean, indoor environments for electrical works, switchgear assembly, and control panel fabrication." },
];

const engineeringTools = [
  { name: "AutoCAD", desc: "Precise 2D General Arrangement (GA) and fabrication drawings." },
  { name: "SolidWorks", desc: "High-fidelity 3D modeling for visualization and interference checking." },
  { name: "STAAD.Pro", desc: "Structural analysis to ensure lifting frames and containers meet load-bearing safety standards." },
];

const engineeringServices = [
  "Structural Analysis — Static and dynamic loads for lifting lugs, roof structures, and heavy-duty skids",
  "Piping Design — ASME & UL-compliant piping layouts for fuel, oil, and coolant systems",
  "Skid & Packaging Design — Custom engineering of mounting bases for pumps, motors, and compressors",
  "Value Engineering — Optimizing material selection and structural design to reduce weight and cost",
];

const Infrastructure = () => (
  <Layout>
    <PageHero title="Manufacturing & Engineering" subtitle="112,700+ sqm of production space across strategic global locations." breadcrumb="Infrastructure" />

    {/* Stats */}
    <section className="py-12 bg-navy">
      <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "112,700 sqm", label: "Total Production Area" },
          { value: "250+", label: "Skilled Workforce" },
          { value: "1000+", label: "Projects Delivered" },
          { value: "100%", label: "Debt-Free Growth" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl md:text-3xl font-heading font-bold text-orange">{s.value}</div>
            <div className="text-sm text-primary-foreground/50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Facilities */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-teal text-sm font-medium tracking-wider uppercase">Our Facilities</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">Manufacturing Infrastructure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From our initial 5,000 sqm facility in 2022, we have aggressively expanded to a combined 76,500 sqm operational area in UAE—all through debt-free growth.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-8 hover:border-teal/30 hover:shadow-lg transition-all h-full">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-teal" />
                  <span className="text-sm text-teal font-medium">{f.location}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{f.name}</h3>
                <div className="text-orange font-heading font-bold text-lg mb-2">{f.area}</div>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-wider uppercase">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">Unmatched Scalability</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-8 text-center h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Engineering */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-teal text-sm font-medium tracking-wider uppercase">Engineering</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">Engineering & Design Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Precision modeling, structural analysis, and bespoke design using industry-leading software.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {engineeringTools.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 hover:border-teal/30 hover:shadow-lg transition-all h-full">
                <h4 className="font-heading font-bold text-foreground text-lg mb-2">{t.name}</h4>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-card rounded-xl border border-border p-8 md:p-10">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">Core Engineering Services</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {engineeringServices.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                  <ChevronRight className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Infrastructure;
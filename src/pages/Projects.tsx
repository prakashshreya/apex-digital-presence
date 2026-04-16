import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, ChevronRight } from "lucide-react";

const categories = ["All", "Data Centers", "Oil & Gas", "Storage Tanks", "Infrastructure"];

const projects = [
  { title: "Hyperscale Data Center Power – UAE", category: "Data Centers", client: "Cummins Arabia FZCO", endUser: "Khazna Data Centers / DU Telecom", value: "60+ Custom Enclosures", year: "2024", status: "Completed", highlight: true },
  { title: "Data Center Generator Containerization", category: "Data Centers", client: "Global Data Center Operator", endUser: "Tier IV Data Center", value: "40+ Units", year: "2024", status: "Ongoing", highlight: false },
  { title: "ADNOC Oil & Gas Infrastructure", category: "Oil & Gas", client: "ADNOC", endUser: "ADNOC Operations", value: "Large Scale", year: "2023", status: "Completed", highlight: false },
  { title: "High-Capacity Power Generation 3.5MVA HV", category: "Oil & Gas", client: "Energy Sector Client", endUser: "Power Generation Facility", value: "3.5 MVA", year: "2023", status: "Completed", highlight: false },
  { title: "Blast-Proof Specialized Containers", category: "Oil & Gas", client: "Oil & Gas Operator", endUser: "Offshore Platform", value: "Multiple Units", year: "2024", status: "Ongoing", highlight: false },
  { title: "Containerized Storage Tanks – Global", category: "Storage Tanks", client: "Clients Across Globe", endUser: "ADNOC, Power Sector", value: "1000+ Tanks", year: "2022-2024", status: "Completed", highlight: true },
  { title: "UL Listed Fuel Tanks", category: "Storage Tanks", client: "International Clients", endUser: "Industrial Facilities", value: "200+ Units", year: "2023", status: "Completed", highlight: false },
  { title: "Frac Tanks & Mud Skips", category: "Storage Tanks", client: "Oil & Gas Sector", endUser: "Drilling Operations", value: "150+ Units", year: "2023", status: "Completed", highlight: false },
  { title: "E-House & Switchgear Housing", category: "Infrastructure", client: "Power Utility", endUser: "Substation Project", value: "Multiple E-Houses", year: "2024", status: "Ongoing", highlight: false },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      <PageHero title="Our Projects" subtitle="Proven delivery of critical power and infrastructure projects worldwide." breadcrumb="Projects" />

      {/* Featured Project */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="bg-card rounded-xl border border-teal/20 p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-orange" />
                <span className="text-orange text-sm font-semibold uppercase tracking-wider">Featured Project</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Hyperscale Data Center Power – UAE
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Client / Partner:</span> Cummins Arabia FZCO</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">End User:</span> Khazna Data Centers / DU Telecom</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Scale:</span> 60+ Custom Generator Enclosures</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Performance:</span> Achieved strict 80 dBA @ 1 meter noise attenuation</p>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Technical Specs:</span> Accommodating C3000D5 & C2750D5BE Gensets</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Scope:</span> Full turnkey package including electrical installation, power cabling, and Fire & Gas system integration</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-navy text-primary-foreground"
                    : "bg-secondary text-foreground/70 hover:bg-navy/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-teal/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-teal bg-teal/10 px-2.5 py-1 rounded-full">{p.category}</span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.status === "Completed" ? "bg-green-100 text-green-700" : "bg-orange/10 text-orange"}`}>{p.status}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Client: <span className="text-foreground/80">{p.client}</span></p>
                    <p>Scale: <span className="text-foreground/80 font-semibold">{p.value}</span></p>
                    <p>Year: <span className="text-foreground/80">{p.year}</span></p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
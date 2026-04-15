import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "Oil & Gas", "Power", "Infrastructure", "Water"];

const projects = [
  { title: "Abu Dhabi Refinery Expansion", category: "Oil & Gas", client: "ADNOC", value: "$120M", year: "2023", status: "Completed" },
  { title: "Dubai Solar Park Phase III", category: "Power", client: "DEWA", value: "$85M", year: "2024", status: "Ongoing" },
  { title: "Al Ain Water Treatment Plant", category: "Water", client: "AADC", value: "$45M", year: "2022", status: "Completed" },
  { title: "Ruwais Gas Processing Facility", category: "Oil & Gas", client: "GASCO", value: "$200M", year: "2023", status: "Completed" },
  { title: "Sharjah Power Substation", category: "Power", client: "SEWA", value: "$30M", year: "2024", status: "Ongoing" },
  { title: "Fujairah Port Infrastructure", category: "Infrastructure", client: "Fujairah Ports", value: "$65M", year: "2023", status: "Completed" },
  { title: "Habshan Gas Compression", category: "Oil & Gas", client: "ADNOC Gas", value: "$150M", year: "2022", status: "Completed" },
  { title: "RAK Desalination Plant", category: "Water", client: "FEWA", value: "$55M", year: "2024", status: "Ongoing" },
  { title: "Abu Dhabi Highway Expansion", category: "Infrastructure", client: "DoT", value: "$90M", year: "2023", status: "Completed" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <Layout>
      <PageHero title="Our Projects" subtitle="A portfolio of successful engineering projects across the Middle East." breadcrumb="Projects" />
      <section className="section-padding bg-background">
        <div className="container-narrow">
          {/* Filters */}
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
                    <p>Value: <span className="text-foreground/80 font-semibold">{p.value}</span></p>
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

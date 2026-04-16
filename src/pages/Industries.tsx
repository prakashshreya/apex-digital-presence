import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

const industries = [
  { title: "Data Centers", emoji: "🖥️", desc: "Hyperscale and colocation data center power solutions including generator containerization, fuel systems, and E-Houses for Tier III/IV facilities.", projects: "100+" },
  { title: "Oil & Gas", emoji: "🛢️", desc: "Specialized containers, blast-proof enclosures, fuel tanks, and power generation solutions for upstream, midstream, and downstream operations.", projects: "300+" },
  { title: "Power Generation", emoji: "⚡", desc: "Complete packaged power systems from 30 kVA to 3000 kVA, including acoustic enclosures, fuel systems, and electrical integration for utility-scale applications.", projects: "200+" },
  { title: "Infrastructure", emoji: "🏗️", desc: "E-Houses, modular switchgear rooms, and containerized solutions for large-scale infrastructure and construction projects.", projects: "150+" },
  { title: "Manufacturing", emoji: "🏭", desc: "Custom power and containment solutions for manufacturing facilities, including skid-mounted systems and specialized fabrication.", projects: "100+" },
  { title: "Telecommunications", emoji: "📡", desc: "Reliable backup power enclosures and fuel systems for telecom towers and critical communication infrastructure.", projects: "150+" },
];

const Industries = () => (
  <Layout>
    <PageHero title="Industries We Serve" subtitle="Mission-critical power solutions across diverse industrial sectors." breadcrumb="Industries" />
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-xl p-8 border border-border hover:border-teal/30 hover:shadow-xl transition-all duration-300 h-full">
                <span className="text-5xl mb-5 block group-hover:scale-110 transition-transform">{ind.emoji}</span>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ind.desc}</p>
                <div className="text-teal font-heading font-bold text-lg">{ind.projects} <span className="text-sm font-normal text-muted-foreground">projects delivered</span></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Industries;
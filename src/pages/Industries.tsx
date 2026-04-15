import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const industries = [
  { title: "Oil & Gas", emoji: "🛢️", desc: "Upstream, midstream, and downstream engineering for refineries, pipelines, and processing facilities.", projects: "150+" },
  { title: "Power Generation", emoji: "⚡", desc: "Thermal, gas, and renewable power plant design, construction management, and maintenance services.", projects: "80+" },
  { title: "Infrastructure", emoji: "🏗️", desc: "Roads, bridges, buildings, and urban development projects across the region.", projects: "60+" },
  { title: "Water & Utilities", emoji: "💧", desc: "Desalination plants, water treatment facilities, and distribution network engineering.", projects: "45+" },
  { title: "Petrochemical", emoji: "🏭", desc: "Chemical processing plants, storage facilities, and distribution terminal design.", projects: "70+" },
  { title: "Renewable Energy", emoji: "☀️", desc: "Solar, wind, and hybrid power solutions for sustainable industrial development.", projects: "30+" },
];

const Industries = () => (
  <Layout>
    <PageHero title="Industries We Serve" subtitle="Deep domain expertise across critical industrial sectors." breadcrumb="Industries" />
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

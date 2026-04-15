import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Senior Mechanical Engineer", dept: "Engineering", location: "Abu Dhabi", type: "Full-time" },
  { title: "Project Manager – Oil & Gas", dept: "Project Management", location: "Abu Dhabi", type: "Full-time" },
  { title: "Electrical Design Engineer", dept: "Engineering", location: "Dubai", type: "Full-time" },
  { title: "HSE Manager", dept: "Quality & HSE", location: "Abu Dhabi", type: "Full-time" },
  { title: "Procurement Specialist", dept: "Supply Chain", location: "Abu Dhabi", type: "Full-time" },
  { title: "Civil/Structural Engineer", dept: "Engineering", location: "Dubai", type: "Full-time" },
];

const Careers = () => (
  <Layout>
    <PageHero title="Careers at ESI" subtitle="Join a team of world-class engineers shaping the future of industry." breadcrumb="Careers" />

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection className="max-w-2xl mb-12">
          <h2 className="text-3xl font-heading text-foreground mb-4">Why Work With Us?</h2>
          <p className="text-muted-foreground leading-relaxed">
            At ESI, you'll work on landmark projects that shape the Middle East's industrial landscape. We offer competitive compensation, professional development, and a collaborative culture built on respect and excellence.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-6">
          <h3 className="text-2xl font-heading text-foreground">Open Positions</h3>
        </AnimatedSection>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group bg-card rounded-xl border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-teal/30 hover:shadow-lg transition-all">
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-lg">{job.title}</h4>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                    <span className="bg-secondary px-2 py-0.5 rounded text-xs">{job.dept}</span>
                  </div>
                </div>
                <Button variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-primary-foreground shrink-0">
                  Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;

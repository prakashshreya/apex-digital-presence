import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Senior Mechanical Engineer", dept: "Engineering", location: "Sharjah, UAE", type: "Full-time" },
  { title: "Project Manager – Data Centers", dept: "Project Management", location: "Sharjah, UAE", type: "Full-time" },
  { title: "Electrical Design Engineer", dept: "Engineering", location: "Pune, India", type: "Full-time" },
  { title: "Fabrication Supervisor", dept: "Manufacturing", location: "Sharjah, UAE", type: "Full-time" },
  { title: "Quality Control Inspector", dept: "Quality", location: "Pune, India", type: "Full-time" },
  { title: "Sales Engineer – Power Systems", dept: "Sales", location: "Dallas, USA", type: "Full-time" },
];

const Careers = () => (
  <Layout>
    <PageHero title="Careers" subtitle="Join our team of engineers and specialists powering critical infrastructure worldwide." breadcrumb="Careers" />

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection className="max-w-2xl mb-12">
          <h2 className="text-3xl font-heading text-foreground mb-4">Why Work With Us?</h2>
          <p className="text-muted-foreground leading-relaxed">
            At Synergy Infratech Power Systems, you'll work on mission-critical power projects for the world's leading Data Centers, Oil & Gas companies, and infrastructure developers. We offer competitive compensation, growth opportunities across three countries, and a culture built on engineering excellence.
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
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Clock } from "lucide-react";

const posts = [
  { title: "The Rise of Hyperscale Data Centers in the Middle East", excerpt: "How the UAE is becoming a global hub for data center infrastructure and the critical role of reliable power solutions.", category: "Data Centers", date: "April 10, 2026", readTime: "5 min" },
  { title: "Acoustic Engineering for Generator Enclosures", excerpt: "Achieving 80 dBA noise attenuation in high-ambient temperature environments — engineering challenges and solutions.", category: "Engineering", date: "March 28, 2026", readTime: "4 min" },
  { title: "Modular E-Houses: The Future of Power Distribution", excerpt: "Why prefabricated E-Houses and E-PODs are becoming the preferred choice for rapid deployment in critical infrastructure.", category: "Innovation", date: "March 15, 2026", readTime: "6 min" },
  { title: "ASME & UL Compliance in Fuel Tank Manufacturing", excerpt: "Understanding the standards and certifications that ensure safety and reliability in industrial fuel storage systems.", category: "Standards", date: "February 20, 2026", readTime: "3 min" },
  { title: "From 5,000 to 112,700 sqm: Our Growth Story", excerpt: "How Synergy Infratech expanded from a single facility to a multi-site manufacturing powerhouse — all debt-free.", category: "Company", date: "February 5, 2026", readTime: "4 min" },
  { title: "Value Engineering in Packaged Power Solutions", excerpt: "Optimizing material selection and structural design to reduce weight and cost without compromising integrity.", category: "Engineering", date: "January 18, 2026", readTime: "5 min" },
];

const Blog = () => (
  <Layout>
    <PageHero title="Insights & Blog" subtitle="Industry perspectives, project highlights, and engineering innovation." breadcrumb="Blog" />
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <article className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-teal/30 transition-all duration-300 h-full flex flex-col">
                <div className="h-2 bg-gradient-to-r from-navy to-teal" />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-medium text-teal bg-teal/10 px-2.5 py-1 rounded-full self-start mb-4">{post.category}</span>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-teal transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime} read
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
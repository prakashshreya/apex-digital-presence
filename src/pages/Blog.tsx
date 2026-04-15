import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  { title: "The Future of Digital Twins in Oil & Gas", excerpt: "How digital twin technology is revolutionizing asset management and operational efficiency in the energy sector.", category: "Technology", date: "April 10, 2026", readTime: "5 min" },
  { title: "Sustainability in Industrial Engineering", excerpt: "ESI's approach to integrating sustainable practices across engineering design and project execution.", category: "Sustainability", date: "March 28, 2026", readTime: "4 min" },
  { title: "Power Grid Modernization in the UAE", excerpt: "An overview of the latest developments in smart grid technology and their impact on power distribution.", category: "Power", date: "March 15, 2026", readTime: "6 min" },
  { title: "Safety Excellence: Our Zero-Incident Journey", excerpt: "How ESI achieved 5 million man-hours without a lost-time incident on our flagship projects.", category: "HSE", date: "February 20, 2026", readTime: "3 min" },
  { title: "Engineering Workforce of Tomorrow", excerpt: "Investing in the next generation of engineers through mentorship, training, and career development programs.", category: "Careers", date: "February 5, 2026", readTime: "4 min" },
  { title: "Modular Construction: Faster, Smarter, Safer", excerpt: "Exploring the benefits of modular construction techniques for industrial facilities in the Middle East.", category: "Innovation", date: "January 18, 2026", readTime: "5 min" },
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

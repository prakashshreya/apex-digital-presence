import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue the highest standards in every project we undertake." },
  { icon: Eye, title: "Innovation", desc: "Continuously adopting cutting-edge technologies and methodologies." },
  { icon: Heart, title: "Integrity", desc: "Transparent, ethical practices in all our business relationships." },
  { icon: Users, title: "Collaboration", desc: "Working as one team with our clients to achieve shared success." },
];

const leaders = [
  { name: "Ahmed Al-Mansoori", role: "CEO & Managing Director", bio: "30+ years in industrial engineering leadership across the Middle East." },
  { name: "Dr. Sarah Mitchell", role: "Chief Technical Officer", bio: "PhD in Petroleum Engineering, former VP at Shell Global." },
  { name: "Khalid Rahman", role: "VP Operations", bio: "20+ years managing large-scale Oil & Gas infrastructure projects." },
  { name: "Elena Volkov", role: "Head of Engineering", bio: "Specialist in power systems design with 15+ years of experience." },
];

const About = () => (
  <Layout>
    <PageHero title="About ESI" subtitle="Engineering excellence and innovation since 2005." breadcrumb="About Us" />

    {/* Overview */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-teal text-sm font-medium tracking-wider uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-6">
              Pioneering Engineering Solutions in the Middle East
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Engineering Services International LLC (ESI) is a leading multidisciplinary engineering company headquartered in Abu Dhabi, UAE. Since our founding in 2005, we have delivered over 500 projects across the Oil & Gas, Power, Infrastructure, and Water sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of 200+ engineers and technical specialists brings deep domain expertise, innovative thinking, and unwavering commitment to safety and quality. We partner with some of the world's largest energy companies to design, build, and maintain critical industrial infrastructure.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={aboutTeam} alt="ESI engineering team" className="rounded-xl shadow-2xl" width={1280} height={720} loading="lazy" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-10 border border-border h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional engineering solutions that drive operational excellence, ensure safety, and create lasting value for our clients and communities across the Middle East and beyond.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="bg-card rounded-xl p-10 border border-border h-full">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange to-orange-light flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative engineering services provider in the region, recognized for technical excellence, sustainable practices, and transformative impact on industrial development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-teal" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-wider uppercase">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">Meet Our Team</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((l, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-teal mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-2xl">{l.name[0]}</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground">{l.name}</h4>
                <p className="text-teal text-sm font-medium mb-2">{l.role}</p>
                <p className="text-muted-foreground text-xs">{l.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

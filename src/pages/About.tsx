import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import { Target, Eye, Heart, Users, Globe, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Reliability", desc: "Mission-critical solutions engineered for maximum uptime and performance." },
  { icon: Award, title: "Excellence", desc: "Uncompromising quality standards in every product we deliver." },
  { icon: Globe, title: "Global Reach", desc: "Strategic presence across USA, UAE, India, and MENA regions." },
  { icon: Users, title: "Partnership", desc: "Collaborative approach with clients to achieve shared success." },
];

const leaders = [
  { name: "Dr. Shashi More", role: "Director", bio: "Ph.D. in Mechanical Engineering from Purdue University, specializing in Acoustics. Former Global Data Center Engineering Leader at Cummins Inc. Holds patents in genset enclosures and noise reduction." },
  { name: "Baskar Nallusamy", role: "Country Head, India", bio: "20+ years of executive experience in Oil & Gas & Data Centre sectors. Global track record driving sales across Middle East, Canada, UK & India." },
  { name: "Lakshmi Kadambi", role: "Sales & Technical Lead", bio: "40+ years experience in power system design, execution, and management of large projects from 5 MW to 100 MW across Middle East, Singapore, and USA." },
  { name: "Prabhu Arumugam", role: "Technical & Commercial Manager", bio: "18+ years in Oil & Gas and Data Center sectors. Specializes in large-scale project management across Middle East, Canada, UK, and India." },
];

const About = () => (
  <Layout>
    <PageHero title="About Us" subtitle="Bridging the gap in critical power infrastructure since establishment." breadcrumb="About Us" />

    {/* Overview */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-teal text-sm font-medium tracking-wider uppercase">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-6">
              Packaged Power Solutions for Mission-Critical Industries
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Synergy Infratech Power Systems specializes in the design, engineering, and supply of mission-critical power solutions. We offer an end-to-end commitment, transforming complex requirements into reliable, deployed infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We design and manufacture robust, packaged power systems, including bespoke Generator Enclosures, specialized Fuel Tanks, E-Houses/E-PODs, and complete Electrical Integration solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Operating across 112,700 sqm of production space with a 250+ skilled workforce, we serve clients across USA, UAE, MENA, and India—supporting the rapid expansion of Data Centers alongside specialized solutions for Oil & Gas infrastructure globally.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={aboutTeam} alt="Synergy Infratech engineering team" className="rounded-xl shadow-2xl" width={1280} height={720} loading="lazy" />
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
                To deliver reliable and scalable power solutions that meet the most demanding requirements of mission-critical industries. From initial design to site testing and installation, we provide complete turnkey solutions backed by experienced fabrication crews, project management, and in-house engineering expertise.
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
                To be the global leader in packaged power infrastructure—recognized for engineering excellence, unmatched manufacturing scale, and the ability to deliver mission-critical solutions with speed and reliability across Data Centers, Oil & Gas, and Industrial sectors worldwide.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Global Presence */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="text-teal text-sm font-medium tracking-wider uppercase">Global Footprint</span>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">Strategic Presence Worldwide</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { flag: "🇺🇸", country: "USA", location: "Dallas, Texas", detail: "Project management & coordination" },
            { flag: "🇦🇪", country: "UAE", location: "Sharjah Industrial Area", detail: "76,500 sqm heavy manufacturing" },
            { flag: "🇮🇳", country: "India", location: "Chakan, Pune", detail: "36,500 sqm fabrication & assembly" },
            { flag: "🌍", country: "MENA", location: "Regional Coverage", detail: "Oil & Gas & infrastructure projects" },
          ].map((loc, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all">
                <span className="text-4xl mb-3 block">{loc.flag}</span>
                <h4 className="font-heading font-semibold text-foreground mb-1">{loc.country}</h4>
                <p className="text-teal text-sm font-medium mb-1">{loc.location}</p>
                <p className="text-muted-foreground text-xs">{loc.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-surface">
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
    <section className="section-padding bg-background">
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
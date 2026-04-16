import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    icon: Globe,
    region: "USA Office",
    address: "4012 West Illinois Ave., Dallas, TX 75211, U.S.A",
    phone: "+1 281 522 1920",
    email: "deepti@synergy-infratech.com",
  },
  {
    icon: MapPin,
    region: "UAE Manufacturing",
    address: "Hamriyah & Sajaa Industrial Area, Sharjah, UAE",
    phone: "+971 50 759 8010",
    email: "prabhu@synergy-infratech.com",
  },
  {
    icon: MapPin,
    region: "India Office & Factory",
    address: "Village-Bhamboli, Gate no. 210/1 & 210/2, Chakan, Talkhed, Pune 410501, Maharashtra, India",
    phone: "+91 99408 52147",
    email: "baskar@synergy-infratech.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Bridging the gap between manufacturing excellence and project delivery." breadcrumb="Contact" />

      {/* Office Locations */}
      <section className="section-padding bg-surface">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <span className="text-teal text-sm font-medium tracking-wider uppercase">Our Offices</span>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mt-2 mb-4">Global Presence</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                    <office.icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-3">{office.region}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-foreground/70 hover:text-teal transition-colors">
                      <Phone className="w-3.5 h-3.5" /> {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-foreground/70 hover:text-teal transition-colors">
                      <Mail className="w-3.5 h-3.5" /> {office.email}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <AnimatedSection>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "General Inquiries", value: "info@synergy-infratech.com" },
                    { icon: Globe, label: "Website", value: "www.synergy-infratech.com" },
                    { icon: Phone, label: "USA", value: "+1 281 522 1920" },
                    { icon: Phone, label: "India", value: "+91 99408 52147" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Send Us a Message</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <Input value={form.name} onChange={update("name")} placeholder="Your name" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                      <Input type="email" value={form.email} onChange={update("email")} placeholder="your@email.com" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input value={form.phone} onChange={update("phone")} placeholder="+1..." className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <Input value={form.company} onChange={update("company")} placeholder="Company name" className="bg-background" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <Input value={form.subject} onChange={update("subject")} placeholder="Project inquiry" className="bg-background" />
                  </div>
                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea value={form.message} onChange={update("message")} placeholder="Tell us about your project requirements..." rows={5} className="bg-background resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="bg-navy hover:bg-navy-light text-primary-foreground font-semibold w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
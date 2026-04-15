import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, breadcrumb }: Props) => (
  <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--teal)/0.15),transparent_70%)]" />
    <div className="container-narrow relative z-10">
      {breadcrumb && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-teal text-sm font-medium tracking-wider uppercase mb-3"
        >
          {breadcrumb}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/60 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;

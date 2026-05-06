import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Factory,
  HeadphonesIcon,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const SERVICES = [
  {
    icon: Users,
    title: "Permanent Staffing",
    desc: "Direct hire solutions for long-term talent needs across all levels.",
  },
  {
    icon: Clock,
    title: "Contractual Staffing",
    desc: "Flexible workforce for project-based and seasonal demands.",
  },
  {
    icon: Factory,
    title: "Industrial Manpower",
    desc: "Skilled blue-collar workers for manufacturing and logistics.",
  },
  {
    icon: HeadphonesIcon,
    title: "IT Staffing",
    desc: "Certified tech professionals for digital transformation projects.",
  },
  {
    icon: Briefcase,
    title: "Executive Search",
    desc: "C-suite and leadership hiring for high-growth organisations.",
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    desc: "End-to-end HR strategy and workforce planning advisory.",
  },
];

const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "5,000+", label: "Placements Annually" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" },
];

const WHY_ITEMS = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: TrendingUp, label: "Pan-India Reach" },
  { icon: Star, label: "Top Rated" },
  { icon: Users, label: "Expert Team" },
];

const BENEFITS = [
  "Industry-vetted talent with background verification",
  "Dedicated account managers for each client",
  "Pan-India sourcing network across 40+ cities",
  "Compliance-first payroll and contract management",
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ManpowerPro &mdash; Enterprise B2B Manpower Services</title>
        <meta
          name="description"
          content="India's trusted partner for enterprise manpower solutions. Permanent staffing, contractual hiring, IT staffing, and HR consulting."
        />
        <meta
          property="og:title"
          content="ManpowerPro &mdash; Enterprise B2B Manpower Services"
        />
        <meta
          property="og:description"
          content="End-to-end workforce solutions for India's leading enterprises."
        />
      </Helmet>

      {/* Hero */}
      <section
        className="relative bg-card border-b border-border overflow-hidden"
        data-ocid="home.hero.section"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30 bg-primary/5"
              >
                Trusted by 200+ Enterprises
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
                The Right People,
                <br />
                <span className="text-primary">Right When You Need</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                ManpowerPro delivers end-to-end workforce solutions &mdash; from
                permanent placements to contractual staffing &mdash; helping
                India's leading enterprises build high-performing teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" data-ocid="home.hero.primary_button">
                  <Link to="/contact">
                    Get a Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  data-ocid="home.hero.secondary_button"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10" data-ocid="home.stats.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="bg-background py-20"
        data-ocid="home.services.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive manpower solutions designed for modern enterprise
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`home.services.item.${i + 1}`}
              >
                <Card className="h-full hover:shadow-md transition-smooth border-border hover:border-primary/30">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 py-20" data-ocid="home.why.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why 200+ Enterprises Trust ManpowerPro
              </h2>
              <ul className="space-y-4">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8"
                data-ocid="home.why.primary_button"
              >
                <Link to="/about">
                  Learn About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {WHY_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16" data-ocid="home.cta.section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Connect with our workforce specialists today for a tailored talent
            strategy.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            data-ocid="home.cta.primary_button"
          >
            <Link to="/contact">
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

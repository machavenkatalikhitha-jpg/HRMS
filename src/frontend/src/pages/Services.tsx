import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Factory,
  HeadphonesIcon,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const SERVICES = [
  {
    icon: Users,
    title: "Permanent Staffing",
    badge: "Most Popular",
    desc: "End-to-end permanent hiring for junior, mid-level, and senior roles. We manage sourcing, screening, interviews, and onboarding.",
    features: [
      "Dedicated talent pipeline",
      "3-month replacement guarantee",
      "Background & reference checks",
    ],
  },
  {
    icon: Clock,
    title: "Contractual Staffing",
    badge: "Flexible",
    desc: "Scale your workforce up or down with skilled contractual employees on short, mid, or long-term engagements.",
    features: [
      "Rapid deployment (24-72 hrs)",
      "Payroll & compliance handled",
      "Hassle-free exits",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Manpower",
    badge: "Blue Collar",
    desc: "Trained blue-collar workforce for manufacturing, warehousing, logistics, and infrastructure sectors.",
    features: [
      "Safety-trained workers",
      "Bulk hiring capability",
      "Multi-location deployment",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "IT Staffing",
    badge: "Tech",
    desc: "Certified IT professionals for software development, cloud, cybersecurity, and digital transformation projects.",
    features: [
      "Tech skill assessments",
      "Niche & rare skill sourcing",
      "Agile team staffing",
    ],
  },
  {
    icon: Briefcase,
    title: "Executive Search",
    badge: "Leadership",
    desc: "Confidential C-suite and senior leadership search using our exclusive network of high-potential executives.",
    features: [
      "Retained executive search",
      "Confidential mandates",
      "Board-level placements",
    ],
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    badge: "Advisory",
    desc: "Strategic HR advisory covering workforce planning, compensation benchmarking, and organisational design.",
    features: [
      "Workforce audit",
      "Compensation benchmarking",
      "HR policy design",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services &mdash; ManpowerPro</title>
        <meta
          name="description"
          content="Explore ManpowerPro's full range of enterprise staffing services: permanent hiring, contractual staffing, IT staffing, industrial manpower, executive search, and HR consulting."
        />
      </Helmet>

      <section
        className="bg-card border-b border-border py-16"
        data-ocid="services.hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tailored manpower solutions for every stage of your talent journey
              &mdash; from first hire to C-suite.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="bg-background py-16"
        data-ocid="services.list.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`services.list.item.${i + 1}`}
              >
                <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-smooth">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svc.icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {svc.badge}
                      </Badge>
                    </div>
                    <h2 className="font-display font-bold text-foreground text-lg">
                      {svc.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {svc.desc}
                    </p>
                    <ul className="space-y-2">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-muted/40 py-16 text-center"
        data-ocid="services.cta.section"
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Not Sure Which Service Fits?
          </h2>
          <p className="text-muted-foreground mb-6">
            Talk to our workforce specialists for a free needs assessment.
          </p>
          <Button asChild size="lg" data-ocid="services.cta.primary_button">
            <Link to="/contact">
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

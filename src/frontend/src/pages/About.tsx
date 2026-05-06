import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe, Handshake, Users } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const VALUES = [
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in sourcing, screening, and placement.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    desc: "Transparent processes and honest communication at every stage.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    desc: "Active sourcing hubs in 40+ cities across India.",
  },
  {
    icon: Users,
    title: "People First",
    desc: "We believe great businesses are built by great people &mdash; and we find them.",
  },
];

const MILESTONES = [
  {
    year: "2005",
    event: "Founded in Mumbai with a team of 10 HR specialists.",
  },
  {
    year: "2010",
    event: "Expanded to 12 cities, surpassing 500 enterprise clients.",
  },
  { year: "2016", event: "Launched dedicated IT staffing division." },
  { year: "2020", event: "Achieved ISO 9001:2015 certification." },
  {
    year: "2024",
    event: "5,000+ annual placements; 200+ active enterprise partnerships.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us &mdash; ManpowerPro</title>
        <meta
          name="description"
          content="Learn about ManpowerPro's 18+ year legacy of delivering enterprise manpower solutions across India."
        />
      </Helmet>

      <section
        className="bg-card border-b border-border py-16"
        data-ocid="about.hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About ManpowerPro
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              18 years of workforce excellence &mdash; connecting India's
              enterprises with the talent that drives growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="bg-background py-16"
        data-ocid="about.mission.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To be India's most trusted enterprise staffing partner by
              delivering verified, high-performing talent at every level &mdash;
              from shop floor to C-suite.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We operate at the intersection of technology and human insight,
              combining AI-powered screening with decades of domain expertise to
              match the right people with the right organisations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`about.values.item.${i + 1}`}
              >
                <Card className="border-border h-full">
                  <CardContent className="p-5 space-y-2">
                    <val.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-foreground font-display">
                      {val.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {val.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16" data-ocid="about.timeline.section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">
            Our Journey
          </h2>
          <ol className="relative border-l border-border space-y-8 ml-4">
            {MILESTONES.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="ml-6"
                data-ocid={`about.timeline.item.${i + 1}`}
              >
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-primary ring-4 ring-background" />
                <time className="text-sm font-semibold text-primary mb-1 block">
                  {m.year}
                </time>
                <p className="text-muted-foreground">{m.event}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="bg-background py-16 text-center"
        data-ocid="about.cta.section"
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Partner with Us
          </h2>
          <p className="text-muted-foreground mb-6">
            Explore how ManpowerPro can support your workforce goals.
          </p>
          <Button asChild data-ocid="about.cta.primary_button">
            <Link to="/contact">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

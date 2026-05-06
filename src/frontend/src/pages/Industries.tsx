import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const INDUSTRIES = [
  {
    emoji: "\u{1F3ED}",
    name: "Manufacturing",
    desc: "Assembly line operators, quality control specialists, and plant managers for discrete and process manufacturing.",
    roles: [
      "Production Supervisor",
      "Quality Analyst",
      "Plant Manager",
      "Machine Operators",
    ],
  },
  {
    emoji: "\u{1F4BB}",
    name: "Information Technology",
    desc: "Full-stack developers, DevOps engineers, data scientists, and project managers for tech-first companies.",
    roles: [
      "Software Engineer",
      "DevOps Lead",
      "Data Scientist",
      "Product Manager",
    ],
  },
  {
    emoji: "\u{1F3E5}",
    name: "Healthcare & Pharma",
    desc: "Clinical staff, pharma sales representatives, and research professionals for hospitals and drug companies.",
    roles: [
      "Pharmacist",
      "Clinical Research Assoc.",
      "Medical Sales Rep",
      "Lab Technician",
    ],
  },
  {
    emoji: "\u{1F3D7}\uFE0F",
    name: "Infrastructure & Construction",
    desc: "Site engineers, project coordinators, and skilled tradespeople for large-scale infrastructure projects.",
    roles: [
      "Site Engineer",
      "Project Coordinator",
      "Safety Officer",
      "Civil Supervisor",
    ],
  },
  {
    emoji: "\u{1F6D2}",
    name: "Retail & FMCG",
    desc: "Store managers, supply chain professionals, and sales teams for retail and consumer goods companies.",
    roles: [
      "Store Manager",
      "Supply Chain Lead",
      "Area Sales Manager",
      "Visual Merchandiser",
    ],
  },
  {
    emoji: "\u{1F3E6}",
    name: "Banking & Financial Services",
    desc: "Relationship managers, compliance officers, and fintech professionals for banks and NBFCs.",
    roles: [
      "Relationship Manager",
      "Compliance Officer",
      "Credit Analyst",
      "Risk Manager",
    ],
  },
  {
    emoji: "\u2708\uFE0F",
    name: "Logistics & Supply Chain",
    desc: "Fleet managers, warehouse supervisors, and last-mile delivery coordinators.",
    roles: [
      "Warehouse Supervisor",
      "Fleet Manager",
      "Logistics Coordinator",
      "Import/Export Exec",
    ],
  },
  {
    emoji: "\u26A1",
    name: "Energy & Utilities",
    desc: "Electrical engineers, EHS specialists, and project managers for energy and utilities sector.",
    roles: [
      "Electrical Engineer",
      "EHS Manager",
      "Project Manager",
      "Field Technician",
    ],
  },
];

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve &mdash; ManpowerPro</title>
        <meta
          name="description"
          content="ManpowerPro provides specialised manpower solutions across manufacturing, IT, healthcare, BFSI, retail, logistics, and more."
        />
      </Helmet>

      <section
        className="bg-card border-b border-border py-16"
        data-ocid="industries.hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Deep sector expertise across 8 key industries, with dedicated
              recruitment teams for each vertical.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="bg-background py-16"
        data-ocid="industries.list.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                data-ocid={`industries.list.item.${i + 1}`}
              >
                <Card className="h-full border-border hover:shadow-md hover:border-primary/30 transition-smooth">
                  <CardContent className="p-6 space-y-3">
                    <div className="text-3xl">{ind.emoji}</div>
                    <h2 className="font-display font-bold text-foreground">
                      {ind.name}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {ind.roles.map((role) => (
                        <span
                          key={role}
                          className="inline-block px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-muted/40 py-16 text-center"
        data-ocid="industries.cta.section"
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Your Industry, Our Expertise
          </h2>
          <p className="text-muted-foreground mb-6">
            Tell us your requirements and we'll find the right talent for your
            sector.
          </p>
          <Button asChild size="lg" data-ocid="industries.cta.primary_button">
            <Link to="/contact">
              Start Hiring <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

import { j as jsxRuntimeExports, H as Helmet, B as Button, L as Link } from "./index-D5Ohqpa3.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-CHCCEru4.js";
import { A as ArrowRight } from "./arrow-right-DgdTEace.js";
const INDUSTRIES = [
  {
    emoji: "🏭",
    name: "Manufacturing",
    desc: "Assembly line operators, quality control specialists, and plant managers for discrete and process manufacturing.",
    roles: [
      "Production Supervisor",
      "Quality Analyst",
      "Plant Manager",
      "Machine Operators"
    ]
  },
  {
    emoji: "💻",
    name: "Information Technology",
    desc: "Full-stack developers, DevOps engineers, data scientists, and project managers for tech-first companies.",
    roles: [
      "Software Engineer",
      "DevOps Lead",
      "Data Scientist",
      "Product Manager"
    ]
  },
  {
    emoji: "🏥",
    name: "Healthcare & Pharma",
    desc: "Clinical staff, pharma sales representatives, and research professionals for hospitals and drug companies.",
    roles: [
      "Pharmacist",
      "Clinical Research Assoc.",
      "Medical Sales Rep",
      "Lab Technician"
    ]
  },
  {
    emoji: "🏗️",
    name: "Infrastructure & Construction",
    desc: "Site engineers, project coordinators, and skilled tradespeople for large-scale infrastructure projects.",
    roles: [
      "Site Engineer",
      "Project Coordinator",
      "Safety Officer",
      "Civil Supervisor"
    ]
  },
  {
    emoji: "🛒",
    name: "Retail & FMCG",
    desc: "Store managers, supply chain professionals, and sales teams for retail and consumer goods companies.",
    roles: [
      "Store Manager",
      "Supply Chain Lead",
      "Area Sales Manager",
      "Visual Merchandiser"
    ]
  },
  {
    emoji: "🏦",
    name: "Banking & Financial Services",
    desc: "Relationship managers, compliance officers, and fintech professionals for banks and NBFCs.",
    roles: [
      "Relationship Manager",
      "Compliance Officer",
      "Credit Analyst",
      "Risk Manager"
    ]
  },
  {
    emoji: "✈️",
    name: "Logistics & Supply Chain",
    desc: "Fleet managers, warehouse supervisors, and last-mile delivery coordinators.",
    roles: [
      "Warehouse Supervisor",
      "Fleet Manager",
      "Logistics Coordinator",
      "Import/Export Exec"
    ]
  },
  {
    emoji: "⚡",
    name: "Energy & Utilities",
    desc: "Electrical engineers, EHS specialists, and project managers for energy and utilities sector.",
    roles: [
      "Electrical Engineer",
      "EHS Manager",
      "Project Manager",
      "Field Technician"
    ]
  }
];
function Industries() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Industries We Serve — ManpowerPro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "ManpowerPro provides specialised manpower solutions across manufacturing, IT, healthcare, BFSI, retail, logistics, and more."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-16",
        "data-ocid": "industries.hero.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-4", children: "Industries We Serve" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl", children: "Deep sector expertise across 8 key industries, with dedicated recruitment teams for each vertical." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16",
        "data-ocid": "industries.list.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06 },
            "data-ocid": `industries.list.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: ind.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground", children: ind.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: ind.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: ind.roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground",
                  children: role
                },
                role
              )) })
            ] }) })
          },
          ind.name
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-16 text-center",
        "data-ocid": "industries.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Your Industry, Our Expertise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Tell us your requirements and we'll find the right talent for your sector." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", "data-ocid": "industries.cta.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            "Start Hiring ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] })
      }
    )
  ] });
}
export {
  Industries as default
};

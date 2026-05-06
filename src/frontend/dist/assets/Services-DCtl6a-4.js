import { j as jsxRuntimeExports, H as Helmet, B as Button, L as Link } from "./index-D5Ohqpa3.js";
import { F as Factory, H as Headphones, a as Briefcase, T as TrendingUp, B as Badge, C as CircleCheck } from "./badge-DG0uWjTt.js";
import { m as motion, C as Card, b as CardHeader, a as CardContent } from "./proxy-CHCCEru4.js";
import { U as Users } from "./users-BAlLecNx.js";
import { C as Clock } from "./clock-Csbnqg12.js";
import { A as ArrowRight } from "./arrow-right-DgdTEace.js";
const SERVICES = [
  {
    icon: Users,
    title: "Permanent Staffing",
    badge: "Most Popular",
    desc: "End-to-end permanent hiring for junior, mid-level, and senior roles. We manage sourcing, screening, interviews, and onboarding.",
    features: [
      "Dedicated talent pipeline",
      "3-month replacement guarantee",
      "Background & reference checks"
    ]
  },
  {
    icon: Clock,
    title: "Contractual Staffing",
    badge: "Flexible",
    desc: "Scale your workforce up or down with skilled contractual employees on short, mid, or long-term engagements.",
    features: [
      "Rapid deployment (24-72 hrs)",
      "Payroll & compliance handled",
      "Hassle-free exits"
    ]
  },
  {
    icon: Factory,
    title: "Industrial Manpower",
    badge: "Blue Collar",
    desc: "Trained blue-collar workforce for manufacturing, warehousing, logistics, and infrastructure sectors.",
    features: [
      "Safety-trained workers",
      "Bulk hiring capability",
      "Multi-location deployment"
    ]
  },
  {
    icon: Headphones,
    title: "IT Staffing",
    badge: "Tech",
    desc: "Certified IT professionals for software development, cloud, cybersecurity, and digital transformation projects.",
    features: [
      "Tech skill assessments",
      "Niche & rare skill sourcing",
      "Agile team staffing"
    ]
  },
  {
    icon: Briefcase,
    title: "Executive Search",
    badge: "Leadership",
    desc: "Confidential C-suite and senior leadership search using our exclusive network of high-potential executives.",
    features: [
      "Retained executive search",
      "Confidential mandates",
      "Board-level placements"
    ]
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    badge: "Advisory",
    desc: "Strategic HR advisory covering workforce planning, compensation benchmarking, and organisational design.",
    features: [
      "Workforce audit",
      "Compensation benchmarking",
      "HR policy design"
    ]
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Our Services — ManpowerPro" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Explore ManpowerPro's full range of enterprise staffing services: permanent hiring, contractual staffing, IT staffing, industrial manpower, executive search, and HR consulting."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border py-16",
        "data-ocid": "services.hero.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-4", children: "Our Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl", children: "Tailored manpower solutions for every stage of your talent journey — from first hire to C-suite." })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16",
        "data-ocid": "services.list.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: SERVICES.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            "data-ocid": `services.list.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full border-border hover:shadow-md hover:border-primary/30 transition-smooth", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(svc.icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: svc.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-lg", children: svc.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: svc.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: svc.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: f })
                ] }, f)) })
              ] })
            ] })
          },
          svc.title
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-16 text-center",
        "data-ocid": "services.cta.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Not Sure Which Service Fits?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Talk to our workforce specialists for a free needs assessment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", "data-ocid": "services.cta.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            "Request a Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] })
      }
    )
  ] });
}
export {
  Services as default
};

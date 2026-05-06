import { c as createLucideIcon, j as jsxRuntimeExports, H as Helmet, B as Button, L as Link } from "./index-D5Ohqpa3.js";
import { B as Badge, F as Factory, H as Headphones, a as Briefcase, T as TrendingUp, C as CircleCheck } from "./badge-DG0uWjTt.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-CHCCEru4.js";
import { A as ArrowRight } from "./arrow-right-DgdTEace.js";
import { U as Users } from "./users-BAlLecNx.js";
import { C as Clock } from "./clock-Csbnqg12.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const SERVICES = [
  {
    icon: Users,
    title: "Permanent Staffing",
    desc: "Direct hire solutions for long-term talent needs across all levels."
  },
  {
    icon: Clock,
    title: "Contractual Staffing",
    desc: "Flexible workforce for project-based and seasonal demands."
  },
  {
    icon: Factory,
    title: "Industrial Manpower",
    desc: "Skilled blue-collar workers for manufacturing and logistics."
  },
  {
    icon: Headphones,
    title: "IT Staffing",
    desc: "Certified tech professionals for digital transformation projects."
  },
  {
    icon: Briefcase,
    title: "Executive Search",
    desc: "C-suite and leadership hiring for high-growth organisations."
  },
  {
    icon: TrendingUp,
    title: "HR Consulting",
    desc: "End-to-end HR strategy and workforce planning advisory."
  }
];
const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "5,000+", label: "Placements Annually" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" }
];
const WHY_ITEMS = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: TrendingUp, label: "Pan-India Reach" },
  { icon: Star, label: "Top Rated" },
  { icon: Users, label: "Expert Team" }
];
const BENEFITS = [
  "Industry-vetted talent with background verification",
  "Dedicated account managers for each client",
  "Pan-India sourcing network across 40+ cities",
  "Compliance-first payroll and contract management"
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "ManpowerPro — Enterprise B2B Manpower Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "India's trusted partner for enterprise manpower solutions. Permanent staffing, contractual hiring, IT staffing, and HR consulting."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:title",
          content: "ManpowerPro — Enterprise B2B Manpower Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "End-to-end workforce solutions for India's leading enterprises."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative bg-card border-b border-border overflow-hidden",
        "data-ocid": "home.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-4 text-primary border-primary/30 bg-primary/5",
                    children: "Trusted by 200+ Enterprises"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6", children: [
                  "The Right People,",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Right When You Need" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl", children: "ManpowerPro delivers end-to-end workforce solutions — from permanent placements to contractual staffing — helping India's leading enterprises build high-performing teams." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", "data-ocid": "home.hero.primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
                    "Get a Free Consultation ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      variant: "outline",
                      size: "lg",
                      "data-ocid": "home.hero.secondary_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Our Services" })
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-10", "data-ocid": "home.stats.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold text-primary-foreground", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-primary-foreground/70 mt-1", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "home.services.section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Our Core Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Comprehensive manpower solutions designed for modern enterprise needs." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              "data-ocid": `home.services.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full hover:shadow-md transition-smooth border-border hover:border-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: service.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: service.desc })
              ] }) })
            },
            service.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-20", "data-ocid": "home.why.section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-6", children: "Why 200+ Enterprises Trust ManpowerPro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: BENEFITS.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: benefit })
            ] }, benefit)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: "mt-8",
                "data-ocid": "home.why.primary_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", children: [
                  "Learn About Us ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "grid grid-cols-2 gap-4",
          children: WHY_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: item.label })
              ]
            },
            item.label
          ))
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "home.cta.section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4", children: "Ready to Build Your Dream Team?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 text-lg", children: "Connect with our workforce specialists today for a tailored talent strategy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          asChild: true,
          variant: "secondary",
          size: "lg",
          "data-ocid": "home.cta.primary_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            "Contact Us Today ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        }
      )
    ] }) })
  ] });
}
export {
  Home as default
};

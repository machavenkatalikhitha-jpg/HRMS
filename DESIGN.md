# Design Brief: Enterprise B2B Manpower Services

**Purpose**: Professional, trust-building marketing platform for enterprise recruitment. Professional modernism—corporate credibility without sterile coldness. Corporate buyers evaluate on trustworthiness, stability, and proven expertise. Interface conveys authority, organization, and human-centered service delivery.

## Palette

| Token | OKLCH (L C H) | Role | Light Mode | Dark Mode |
|-------|---------------|------|------------|----------|
| Primary | `0.50 0.11 264` | Trust Blue—enterprise foundation | `0.50 0.11 264` | `0.70 0.12 264` |
| Secondary | `0.45 0.02 264` | Steel Gray—corporate backbone | `0.45 0.02 264` | `0.50 0.02 264` |
| Accent | `0.72 0.18 67` | Momentum Gold—CTA warmth & highlights | `0.72 0.18 67` | `0.80 0.16 67` |
| Success | `0.67 0.20 142` | Green—positive outcomes & confidence | `0.67 0.20 142` | `0.70 0.18 142` |
| Destructive | `0.55 0.22 25` | Red—clear warnings | `0.55 0.22 25` | `0.65 0.19 22` |

## Typography

Display: GeneralSans (bold, geometric confidence) | Body: Figtree (readable, approachable) | Mono: GeistMono (technical credibility)

## Structural Zones

| Zone | Surface | Border | Purpose |
|------|---------|--------|----------|
| Header | `bg-card` | `border-b border-border` | Navigation. Defined, elevated baseline. |
| Hero | `bg-gradient-to-r from-primary to-secondary` with accent text highlights | None | Bold entry. Trust-building imagery placeholder. |
| Content Sections | Alternating `bg-background` / `bg-muted/5` | None | Visual rhythm. Card-based service/industry layout. |
| Cards | `bg-card` `border border-border` | `shadow-md hover:shadow-lg` | Micro-interactions. Lift on hover. |
| CTA Buttons | `bg-accent text-foreground` | Rounded full | Warm, inviting, high contrast. |
| Footer | `bg-muted/20` | `border-t border-border` | Structured layout. Company info, links. |

## Shape & Spacing

Border radius: `0.5rem` (8px)—modern corporate, not trendy. Spacing: 4/8/12/16/24/32px grid. Generous breathing room for credibility. Shadows: Subtle elevation (shadow-sm/md/lg), no glow effects.

## Component Patterns

1. **Navbar**: Flex layout with logo left, nav links center (hidden <md, hamburger menu shown), CTA+WhatsApp right. Sticky header with subtle shadow.
2. **Cards**: Uniform `bg-card border` with `shadow-md`. Icon top-left, text below. Hover: `shadow-lg` + slight scale (transform scale-105).
3. **Buttons**: Primary=`bg-primary text-primary-foreground` (neutral), Accent=`bg-accent text-foreground` (CTA), Secondary=`border border-primary` (outline).
4. **Forms**: Input=`bg-input border border-border`, focus ring in primary color. Placeholder text=muted-foreground.
5. **Testimonials**: Quote card with image, name, role. Subtle italic styling. Border-l accent color.
6. **WhatsApp Button**: Fixed bottom-right, `bg-accent` circle, lucide-react icon, hover lift.

## Motion

Transition default: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`. Applied to: button:hover, card:hover (lift via shadow+scale), link underlines. No bounce/elastic animations—professional restraint. Mobile: reduce on prefers-reduced-motion.

## Responsive & Dark Mode

Mobile-first design. Hamburger menu <md breakpoint. Header navigation flows to vertical on mobile. Dark mode tuned for readability (increased lightness for primary, adjusted borders for visibility). Both modes maintain AA+ contrast.

## Constraints & Differentiation

1. **No generic AI aesthetics**: Reject purple gradients, safe blue `#3B82F6`, rainbow palettes. Trust blue + gold + gray = deliberate, not default.
2. **Card-based layout**: Services, industries, team members all in consistent card pattern—visual cohesion.
3. **Human-centered imagery**: Placeholder areas for team photos, office scenes (not stock-generic robots).
4. **Micro-interactions**: Hover states on all interactive elements—cards lift, buttons pulse subtly.
5. **Professional restraint**: No decorative flourishes, no animations for animation's sake. Every motion serves a purpose.

## Signature Details

1. **Trust indicators**: Testimonials with real faces, company logos, measurable outcomes ("500+ placements").
2. **CTA accent color**: Warm gold (`0.72 0.18 67`) throughout—human, not cold.
3. **Border baseline**: Cards + sections use `border-border` consistently—visual structure, not floating.
4. **Readable hierarchy**: Weight + spacing + color. No gray text on light gray backgrounds.
5. **WhatsApp integration**: Business continuity—immediate contact option. Fixed position, never covers content.

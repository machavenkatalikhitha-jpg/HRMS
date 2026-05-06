import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
];

const year = new Date().getFullYear();
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                ManpowerPro
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise B2B manpower solutions tailored to your industry needs.
              Connecting top talent with growing organisations since 2005.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-primary transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <a
                  href="mailto:info@manpowerpro.in"
                  className="hover:text-primary transition-colors"
                >
                  info@manpowerpro.in
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {year} ManpowerPro. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

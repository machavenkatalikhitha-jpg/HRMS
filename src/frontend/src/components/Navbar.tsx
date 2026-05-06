import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Building2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on every route change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      data-ocid="navbar.panel"
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-smooth",
        scrolled
          ? "bg-card/95 backdrop-blur-sm shadow-sm border-border"
          : "bg-card border-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="navbar.link.home"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg text-foreground leading-tight">
            ManpowerPro
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`navbar.link.${link.label.toLowerCase().replace(/ /g, "-")}`}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-smooth",
                currentPath === link.to
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4">
            <Link to="/contact" data-ocid="navbar.primary_button">
              Get Quote
            </Link>
          </Button>
        </div>

        <button
          type="button"
          data-ocid="navbar.toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          data-ocid="navbar.mobile_menu"
          className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`navbar.mobile.link.${link.label.toLowerCase().replace(/ /g, "-")}`}
              className={cn(
                "px-4 py-2.5 rounded-md text-sm font-medium transition-smooth",
                currentPath === link.to
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2">
            <Link to="/contact" data-ocid="navbar.mobile.primary_button">
              Get Quote
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default Navbar;

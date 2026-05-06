// Google Analytics 4 utility
const GA_ID = "G-XXXXXXXXXX";

/**
 * Injects the gtag.js script into the document head.
 * Call once at app startup.
 */
export function injectGtag(): void {
  if (document.getElementById("gtag-script")) return;

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const inlineScript = document.createElement("script");
  inlineScript.textContent = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js', new Date());",
    `gtag('config', '${GA_ID}');`,
  ].join("\n");
  document.head.appendChild(inlineScript);
}

/**
 * Tracks a page view. Call on each route change.
 */
export function trackPageView(path: string): void {
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_ID, { page_path: path });
}

/**
 * Tracks a custom event.
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number,
): void {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Extend Window to include gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

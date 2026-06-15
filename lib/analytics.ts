declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackPhoneClickOptions = {
  source?: string;
  href?: string;
};

/** Fire phone-click events for GA4 and console fallback */
export function trackPhoneClick({ source, href }: TrackPhoneClickOptions = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    event: "phone_click",
    phone_number: href ?? "site_default",
    link_source: source ?? "phone_link",
    page_path: window.location.pathname,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "phone_click", payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("Phone click tracked", payload);
  }
}

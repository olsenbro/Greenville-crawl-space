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

type TrackFormSubmitOptions = {
  formName?: string;
};

/** Fire a GA4 `generate_lead` event after a successful lead form submission */
export function trackFormSubmit({ formName }: TrackFormSubmitOptions = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    form_name: formName ?? "contact_form",
    page_path: window.location.pathname,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("Form submit tracked", payload);
  }
}

/** Fire a GA4 `page_not_found` event so 404 URLs are attributable in reports */
export function trackNotFound(): void {
  if (typeof window === "undefined") return;

  const payload = {
    missing_path: window.location.pathname + window.location.search,
    referrer: document.referrer || "(none)",
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_not_found", payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("404 tracked", payload);
  }
}

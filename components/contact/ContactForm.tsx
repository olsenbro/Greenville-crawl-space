"use client";

import { useEffect, useState, type FormEvent } from "react";
import { PhoneLink } from "@/components/PhoneLink";

const homeAgeOptions = [
  "Built before 1990",
  "1990–2005",
  "2006–2015",
  "2016 or newer",
  "Not sure",
] as const;

const primaryConcernOptions = [
  "Musty odor in home",
  "Visible mold or moisture",
  "Soft or bouncy floors",
  "Buying/selling home and need inspection",
  "High energy bills",
  "Just want an inspection",
  "Other",
] as const;

const previousInspectionOptions = ["Yes", "No", "Not sure"] as const;

const inputClassName =
  "w-full rounded-lg border border-primary/20 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    try {
      setSessionId(sessionStorage.getItem("_sid") || "");
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    try {
      const sid = sessionStorage.getItem("_sid") || "";
      setSessionId(sid);
      const sessionInput = form.elements.namedItem("session_id") as HTMLInputElement | null;
      if (sessionInput) sessionInput.value = sid;
    } catch {
      // sessionStorage unavailable
    }

    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: Replace with Formspree, Resend, or API route for real lead delivery
    console.log("Contact form submission:", data);

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center shadow-sm">
        <p className="font-display text-2xl font-semibold text-primary">Inspection Request Received!</p>
        <p className="mt-3 text-muted">
          Thanks for reaching out. We&apos;ll review your request and contact you to schedule your
          free crawl space inspection — usually within one business day.
        </p>
        <p className="mt-4 text-sm text-muted">
          Need a faster response? Call or text{" "}
          <PhoneLink className="font-semibold text-primary hover:underline" />
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-accent hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 shadow-sm">
      <input type="hidden" name="session_id" value={sessionId} />
      <h2 className="font-display text-xl font-semibold text-primary">Request Your Free Inspection</h2>
      <p className="mt-2 text-sm text-muted">
        Tell us about your home and we&apos;ll schedule a no-obligation crawl space inspection with
        a written report.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="label-caps mb-1 block">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClassName}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label-caps mb-1 block">
            Phone <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClassName}
            placeholder="(864) 555-0142"
          />
        </div>

        <div>
          <label htmlFor="email" className="label-caps mb-1 block">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClassName}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="address" className="label-caps mb-1 block">
            Property Address / City <span className="text-accent">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            autoComplete="street-address"
            className={inputClassName}
            placeholder="123 Main St, Simpsonville, SC"
          />
        </div>

        <div>
          <label htmlFor="homeAge" className="label-caps mb-1 block">
            Home Age <span className="text-accent">*</span>
          </label>
          <select
            id="homeAge"
            name="homeAge"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select home age
            </option>
            {homeAgeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="primaryConcern" className="label-caps mb-1 block">
            Primary Concern <span className="text-accent">*</span>
          </label>
          <select
            id="primaryConcern"
            name="primaryConcern"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select your primary concern
            </option>
            {primaryConcernOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="previousInspection" className="label-caps mb-1 block">
            Have you had a previous inspection? <span className="text-accent">*</span>
          </label>
          <select
            id="previousInspection"
            name="previousInspection"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              Select an option
            </option>
            {previousInspectionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="label-caps mb-1 block">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={inputClassName}
            placeholder="Anything else we should know — musty smells, soft floors, recent home inspection findings..."
          />
        </div>

        <button type="submit" className="btn-primary w-full py-4 text-base">
          Request My Free Inspection
        </button>
      </div>
    </form>
  );
}

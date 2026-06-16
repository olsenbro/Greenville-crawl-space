"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { PhoneLink } from "@/components/PhoneLink";
import { submitLead } from "@/lib/leads";
import { siteConfig } from "@/lib/site-config";

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
  "Buying/selling home and need assessment",
  "High energy bills",
  "Just want an estimate",
  "Other",
] as const;

const previousInspectionOptions = ["Yes", "No", "Not sure"] as const;

const inputClassName =
  "w-full rounded-lg border border-primary/20 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function buildMessage(data: Record<string, FormDataEntryValue>): string {
  const lines = [
    data.address ? `Address: ${data.address}` : null,
    data.homeAge ? `Home age: ${data.homeAge}` : null,
    data.primaryConcern ? `Primary concern: ${data.primaryConcern}` : null,
    data.previousInspection ? `Previous inspection: ${data.previousInspection}` : null,
    data.notes ? `Notes: ${data.notes}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      let sessionId = "";
      try {
        sessionId = sessionStorage.getItem("_sid") ?? "";
      } catch {
        // sessionStorage unavailable (private browsing, etc.)
      }

      await submitLead({
        name: String(data.name),
        email: String(data.email),
        phone: String(data.phone),
        message: buildMessage(data),
        source: "crawlspacegreenville.com",
        session_id: sessionId || undefined,
      });
      form.reset();
      router.push("/thank-you");
    } catch {
      setError("Something went wrong submitting your request. Please call us directly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 shadow-sm">
      <h3 className="font-display text-xl font-semibold text-primary">Request Your Free Estimate</h3>
      <p className="mt-2 text-sm text-muted">
        Tell us about your home and we&apos;ll connect you with a local crawl space specialist for a
        no-obligation estimate.
      </p>

      {error ? (
        <p className="mt-4 rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger">
          {error}{" "}
          <PhoneLink source="contact_form_error" className="font-semibold underline">
            {siteConfig.phone}
          </PhoneLink>
        </p>
      ) : null}

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
            placeholder={siteConfig.phone}
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

        <button type="submit" disabled={submitting} className="btn-primary w-full py-4 text-base">
          {submitting ? "Submitting…" : "Request My Free Estimate"}
        </button>
      </div>
    </form>
  );
}

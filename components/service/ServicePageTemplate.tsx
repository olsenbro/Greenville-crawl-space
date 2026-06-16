import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AuthorityCitation } from "@/components/AuthorityCitation";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { ServiceInternalLinks } from "@/components/service/ServiceInternalLinks";
import type { AuthoritySource } from "@/lib/authorities";
import { getAuthorityForPath } from "@/lib/authorities";
import type { SchemaObject } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export type ServiceFaq = {
  question: string;
  answer: string;
};

type ServicePageTemplateProps = {
  h1: string;
  intro: string[];
  breadcrumbs: BreadcrumbItem[];
  breadcrumbPath?: string;
  serviceSlug?: string;
  schema?: SchemaObject;
  faqs: ServiceFaq[];
  faqTitle?: string;
  ctaHeading?: string;
  ctaBody?: string;
  authority?: AuthoritySource;
  children: React.ReactNode;
};

export function ServicePageTemplate({
  h1,
  intro,
  breadcrumbs,
  breadcrumbPath,
  serviceSlug,
  schema,
  faqs,
  faqTitle = "Frequently Asked Questions",
  ctaHeading = siteConfig.cta.defaultHeading,
  ctaBody = siteConfig.cta.defaultBody,
  authority,
  children,
}: ServicePageTemplateProps) {
  const pagePath = breadcrumbPath ?? (serviceSlug ? `/${serviceSlug}` : undefined);
  const citation = authority ?? (pagePath ? getAuthorityForPath(pagePath) : undefined);

  return (
    <>
      {schema ? <SchemaScript schema={schema} /> : null}

      <Breadcrumbs
        items={breadcrumbs}
        path={breadcrumbPath ?? (serviceSlug ? `/${serviceSlug}` : undefined)}
      />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container-narrow section-padding">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              {h1}
            </h1>
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-5 text-lg leading-relaxed text-white/90">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PhoneLink className="btn-primary justify-center px-8 py-4 text-base">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {siteConfig.phone}
              </PhoneLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                {siteConfig.cta.primary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {children}

      {serviceSlug ? <ServiceInternalLinks currentSlug={serviceSlug} /> : null}

      {citation ? (
        <section className="bg-neutral section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <AuthorityCitation source={citation} />
          </div>
        </section>
      ) : null}

      <section className="bg-white section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{faqTitle}</h2>
          <div className="mt-8 space-y-3">
            {faqs.map(({ question, answer }) => (
              <article
                key={question}
                className="group rounded-xl border border-primary/10 bg-neutral open:bg-white open:shadow-sm"
              >
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                    {question}
                    <span
                      className="shrink-0 text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="border-t border-primary/10 px-6 pb-5 pt-2">
                    <p className="leading-relaxed text-muted">{answer}</p>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{ctaHeading}</h2>
          {ctaBody ? <p className="mt-4 text-lg text-white/90">{ctaBody}</p> : null}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <PhoneLink className="inline-flex items-center gap-3 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-primary-dark">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call {siteConfig.phone}
            </PhoneLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-base font-semibold text-white underline-offset-4 hover:underline"
            >
              {siteConfig.cta.online}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function ServiceSection({
  title,
  children,
  className = "bg-white",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-narrow mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">{children}</div>
      </div>
    </section>
  );
}

export function ServiceComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-primary/10">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="bg-primary text-white">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-neutral" : "bg-white"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-dark">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="mt-6 space-y-6">
      {steps.map(({ title, description }, index) => (
        <li key={title} className="flex gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-semibold text-white">
            {index + 1}
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 leading-relaxed text-muted">{description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

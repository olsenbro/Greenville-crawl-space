import { ExternalLink } from "lucide-react";
import type { AuthoritySource } from "@/lib/authorities";

type AuthorityCitationProps = {
  sources: AuthoritySource[];
  heading?: string;
};

export function AuthorityCitation({
  sources,
  heading = "Sources & References",
}: AuthorityCitationProps) {
  return (
    <aside className="rounded-xl border border-primary/10 bg-white px-6 py-5 shadow-sm">
      <p className="label-caps text-muted">{heading}</p>
      <ul className="mt-3 space-y-4">
        {sources.map((source) => (
          <li key={source.url} className="text-sm leading-relaxed text-muted">
            {source.context}{" "}
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              {source.org}: {source.title}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

type AuthorityLinkProps = {
  href: string;
  children: React.ReactNode;
};

/** Inline outbound link for citing a claim or stat in body copy */
export function AuthorityLink({ href, children }: AuthorityLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-primary hover:underline"
    >
      {children}
      <ExternalLink className="ml-0.5 inline h-3.5 w-3.5 align-text-bottom" aria-hidden="true" />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}

export function AuthoritySection({
  sources,
  className = "bg-neutral",
  heading,
}: {
  sources: AuthoritySource[];
  className?: string;
  heading?: string;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-narrow mx-auto max-w-3xl">
        <AuthorityCitation sources={sources} heading={heading} />
      </div>
    </section>
  );
}

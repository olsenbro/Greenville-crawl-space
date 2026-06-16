import { ExternalLink } from "lucide-react";
import type { AuthoritySource } from "@/lib/authorities";

type AuthorityCitationProps = {
  source: AuthoritySource;
  heading?: string;
};

export function AuthorityCitation({ source, heading = "Trusted Source" }: AuthorityCitationProps) {
  return (
    <aside className="rounded-xl border border-primary/10 bg-white px-6 py-5 shadow-sm">
      <p className="label-caps text-muted">{heading}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
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
      </p>
    </aside>
  );
}

export function AuthoritySection({
  source,
  className = "bg-neutral",
  heading,
}: {
  source: AuthoritySource;
  className?: string;
  heading?: string;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-narrow mx-auto max-w-3xl">
        <AuthorityCitation source={source} heading={heading} />
      </div>
    </section>
  );
}

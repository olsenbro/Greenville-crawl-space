import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SchemaScript } from "@/components/SchemaScript";
import { getBreadcrumbListSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Current page path for BreadcrumbList schema (e.g. "/faq") */
  path?: string;
};

export function Breadcrumbs({ items, path }: BreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", url: siteConfig.schemaUrl },
    ...items.map((item, index) => {
      const isLast = index === items.length - 1;
      const itemPath = item.href ?? (isLast ? path : undefined);
      return {
        name: item.label,
        url: itemPath ? `${siteConfig.schemaUrl}${itemPath}` : siteConfig.schemaUrl,
      };
    }),
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbListSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="border-b border-primary/10 bg-neutral/50">
        <div className="container-narrow px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted/50" aria-hidden="true" />
                  {isLast || !item.href ? (
                    <span className="font-medium text-primary" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

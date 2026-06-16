import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts, getBlogPostPath } from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Crawl Space Blog | Greenville SC Homeowner Guides",
  description:
    "Crawl space tips, cost guides, and moisture advice for Greenville and Upstate SC homeowners. Read about encapsulation, mold, and vented crawl spaces.",
  canonical: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} path="/blog" />

      <section className="border-b border-primary/10 bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="label-caps">Blog</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Crawl Space Guides for Greenville Homeowners
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Practical articles on encapsulation costs, moisture control, and protecting your Upstate
            South Carolina home from crawl space damage.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-primary/10 bg-neutral p-6 shadow-sm"
            >
              <time dateTime={post.datePublished} className="text-sm font-medium text-muted">
                {post.dateDisplay}
              </time>
              <h2 className="mt-3 font-display text-2xl font-semibold text-primary">
                <Link
                  href={getBlogPostPath(post.slug)}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{post.description}</p>
              <Link
                href={getBlogPostPath(post.slug)}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-accent"
              >
                Read More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostPath } from "@/lib/blog-posts";

export function HomeBlogSection() {
  return (
    <section className="border-t border-primary/10 bg-white section-padding" aria-labelledby="home-blog-heading">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="label-caps">From the Blog</p>
          <h2 id="home-blog-heading" className="mt-3 font-display text-3xl sm:text-4xl">
            Crawl Space Insights for Greenville Homeowners
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Practical guides on encapsulation costs, moisture problems, and protecting your Upstate SC
            home from crawl space damage.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-primary/10 bg-neutral p-6 shadow-sm"
            >
              <time dateTime={post.datePublished} className="text-sm font-medium text-muted">
                {post.dateDisplay}
              </time>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-primary">
                <Link
                  href={getBlogPostPath(post.slug)}
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{post.description}</p>
              <Link
                href={getBlogPostPath(post.slug)}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-accent"
              >
                Read More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

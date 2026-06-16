import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PhoneLink } from "@/components/PhoneLink";
import { SchemaScript } from "@/components/SchemaScript";
import { ServiceSection } from "@/components/service/ServicePageTemplate";
import { PageQuickAnswer } from "@/components/seo/PageQuickAnswer";
import type { BlogPost } from "@/lib/blog-posts";
import { getBlogPostPath } from "@/lib/blog-posts";
import { getArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

type BlogPostTemplateProps = {
  post: BlogPost;
};

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const path = getBlogPostPath(post.slug);

  return (
    <>
      <SchemaScript
        schema={getArticleSchema({
          path,
          headline: post.title,
          description: post.description,
          datePublished: post.datePublished,
        })}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        path={path}
      />

      <section className="border-b border-primary/10 bg-neutral section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="label-caps">Blog</p>
          <time dateTime={post.datePublished} className="mt-3 block text-sm font-medium text-muted">
            {post.dateDisplay}
          </time>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-balance text-primary sm:text-5xl">
            {post.title}
          </h1>
          <PageQuickAnswer variant="light">{post.quickAnswer}</PageQuickAnswer>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.intro}</p>
        </div>
      </section>

      {post.sections.map((section, index) => (
        <ServiceSection
          key={section.title}
          title={section.title}
          className={index % 2 === 0 ? "bg-white" : "bg-neutral"}
        >
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </ServiceSection>
      ))}

      <section className="border-t border-primary/10 bg-primary section-padding text-white">
        <div className="container-narrow mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{post.ctaHeading}</h2>
          <p className="mt-4 text-lg text-white/90">{post.ctaBody}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <PhoneLink className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white/60">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}

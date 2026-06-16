import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/blog/BlogPostTemplate";
import { getAllBlogSlugs, getBlogPost, getBlogPostPath } from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    canonical: getBlogPostPath(post.slug),
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostTemplate post={post} />;
}

import { blog } from "@/lib/blog";
import type { Locale } from "@/types";
import { getSupportedLocales } from "@/utils/i18n";
import { BlogApiError } from "@lobsterlead/blog-sdk";
import { jsonLdScript, toNextMetadata } from "@lobsterlead/blog-sdk/next";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: string; slug: string }> };

function getLocale(lang: string): Locale {
  return getSupportedLocales().includes(lang as Locale)
    ? (lang as Locale)
    : "en";
}

async function getPostDetail(slug: string, locale: Locale) {
  try {
    return await blog.posts.get(slug, { locale });
  } catch (error) {
    if (error instanceof BlogApiError && error.status === 404) return undefined;
    throw error;
  }
}

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = getLocale(lang);
  const detail = await getPostDetail(slug, locale);
  if (!detail) return {};

  const metadata = toNextMetadata(detail.meta);
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      types: { "application/rss+xml": blog.rssUrl() },
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const locale = getLocale(lang);
  const detail = await getPostDetail(slug, locale);
  if (!detail) notFound();

  const post = detail.post;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bibertuz.com";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Tuz Biber",
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}${locale === "tr" ? "/blog" : "/en/blog"}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: detail.meta.canonical,
      },
    ],
  };

  return (
    <main className="blog-page">
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(detail) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
        />
        <header className="post-header">
          <Link
            className="blog-back-link"
            href={locale === "tr" ? "/blog" : "/en/blog"}
          >
            <span aria-hidden="true">←</span>{" "}
            {locale === "tr" ? "Tüm yazılar" : "All stories"}
          </Link>
          <p className="blog-eyebrow">
            {post.tags.slice(0, 2).join(" · ") || "Tuz Biber Journal"}
          </p>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
          <div className="post-meta">
            {post.author?.name && <span>{post.author.name}</span>}
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
                  dateStyle: "long",
                }).format(new Date(post.publishedAt))}
              </time>
            )}
            <span className="ll-reading-time">
              {locale === "tr"
                ? `${post.readingTimeMinutes} dk okuma`
                : `${post.readingTimeMinutes} min read`}
            </span>
          </div>
          {post.coverImage && (
            <img
              className="post-cover"
              src={post.coverImage.url}
              alt={post.coverImage.alt || post.title}
              width={post.coverImage.width || 1600}
              height={post.coverImage.height || 900}
              fetchPriority="high"
            />
          )}
        </header>
        <div className="post-body">
          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
        </div>
      </article>
    </main>
  );
}

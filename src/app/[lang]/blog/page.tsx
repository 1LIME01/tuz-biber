import { blog } from "@/lib/blog";
import { translatePostSummaries } from "@/lib/blogTranslation";
import type { Locale } from "@/types";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ lang: string }> };

function getLocale(lang: string): Locale {
  return getSupportedLocales().includes(lang as Locale)
    ? (lang as Locale)
    : "en";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocale(lang);
  const copy = getDictionary(locale).blog;
  const title = copy.metaTitle;
  const description = copy.metaDescription;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bibertuz.com";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${locale === "tr" ? "/blog" : "/en/blog"}`,
      types: { "application/rss+xml": blog.rssUrl() },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteUrl}${locale === "tr" ? "/blog" : "/en/blog"}`,
    },
  };
}

export default async function BlogListPage({ params }: Props) {
  const { lang } = await params;
  const locale = getLocale(lang);
  const copy = getDictionary(locale).blog;
  const { posts: sourcePosts } = await blog.posts.list({
    limit: 20,
    locale: "tr",
  });
  const posts =
    locale === "en" ? await translatePostSummaries(sourcePosts) : sourcePosts;

  return (
    <main className="blog-page">
      <section className="blog-index">
        <p className="blog-eyebrow">Tuz Biber · {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="blog-intro">{copy.intro}</p>

        {posts.length ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.id}>
                <Link
                  href={`${locale === "tr" ? "/blog" : "/en/blog"}/${post.slug}`}
                  className="blog-card-link"
                >
                  {post.coverImage && (
                    <img
                      className="blog-card-image"
                      src={post.coverImage.url}
                      alt={post.coverImage.alt || post.title}
                      width={post.coverImage.width || 1200}
                      height={post.coverImage.height || 675}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {new Intl.DateTimeFormat(
                            locale === "tr" ? "tr-TR" : "en-US",
                            {
                              dateStyle: "long",
                            },
                          ).format(new Date(post.publishedAt))}
                        </time>
                      )}
                      <span className="ll-reading-time">
                        {copy.readTime.replace(
                          "{minutes}",
                          String(post.readingTimeMinutes),
                        )}
                      </span>
                    </div>
                    <h2>{post.title}</h2>
                    {post.excerpt && <p>{post.excerpt}</p>}
                    <span className="blog-card-cta">
                      {copy.readMore} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">{copy.empty}</p>
        )}
      </section>
    </main>
  );
}

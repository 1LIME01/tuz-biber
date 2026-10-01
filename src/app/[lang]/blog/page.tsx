import { blog } from "@/lib/blog";
import type { Locale } from "@/types";
import { getSupportedLocales } from "@/utils/i18n";
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
  const title = "Blog | Tuz Biber";
  const description =
    locale === "tr"
      ? "Tuz Biber tarifleri, malzemeleri ve mutfak kültürü üzerine yazılar."
      : "Stories about Tuz Biber recipes, ingredients, and food culture.";
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
  const { posts } = await blog.posts.list({ limit: 20, locale });

  return (
    <main className="blog-page">
      <section className="blog-index">
        <p className="blog-eyebrow">
          Tuz Biber ·{" "}
          {locale === "tr" ? "Mutfak Defteri" : "The Kitchen Journal"}
        </p>
        <h1>{locale === "tr" ? "Blog" : "Journal"}</h1>
        <p className="blog-intro">
          {locale === "tr"
            ? "Lezzet, malzeme ve sofra kültürü üzerine hikâyeler."
            : "Stories on flavor, ingredients, and the culture of the table."}
        </p>

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
                        {locale === "tr"
                          ? `${post.readingTimeMinutes} dk okuma`
                          : `${post.readingTimeMinutes} min read`}
                      </span>
                    </div>
                    <h2>{post.title}</h2>
                    {post.excerpt && <p>{post.excerpt}</p>}
                    <span className="blog-card-cta">
                      {locale === "tr" ? "Yazıyı oku" : "Read story"}{" "}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">
            {locale === "tr"
              ? "Yeni yazılar çok yakında burada."
              : "New stories are coming soon."}
          </p>
        )}
      </section>
    </main>
  );
}

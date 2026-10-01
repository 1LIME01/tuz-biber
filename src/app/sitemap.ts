import { blog } from "@/lib/blog";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bibertuz.com";
  const paths = [
    "",
    "/story",
    "/how-to-use",
    "/ingredients",
    "/faq",
    "/contact",
    "/products",
    "/sweets",
    "/cakes",
    "/drinks",
    "/meals",
  ];
  const ownPages = ["en", "tr"].flatMap((lang) =>
    paths.map((path) => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
  );

  const blogPages = await Promise.all(
    (["en", "tr"] as const).map((locale) =>
      blog.sitemapEntries({
        origin: baseUrl,
        pathPrefix: locale === "tr" ? "/blog" : "/en/blog",
        locale: "tr",
      }),
    ),
  );

  return [
    ...ownPages,
    ...(["en", "tr"] as const).map((locale) => ({
      url: `${baseUrl}${locale === "tr" ? "/blog" : "/en/blog"}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogPages.flat(),
  ];
}

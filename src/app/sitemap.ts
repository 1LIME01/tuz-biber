import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tuzbiber.com";
  const paths = ["", "/story", "/how-to-use", "/ingredients", "/faq", "/contact", "/products", "/sweets", "/cakes", "/drinks", "/meals"];
  return ["en", "tr"].flatMap((lang) =>
    paths.map((path) => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  );
}

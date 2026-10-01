import { BlogClient } from "@lobsterlead/blog-sdk";

export const blog = new BlogClient({
  baseUrl: process.env.BLOG_BASE_URL || "https://blogservice.lobsterlead.com",
  siteKey: process.env.BLOG_SITE_KEY || "tuzbiber",
  apiKey: process.env.BLOG_API_KEY,
  fetchInit: { next: { revalidate: 300, tags: ["blog"] } },
});

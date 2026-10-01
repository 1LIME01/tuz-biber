import type { Metadata } from "next";
import BlogListPage, {
    generateMetadata as getBlogMetadata,
} from "../[lang]/blog/page";

export async function generateMetadata(): Promise<Metadata> {
  return getBlogMetadata({ params: Promise.resolve({ lang: "tr" }) });
}

export default function DefaultBlogListPage() {
  return <BlogListPage params={Promise.resolve({ lang: "tr" })} />;
}

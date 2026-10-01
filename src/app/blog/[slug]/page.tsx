import type { Metadata } from "next";
import BlogPostPage, {
    generateMetadata as getPostMetadata,
} from "../../[lang]/blog/[slug]/page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getPostMetadata({ params: Promise.resolve({ lang: "tr", slug }) });
}

export default async function DefaultBlogPostPage({ params }: Props) {
  const { slug } = await params;
  return <BlogPostPage params={Promise.resolve({ lang: "tr", slug })} />;
}

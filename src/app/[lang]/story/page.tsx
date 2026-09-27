import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function StoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.storyPage.eyebrow}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">
          {dictionary.storyPage.title}
        </Heading>
        <p className="mt-6 text-xl leading-8 text-[#57402E]">{dictionary.storyPage.intro}</p>
        <div className="mt-8 space-y-5 text-lg leading-8 text-[#241B14]">
          {dictionary.storyPage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
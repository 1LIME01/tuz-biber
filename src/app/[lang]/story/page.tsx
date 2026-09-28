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
    <main className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.storyPage.eyebrow}</p>
        <Heading as="h1" className="heading-hero mt-4 text-[#241B14]">
          {dictionary.storyPage.title}
        </Heading>
        <p className="mt-6 font-serif text-xl font-medium leading-relaxed text-[#57402E] sm:text-2xl">{dictionary.storyPage.intro}</p>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-[#241B14] sm:text-lg">
          {dictionary.storyPage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
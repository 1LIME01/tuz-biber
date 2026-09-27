import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function HowToUsePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.howToUsePage.eyebrow}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">
          {dictionary.howToUsePage.title}
        </Heading>
        <p className="mt-6 text-xl leading-8 text-[#57402E]">{dictionary.howToUsePage.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {dictionary.howToUse.steps.map((step, index) => (
            <Link key={step.title} href={`/${locale}/${["meals", "sweets", "drinks", "cakes"][index]}`} className="group rounded-[1.5rem] border border-[#241B14]/10 bg-[#EFE6D5] p-4 transition hover:-translate-y-1 hover:border-[#B86F3C]/50">
              <div className="flex h-40 items-end rounded-[1.25rem] bg-[radial-gradient(circle_at_top,_rgba(184,111,60,0.7),_rgba(36,27,20,0.95)_68%)] p-4 text-[#F6EFE8]">
                <span className="text-xs font-medium uppercase tracking-[0.24em]">{step.title}</span>
              </div>
              <p className="mt-4 px-2 pb-2 text-base leading-7 text-[#241B14]">{step.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 space-y-5 text-lg leading-8 text-[#241B14]">
          {dictionary.howToUsePage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
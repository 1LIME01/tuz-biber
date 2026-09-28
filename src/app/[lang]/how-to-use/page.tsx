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
    <main className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.howToUsePage.eyebrow}</p>
        <Heading as="h1" className="heading-hero mt-4 text-[#241B14]">
          {dictionary.howToUsePage.title}
        </Heading>
        <p className="mt-6 font-serif text-xl font-medium leading-relaxed text-[#57402E] sm:text-2xl">{dictionary.howToUsePage.intro}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {dictionary.howToUse.steps.map((step, index) => (
            <Link key={step.title} href={`/${locale}/${["meals", "sweets", "drinks", "cakes"][index]}`} className="group rounded-xl border border-[#241B14]/12 bg-[#F6EFE8] p-6 shadow-[0_8px_24px_rgba(36,27,20,0.03)] transition-colors duration-200 hover:border-[#B86F3C]">
              <div className="flex h-36 items-end rounded-lg bg-[linear-gradient(135deg,_#57402E_0%,_#241B14_100%)] p-5 text-[#EFE6D5]">
                <span className="font-serif text-base font-bold uppercase tracking-wider text-[#B86F3C]">{step.title}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#241B14]">{step.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-[#241B14] sm:text-lg">
          {dictionary.howToUsePage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
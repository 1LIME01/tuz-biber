import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.faq.eyebrow}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">
          {dictionary.faq.title}
        </Heading>
        <div className="mt-8 space-y-4">
          {dictionary.faq.items.map((item, index) => (
            <details key={item.question} open={index === 0} className="group overflow-hidden rounded-[1.5rem] border border-[#241B14]/10 bg-[#EFE6D5] p-0 shadow-[0_12px_30px_rgba(36,27,20,0.08)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left text-lg font-medium text-[#241B14] marker:hidden">
                <span className="inline-flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B86F3C] text-xs font-semibold text-[#F6EFE8]">Q</span>
                  {item.question}
                </span>
                <span className="text-xl text-[#B86F3C] transition group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-[#241B14]/10 bg-[#F6EFE8]/70 p-6">
                <div className="flex items-start gap-3 rounded-[1.25rem] bg-[#241B14] p-4 text-base leading-7 text-[#EFE6D5]">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#B86F3C] text-xs font-semibold text-[#F6EFE8]">A</span>
                  <p>{item.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </main>
  );
}
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
    <main className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.faq.eyebrow}</p>
        <Heading as="h1" className="heading-hero mt-4 text-[#241B14]">
          {dictionary.faq.title}
        </Heading>
        <div className="mt-10 space-y-4">
          {dictionary.faq.items.map((item, index) => (
            <details key={item.question} open={index === 0} className="group overflow-hidden rounded-xl border border-[#241B14]/12 bg-[#F6EFE8] shadow-[0_8px_24px_rgba(36,27,20,0.03)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left font-serif text-lg font-bold text-[#241B14] marker:hidden">
                <span className="inline-flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B86F3C] text-xs font-bold text-[#F6EFE8]">Q</span>
                  {item.question}
                </span>
                <span className="text-xl font-normal text-[#B86F3C] transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-[#241B14]/10 bg-[#EFE6D5]/60 p-6">
                <div className="flex items-start gap-3 rounded-lg bg-[#241B14] p-5 text-sm leading-relaxed text-[#EFE6D5]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B86F3C] text-[10px] font-bold text-[#F6EFE8]">A</span>
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
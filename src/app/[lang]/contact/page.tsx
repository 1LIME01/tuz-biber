import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.contact.eyebrow}</p>
          <Heading as="h1" className="heading-hero mt-4 text-[#241B14]">
            {dictionary.contact.title}
          </Heading>
          <p className="mt-6 text-base leading-relaxed text-[#57402E] sm:text-lg">{dictionary.contact.description}</p>
          <div className="mt-8 space-y-3 rounded-xl border border-[#B86F3C]/20 bg-[#F6EFE8] p-6 text-sm leading-relaxed text-[#241B14]">
            <p className="font-serif font-bold text-[#B86F3C]">Sirius AI Tech</p>
            <p>Adres: Cumhuriyet Mahallesi, Esenyurt / İstanbul, Türkiye</p>
            <p>E-posta: <a className="underline transition-colors duration-200 hover:text-[#B86F3C]" href="mailto:miraczer05@gmail.com">miraczer05@gmail.com</a></p>
            <p>{locale === "tr" ? "Telefon: İletişim formu üzerinden bize ulaşabilirsiniz." : "Phone: Please reach us through the contact form."}</p>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-[#B86F3C]/20 bg-[#F6EFE8]">
            <iframe
              title="Sirius AI Tech location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.634%2C41.015%2C28.735%2C41.075&layer=mapnik&marker=41.045%2C28.685"
              className="h-64 w-full border-0"
              loading="lazy"
            />
            <p className="p-3 text-xs text-[#57402E]">{locale === "tr" ? "Haritayı yakınlaştırmak ve taşımak için fare veya klavye kullanabilirsiniz." : "Use your mouse or keyboard to zoom and move around the map."}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-[#241B14]/12 bg-[#F6EFE8] p-7 sm:p-10 shadow-[0_12px_32px_rgba(36,27,20,0.04)]">
          <ContactForm dictionary={dictionary} lang={locale} />
        </div>
      </Container>
      <Container className="mt-14">
        <div className="rounded-2xl border border-[#B86F3C]/30 bg-[#241B14] p-8 text-[#EFE6D5] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{locale === "tr" ? "Neden bize ulaşmalısınız?" : "Why contact us?"}</p>
          <h2 className="mt-3 font-serif text-2xl font-bold">{locale === "tr" ? "Sofranız için birlikte daha iyi bir son dokunuş tasarlayalım." : "Let’s design a better final touch for your table."}</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-[#B86F3C]/20">
            <div className="marquee-track flex w-max items-center gap-3 p-3 hover:[animation-play-state:paused]">
              {[
                "Table ritual", "Warm texture", "Thrace", "Ağzınız Tatlansın!",
                "Small batch", "Five ingredients", "Florida", "Keyfiniz Yerine Gelsin!",
                "Table ritual", "Warm texture", "Thrace", "Ağzınız Tatlansın!",
                "Small batch", "Five ingredients", "Florida", "Keyfiniz Yerine Gelsin!",
              ].map((label, index) => (
                <div key={`${label}-${index}`} className={`flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border px-4 text-center text-xs font-semibold tracking-wider transition-colors duration-200 ${label.includes("Tatlansın") || label.includes("Gelsin") ? "border-[#B86F3C]/50 bg-[#B86F3C]/15 text-[#C67C46]" : "border-[#B86F3C]/20 bg-[#F6EFE8]/5 text-[#EFE6D5]/80"}`}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
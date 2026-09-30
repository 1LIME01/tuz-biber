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
        </div>
        <div className="rounded-2xl border border-[#241B14]/12 bg-[#F6EFE8] p-7 sm:p-10 shadow-[0_12px_32px_rgba(36,27,20,0.04)]">
          <ContactForm dictionary={dictionary} lang={locale} />
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-[#B86F3C]/35 bg-gradient-to-br from-[#241B14] via-[#1C130E] to-[#2E1A10] p-4 text-[#EFE6D5] shadow-[0_22px_60px_rgba(36,27,20,0.35)] sm:p-5 lg:col-span-2">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#B86F3C]/20 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#8C4E22]/20 blur-[70px]" />

          <div className="relative z-10 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-[26px] border border-[#B86F3C]/22 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4895A] to-[#8C4E22] text-lg text-[#F6EFE8] shadow-[0_6px_18px_rgba(184,111,60,0.35)]">
                    📍
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#F6EFE8]">Sirius AI Tech</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B86F3C]">
                      {locale === "tr" ? "Merkez Ofis & Atölye" : "Headquarters & Studio"}
                    </p>
                  </div>
                </div>
                <span className="hidden rounded-full border border-[#B86F3C]/40 bg-[#B86F3C]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4895A] sm:inline-block">
                  İstanbul, TR
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-[#B86F3C]/18 bg-black/10 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4895A]">
                  {locale === "tr" ? "Adres" : "Address"}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#EFE6D5]/90 sm:text-[15px]">
                  Cumhuriyet Mahallesi, Esenyurt / İstanbul, Türkiye
                </p>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-[#B86F3C]/16 bg-white/[0.03] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4895A]">
                    {locale === "tr" ? "E-Posta" : "Email"}
                  </p>
                  <a
                    className="mt-1 inline-block text-sm font-medium text-[#F6EFE8] underline decoration-[#B86F3C]/45 underline-offset-4 transition-colors hover:text-[#D4895A]"
                    href="mailto:miraczer05@gmail.com"
                  >
                    miraczer05@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-[#B86F3C]/16 bg-white/[0.03] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4895A]">
                    {locale === "tr" ? "Destek" : "Support"}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[#EFE6D5]/80 sm:text-[13px]">
                    {locale === "tr"
                      ? "Form üzerinden gönderilen taleplere 24 saat içinde dönüş sağlanır."
                      : "Requests sent via the form are answered within 24 hours."}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[26px] border border-[#B86F3C]/24 bg-[#1A120D]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-center justify-between border-b border-[#B86F3C]/18 bg-black/10 px-5 py-4 text-[#F6EFE8]">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4895A]">
                    {locale === "tr" ? "Harita Konumu" : "Map Location"}
                  </p>
                  <p className="mt-1 font-serif text-base font-semibold">
                    {locale === "tr" ? "Ofis ve çevresi" : "Office and surroundings"}
                  </p>
                </div>
                <span className="rounded-full border border-[#B86F3C]/25 bg-[#B86F3C]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4895A]">
                  İstanbul / TR
                </span>
              </div>
              <iframe
                title="Sirius AI Tech location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.634%2C41.015%2C28.735%2C41.075&layer=mapnik&marker=41.045%2C28.685"
                className="h-[340px] w-full border-0 grayscale-[12%] contrast-105 sepia-[0.08]"
                loading="lazy"
              />
            </div>
          </div>
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

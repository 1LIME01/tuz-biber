import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
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

  const pillars = locale === "tr" ? [
    {
      title: "Keşan’ın Sofrası",
      desc: "Trakya’nın cömert topraklarında pişen her yemekte, son baharatın masada yavaşça eklenmesi bir saygı ritüelidir.",
      tag: "Kökler",
    },
    {
      title: "Florida’da El Yapımı",
      desc: "Şef İnan Doğru, aile mutfağının sıcak anılarını Florida’da küçük partiler halinde, saf el işçiliğiyle yaşatıyor.",
      tag: "Zanaat",
    },
    {
      title: "Son Cümle Felsefesi",
      desc: "Yemek ateşte pişer ancak hikaye tabakta tamamlanır. Tuz Biber, lezzetin tabaktaki son ve en unutulmaz cümlesidir.",
      tag: "Felsefe",
    },
  ] : [
    {
      title: "The Table of Keşan",
      desc: "In the generous lands of Thrace, adding the finishing spice slowly at the table is a timeless ritual of warmth and respect.",
      tag: "Roots",
    },
    {
      title: "Handcrafted in Florida",
      desc: "Chef İnan Doğru brings family memories to life in Florida, blending small batches with dedicated hands-on craft.",
      tag: "Craft",
    },
    {
      title: "The Final Sentence",
      desc: "Food cooks over fire, but the experience completes at the plate. Tuz Biber is the final, unforgettable signature.",
      tag: "Philosophy",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#F6EFE8] py-16 sm:py-24 lg:py-28 text-[#241B14]">
      
      {/* ── Üst Hero Başlık Alanı (Tam ortalanmış) ────────────────────── */}
      <Container className="relative flex flex-col items-center justify-center max-w-4xl text-center mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">
          {dictionary.storyPage.eyebrow}
        </p>

        <Heading as="h1" className="heading-hero mt-4 text-[#241B14] max-w-3xl text-center">
          {dictionary.storyPage.title}
        </Heading>

        <p className="mt-6 max-w-2xl font-serif text-xl font-medium leading-relaxed text-[#8C4E22] sm:text-2xl sm:leading-10 text-center">
          {dictionary.storyPage.intro}
        </p>
      </Container>

      {/* ── Hikaye Görsel & Editorial Alıntı Kartı ───────────── */}
      <Container className="mt-14 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#B86F3C]/25 bg-gradient-to-br from-[#241B14] via-[#1C130E] to-[#2B180F] p-8 sm:p-14 text-[#EFE6D5] shadow-[0_24px_60px_rgba(36,27,20,0.25)]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#B86F3C]/25 blur-[90px]" />
          
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-base leading-relaxed text-[#EFE6D5]/85 sm:text-lg sm:leading-8">
              {dictionary.storyPage.body.map((paragraph) => (
                <p key={paragraph} className="font-light">
                  {paragraph}
                </p>
              ))}
              
              <div className="pt-2">
                <blockquote className="border-l-2 border-[#B86F3C] pl-5 font-serif text-lg sm:text-xl italic text-[#F6EFE8]">
                  "{dictionary.founderStory.quote}"
                </blockquote>
                <p className="mt-3 pl-5 text-xs font-bold uppercase tracking-[0.2em] text-[#B86F3C]">
                  — Şef İnan Doğru
                </p>
              </div>
            </div>

            {/* Sağ Vurgu Kartı */}
            <div className="rounded-2xl border border-[#B86F3C]/35 bg-[#F6EFE8]/5 p-7 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#B86F3C]">
                <Utensils className="h-4 w-4" />
                {locale === "tr" ? "Miras & Gelenek" : "Heritage & Craft"}
              </div>

              <p className="mt-4 font-serif text-2xl font-bold text-[#F6EFE8]">
                {locale === "tr" ? "Ateşten Sonraki İlk Dokunuş" : "The First Touch After Fire"}
              </p>
              
              <p className="mt-3 text-sm leading-relaxed text-[#EFE6D5]/70">
                {locale === "tr"
                  ? "Tuz Biber, bir yemek pişirme tozu değil; sofraya oturanların tabağına kattığı sıcak bir an ve sevgi bağıdır."
                  : "Tuz Biber is not a blend to hide in the pan; it is a warm moment shared across generous tables."}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#B86F3C]/25 pt-4 text-xs font-semibold text-[#B86F3C]">
                <span>Keşan, Trakya</span>
                <span>→</span>
                <span>Florida, USA</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ── 3 Ana Değer / Sütun (Canlı & Sıcak Kartlar) ──────────────── */}
      <Container className="mt-16 max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#241B14]/15 bg-[#F6EFE8] p-6 sm:p-7 shadow-[0_4px_24px_rgba(36,27,20,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B86F3C] hover:shadow-[0_20px_44px_rgba(184,111,60,0.18)]"
              >
                {/* Üst Koyu Renk & Bakır Şerit Detayı */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1C130E] via-[#B86F3C] to-[#1C130E] opacity-90" />

                <div>
                  {/* Üst Rozetler */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 rounded-full border border-[#B86F3C]/60 bg-[#1C130E]/95 px-3 py-1 shadow-sm backdrop-blur-md">
                      <span className="font-serif text-xs font-black tracking-widest text-[#F6EFE8]">
                        0{index + 1}
                      </span>
                    </div>
                    <span className="rounded-full border border-[#B86F3C]/40 bg-[#B86F3C]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8C4E22]">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Şekillendirilmiş Başlık Alanı */}
                  <div className="mt-6 border-l-2 border-[#B86F3C] pl-3.5 transition-all duration-300 group-hover:border-[#8C4E22] group-hover:pl-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B86F3C]">
                      {locale === "tr" ? "Değerimiz" : "Our Value"}
                    </span>
                    <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#241B14] transition-colors group-hover:text-[#8C4E22]">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Samimi ve Sıcak Açıklama */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#57402E]">
                    {pillar.desc}
                  </p>
                </div>

                {/* Alt Detay Çizgisi */}
                <div className="mt-7 flex items-center justify-between border-t border-[#241B14]/10 pt-4">
                  <span className="font-serif text-xs font-bold text-[#8C4E22]/90 group-hover:text-[#B86F3C] transition-colors">
                    Tuz Biber • {pillar.tag}
                  </span>
                  <div className="h-1.5 w-12 rounded-full bg-[#1C130E]/10 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-[#B86F3C] to-[#8C4E22] transition-transform duration-500 origin-left scale-x-50 group-hover:scale-x-100" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Alt Çağrı (Modern & Canlı CTA Butonu) ─────────────────────────────────── */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            href={`/${locale}/contact`}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#F6EFE8] shadow-[0_8px_28px_rgba(184,111,60,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_rgba(184,111,60,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4895A] via-[#B86F3C] to-[#8C4E22] transition-opacity duration-300 group-hover:opacity-95" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            <span className="absolute inset-[1px] rounded-full border border-white/20" />
            <span className="relative flex items-center gap-2.5">
              <span>{locale === "tr" ? "Tuz Biber Edin" : "Get Tuz Biber"}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                <ArrowRight className="h-3.5 w-3.5 text-[#F6EFE8]" />
              </span>
            </span>
          </Link>

          <Link
            href={`/${locale}/how-to-use`}
            className="inline-flex items-center gap-2 rounded-full border border-[#241B14]/20 bg-transparent px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#241B14] transition-all duration-200 hover:border-[#B86F3C] hover:bg-[#B86F3C]/10 hover:text-[#8C4E22]"
          >
            {locale === "tr" ? "Nasıl Kullanılır?" : "How To Use?"}
          </Link>
        </div>
      </Container>
    </main>
  );
}

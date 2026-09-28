"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/types";

const aiProducts = ["BilgiAI", "CallingAI", "BossAI", "SiriusAI"];
const tableProducts = ["Tuz Biber Signature", "Family Jar", "Gift Set", "Finishing Blend"];
const slides = {
  tr: [
    ["Gününüze kahveyle başlayın", "İlk yuduma sıcak, baharatlı bir son dokunuş ekleyin."],
    ["Doğum günü kutlamalarını yaşayın", "Kutlamaların son notasını birlikte tasarlayalım."],
    ["Sofranıza kendi ritüelinizi katın", "Önce pişir, sonra serp; anı sofrada tamamla."],
  ],
  en: [
    ["Start your day with coffee", "Add a warm, spiced finishing touch to the first sip."],
    ["Make birthdays taste memorable", "Let’s give every celebration a thoughtful final note."],
    ["Create your own table ritual", "Cook first, sprinkle last, and finish the moment."],
  ],
} as const;

export function HomeMotionSections({ lang }: { lang: Locale }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides[lang].length), 3600);
    return () => window.clearInterval(timer);
  }, [lang]);

  return (
    <>
      <section className="overflow-hidden border-y border-[#B86F3C]/20 bg-[#241B14] py-4 text-[#EFE6D5]" aria-label="Sirius AI Tech products">
        <div className="marquee-track flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...aiProducts, ...aiProducts].map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-[#B86F3C]/30 bg-[#F6EFE8]/5 px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#EFE6D5]/80">{item}</span>
          ))}
        </div>
      </section>
      <section className="overflow-hidden bg-[#EFE6D5] py-8" aria-label="Tuz Biber products">
        <div className="marquee-track marquee-reverse flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...tableProducts, ...tableProducts].map((item, index) => (
            <Link key={`${item}-${index}`} href={`/${lang}/products`} className="group flex w-60 items-center gap-3.5 rounded-xl border border-[#241B14]/12 bg-[#F6EFE8] p-3 text-[#241B14] transition-colors duration-200 hover:border-[#B86F3C]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#241B14] font-serif text-sm font-bold text-[#EFE6D5]">TB</span>
              <span className="font-serif text-sm font-semibold text-[#241B14]">{item}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[#F6EFE8] px-5 py-20 text-[#241B14] sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-8 rounded-2xl border border-[#241B14]/12 bg-[#EFE6D5] p-8 sm:p-14 shadow-[0_12px_32px_rgba(36,27,20,0.04)]">
          <div key={slide} className="transition-opacity duration-300">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">Tuz Biber</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold tracking-tight text-[#241B14] sm:text-4xl lg:text-5xl">{slides[lang][slide][0]}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#57402E] sm:text-lg">{slides[lang][slide][1]}</p>
            <Link href={`/${lang}/contact`} className="mt-7 inline-flex rounded-full bg-[#B86F3C] px-7 py-3 text-sm font-semibold text-[#F6EFE8] transition-colors duration-200 hover:bg-[#C67C46]">{lang === "tr" ? "İletişime geç" : "Get in touch"}</Link>
          </div>
          <div className="hidden gap-2.5 sm:flex" aria-hidden="true">
            {slides[lang].map((_, index) => <span key={index} className={`h-2 rounded-full transition-all duration-300 ${index === slide ? "w-10 bg-[#B86F3C]" : "w-3 bg-[#241B14]/20"}`} />)}
          </div>
        </div>
      </section>
    </>
  );
}


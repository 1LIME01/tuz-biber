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
      <section className="overflow-hidden border-y border-[#B86F3C]/20 bg-[#241B14] py-5 text-[#EFE6D5]" aria-label="Sirius AI Tech products">
        <div className="marquee-track flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...aiProducts, ...aiProducts].map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-[#B86F3C]/30 bg-[#F6EFE8]/5 px-5 py-3 text-sm font-semibold tracking-[0.14em] text-[#DCD3C1]">{item}</span>
          ))}
        </div>
      </section>
      <section className="overflow-hidden bg-[#EFE6D5] py-8" aria-label="Tuz Biber products">
        <div className="marquee-track marquee-reverse flex w-max gap-4 hover:[animation-play-state:paused]">
          {[...tableProducts, ...tableProducts].map((item, index) => (
            <Link key={`${item}-${index}`} href={`/${lang}/products`} className="group flex w-56 items-center gap-3 rounded-2xl border border-[#241B14]/10 bg-[#F6EFE8] p-3 text-[#241B14] transition hover:border-[#B86F3C]">
              <span className="h-14 w-14 shrink-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(184,111,60,0.75),_rgba(36,27,20,0.95)_70%)] grayscale transition group-hover:grayscale-0" />
              <span className="text-sm font-semibold">{item}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[#F6EFE8] px-4 py-16 text-[#241B14] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 rounded-[2rem] border border-[#241B14]/10 bg-[#EFE6D5] p-8 sm:p-12">
          <div key={slide} className="animate-in fade-in slide-in-from-right-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">Tuz Biber</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.05em] sm:text-5xl">{slides[lang][slide][0]}</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#57402E]">{slides[lang][slide][1]}</p>
            <Link href={`/${lang}/contact`} className="mt-6 inline-flex rounded-full bg-[#B86F3C] px-6 py-3 text-sm font-semibold text-[#F6EFE8] transition hover:bg-[#C67C46]">{lang === "tr" ? "İletişime geç" : "Get in touch"}</Link>
          </div>
          <div className="hidden gap-2 sm:flex" aria-hidden="true">
            {slides[lang].map((_, index) => <span key={index} className={`h-2 w-8 rounded-full ${index === slide ? "bg-[#B86F3C]" : "bg-[#241B14]/20"}`} />)}
          </div>
        </div>
      </section>
    </>
  );
}

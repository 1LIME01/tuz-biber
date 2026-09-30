"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/types";

const tableProducts = [
  { name: "Sweets", nameTr: "Tatlılar", desc: "Tatlı & Çikolata Dokunuşu", descEn: "Warm sweet & pastry finish", badgeTr: "Tatlılar", badgeEn: "Sweets", image: "/images/sweet.png", href: "sweets" },
  { name: "Cakes", nameTr: "Pastalar & Kekler", desc: "Kek & Fırın Sofraları", descEn: "Slow morning bakes", badgeTr: "Pastalar", badgeEn: "Cakes", image: "/images/cake.png", href: "cakes" },
  { name: "Drinks", nameTr: "İçecekler", desc: "Kahve & Kokteyl Ritüeli", descEn: "Coffee & drink ritual", badgeTr: "İçecekler", badgeEn: "Drinks", image: "/images/drink.png", href: "drinks" },
  { name: "Meals", nameTr: "Yemekler", desc: "Sıcak Tabaklar & Lezzet", descEn: "Finishing savory plates", badgeTr: "Yemekler", badgeEn: "Meals", image: "/images/meal.png", href: "meals" },
];

const slides = {
  tr: [
    {
      tag: "Günün Ritüeli",
      title: "Güne sıcak bir lezzet dokunuşuyla başlayın.",
      desc: "Yumurta, sıcak ekmek ve zeytinyağının buluştuğu ilk lokmaya baharatlı ve çıtır bir son dokunuş katın.",
      highlight: "Kahvaltı & Brunch",
    },
    {
      tag: "Özel Kutlamalar",
      title: "Kutlamaların sofrasında unutulmaz bir imza.",
      desc: "Dostlarla kurulan kalabalık masaların ve doğum günlerinin son lezzet notasını birlikte tasarlayalım.",
      highlight: "Ziyafet & Davet",
    },
    {
      tag: "Sofranın Ruhu",
      title: "Sofranıza kendi eşsiz ritüelinizi ekleyin.",
      desc: "Önce ateşte pişir, tabağa al, en son cömertçe serp; anı sofrada sevgiyle tamamla.",
      highlight: "El Yapımı Lezzet",
    },
  ],
  en: [
    {
      tag: "Morning Ritual",
      title: "Start your day with a warm, textural touch.",
      desc: "Add a warm, spiced finishing touch and crunchy savory snap to eggs, olive oil toast, and early mornings.",
      highlight: "Breakfast & Brunch",
    },
    {
      tag: "Memorable Celebrations",
      title: "Make gathering and celebrations unforgettable.",
      desc: "Let’s give every family gathering, feast, and celebration dinner a thoughtful, aromatic final note.",
      highlight: "Feasts & Dining",
    },
    {
      tag: "The Table Spirit",
      title: "Create your own timeless table ritual.",
      desc: "Cook first, plate second, sprinkle last; savor the warm contrast and elevate every single plate.",
      highlight: "Handcrafted Flavor",
    },
  ],
} as const;

export function HomeMotionSections({ lang }: { lang: Locale }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % slides[lang].length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [lang]);

  const currentSlide = slides[lang][slide];
  return (
    <>
      {/* ── Alt Kayan Şerit: Tuz Biber Ürün Kartları ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EFE6D5] to-[#E6DAC3] py-7" aria-label="Tuz Biber products">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#EFE6D5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#EFE6D5] to-transparent" />

        <div className="marquee-track marquee-reverse flex w-max gap-2.5 hover:[animation-play-state:paused]">
          {[...tableProducts, ...tableProducts, ...tableProducts].map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={`/${lang}/${item.href}`}
              className="group relative flex h-[188px] w-[272px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#B86F3C]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,239,232,0.98))] p-4 shadow-[0_8px_24px_rgba(184,111,60,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B86F3C]/35 hover:shadow-[0_14px_32px_rgba(184,111,60,0.14)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B86F3C]/35 to-transparent" />
              <div className="flex items-start justify-between gap-3.5">
                <div className="flex min-w-0 flex-1 items-start gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[18px] border border-white/70 bg-white shadow-[0_6px_18px_rgba(184,111,60,0.1)]">
                    <Image
                      src={item.image}
                      alt={lang === "tr" ? item.nameTr : item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="inline-flex w-fit rounded-full border border-[#B86F3C]/12 bg-[#B86F3C]/6 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#B86F3C]">
                      {lang === "tr" ? item.badgeTr : item.badgeEn}
                    </span>
                    <h3 className="mt-2 min-h-[42px] text-[15px] font-semibold leading-[1.35] tracking-[0.01em] text-[#241B14] transition-colors duration-300 group-hover:text-[#8C4E22]">
                      {lang === "tr" ? item.nameTr : item.name}
                    </h3>
                  </div>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#B86F3C]/14 bg-white/85 text-[#B86F3C] transition-all duration-300 group-hover:border-[#B86F3C]/35 group-hover:bg-[#B86F3C] group-hover:text-white">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>

              <p className="mt-4 min-h-[40px] line-clamp-2 text-[13px] leading-5 text-[#6F5643]">
                {lang === "tr" ? item.desc : item.descEn}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-[#B86F3C]/10 pt-3">
                <span className="text-[11px] font-medium tracking-[0.06em] text-[#8A6B55]">
                  {lang === "tr" ? "Kategoriyi incele" : "Explore category"}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#B86F3C]/35 transition-colors duration-300 group-hover:bg-[#B86F3C]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Canlı & Sıcak İletişim / Get In Touch Kartı ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F6EFE8] px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#B86F3C]/35 bg-gradient-to-br from-[#241B14] via-[#1C130E] to-[#2A180E] p-7 sm:p-12 lg:p-14 text-[#EFE6D5] shadow-[0_24px_60px_rgba(36,27,20,0.35)] backdrop-blur-xl">

            {/* Arka Plan Glow Efektleri */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#B86F3C]/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#8C4E22]/25 blur-[90px]" />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              {/* Sol İçerik */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center rounded-full border border-[#B86F3C]/50 bg-[#B86F3C]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6EFE8]">
                    {currentSlide.tag}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B86F3C]">
                    • {currentSlide.highlight}
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-2xl font-bold leading-snug tracking-tight text-[#F6EFE8] sm:text-3xl lg:text-4xl">
                  {currentSlide.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-[#EFE6D5]/80 sm:text-base sm:leading-7">
                  {currentSlide.desc}
                </p>

                {/* İletişim Buton Grubu */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/${lang}/contact`}
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_4px_24px_rgba(184,111,60,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4895A] via-[#B86F3C] to-[#8C4E22]" />
                    <span className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      {lang === "tr" ? "İletişime Geçin" : "Get In Touch"}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>

                  <Link
                    href={`/${lang}/how-to-use`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#EFE6D5]/25 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#EFE6D5] backdrop-blur-sm transition-all duration-200 hover:border-[#B86F3C] hover:bg-[#B86F3C]/15"
                  >
                    {lang === "tr" ? "Rutini İncele" : "Explore Rutine"}
                  </Link>
                </div>
              </div>

              {/* Sağ Slider Göstergesi ve Sayaç */}
              <div className="flex flex-row items-center gap-3 lg:flex-col lg:items-end">
                <div className="flex gap-2">
                  {slides[lang].map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === slide
                        ? "w-8 bg-gradient-to-r from-[#D4895A] to-[#B86F3C] shadow-[0_0_10px_#B86F3C]"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="font-serif text-xs font-medium text-[#B86F3C]/80">
                  0{slide + 1} / 0{slides[lang].length}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}



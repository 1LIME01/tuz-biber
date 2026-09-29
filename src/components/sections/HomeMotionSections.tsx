"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, Sparkles, Star, Utensils } from "lucide-react";
import type { Locale } from "@/types";

const aiProducts = [
  { name: "BilgiAI", tag: "Akıllı Asistan", tagEn: "Smart Assistant", image: "/images/bilgiai.png" },
  { name: "CallingAI", tag: "Sesli İletişim", tagEn: "Voice Communication", image: "/images/callingai.png" },
  { name: "BossAI", tag: "Yönetici Çözümleri", tagEn: "Management Solutions", image: "/images/bossai.png" },
  { name: "SiriusAI", tag: "Gelişmiş Zeka", tagEn: "Advanced Intelligence", image: "/images/siriusai.png" },
];

const tableProducts = [
  { name: "Sweets", nameTr: "Tatlılar", desc: "Tatlı & Çikolata Dokunuşu", descEn: "Warm sweet & pastry finish", badge: "Sweets", image: "/images/sweet.png", href: "sweets" },
  { name: "Cakes", nameTr: "Pastalar & Kekler", desc: "Kek & Fırın Sofraları", descEn: "Slow morning bakes", badge: "Cakes", image: "/images/cake.png", href: "cakes" },
  { name: "Drinks", nameTr: "İçecekler", desc: "Kahve & Kokteyl Ritüeli", descEn: "Coffee & drink ritual", badge: "Drinks", image: "/images/drink.png", href: "drinks" },
  { name: "Meals", nameTr: "Yemekler", desc: "Sıcak Tabaklar & Lezzet", descEn: "Finishing savory plates", badge: "Meals", image: "/images/meal.png", href: "meals" },
];

const slides = {
  tr: [
    {
      tag: "Günün Ritüeli",
      title: "Güne sıcak bir lezzet dokunuşuyla başlayın.",
      desc: "Yumurta, sıcak ekmek ve zeytinyağının buluştuğu ilk lokmaya baharatlı ve çıtır bir son dokunuş katın.",
      highlight: "Kahvaltı & Brunch",
      icon: Utensils,
    },
    {
      tag: "Özel Kutlamalar",
      title: "Kutlamaların sofrasında unutulmaz bir imza.",
      desc: "Dostlarla kurulan kalabalık masaların ve doğum günlerinin son lezzet notasını birlikte tasarlayalım.",
      highlight: "Ziyafet & Davet",
      icon: Star,
    },
    {
      tag: "Sofranın Ruhu",
      title: "Sofranıza kendi eşsiz ritüelinizi ekleyin.",
      desc: "Önce ateşte pişir, tabağa al, en son cömertçe serp; anı sofrada sevgiyle tamamla.",
      highlight: "El Yapımı Lezzet",
      icon: Sparkles,
    },
  ],
  en: [
    {
      tag: "Morning Ritual",
      title: "Start your day with a warm, textural touch.",
      desc: "Add a warm, spiced finishing touch and crunchy savory snap to eggs, olive oil toast, and early mornings.",
      highlight: "Breakfast & Brunch",
      icon: Utensils,
    },
    {
      tag: "Memorable Celebrations",
      title: "Make gathering and celebrations unforgettable.",
      desc: "Let’s give every family gathering, feast, and celebration dinner a thoughtful, aromatic final note.",
      highlight: "Feasts & Dining",
      icon: Star,
    },
    {
      tag: "The Table Spirit",
      title: "Create your own timeless table ritual.",
      desc: "Cook first, plate second, sprinkle last; savor the warm contrast and elevate every single plate.",
      highlight: "Handcrafted Flavor",
      icon: Sparkles,
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
  const IconComponent = currentSlide.icon;

  return (
    <>
      {/* ── Üst Kayan Şerit: AI / Teknoloji (Sıcak Bakır & Espresso Gradyan) ───────────────── */}
      <section className="relative overflow-hidden border-y border-[#B86F3C]/25 bg-gradient-to-r from-[#170F0B] via-[#241B14] to-[#170F0B] py-3.5 text-[#EFE6D5]" aria-label="Sirius AI Tech products">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#170F0B] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#170F0B] to-transparent" />

        <div className="marquee-track flex w-max gap-3 hover:[animation-play-state:paused]">
          {[...aiProducts, ...aiProducts, ...aiProducts].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group flex w-44 flex-col overflow-hidden rounded-2xl border border-[#B86F3C]/30 bg-[#1C130E]/80 backdrop-blur-md transition-all duration-300 hover:border-[#B86F3C]/70 hover:bg-[#241B14]"
            >
              {/* Fotoğraf */}
              <div className="relative h-28 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/60 to-transparent" />
              </div>
              {/* Metin */}
              <div className="px-3.5 py-2.5">
                <span className="block text-xs font-bold tracking-wide text-[#F6EFE8]">{item.name}</span>
                <span className="block text-[10px] font-medium text-[#B86F3C]/90">{lang === "tr" ? item.tag : item.tagEn}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Alt Kayan Şerit: Tuz Biber Ürün Kartları (Canlı, Sıcak ve Etkileşimli) ───────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EFE6D5] to-[#E6DAC3] py-7" aria-label="Tuz Biber products">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#EFE6D5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#EFE6D5] to-transparent" />

        <div className="marquee-track marquee-reverse flex w-max gap-2.5 hover:[animation-play-state:paused]">
          {[...tableProducts, ...tableProducts, ...tableProducts].map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={`/${lang}/products`}
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-[#B86F3C]/20 bg-[#FBF7F2] px-4 py-2.5 shadow-[0_2px_12px_rgba(184,111,60,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B86F3C]/45 hover:bg-white hover:shadow-[0_6px_20px_rgba(184,111,60,0.14)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B86F3C]/35 to-transparent" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ background: "linear-gradient(90deg,#C47A3A,#E8A96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                ✦
              </span>
              <span className="font-serif italic text-[13px] font-semibold text-[#241B14] transition-colors group-hover:text-[#8C4E22]">
                {lang === "tr" ? item.nameTr : item.name}
              </span>
              <span className="text-[11px] text-[#B86F3C]/50 transition-all group-hover:translate-x-0.5 group-hover:text-[#B86F3C]">→</span>
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
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B86F3C]/50 bg-[#B86F3C]/15 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F6EFE8]">
                    <IconComponent className="h-3 w-3 text-[#B86F3C]" />
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
                    {lang === "tr" ? "Ritüeli İncele" : "Explore Ritual"}
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



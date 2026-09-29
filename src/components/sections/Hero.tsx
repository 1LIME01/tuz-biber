import { ArrowRight, Flame, Leaf, ShieldCheck, Sparkles, Star, Truck, Wind } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary, Locale } from "@/types";

type HeroProps = {
  lang: Locale;
  dictionary: BrandDictionary;
};

export function Hero({ lang, dictionary }: HeroProps) {
  const trust = [
    { icon: Leaf, label: lang === "tr" ? "%100 Doğal" : "100% Natural" },
    { icon: Flame, label: lang === "tr" ? "Pişirme Sonrası" : "Post-Cook" },
    { icon: Star, label: lang === "tr" ? "Aile Tarifi" : "Family Recipe" },
    { icon: Truck, label: lang === "tr" ? "Hızlı Kargo" : "Fast Delivery" },
    { icon: ShieldCheck, label: lang === "tr" ? "Sıfır Katkı" : "Zero Additives" },
    { icon: Wind, label: lang === "tr" ? "El Yapımı" : "Handcrafted" },
  ];

  const ritualLine =
    lang === "tr" ? "Pişir. Tabağa al. Serp. Ye." : "Cook. Plate. Finish. Savour.";

  return (
    <section className="relative overflow-hidden bg-[#1C130E] py-16 text-[#EFE6D5] sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_top_right,_rgba(184,111,60,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_bottom_left,_rgba(139,79,40,0.12),_transparent_60%)]" />
        <div
          className="hero-grain absolute inset-0 opacity-[0.04]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(239,230,213,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(239,230,213,.6) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
      </div>

      <Container className="relative flex flex-col items-center text-center max-w-7xl mx-auto px-4 sm:px-8">
        {/* ── Background Glow Elements ───────────────────────── */}
        <div className="pointer-events-none absolute -left-4 top-8 h-20 w-20 rounded-full border border-[#B86F3C]/25 bg-[#B86F3C]/8 blur-[2px]" aria-hidden />
        <div className="pointer-events-none absolute right-4 top-32 h-14 w-14 rounded-full border border-[#EFE6D5]/15 bg-[#EFE6D5]/5" aria-hidden />

        {/* ── Top: Typography, Heading & CTA Buttons ─────────────────────────── */}
        <div className="relative flex flex-col items-center text-center max-w-4xl">
          {/* Eyebrow - Çerçevesiz, Şık ve Belirgin */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B86F3C]" />
            <span
              className="font-serif italic text-[clamp(1.05rem,2.4vw,1.55rem)] font-semibold tracking-wide"
              style={{
                background: "linear-gradient(90deg, #C47A3A 0%, #E8A96A 45%, #C47A3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {lang === "tr" ? "Trakya → Florida • Sıfır Katkı" : "Thrace → Florida • Zero Additives"}
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B86F3C]" />
          </div>

          {/* Ana Büyük Başlık */}
          <Heading as="h1" className="heading-hero relative mt-5 text-[#EFE6D5]">
            {dictionary.hero.title}
          </Heading>

          {/* Slogan ve Açıklama Metni */}
          <div className="mt-6 space-y-3.5 max-w-2xl">
            <p className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#B86F3C]">
              {lang === "tr" ? "Sofranın son imzası" : "The table’s final signature"}
            </p>

            <p className="text-base sm:text-lg leading-relaxed tracking-wide text-[#EFE6D5]/80">
              {dictionary.hero.subtitle}
            </p>
          </div>

          {/* Aksiyon Butonları */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href={`/${lang}/#waitlist`}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_8px_30px_rgba(184,111,60,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_rgba(184,111,60,0.55)] active:scale-95"
            >
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_50%,#8C4E22_100%)] transition-opacity duration-300 group-hover:opacity-95" />
              <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
              <span className="absolute inset-[1px] rounded-full border border-white/20" />
              <span className="relative flex items-center gap-2.5">
                <span>{dictionary.hero.ctaPrimary}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                  <ArrowRight className="h-3.5 w-3.5 text-[#F6EFE8]" />
                </span>
              </span>
            </a>

            <Button
              href={`/${lang}/how-to-use`}
              variant="secondary"
              className="min-h-[52px] border border-[#EFE6D5]/25 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#EFE6D5] backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#B86F3C]"
            >
              {dictionary.hero.ctaSecondary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* İstatistik Göstergeleri */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { n: "5", label: lang === "tr" ? "Ana Malzeme" : "Core Ingredients" },
              { n: "0", label: lang === "tr" ? "Katkı Maddesi" : "Additives" },
              { n: "1", label: lang === "tr" ? "Aile Tarifi" : "Family Recipe" },
            ].map(({ n, label }, i) => (
              <div key={label} className="flex items-center gap-6">
                {i > 0 ? (
                  <span className="hidden h-6 w-px bg-[#EFE6D5]/20 sm:block" aria-hidden />
                ) : null}
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B86F3C]">{n}</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#EFE6D5]/60">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: Editorial Glass Card (Yazı ve Butonların Altında) ───────────────── */}
        <div className="relative mt-14 sm:mt-18 w-full max-w-[560px] flex justify-center">
          {/* Arka Plan Işıma */}
          <div className="absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(184,111,60,0.2),transparent_70%)]" aria-hidden />

          {/* Sol Uçan Rozet (Küçük Parti) */}
          <div className="float-badge-left absolute -left-3 sm:-left-14 top-16 z-30 rounded-2xl border border-[#B86F3C]/50 bg-[#1C130E]/95 px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-transform hover:scale-105">
            <span
              className="block text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ background: "linear-gradient(90deg,#C47A3A,#E8A96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              ✦ Tuz Biber
            </span>
            <span className="mt-0.5 block font-serif italic text-sm sm:text-base font-semibold tracking-wide text-[#F6EFE8]">
              {lang === "tr" ? "Küçük Parti" : "Small Batch"}
            </span>
          </div>

          {/* Sağ Uçan Rozet (El Yapımı) */}
          <div className="float-badge-right absolute -right-3 sm:-right-14 bottom-16 z-30 rounded-2xl border border-[#B86F3C]/50 bg-[#1C130E]/95 px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-transform hover:scale-105">
            <span
              className="block text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ background: "linear-gradient(90deg,#C47A3A,#E8A96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              ✦ Florida
            </span>
            <span className="mt-0.5 block font-serif italic text-sm sm:text-base font-semibold tracking-wide text-[#F6EFE8]">
              {lang === "tr" ? "El Yapımı" : "Handcrafted"}
            </span>
          </div>

          {/* Ana Kart */}
          <div className="hero-float relative w-full">
            <div className="group relative overflow-hidden rounded-3xl border border-[#B86F3C]/35 bg-[#241B14]/95 p-6 sm:p-8 shadow-[0_32px_80px_rgba(0,0,0,0.6)] backdrop-blur-md">
              {/* home1.png Görsel Katmanı */}
              <div className="relative mb-6 h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-[#B86F3C]/30 bg-[#1C130E] shadow-inner">
                <img
                  src="/images/home1.png"
                  alt="Tuz Biber Finishing Seasoning"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241B14] via-transparent to-black/20" />

              </div>

              {/* Başlık ve Detay (Simge Silindi) */}
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#B86F3C]">
                  Tuz Biber
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#EFE6D5]/70">
                  {lang === "tr" ? "Bitiş Baharatı" : "Finishing Seasoning"}
                </p>
              </div>

              <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#B86F3C]/40 to-transparent" />

              {/* Slogan */}
              <p className="font-serif text-[clamp(1.4rem,3.2vw,1.9rem)] font-semibold leading-[1.2] tracking-tight text-[#EFE6D5] text-left">
                {ritualLine}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* ── Alt Güven Şeridi ────────────────────────────────────────── */}
      <Container className="relative mt-14 sm:mt-20">
        <div className="relative overflow-hidden rounded-2xl border border-[#B86F3C]/20 bg-gradient-to-b from-[#2A1D14]/80 to-[#1C130E]/90 px-6 py-6 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-sm">
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B86F3C]/60 to-transparent" />

          <div className="grid grid-cols-2 gap-y-5 gap-x-4 sm:grid-cols-3 lg:grid-cols-6">
            {trust.map(({ icon: Icon, label }, i) => (
              <div key={label} className="group flex flex-col items-center gap-2 text-center lg:relative lg:px-3">
                {/* Divider between items on lg */}
                {i > 0 && (
                  <span className="pointer-events-none absolute left-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#B86F3C]/30 to-transparent lg:block" aria-hidden />
                )}
                {/* Icon container */}
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B86F3C]/30 bg-gradient-to-br from-[#B86F3C]/20 to-[#8C4E22]/10 shadow-[0_4px_14px_rgba(184,111,60,0.15)] transition-all duration-300 group-hover:border-[#B86F3C]/60 group-hover:shadow-[0_4px_20px_rgba(184,111,60,0.3)] group-hover:scale-110">
                  <Icon className="h-5 w-5 text-[#D4895A] transition-colors group-hover:text-[#E8A96A]" />
                </span>
                {/* Label */}
                <span className="text-[11px] sm:text-[12px] font-semibold leading-tight tracking-wide text-[#EFE6D5]/75 transition-colors group-hover:text-[#EFE6D5]">{label}</span>
              </div>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B86F3C]/20 to-transparent" />
        </div>
      </Container>
    </section>
  );
}

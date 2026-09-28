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

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* ── Left: typography ─────────────────────────── */}
        <div className="relative">
          <div className="pointer-events-none absolute -left-4 top-8 h-16 w-16 rounded-full border border-[#B86F3C]/25 bg-[#B86F3C]/8 blur-[1px]" aria-hidden />
          <div className="pointer-events-none absolute right-4 top-32 h-10 w-10 rounded-full border border-[#EFE6D5]/15 bg-[#EFE6D5]/5" aria-hidden />
          <div className="pointer-events-none absolute -right-2 bottom-24 h-14 w-14 rounded-full border border-[#B86F3C]/20 bg-[#B86F3C]/5 blur-sm" aria-hidden />

          <svg
            className="pointer-events-none absolute -left-6 top-1/2 hidden w-24 text-[#B86F3C]/20 lg:block"
            viewBox="0 0 120 80"
            fill="none"
            aria-hidden
          >
            <path
              d="M0 40 Q 60 0 120 40"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative inline-flex items-center gap-2.5 rounded-full border border-[#B86F3C]/40 bg-[#B86F3C]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#B86F3C]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#B86F3C]" />
            {lang === "tr" ? "TRAKYA → FLORIDA • SIFIR KATKI" : "THRACE → FLORIDA • ZERO ADDITIVES"}
          </div>

          <Heading as="h1" className="heading-hero relative mt-6 text-[#EFE6D5]">
            {dictionary.hero.title}
          </Heading>

          <p className="mt-3 font-serif text-lg font-medium tracking-tight text-[#B86F3C] sm:text-xl">
            {lang === "tr" ? "Sofranın son imzası" : "The table’s final signature"}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#EFE6D5]/75 sm:text-lg">
            {dictionary.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`/${lang}/#waitlist`}
              className="group relative inline-flex overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_45%,#7A3D18_100%)]" />
              <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.22)_50%,transparent_65%)] transition-transform duration-700 group-hover:translate-x-full" />
              <span className="absolute inset-[1px] rounded-full border border-white/10" />
              <span className="relative flex items-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#F6EFE8]">
                <Star className="h-3.5 w-3.5 fill-[#F6EFE8]/50" />
                {dictionary.hero.ctaPrimary}
              </span>
            </a>

            <Button
              href={`/${lang}/how-to-use`}
              variant="secondary"
              className="min-h-[50px] border border-[#EFE6D5]/25 bg-transparent px-7 py-3 text-sm font-semibold tracking-wide text-[#EFE6D5] hover:bg-[#EFE6D5]/10"
            >
              {dictionary.hero.ctaSecondary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              { n: "5", label: lang === "tr" ? "Ana Malzeme" : "Core Ingredients" },
              { n: "0", label: lang === "tr" ? "Katkı Maddesi" : "Additives" },
              { n: "1", label: lang === "tr" ? "Aile Tarifi" : "Family Recipe" },
            ].map(({ n, label }, i) => (
              <div key={label} className="flex items-center gap-6">
                {i > 0 ? (
                  <span className="hidden h-8 w-px bg-[#EFE6D5]/15 sm:block" aria-hidden />
                ) : null}
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-3xl font-bold text-[#B86F3C]">{n}</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#EFE6D5]/60">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: editorial glass card ───────────────── */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="pointer-events-none absolute inset-4 rounded-3xl border border-[#B86F3C]/15"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-8 rounded-3xl border border-[#EFE6D5]/8"
            aria-hidden
          />
          <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(184,111,60,0.15),transparent_70%)]" aria-hidden />

          <div className="hero-float relative w-full max-w-[400px]">
            <div className="overflow-hidden rounded-3xl border border-[#B86F3C]/35 bg-[#241B14]/80 p-8 shadow-[0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#B86F3C]">
                Tuz Biber
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EFE6D5]/45">
                {lang === "tr" ? "Bitiş baharatı" : "Finishing seasoning"}
              </p>

              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#B86F3C]/50 to-transparent" />

              <p className="font-serif text-[clamp(1.75rem,4vw,2.35rem)] font-semibold leading-[1.15] tracking-tight text-[#EFE6D5]">
                {ritualLine}
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#EFE6D5]/12" />
                <span className="h-2 w-2 rounded-full bg-[#B86F3C] shadow-[0_0_12px_rgba(184,111,60,0.6)]" aria-hidden />
                <div className="h-px flex-1 bg-[#EFE6D5]/12" />
              </div>

              <div className="mt-6 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.28em] text-[#EFE6D5]/40">
                <span>{lang === "tr" ? "Küçük parti" : "Small batch"}</span>
                <Sparkles className="h-3.5 w-3.5 text-[#B86F3C]/70" aria-hidden />
                <span>{lang === "tr" ? "El yapımı" : "Handcrafted"}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative mt-14 sm:mt-20">
        <div className="rounded-2xl border border-[#EFE6D5]/10 bg-[#EFE6D5]/4 px-6 py-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#B86F3C]/25 bg-[#B86F3C]/15">
                  <Icon className="h-3.5 w-3.5 text-[#B86F3C]" />
                </span>
                <span className="text-[11px] font-semibold text-[#EFE6D5]/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

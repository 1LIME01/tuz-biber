import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary, Locale } from "@/types";

type HeroProps = {
  lang: Locale;
  dictionary: BrandDictionary;
};

export function Hero({ lang, dictionary }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#241B14] pb-10 pt-8 sm:pb-12 lg:pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(184,111,60,0.32),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(240,220,190,0.08),_transparent_30%)]" />

      <Container className="relative grid items-center gap-10 pb-12 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pb-18 lg:pt-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(184,111,60,0.3)] bg-[rgba(184,111,60,0.08)] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#DCD3C1]">
            <span className="h-2 w-2 rounded-full bg-[#B86F3C]" />
            {lang === "tr" ? "TRAKYA → FLORIDA • SIFIR KATKI" : "THRACE → FLORIDA • ZERO ADDITIVES"}
          </div>

          <Heading as="h1" className="mt-6 max-w-[640px] text-[3rem] font-black leading-[0.9] tracking-[-0.08em] text-[#EFE6D5] sm:text-[4.5rem] lg:text-[6.2rem]">
            {dictionary.hero.title}
          </Heading>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#DCD3C1] sm:text-lg">{dictionary.hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={`/${lang}/#waitlist`} className="min-h-[52px] rounded-full bg-[#B86F3C] px-6 py-3 text-sm font-semibold text-[#F6EFE8] shadow-[0_16px_32px_rgba(184,111,60,0.3)] hover:bg-[#C67C46]">
              {dictionary.hero.ctaPrimary}
            </Button>
            <Button href={`/${lang}/how-to-use`} variant="secondary" className="min-h-[52px] rounded-full border border-[#EFE6D5]/50 bg-[#241B14] px-6 py-3 text-sm font-semibold text-[#EFE6D5] hover:border-[#B86F3C] hover:bg-[#B86F3C] hover:text-[#241B14]">
              {dictionary.hero.ctaSecondary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[460px] w-full max-w-[500px]">
            <div className="absolute left-10 top-12 h-64 w-64 rounded-[2rem] border border-[rgba(184,111,60,0.2)] bg-[#EFE6D5]/10 backdrop-blur-sm" />
            <div className="absolute left-20 top-24 h-64 w-64 rotate-6 rounded-[2rem] border border-[rgba(184,111,60,0.14)] bg-[#241B14]/90 shadow-[0_28px_60px_rgba(0,0,0,0.25)]" />
            <div className="absolute left-0 top-0 flex h-[430px] w-[360px] flex-col justify-between rounded-[2.25rem] border border-[rgba(184,111,60,0.2)] bg-[linear-gradient(180deg,_rgba(49,33,26,0.94),_rgba(27,18,14,0.98))] p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#DCD3C1]/80">Tuz Biber</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#EFE6D5]">Finishing Blend</p>
                </div>
                <div className="rounded-full border border-[rgba(184,111,60,0.3)] bg-[#B86F3C]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#DCD3C1]">
                  {lang === "tr" ? "Küçük Parti" : "Small Batch"}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#EFE6D5] p-5 text-[#241B14]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#57402E]">Aroma</p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between"><span>Susam</span><span>Warm</span></div>
                    <div className="flex items-center justify-between"><span>Kekik</span><span>Herbal</span></div>
                    <div className="flex items-center justify-between"><span>Kimyon</span><span>Earthy</span></div>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-[1.5rem] border border-[rgba(184,111,60,0.18)] bg-[radial-gradient(circle_at_top,_rgba(184,111,60,0.24),_rgba(22,17,14,0.8)_52%,_rgba(22,17,14,0.96))] p-5">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-[#B86F3C] bg-[radial-gradient(circle,_#EFE6D5_0%,_#F6EFE8_30%,_#B86F3C_100%)] text-4xl font-bold text-[#241B14]">5</div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[rgba(184,111,60,0.18)] bg-[#F6EFE8]/5 p-4 text-sm text-[#EFE6D5]">
                <div className="flex items-center justify-between">
                  <span className="text-[#DCD3C1]">{lang === "tr" ? "Sofra anı" : "Table moment"}</span>
                  <Sparkles className="h-4 w-4 text-[#B86F3C]" />
                </div>
                <p className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] text-[#EFE6D5] sm:text-3xl">Pişir. Tabağa al. Serp. Ye.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative mx-auto max-w-[1200px] px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-[1.25rem] border border-[rgba(184,111,60,0.2)] bg-[rgba(252,248,244,0.03)] px-4 py-4 text-xs text-[#DCD3C1] backdrop-blur-sm sm:flex-nowrap sm:justify-between">
          {[
            "✓ %100 Doğal İçerik",
            "✓ Piştikten Sonra Kullanım",
            "✓ Özel Aile Tarifi",
            "✓ Hızlı Kargo",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#B86F3C] text-[10px] text-[#F6EFE8]">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageDarkHero } from "@/components/sections/PageDarkHero";
import type { Locale } from "@/types";

export type CategoryPairing = {
  icon: LucideIcon;
  label: string;
  note: string;
};

export type CategorySpotlight = {
  title: string;
  description: string;
};

export type RelatedCategory = {
  href: string;
  title: string;
};

type ProductCategoryPageProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  heroChips: string[];
  spotlightSteps: CategorySpotlight[];
  pairings: CategoryPairing[];
  usageTip: string;
  relatedCategories: RelatedCategory[];
};

export function ProductCategoryPage({
  locale,
  eyebrow,
  title,
  intro,
  heroChips,
  spotlightSteps,
  pairings,
  usageTip,
  relatedCategories,
}: ProductCategoryPageProps) {
  return (
    <main className="min-h-screen bg-[#F6EFE8]">
      <PageDarkHero eyebrow={eyebrow} title={title} intro={intro} chips={heroChips} />

      <Container className="max-w-5xl py-16 sm:py-20">
        {/* Spotlight strip */}
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
          {locale === "tr" ? "Sofrada nasıl hissedilir" : "How it feels at the table"}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {spotlightSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-[#241B14]/10 bg-[#EFE6D5] p-6 shadow-[0_4px_24px_rgba(36,27,20,0.06)]"
            >
              <span className="font-serif text-4xl font-bold leading-none text-[#B86F3C]/15">
                0{index + 1}
              </span>
              <h2 className="mt-3 font-serif text-lg font-bold text-[#241B14]">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#57402E]">{step.description}</p>
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#C67C46,#B86F3C,#8C4E22)] opacity-80" />
            </article>
          ))}
        </div>

        {/* Pairings */}
        <p className="mb-6 mt-14 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
          {locale === "tr" ? "İdeal eşleşmeler" : "Perfect pairings"}
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {pairings.map(({ icon: Icon, label, note }, index) => (
            <article
              key={label}
              className="group overflow-hidden rounded-2xl border border-[#241B14]/10 bg-[#EFE6D5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B86F3C]/35 hover:shadow-[0_16px_48px_rgba(36,27,20,0.1)]"
            >
              <div className="flex items-center justify-between bg-[linear-gradient(135deg,#241B14_0%,#57402E_100%)] px-6 py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B86F3C]">
                  0{index + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B86F3C]/30 bg-[#B86F3C]/15">
                  <Icon className="h-5 w-5 text-[#B86F3C]" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#241B14]">{label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#57402E]">{note}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Usage tip */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[#B86F3C]/25 bg-[#241B14] px-7 py-8 sm:px-10 sm:py-10">
          <Sparkles className="absolute right-6 top-6 h-5 w-5 text-[#B86F3C]/40" aria-hidden />
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#B86F3C]/70">
            {locale === "tr" ? "Kullanım ipucu" : "Usage tip"}
          </p>
          <p className="mt-4 max-w-2xl font-serif text-xl font-semibold leading-snug text-[#EFE6D5] sm:text-2xl">
            {usageTip}
          </p>
        </div>

        {/* Related categories */}
        <p className="mb-5 mt-14 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
          {locale === "tr" ? "Diğer kategoriler" : "Other categories"}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {relatedCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group rounded-xl border border-[#241B14]/10 bg-[#EFE6D5] px-5 py-4 transition-all duration-200 hover:border-[#B86F3C]/40 hover:bg-[#F6EFE8]"
            >
              <p className="font-serif text-base font-bold text-[#241B14] group-hover:text-[#B86F3C]">
                {cat.title}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#57402E]/70">
                {locale === "tr" ? "Keşfet" : "Explore"}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={`/${locale}/products`}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_6px_22px_rgba(184,111,60,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(184,111,60,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_50%,#8C4E22_100%)] transition-opacity duration-300 group-hover:opacity-95" />
            <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            <span className="absolute inset-[1px] rounded-full border border-white/20" />
            <span className="relative flex items-center gap-2">
              <span>{locale === "tr" ? "Tüm ürünler" : "All products"}</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                <ArrowRight className="h-3 w-3 text-[#F6EFE8]" />
              </span>
            </span>
          </Link>
          <Link
            href={`/${locale}/#waitlist`}
            className="inline-flex items-center justify-center rounded-full border border-[#241B14]/15 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#241B14] transition-colors hover:border-[#B86F3C]/50 hover:text-[#B86F3C]"
          >
            {locale === "tr" ? "Listeye katıl" : "Join waitlist"}
          </Link>
        </div>
      </Container>
    </main>
  );
}

import Link from "next/link";
import { CircleDot, Droplets, Flame, Leaf, Sprout, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageDarkHero } from "@/components/sections/PageDarkHero";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

const INGREDIENT_VISUALS: { icon: LucideIcon; blendPct: number }[] = [
  { icon: CircleDot, blendPct: 28 },
  { icon: Droplets, blendPct: 22 },
  { icon: Flame, blendPct: 18 },
  { icon: Leaf, blendPct: 17 },
  { icon: Sprout, blendPct: 15 },
];

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function IngredientsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  const chips =
    locale === "tr"
      ? ["5 malzeme", "0 katkı", "Dengeli oranlar"]
      : ["5 ingredients", "0 additives", "Balanced ratios"];

  const body = dictionary.ingredientPage.body;
  const mid = Math.ceil(body.length / 2);
  const bodyColA = body.slice(0, mid);
  const bodyColB = body.slice(mid);

  return (
    <main className="min-h-screen bg-[#F6EFE8]">
      <PageDarkHero
        eyebrow={dictionary.ingredientPage.eyebrow}
        title={dictionary.ingredientPage.title}
        intro={dictionary.ingredientPage.intro}
        chips={chips}
      />

      <Container className="max-w-5xl py-16 sm:py-20">
        {/* Bento grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.ingredients.items.map((item, index) => {
            const visual = INGREDIENT_VISUALS[index] ?? INGREDIENT_VISUALS[0];
            const Icon = visual.icon;
            const featured = index === 0;

            return (
              <article
                key={item.name}
                className={`group relative overflow-hidden rounded-2xl border border-[#241B14]/15 bg-[#FFFFFF] shadow-[0_4px_24px_rgba(36,27,20,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B86F3C] hover:shadow-[0_18px_48px_rgba(184,111,60,0.18)] ${
                  featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between bg-gradient-to-r from-[#241B14] via-[#3D2619] to-[#241B14] px-6 py-5">
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D4895A]">
                    {locale === "tr" ? `Malzeme 0${index + 1}` : `Ingredient 0${index + 1}`}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#B86F3C]/40 bg-[#B86F3C]/20 text-[#F6EFE8]">
                    <Icon className="h-6 w-6 text-[#D4895A]" />
                  </span>
                </div>
                <div className={`p-7 sm:p-8 ${featured ? "sm:p-9" : ""}`}>
                  <h2 className="font-serif text-2xl font-bold text-[#1C130E] sm:text-3xl">{item.name}</h2>
                  <p className="mt-3 text-base leading-relaxed font-normal text-[#241B14]">{item.note}</p>
                  {featured ? (
                    <p className="mt-4 inline-block rounded-full bg-[#B86F3C]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8C4E22]">
                      {locale === "tr" ? "Karışımın Kalbi" : "Heart of the Blend"}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* Blend balance strip */}
        <div className="mt-14 rounded-2xl border border-[#241B14]/15 bg-[#FFFFFF] p-7 sm:p-9 shadow-[0_4px_20px_rgba(36,27,20,0.05)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8C4E22]">
                {locale === "tr" ? "Karışım Dengesi" : "Blend Balance"}
              </p>
              <p className="mt-1 text-sm font-medium text-[#241B14]">
                {locale === "tr"
                  ? "El yapımı oranlar; her partide aynı sıcaklık ve doku."
                  : "Hand-tuned ratios for warmth and texture in every batch."}
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {dictionary.ingredients.items.map((item, index) => {
              const pct = INGREDIENT_VISUALS[index]?.blendPct ?? 20;
              return (
                <div key={item.name}>
                  <div className="mb-1.5 flex justify-between text-xs font-bold text-[#1C130E]">
                    <span>{item.name}</span>
                    <span className="text-[#8C4E22]">{pct}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#241B14]/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#D4895A] via-[#B86F3C] to-[#8C4E22]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Body + pull quote */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
          <div className="space-y-5 text-base leading-relaxed text-[#1C130E] font-medium sm:text-lg">
            {bodyColA.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="relative border-y border-[#B86F3C]/40 py-8 lg:border-y-0 lg:border-x lg:px-8 lg:py-4">
            <p className="font-serif text-xl font-medium italic leading-snug text-[#8C4E22] sm:text-2xl">
              &ldquo;{dictionary.founderStory.quote}&rdquo;
            </p>
            <footer className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#B86F3C]">
              Tuz Biber
            </footer>
          </blockquote>

          <div className="space-y-5 text-base leading-relaxed text-[#1C130E] font-medium sm:text-lg">
            {bodyColB.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Buton Grubu - Join Waitlist Vurgulandı */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={`/${locale}/#waitlist`}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_8px_24px_rgba(184,111,60,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4895A] via-[#B86F3C] to-[#8C4E22]" />
            <span className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#F6EFE8]/50" />
              {locale === "tr" ? "Listeye Katıl" : "Join Waitlist"}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </Link>

          <Link
            href={`/${locale}/how-to-use`}
            className="inline-flex items-center justify-center rounded-full border border-[#241B14]/25 bg-white/70 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#241B14] backdrop-blur-sm transition-all hover:border-[#B86F3C] hover:bg-[#B86F3C]/10 hover:text-[#8C4E22]"
          >
            {locale === "tr" ? "Nasıl Kullanılır?" : "How To Use?"}
          </Link>
        </div>
      </Container>
    </main>
  );
}

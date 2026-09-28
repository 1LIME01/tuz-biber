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
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.ingredients.items.map((item, index) => {
            const visual = INGREDIENT_VISUALS[index] ?? INGREDIENT_VISUALS[0];
            const Icon = visual.icon;
            const featured = index === 0;

            return (
              <article
                key={item.name}
                className={`group relative overflow-hidden rounded-2xl border border-[#241B14]/10 bg-[#EFE6D5] shadow-[0_4px_20px_rgba(36,27,20,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B86F3C]/30 hover:shadow-[0_16px_48px_rgba(36,27,20,0.12)] ${
                  featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between bg-[linear-gradient(135deg,#241B14_0%,#57402E_100%)] px-6 py-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
                    {locale === "tr" ? `Malzeme 0${index + 1}` : `Ingredient 0${index + 1}`}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B86F3C]/35 bg-[#B86F3C]/15">
                    <Icon className="h-7 w-7 text-[#B86F3C]" />
                  </span>
                </div>
                <div className={`p-7 ${featured ? "sm:p-8" : ""}`}>
                  <h2 className="font-serif text-2xl font-bold text-[#241B14] sm:text-3xl">{item.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#57402E] sm:text-base">{item.note}</p>
                  {featured ? (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#B86F3C]/80">
                      {locale === "tr" ? "Karışımın kalbi" : "Heart of the blend"}
                    </p>
                  ) : null}
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-[#B86F3C]/35 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>

        {/* Blend balance strip */}
        <div className="mt-14 rounded-2xl border border-[#241B14]/10 bg-[#EFE6D5] p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
                {locale === "tr" ? "Karışım dengesi" : "Blend balance"}
              </p>
              <p className="mt-1 text-sm text-[#57402E]">
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
                  <div className="mb-1.5 flex justify-between text-[11px] font-semibold text-[#241B14]">
                    <span>{item.name}</span>
                    <span className="text-[#B86F3C]">{pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#241B14]/8">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#C67C46,#B86F3C)]"
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
          <div className="space-y-5 text-base leading-relaxed text-[#241B14] sm:text-lg">
            {bodyColA.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="relative border-y border-[#B86F3C]/30 py-8 lg:border-y-0 lg:border-x lg:px-8 lg:py-4">
            <p className="font-serif text-xl font-medium italic leading-snug text-[#57402E] sm:text-2xl">
              &ldquo;{dictionary.founderStory.quote}&rdquo;
            </p>
            <footer className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#B86F3C]">
              Tuz Biber
            </footer>
          </blockquote>

          <div className="space-y-5 text-base leading-relaxed text-[#241B14] sm:text-lg">
            {bodyColB.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href={`/${locale}/how-to-use`} className="group relative inline-flex overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_45%,#7A3D18_100%)]" />
            <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.22)_50%,transparent_65%)] transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#F6EFE8]">
              <Star className="h-3 w-3 fill-[#F6EFE8]/50" />
              {locale === "tr" ? "Nasıl kullanılır" : "How to use"}
            </span>
          </Link>
          <Link
            href={`/${locale}/#waitlist`}
            className="inline-flex items-center justify-center rounded-full border border-[#241B14]/15 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#241B14] transition-colors hover:border-[#B86F3C]/50 hover:text-[#B86F3C]"
          >
            {locale === "tr" ? "Listeye katıl" : "Join waitlist"}
          </Link>
        </div>
      </Container>
    </main>
  );
}

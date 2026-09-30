import Link from "next/link";
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
  const isTr = locale === "tr";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#1C130E_0%,#F4EBDC_24%,#F8F2EA_100%)]">
      <PageDarkHero
        eyebrow={eyebrow}
        title={title}
        titleClassName="!text-[3.5rem] sm:!text-[8rem]"
        intro={intro}
        chips={heroChips}
        footer={(
          <div className="mt-10 max-w-3xl rounded-[30px] border border-[#EAC39E]/16 bg-white/6 p-5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#E7B17B]">
                  {isTr ? "Sofra hikâyesi" : "Table story"}
                </p>
                <p className="mt-3 max-w-xl font-serif text-lg leading-relaxed text-[#EFE6D5]/82 sm:text-xl">
                  {isTr
                    ? `${title}, tek bir kullanım önerisinden fazlası. Bu sayfa, o son serpiştirmenin sofrada nasıl bir sahneye dönüştüğünü anlatıyor.`
                    : `${title} is more than a serving suggestion. This page tells the story of how that final dusting becomes a full table moment.`}
                </p>
              </div>
              <div className="rounded-full border border-[#E7B17B]/25 px-4 py-2 text-[#E7B17B]">
                <span className="text-sm font-bold uppercase tracking-[0.24em]">
                  {isTr ? "Yavaş, sıcak, akılda kalan" : "Slow, warm, memorable"}
                </span>
              </div>
            </div>
          </div>
        )}
      />

      <section className="relative z-10 -mt-10 bg-[#F4EBDC] px-5 pb-12 pt-8 sm:-mt-14 sm:px-6 sm:pb-16 sm:pt-10">
        <Container className="max-w-6xl">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="overflow-hidden rounded-[34px] border border-[#241B14]/10 bg-[linear-gradient(180deg,rgba(255,251,247,0.96),rgba(239,230,213,0.96))] p-7 shadow-[0_20px_50px_rgba(36,27,20,0.08)] sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B86F3C]">
              {isTr ? "Giriş sahnesi" : "Opening scene"}
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#241B14] sm:text-[4.5rem]">
              {title}
              <span className="block text-[#8C4E22]/82">
                {isTr ? " sofrasında son dokunuş" : " at the moment of finishing"}
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#57402E] sm:text-lg">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#B86F3C]/20 bg-[#B86F3C]/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#57402E]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <aside className="overflow-hidden rounded-[34px] border border-[#B86F3C]/20 bg-[#241B14] p-7 text-[#EFE6D5] shadow-[0_24px_60px_rgba(36,27,20,0.16)] sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#B86F3C]/78">
              {isTr ? "Editör notu" : "Editorial note"}
            </p>
            <p className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              {isTr
                ? "İyi bir son dokunuş sadece tat eklemez. Masadaki ritmi değiştirir."
                : "A good finishing touch does more than add flavor. It changes the rhythm of the table."}
            </p>
            <div className="mt-8 space-y-4">
              {spotlightSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[22px] border border-white/8 bg-white/5 px-5 py-4"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#B86F3C]">
                    {isTr ? "Sahne" : "Scene"} 0{index + 1}
                  </p>
                  <p className="mt-2 font-serif text-xl text-[#F6EFE8] sm:text-2xl">{step.title}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
        </Container>
      </section>

      <section className="bg-[#F8F2EA] px-5 py-14 sm:px-6 sm:py-20">
        <Container className="max-w-6xl">
        <section>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
                {isTr ? "Sofrada nasıl açılır" : "How it opens at the table"}
              </p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-[#241B14] sm:text-7xl">
                {isTr ? "Lezzetin hikâyesi üç sahnede" : "The flavor story in three scenes"}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#57402E] sm:text-base">
              {isTr
                ? "Kuru bir kullanım listesi yerine, Tuz Biber’in masaya geliş anını bölüm bölüm anlattık."
                : "Instead of a dry list of uses, this page tells the arrival of Tuz Biber at the table in chapters."}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {spotlightSteps.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[32px] border border-[#241B14]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(246,239,232,0.95))] p-7 shadow-[0_18px_45px_rgba(36,27,20,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B86F3C]/30 hover:shadow-[0_24px_60px_rgba(36,27,20,0.12)] sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#D4895A,#B86F3C,#8C4E22)]" />
                <span className="font-serif text-6xl leading-none text-[#B86F3C]/12 sm:text-7xl">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-serif text-4xl font-semibold tracking-[-0.02em] text-[#241B14] sm:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#57402E] sm:text-[15px]">
                  {step.description}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#B86F3C]/18 bg-[#B86F3C]/6 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8C4E22]">
                  <span>{heroChips[index % heroChips.length]}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        </Container>
      </section>

      <section className="bg-[#EFE6D5] px-5 py-14 sm:px-6 sm:py-20">
        <Container className="max-w-6xl">
        <section>
          <div className="mb-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
                {isTr ? "Eşleşme önerileri" : "Suggested pairings"}
              </p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-[#241B14] sm:text-7xl">
                {isTr ? "Kart değil, küçük sahneler" : "Not cards, but little scenes"}
              </h2>
            </div>
            <p className="text-sm leading-7 text-[#57402E] sm:text-base">
              {isTr
                ? "Her eşleşmeyi kısa bir servis hissiyle anlattık; böylece neyle kullandığını değil, nasıl hissettirdiğini de görüyorsun."
                : "Each pairing is framed as a serving mood, so you feel not just what it goes with, but how it lands."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pairings.map(({ icon: Icon, label, note }, index) => (
              <article
                key={label}
                className="group relative overflow-hidden rounded-[30px] border border-[#241B14]/10 bg-[#F9F4ED] p-6 shadow-[0_14px_40px_rgba(36,27,20,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B86F3C]/32 hover:shadow-[0_22px_50px_rgba(36,27,20,0.12)] sm:p-7"
              >
                <div className="absolute right-5 top-5 rounded-full border border-[#B86F3C]/14 bg-[#B86F3C]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4E22]">
                  0{index + 1}
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#241B14,#57402E)] shadow-[0_10px_24px_rgba(36,27,20,0.16)]">
                    <Icon className="h-6 w-6 text-[#E7B17B]" />
                  </span>
                  <div className="pr-14">
                    <h3 className="font-serif text-4xl font-semibold tracking-[-0.02em] text-[#241B14] sm:text-5xl">
                      {label}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#57402E] sm:text-[15px]">
                      {note}
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-[#241B14]/8 pt-4">
                  <p className="font-serif text-lg text-[#8C4E22]">
                    {isTr
                      ? "Servis anında küçük ama akılda kalan bir imza."
                      : "A small signature at service, but one that stays in memory."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        </Container>
      </section>

      <section className="bg-[#241B14] px-5 py-14 text-[#EFE6D5] sm:px-6 sm:py-20">
        <Container className="max-w-6xl">
        <section className="overflow-hidden rounded-[30px] border border-[#B86F3C]/22 bg-[#241B14] px-7 py-9 shadow-[0_24px_60px_rgba(36,27,20,0.16)] sm:px-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B86F3C]/75">
                {isTr ? "Son cümle" : "Final line"}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-[#F6EFE8] sm:text-6xl">
                {isTr ? "Servis ederken anlatmaya başlar." : "It starts speaking at service."}
              </h2>
            </div>
            <div>
              <p className="font-serif text-xl font-semibold leading-snug text-[#EFE6D5] sm:text-[2rem]">
                {usageTip}
              </p>
            </div>
          </div>
        </section>
        </Container>
      </section>

      <section className="bg-[#F8F2EA] px-5 py-14 sm:px-6 sm:py-20">
        <Container className="max-w-6xl">
        <section>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#B86F3C]">
                {isTr ? "Diğer sahneler" : "Other scenes"}
              </p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-[#241B14] sm:text-7xl">
                {isTr ? "Hikâyeyi başka tabaklarda sürdür" : "Continue the story on other tables"}
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group rounded-[26px] border border-[#241B14]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,239,232,0.96))] px-6 py-6 shadow-[0_14px_30px_rgba(36,27,20,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#B86F3C]/35 hover:shadow-[0_20px_45px_rgba(36,27,20,0.1)]"
              >
                <p className="font-serif text-4xl font-semibold tracking-[-0.02em] text-[#241B14] group-hover:text-[#8C4E22]">
                  {cat.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#57402E]">
                  {isTr ? "Farklı bir masa, farklı bir ritim, aynı son imza." : "A different table, a different rhythm, the same finishing signature."}
                </p>
                <span className="mt-5 inline-flex text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C4E22]">
                  {isTr ? "Devam et" : "Continue"}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={`/${locale}/products`}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_6px_22px_rgba(184,111,60,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(184,111,60,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_50%,#8C4E22_100%)] transition-opacity duration-300 group-hover:opacity-95" />
            <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
            <span className="absolute inset-[1px] rounded-full border border-white/20" />
            <span className="relative flex items-center gap-2">
              <span>{isTr ? "Tüm ürünler" : "All products"}</span>
            </span>
          </Link>
          <Link
            href={`/${locale}/#waitlist`}
            className="inline-flex items-center justify-center rounded-full border border-[#241B14]/15 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#241B14] transition-colors hover:border-[#B86F3C]/50 hover:text-[#B86F3C]"
          >
            {isTr ? "Listeye katıl" : "Join waitlist"}
          </Link>
        </div>
        </Container>
      </section>
    </main>
  );
}

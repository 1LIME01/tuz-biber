import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { Locale } from "@/types";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";

const stepData = [
  {
    image: "/images/pisir.png",
    stepNum: "01",
    tagTr: "1. ADIM • PİŞİRME",
    tagEn: "STEP 1 • COOK",
    badgeTr: "SICAK",
    badgeEn: "HOT",
  },
  {
    image: "/images/tabaga_al.png",
    stepNum: "02",
    tagTr: "2. ADIM • SERVİS",
    tagEn: "STEP 2 • PLATE",
    badgeTr: "SUNUM",
    badgeEn: "PLATING",
  },
  {
    image: "/images/serp.png",
    stepNum: "03",
    tagTr: "3. ADIM • SERPME",
    tagEn: "STEP 3 • SPRINKLE",
    badgeTr: "DOKUNUŞ",
    badgeEn: "FINISH",
  },
  {
    image: "/images/ye.png",
    stepNum: "04",
    tagTr: "4. ADIM • LEZZET",
    tagEn: "STEP 4 • ENJOY",
    badgeTr: "AFİYET",
    badgeEn: "SAVOUR",
  },
];

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function HowToUsePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale)
    ? (lang as Locale)
    : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#EFE6D5] py-16 sm:py-24 overflow-x-hidden">
      <Container className="max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ── Üst Başlık Alanı ────────────────── */}
        <div className="flex flex-col items-center justify-center text-center mx-auto max-w-4xl">
          <p className="!text-xs sm:!text-xl font-bold uppercase tracking-[0.25em] text-[#B86F3C]">
            {dictionary.howToUsePage.eyebrow}
          </p>

          <Heading
            as="h1"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="mt-4 !text-3xl sm:!text-5xl lg:!text-8xl font-normal !leading-[1.12] text-[#241B14] max-w-4xl text-center"
          >
            {dictionary.howToUsePage.title}
          </Heading>

          <p
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="mt-5 !text-base sm:!text-xl lg:!text-2xl font-medium leading-relaxed text-[#57402E] max-w-2xl text-center"
          >
            {dictionary.howToUsePage.intro}
          </p>
        </div>

        {/* ── 1x4 Izgara (Masaüstünde Hover Odaklı & Blur Efektli) ────────── */}
        <div className="group/grid mt-12 py-16 px-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {dictionary.howToUse.steps.map((step, index) => {
            const data = stepData[index] ?? stepData[0];
            const tag = locale === "tr" ? data.tagTr : data.tagEn;
            const badge = locale === "tr" ? data.badgeTr : data.badgeEn;

            return (
              <div
                key={step.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#241B14]/15 bg-[#F6EFE8] p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(36,27,20,0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 lg:hover:translate-y-0 lg:hover:scale-[1.35] hover:border-[#B86F3C] hover:shadow-[0_32px_64px_rgba(36,27,20,0.35)] cursor-pointer group-hover/grid:blur-[2px] group-hover/grid:brightness-75 group-hover/grid:opacity-60 hover:!blur-none hover:!brightness-100 hover:!opacity-100 hover:z-50"
              >
                <div className="flex flex-col h-full justify-between">
                  {/* Görsel Kutusu: Masaüstü Hover'da Büyür */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-[#241B14]/15 bg-[#1C130E] shadow-inner transition-all duration-500 lg:group-hover:aspect-[16/12]">
                    <img
                      src={data.image}
                      alt={step.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                    />

                    {/* Siyah Vinyet Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E] via-[#1C130E]/40 to-transparent" />

                    {/* Görsel Üstü Badge & Adım Numarası */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                      <div className="flex items-center justify-center rounded-full bg-[#1C130E]/85 border border-white/20 px-2.5 py-0.5 shadow-md backdrop-blur-md">
                        <span className="font-serif text-xs sm:text-sm font-bold tracking-widest text-[#F6EFE8]">
                          {data.stepNum}
                        </span>
                      </div>

                      <span className="rounded-full bg-[#B86F3C] px-2.5 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F6EFE8] shadow-md">
                        {badge}
                      </span>
                    </div>

                    {/* Görsel İçi Başlık Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                      <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#D4895A] transition-all duration-300 lg:group-hover:tracking-[0.32em]">
                        {tag}
                      </p>
                      <span className="mt-1 block font-serif text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight text-[#F6EFE8] drop-shadow-lg transition-colors group-hover:text-[#D4895A]">
                        {step.title}
                      </span>
                    </div>
                  </div>

                  {/* Görsel Altındaki Açıklama */}
                  <p className="mt-3.5 sm:mt-4 px-1.5 pb-1 text-xs sm:text-sm font-normal leading-relaxed text-[#57402E] transition-all duration-300 lg:group-hover:text-base lg:group-hover:text-[#241B14] lg:group-hover:font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Alt Paragraflar ─────────────────────────────────────────────── */}
        <div className="mt-12 space-y-4 text-lg sm:text-xl lg:text-xl leading-relaxed text-[#241B14] max-w-5xl mx-auto text-center">
          {dictionary.howToUsePage.body.map((paragraph) => (
            <p key={paragraph} className="font-serif italic text-[#57402E]/95">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </main>
  );
}
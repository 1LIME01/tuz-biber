import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

const stepData = [
  {
    image: "/images/pisir.png",
    stepNum: "01",
    path: "meals",
    tagTr: "1. Adım • Pişirme",
    tagEn: "Step 1 • Cook",
    badgeTr: "Sıcak Başlangıç",
    badgeEn: "Hot Start",
  },
  {
    image: "/images/tabaga_al.png",
    stepNum: "02",
    path: "sweets",
    tagTr: "2. Adım • Servis",
    tagEn: "Step 2 • Plate",
    badgeTr: "Sunum",
    badgeEn: "Plating",
  },
  {
    image: "/images/serp.png",
    stepNum: "03",
    path: "drinks",
    tagTr: "3. Adım • Serpme",
    tagEn: "Step 3 • Sprinkle",
    badgeTr: "Son Dokunuş",
    badgeEn: "Finishing Touch",
  },
  {
    image: "/images/ye.png",
    stepNum: "04",
    path: "cakes",
    tagTr: "4. Adım • Lezzet",
    tagEn: "Step 4 • Enjoy",
    badgeTr: "Afiyet Olsun",
    badgeEn: "Savour",
  },
];

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function HowToUsePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#EFE6D5] py-16 sm:py-24">
      <Container className="max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.howToUsePage.eyebrow}</p>
          <Heading as="h1" className="heading-hero mt-3 text-[#241B14]">
            {dictionary.howToUsePage.title}
          </Heading>
          <p className="mt-4 font-serif text-lg sm:text-xl font-medium leading-relaxed text-[#57402E] sm:text-2xl">{dictionary.howToUsePage.intro}</p>
        </div>

        {/* 2x2 Eşit Genişlikte Kart Izgarası */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {dictionary.howToUse.steps.map((step, index) => {
            const data = stepData[index] ?? stepData[0];
            const tag = locale === "tr" ? data.tagTr : data.tagEn;
            const badge = locale === "tr" ? data.badgeTr : data.badgeEn;

            return (
              <Link
                key={step.title}
                href={`/${locale}/${data.path}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#241B14]/15 bg-[#F6EFE8] p-5 sm:p-6 shadow-[0_4px_24px_rgba(36,27,20,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B86F3C] hover:shadow-[0_20px_44px_rgba(184,111,60,0.18)]"
              >
                {/* Üst Koyu Renk & Bakır Şerit Detayı */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1C130E] via-[#B86F3C] to-[#1C130E] opacity-90" />

                <div>
                  {/* Görsel Kutusu - 16:10 Oran */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#241B14]/15 bg-[#1C130E] shadow-inner">
                    <img
                      src={data.image}
                      alt={step.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    />
                    {/* Gradient Katmanı */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/95 via-[#1C130E]/30 to-transparent" />

                    {/* Üst Belirgin 01-04 Numarası ve Rozet */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5 sm:p-4">
                      {/* Belirgin Adım Numarası */}
                      <div className="flex items-center gap-1.5 rounded-full border border-[#B86F3C]/60 bg-[#1C130E]/95 px-3.5 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md">
                        <span className="font-serif text-sm sm:text-base font-black tracking-widest text-[#F6EFE8]">
                          {data.stepNum}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4895A]">
                          {locale === "tr" ? "Adım" : "Step"}
                        </span>
                      </div>

                      {/* Rozet */}
                      <span className="rounded-full border border-[#B86F3C]/50 bg-[#B86F3C]/90 px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F6EFE8] backdrop-blur-sm shadow-sm">
                        {badge}
                      </span>
                    </div>

                    {/* Alt Başlık & Adım İsmi */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#D4895A]">
                        {tag}
                      </p>
                      <span className="mt-0.5 block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F6EFE8] drop-shadow-md transition-colors group-hover:text-[#D4895A]">
                        {step.title}
                      </span>
                    </div>
                  </div>

                  {/* Açıklama */}
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-[#57402E]">
                    {step.description}
                  </p>
                </div>

                {/* Alt Aksiyon - Koyu Renk Buton Detayı */}
                <div className="mt-6 flex items-center justify-between border-t border-[#241B14]/15 pt-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#B86F3C]/30 bg-[#1C130E] px-3.5 py-1.5 shadow-sm transition-all duration-300 group-hover:border-[#B86F3C] group-hover:bg-[#241B14]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F6EFE8]">
                      {locale === "tr" ? "Tarifleri Gör" : "Explore recipes"}
                    </span>
                  </div>
                  <span className="text-lg text-[#1C130E] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#B86F3C]">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-[#241B14] sm:text-lg">
          {dictionary.howToUsePage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
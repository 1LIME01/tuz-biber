import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type CraftProcessProps = { dictionary: BrandDictionary };

const stepBadges = [
  { stepNo: "01", sub: "Isı & Karamelizasyon" },
  { stepNo: "02", sub: "Doğal Dinlenme & Denge" },
  { stepNo: "03", sub: "Geleneksel El Dövmesi" },
];

// Uzunluk ve renkleri birbirine bağlayan kart desenleri
const linesPattern = [
  // 1. Kart: [Uzun - Turuncu], [Orta - Orta Kahve], [Kısa - Açık Kahve]
  [
    { width: "w-8", color: "bg-[#B86F3C]" },
    { width: "w-4", color: "bg-[#8C4E22]/60" },
    { width: "w-2", color: "bg-[#8C4E22]/35" },
  ],
  // 2. Kart: [Orta - Orta Kahve], [Uzun - Turuncu], [Kısa - Açık Kahve]
  [
    { width: "w-4", color: "bg-[#8C4E22]/60" },
    { width: "w-8", color: "bg-[#B86F3C]" },
    { width: "w-2", color: "bg-[#8C4E22]/35" },
  ],
  // 3. Kart: [Kısa - Açık Kahve], [Orta - Orta Kahve], [Uzun - Turuncu]
  [
    { width: "w-2", color: "bg-[#8C4E22]/35" },
    { width: "w-4", color: "bg-[#8C4E22]/60" },
    { width: "w-8", color: "bg-[#B86F3C]" },
  ],
];

export function CraftProcess({ dictionary }: CraftProcessProps) {
  return (
    <section className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">
            {dictionary.craftProcess.eyebrow}
          </p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">
            {dictionary.craftProcess.title}
          </Heading>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {dictionary.craftProcess.steps.map((step, index) => {
            const badge = stepBadges[index] ?? stepBadges[0];
            const currentLines = linesPattern[index % linesPattern.length];

            return (
              <article
                key={step.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#B86F3C]/30 bg-[#FBF8F3] p-8 sm:p-9 shadow-[0_8px_30px_rgba(184,111,60,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B86F3C] hover:bg-white hover:shadow-[0_20px_48px_rgba(184,111,60,0.22)]"
              >
                {/* Arka Plan Büyük Sanatsal Numara Filigranı */}
                <span className="pointer-events-none absolute right-4 -top-2 font-serif text-[100px] font-bold leading-none text-[#B86F3C]/8 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-[#B86F3C]/15">
                  {badge.stepNo}
                </span>

                <div className="relative z-10">
                  {/* Üst Tipografik Aşama Başlığı */}
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-extrabold text-[#B86F3C] tracking-tight">
                      {badge.stepNo}
                    </span>
                    <span className="h-4 w-px bg-[#B86F3C]/40" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8C4E22]">
                      {badge.sub}
                    </span>
                  </div>

                  {/* Şekillendirilmiş Ana Başlık (Kavur, Soğut, Döv) */}
                  <div className="mt-6">
                    <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C130E] transition-colors duration-200 group-hover:text-[#8C4E22]">
                      {step.title.replace(/^\d+\.\s*/, "")}
                    </h3>

                    {/* Renk ve Uzunluk Uyumlu Dinamik Çizgiler */}
                    <div className="mt-3.5 flex items-center gap-1.5">
                      {currentLines.map((line, lIdx) => (
                        <span
                          key={lIdx}
                          className={`h-1 ${line.width} ${line.color} rounded-full transition-colors duration-300`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Açıklama */}
                  <p className="mt-5 text-sm leading-relaxed text-[#57402E] font-medium sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>

                {/* Alt Detay Şeridi */}
                <div className="relative z-10 mt-8 border-t border-[#B86F3C]/15 pt-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8C4E22]">
                    <span>Geleneksel Rutin</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
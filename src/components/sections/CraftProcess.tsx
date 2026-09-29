import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Sparkles } from "lucide-react";
import type { BrandDictionary } from "@/types";

type CraftProcessProps = { dictionary: BrandDictionary };

const stepBadges = [
  { stepNo: "01", sub: "Isı & Karamelizasyon" },
  { stepNo: "02", sub: "Doğal Dinlenme & Denge" },
  { stepNo: "03", sub: "Geleneksel El Dövmesi" },
];

export function CraftProcess({ dictionary }: CraftProcessProps) {
  return (
    <section className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.craftProcess.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.craftProcess.title}</Heading>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {dictionary.craftProcess.steps.map((step, index) => {
            const badge = stepBadges[index] ?? stepBadges[0];

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
                    {/* Estetik İki Renkli Vurgu Çizgisi */}
                    <div className="mt-3.5 flex items-center gap-1.5">
                      <span className="h-1 w-8 rounded-full bg-[#B86F3C]" />
                      <span className="h-1 w-2 rounded-full bg-[#8C4E22]/50" />
                      <span className="h-1 w-1 rounded-full bg-[#8C4E22]/30" />
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
                    <span>Geleneksel Ritüel</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
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


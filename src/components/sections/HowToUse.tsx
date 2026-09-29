import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Flame, Sparkles, Utensils, Heart } from "lucide-react";
import type { BrandDictionary, Locale } from "@/types";

type HowToUseProps = { dictionary: BrandDictionary; lang?: Locale };

const stepData = [
  {
    image: "/images/pisir.png",
    stepNum: "01",
    tagTr: "1. Adım",
    tagEn: "Step 1",
    badgeTr: "Pişirme",
    badgeEn: "Cook",
    icon: Flame,
  },
  {
    image: "/images/tabaga_al.png",
    stepNum: "02",
    tagTr: "2. Adım",
    tagEn: "Step 2",
    badgeTr: "Servis",
    badgeEn: "Plating",
    icon: Utensils,
  },
  {
    image: "/images/serp.png",
    stepNum: "03",
    tagTr: "3. Adım",
    tagEn: "Step 3",
    badgeTr: "Son Dokunuş",
    badgeEn: "Finishing Touch",
    icon: Sparkles,
  },
  {
    image: "/images/ye.png",
    stepNum: "04",
    tagTr: "4. Adım",
    tagEn: "Step 4",
    badgeTr: "Afiyet Olsun",
    badgeEn: "Enjoy",
    icon: Heart,
  },
];

export function HowToUse({ dictionary, lang = "tr" }: HowToUseProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6EFE8] via-[#EFE6D5] to-[#F6EFE8] py-20 sm:py-28">
      <Container className="max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">
            {dictionary.howToUse.eyebrow}
          </p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.howToUse.title}</Heading>
        </div>

        {/* 2x2 Eşit Genişlikte Kart Izgarası */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {dictionary.howToUse.steps.map((step, index) => {
            const data = stepData[index] ?? stepData[0];
            const Icon = data.icon;
            const tag = lang === "tr" ? data.tagTr : data.tagEn;
            const badge = lang === "tr" ? data.badgeTr : data.badgeEn;

            return (
              <article
                key={step.title}
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
                          {lang === "tr" ? "Adım" : "Step"}
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

                {/* Alt Koyu Renk Buton Detayı */}
                <div className="mt-6 flex items-center justify-between border-t border-[#241B14]/15 pt-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#B86F3C]/30 bg-[#1C130E] px-3.5 py-1.5 shadow-sm transition-all duration-300 group-hover:border-[#B86F3C] group-hover:bg-[#241B14]">
                    <Icon className="h-3.5 w-3.5 text-[#D4895A] transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F6EFE8]">{step.title}</span>
                  </div>
                  <div className="h-1.5 w-14 rounded-full bg-[#1C130E]/15 overflow-hidden">
                    <div className="h-full w-full bg-[#1C130E] transition-transform duration-500 origin-left scale-x-50 group-hover:scale-x-100 group-hover:bg-[#B86F3C]" />
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



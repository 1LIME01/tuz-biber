import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary, Locale } from "@/types";

type ProductMacroProps = { dictionary: BrandDictionary; lang?: Locale };

export function ProductMacro({ dictionary, lang = "tr" }: ProductMacroProps) {
  return (
    <section className="bg-[#241B14] py-20 text-[#EFE6D5] sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.productMacro.label}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#EFE6D5]">{dictionary.productMacro.title}</Heading>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#EFE6D5]/80 sm:text-lg">{dictionary.productMacro.copy}</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {dictionary.productMacro.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[#EFE6D5]/15 bg-[#F6EFE8]/5 p-5">
                <div className="font-serif text-3xl font-bold text-[#EFE6D5]">{stat.value}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B86F3C]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="group rounded-3xl border border-[#B86F3C]/35 bg-[#241B14] p-3 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1C130E] p-6 sm:p-8 flex flex-col justify-between text-[#EFE6D5]">
            <img
              src="/images/home2.png"
              alt={lang === "tr" ? "Trakya Tarifi Zanaatkar Bitiş Harmanı" : "Thrace Recipe Artisanal Finishing Blend"}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/95 via-black/25 to-black/35" />
            
            <div className="relative z-10 flex items-center justify-between">
              {/* <span className="inline-flex rounded-full border border-white/25 bg-black/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#F6EFE8] backdrop-blur-md shadow-sm">
                {lang === "tr" ? "Küçük Parti Üretim" : "Small Batch Process"}
              </span> */}
            </div>

            <div className="relative z-10 border-t border-white/15 pt-5 backdrop-blur-[2px]">
              <p className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F6EFE8]">
                {lang === "tr" ? "Trakya Tarifi" : "Thrace Recipe"}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4895A]">
                {lang === "tr" ? "Zanaatkar Bitiş Harmanı" : "Artisanal Finishing Blend"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


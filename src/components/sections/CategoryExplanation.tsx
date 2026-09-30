import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary, Locale } from "@/types";

type CategoryExplanationProps = { dictionary: BrandDictionary; lang?: Locale };

export function CategoryExplanation({ dictionary, lang = "tr" }: CategoryExplanationProps) {
  return (
    <section className="bg-[#F6EFE8] py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="group rounded-3xl border border-[#B86F3C]/35 bg-[#241B14] p-3 sm:p-4 shadow-[0_24px_60px_rgba(36,27,20,0.22)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1C130E] p-6 sm:p-8 flex flex-col justify-between text-[#EFE6D5]">
            <img
              src="/images/home4.png"
              alt="Tuz Biber Finishing Seasoning"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/95 via-black/20 to-black/35" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex rounded-full border border-white/25 bg-black/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#F6EFE8] backdrop-blur-md shadow-sm">
                {lang === "tr" ? "Sofra Rutini" : "Table Rutine"}
              </span>
            </div>

            <div className="relative z-10 border-t border-white/15 pt-5 backdrop-blur-[2px]">
              <p className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F6EFE8]">Tuz Biber</p>
              <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4895A]">
                {lang === "tr" ? "Bitiş Baharatı" : "Finishing Seasoning"}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.category.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.category.title}</Heading>
          <p className="mt-6 text-base leading-relaxed text-[#57402E] sm:text-lg">{dictionary.category.description}</p>
          <ul className="mt-8 space-y-4">
            {dictionary.category.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3.5 text-[#241B14]">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B86F3C] text-xs font-bold text-[#F6EFE8]">✓</span>
                <span className="text-base leading-relaxed text-[#241B14]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}


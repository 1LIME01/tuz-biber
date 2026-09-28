import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type CulturalComparisonProps = { dictionary: BrandDictionary };

export function CulturalComparison({ dictionary }: CulturalComparisonProps) {
  return (
    <section className="bg-[#241B14] py-20 text-[#EFE6D5] sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.cultural.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#EFE6D5]">{dictionary.cultural.title}</Heading>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dictionary.cultural.items.map((item) => (
            <article key={item.name} className="rounded-xl border border-[#EFE6D5]/15 bg-[#F6EFE8]/5 p-6 transition-colors duration-200 hover:border-[#B86F3C]/40">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B86F3C]">{item.origin}</div>
              <h3 className="mt-3 font-serif text-2xl font-bold text-[#EFE6D5]">{item.name}</h3>
              <p className="mt-3 text-xs leading-relaxed text-[#EFE6D5]/75">{item.vibe}</p>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}


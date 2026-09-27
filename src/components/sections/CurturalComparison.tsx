import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type CulturalComparisonProps = { dictionary: BrandDictionary };

export function CulturalComparison({ dictionary }: CulturalComparisonProps) {
  return (
    <section className="bg-[#241B14] py-16 text-[#F6EFE8] sm:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.cultural.eyebrow}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#F6EFE8] sm:text-4xl">{dictionary.cultural.title}</Heading>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.cultural.items.map((item) => (
            <article key={item.name} className="rounded-[1.5rem] border border-[#EFE6D5]/10 bg-[#F6EFE8]/5 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-[#B86F3C]">{item.origin}</div>
              <h3 className="mt-4 text-2xl font-semibold text-[#F6EFE8]">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[#EFE6D5]/80">{item.vibe}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

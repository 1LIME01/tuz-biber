import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type IngredientsProps = { dictionary: BrandDictionary };

export function Ingredients({ dictionary }: IngredientsProps) {
  return (
    <section className="bg-[#F6EFE8] py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.ingredients.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.ingredients.title}</Heading>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {dictionary.ingredients.items.map((item, index) => (
            <article key={item.name} className="rounded-xl border border-[#241B14]/12 bg-[#EFE6D5] p-6 shadow-[0_8px_24px_rgba(36,27,20,0.03)] transition-colors duration-200 hover:border-[#B86F3C]/40">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#B86F3C] font-serif text-xs font-bold text-[#F6EFE8]">0{index + 1}</div>
              <h3 className="font-serif text-lg font-bold text-[#241B14]">{item.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#57402E]">{item.note}</p>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}


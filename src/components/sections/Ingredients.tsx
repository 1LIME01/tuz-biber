import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type IngredientsProps = { dictionary: BrandDictionary };

export function Ingredients({ dictionary }: IngredientsProps) {
  return (
    <section className="bg-[#F6EFE8] py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.ingredients.eyebrow}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#241B14] sm:text-4xl">{dictionary.ingredients.title}</Heading>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {dictionary.ingredients.items.map((item) => (
            <article key={item.name} className="rounded-[1.5rem] border border-[#241B14]/10 bg-[#EFE6D5] p-5">
              <div className="mb-4 h-14 w-14 rounded-full bg-[radial-gradient(circle_at_center,_#F6EFE8_0%,_#EFE6D5_32%,_#B86F3C_100%)]" />
              <h3 className="text-lg font-semibold text-[#241B14]">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#57402E]">{item.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

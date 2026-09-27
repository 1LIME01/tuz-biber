import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type ServingIdeasProps = { dictionary: BrandDictionary };

export function ServingIdeas({ dictionary }: ServingIdeasProps) {
  return (
    <section className="bg-[#EFE6D5] py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.servingIdeas.eyebrow}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#241B14] sm:text-4xl">{dictionary.servingIdeas.title}</Heading>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.servingIdeas.items.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-[#241B14]/10 bg-[#F6EFE8] p-6 shadow-[0_14px_30px_rgba(36,27,20,0.06)]">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#B86F3C]" />
              <h3 className="text-xl font-semibold text-[#241B14]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#57402E]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

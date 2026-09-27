import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type HowToUseProps = { dictionary: BrandDictionary };

export function HowToUse({ dictionary }: HowToUseProps) {
  return (
    <section className="bg-[#F6EFE8] py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.howToUse.eyebrow}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#241B14] sm:text-4xl">{dictionary.howToUse.title}</Heading>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dictionary.howToUse.steps.map((step) => (
            <article key={step.title} className="rounded-[1.5rem] border border-[#241B14]/10 bg-[#EFE6D5] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86F3C]">{step.title}</div>
              <p className="mt-4 text-base leading-7 text-[#57402E]">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

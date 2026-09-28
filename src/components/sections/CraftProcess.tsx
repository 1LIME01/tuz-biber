import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type CraftProcessProps = { dictionary: BrandDictionary };

export function CraftProcess({ dictionary }: CraftProcessProps) {
  return (
    <section className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.craftProcess.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.craftProcess.title}</Heading>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {dictionary.craftProcess.steps.map((step) => (
            <article key={step.title} className="rounded-xl border border-[#241B14]/12 bg-[#F6EFE8] p-7 shadow-[0_8px_24px_rgba(36,27,20,0.03)] transition-colors duration-200 hover:border-[#B86F3C]/40">
              <div className="font-serif text-sm font-bold uppercase tracking-wider text-[#B86F3C]">{step.title}</div>
              <p className="mt-4 text-sm leading-relaxed text-[#57402E]">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


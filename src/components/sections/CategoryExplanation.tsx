import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type CategoryExplanationProps = { dictionary: BrandDictionary };

export function CategoryExplanation({ dictionary }: CategoryExplanationProps) {
  return (
    <section className="bg-[#F6EFE8] py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-2xl border border-[#241B14]/12 bg-[#EFE6D5] p-8 shadow-[0_12px_32px_rgba(36,27,20,0.04)]">
          <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(135deg,_#241B14_0%,_#57402E_100%)] p-6 flex flex-col justify-end text-[#EFE6D5]">
            <p className="font-serif text-3xl font-bold">Tuz Biber</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#B86F3C]">Finishing Seasoning</p>
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


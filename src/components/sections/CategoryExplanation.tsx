import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type CategoryExplanationProps = { dictionary: BrandDictionary };

export function CategoryExplanation({ dictionary }: CategoryExplanationProps) {
  return (
    <section className="bg-[#F6EFE8] py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] border border-[#241B14]/10 bg-[#EFE6D5] p-8">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(184,111,60,0.3),_rgba(36,27,20,0.9)),_radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_rgba(0,0,0,0)_30%)]" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.category.eyebrow}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#241B14] sm:text-4xl">{dictionary.category.title}</Heading>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#57402E]">{dictionary.category.description}</p>
          <ul className="mt-8 space-y-4">
            {dictionary.category.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[#241B14]">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#B86F3C] text-xs text-[#F6EFE8]">✓</span>
                <span className="text-base leading-7">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

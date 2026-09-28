import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type FounderStoryProps = { dictionary: BrandDictionary };

export function FounderStory({ dictionary }: FounderStoryProps) {
  return (
    <section className="bg-[#F6EFE8] py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="rounded-2xl border border-[#241B14]/12 bg-[#EFE6D5] p-8 shadow-[0_12px_32px_rgba(36,27,20,0.04)]">
          <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(135deg,_#57402E_0%,_#241B14_100%)] p-6 flex flex-col justify-end text-[#EFE6D5]">
            <p className="font-serif text-2xl font-bold">Thrace Heritage</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#B86F3C]">Handcrafted Tradition</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.founderStory.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.founderStory.title}</Heading>
          {dictionary.founderStory.body.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl text-base leading-relaxed text-[#57402E] sm:text-lg">{paragraph}</p>
          ))}
          <blockquote className="mt-8 border-l-2 border-[#B86F3C] pl-5 font-serif text-xl italic leading-relaxed text-[#241B14]">{dictionary.founderStory.quote}</blockquote>
        </div>
      </Container>
    </section>
  );
}


import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type FounderStoryProps = { dictionary: BrandDictionary };

export function FounderStory({ dictionary }: FounderStoryProps) {
  return (
    <section className="bg-[#F6EFE8] py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[2rem] border border-[#241B14]/10 bg-[linear-gradient(135deg,_#EFE6D5_0%,_#B86F3C_100%)] p-8">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,_rgba(246,239,232,0.7),_rgba(36,27,20,0)_20%),linear-gradient(135deg,_#57402E_0%,_#241B14_100%)]" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.founderStory.eyebrow}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#241B14] sm:text-4xl">{dictionary.founderStory.title}</Heading>
          {dictionary.founderStory.body.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl text-lg leading-8 text-[#57402E]">{paragraph}</p>
          ))}
          <blockquote className="mt-8 border-l-2 border-[#B86F3C] pl-4 text-xl italic text-[#241B14]">{dictionary.founderStory.quote}</blockquote>
        </div>
      </Container>
    </section>
  );
}

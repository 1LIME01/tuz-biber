import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type ProductMacroProps = { dictionary: BrandDictionary };

export function ProductMacro({ dictionary }: ProductMacroProps) {
  return (
    <section className="bg-[#241B14] py-20 text-[#EFE6D5] sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.productMacro.label}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#EFE6D5]">{dictionary.productMacro.title}</Heading>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#EFE6D5]/80 sm:text-lg">{dictionary.productMacro.copy}</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {dictionary.productMacro.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[#EFE6D5]/15 bg-[#F6EFE8]/5 p-5">
                <div className="font-serif text-3xl font-bold text-[#EFE6D5]">{stat.value}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B86F3C]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#EFE6D5]/15 bg-[#EFE6D5] p-8 text-[#241B14] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(135deg,_#57402E_0%,_#241B14_100%)] p-6 flex flex-col justify-between text-[#EFE6D5]">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B86F3C]">Small Batch Process</span>
            <div>
              <p className="font-serif text-3xl font-bold">Thrace Recipe</p>
              <p className="mt-2 text-xs text-[#EFE6D5]/70">Artisanal Finishing Blend</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


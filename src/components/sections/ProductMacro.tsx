import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary } from "@/types";

type ProductMacroProps = { dictionary: BrandDictionary };

export function ProductMacro({ dictionary }: ProductMacroProps) {
  return (
    <section className="bg-[#241B14] py-16 text-[#F6EFE8] sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.productMacro.label}</p>
          <Heading as="h2" className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#F6EFE8] sm:text-4xl">{dictionary.productMacro.title}</Heading>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#EFE6D5]/85">{dictionary.productMacro.copy}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {dictionary.productMacro.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#EFE6D5]/10 bg-[#F6EFE8]/5 p-4">
                <div className="text-3xl font-semibold text-[#EFE6D5]">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#EFE6D5]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#EFE6D5]/10 bg-[linear-gradient(135deg,_rgba(184,111,60,0.34),_rgba(36,27,20,0.96)_55%)] p-8">
          <div className="aspect-[4/5] rounded-[1.5rem] border border-[#EFE6D5]/15 bg-[radial-gradient(circle_at_20%_25%,_rgba(246,239,232,0.46),_rgba(246,239,232,0)_22%),radial-gradient(circle_at_75%_30%,_rgba(184,111,60,0.5),_rgba(36,27,20,0)_35%),linear-gradient(135deg,_#EFE6D5_0%,_#B86F3C_30%,_#241B14_100%)]" />
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import type { BrandDictionary } from "@/types";

type TrustStripProps = {
  dictionary: BrandDictionary;
};

export function TrustStrip({ dictionary }: TrustStripProps) {
  return (
    <section className="bg-[#241B14] py-6 text-[#EFE6D5]">
      <Container>
        <div className="grid gap-3 rounded-xl border border-[#B86F3C]/20 bg-[#F6EFE8]/5 px-4 py-4 sm:grid-cols-2 lg:grid-cols-5">
          {dictionary.trustStrip.items.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2.5 rounded-lg border border-[#B86F3C]/15 bg-[#241B14]/40 px-3 py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#EFE6D5]/90">
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#B86F3C] text-[10px] font-bold text-[#F6EFE8]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


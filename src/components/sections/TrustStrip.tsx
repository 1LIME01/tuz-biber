import { Container } from "@/components/ui/Container";
import type { BrandDictionary } from "@/types";

type TrustStripProps = {
  dictionary: BrandDictionary;
};

export function TrustStrip({ dictionary }: TrustStripProps) {
  return (
    <section className="bg-[#241B14] py-4">
      <Container>
        <div className="grid gap-3 rounded-[1.5rem] border border-[rgba(184,111,60,0.18)] bg-[rgba(255,255,255,0.02)] px-3 py-4 sm:grid-cols-2 lg:grid-cols-5">
          {dictionary.trustStrip.items.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 rounded-full border border-[rgba(184,111,60,0.14)] bg-[rgba(239,230,213,0.03)] px-3 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-[#DCD3C1]">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#B86F3C] text-[10px] text-[#F6EFE8]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

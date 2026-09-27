import type { BrandDictionary } from "@/types";

export function CTA({ dictionary }: { dictionary: BrandDictionary }) {
  return (
    <section className="bg-[#241B14] py-16 text-[#F6EFE8] sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#EFE6D5]/10 bg-[linear-gradient(135deg,_rgba(184,111,60,0.18),_rgba(36,27,20,0.98))] p-8 text-center lg:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B86F3C]">Tuz Biber</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#F6EFE8] sm:text-5xl">{dictionary.hero.ctaPrimary}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#EFE6D5]/85">{dictionary.waitlist.description}</p>
        </div>
      </div>
    </section>
  );
}

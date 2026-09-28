import type { BrandDictionary } from "@/types";

export function CTA({ dictionary }: { dictionary: BrandDictionary }) {
  return (
    <section className="bg-[#241B14] py-20 text-[#EFE6D5] sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-[#EFE6D5]/15 bg-[#F6EFE8]/5 p-8 text-center sm:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">Tuz Biber</p>
          <h2 className="heading-section mt-4 text-[#EFE6D5]">{dictionary.hero.ctaPrimary}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#EFE6D5]/80 sm:text-lg">{dictionary.waitlist.description}</p>
        </div>
      </div>
    </section>
  );
}


import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { BrandDictionary, Locale } from "@/types";

type ProductMacroProps = { dictionary: BrandDictionary; lang?: Locale };

export function ProductMacro({ dictionary, lang = "tr" }: ProductMacroProps) {
  return (
    <section className="bg-[#241B14] py-16 sm:py-24 lg:py-28 text-[#EFE6D5]">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        {/* ── Sol Taraf: Tam Dolgun ve Sağdaki Görselle Hizalanmış Blok ── */}
        <div className="flex flex-col justify-between h-full py-1 space-y-8 lg:space-y-0">
          {/* 1. Üst Başlık & Açıklama */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">
              {dictionary.productMacro.label}
            </p>
            <Heading as="h2" className="heading-section mt-2.5 text-[#EFE6D5]">
              {dictionary.productMacro.title}
            </Heading>
            <p className="mt-3.5 max-w-xl text-sm sm:text-base leading-relaxed text-[#EFE6D5]/80">
              {dictionary.productMacro.copy}
            </p>
          </div>

          {/* 2. İstatistik Kutuları */}
          <div className="grid gap-4 grid-cols-3">
            {dictionary.productMacro.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#EFE6D5]/15 bg-[#F6EFE8]/5 p-4 sm:p-5 text-center sm:text-left"
              >
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#EFE6D5]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B86F3C]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 3. Malzeme Kartları (3+2 Dengeli Grid Yapısı) */}
          <div className="space-y-3.5">
            
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B86F3C]">
              {lang === "tr" ? "MALZEMELER" : "INGREDIENTS"}
            </p>

            <div className="grid gap-3 grid-cols-2 sm:grid-cols-6">
              {dictionary.ingredients.items.map((item, index) => {
                // İlk 3 eleman 2 sütun (toplam 6), son 2 eleman 3 sütun (toplam 6) kaplayarak 3+2 simetri oluşturur
                const gridSpanClass =
                  index < 3 ? "sm:col-span-2" : "sm:col-span-3";

                return (
                  <article
                    key={item.name}
                    className={`group relative flex flex-col items-center justify-between text-center min-h-[105px] rounded-2xl border border-[#EFE6D5]/15 bg-[#F6EFE8]/5 p-4 transition-all duration-300 hover:border-[#B86F3C] hover:bg-[#F6EFE8]/10 ${gridSpanClass}`}
                  >
                    {/* Numara (Üstte Ortalanmış) */}
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#8C4E22] to-[#B86F3C] font-serif text-[10px] font-bold text-[#F6EFE8] shadow-sm">
                      0{index + 1}
                    </div>

                    {/* Başlık (Altta Ortalanmış) */}
                    <h3 className="mt-auto pt-2 font-serif text-xs sm:text-sm font-bold leading-snug text-[#F6EFE8] transition-colors group-hover:text-[#D4895A]">
                      {item.name}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Sağ Taraf: Orijinal Boyutunda Görsel Kartı (Aspect 4/5) ── */}
        <div className="group rounded-3xl border border-[#B86F3C]/35 bg-[#241B14] p-3 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1C130E] p-6 sm:p-8 flex flex-col justify-between text-[#EFE6D5]">
            <img
              src="/images/home2.png"
              alt={
                lang === "tr"
                  ? "Trakya Tarifi Zanaatkar Bitiş Harmanı"
                  : "Thrace Recipe Artisanal Finishing Blend"
              }
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/95 via-black/25 to-black/35" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex rounded-full border border-white/25 bg-black/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#F6EFE8] backdrop-blur-md shadow-sm">
                {lang === "tr" ? "Küçük Parti Üretim" : "Small Batch Process"}
              </span>
            </div>

            <div className="relative z-10 border-t border-white/15 pt-4 backdrop-blur-[2px]">
              <p className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#F6EFE8]">
                {lang === "tr" ? "Trakya Tarifi" : "Thrace Recipe"}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4895A]">
                {lang === "tr"
                  ? "Zanaatkar Bitiş Harmanı"
                  : "Artisanal Finishing Blend"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

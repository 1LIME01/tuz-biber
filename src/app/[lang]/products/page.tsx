import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

const products = [
  {
    href: "sweets",
    titleTr: "Tatlılar",
    titleEn: "Sweets",
    tagTr: "Tatlı & Çikolata",
    tagEn: "Sweets & Desserts",
    descriptionTr: "Tatlı lezzetlere, çikolataya ve meyvelere sıcak, tatlı ve hafif baharatlı zarif dokunuş.",
    descriptionEn: "Warm, sweet finishes with a savory edge for desserts, fruits and morning pastries.",
    image: "/images/sweet.png",
    badgeTr: "Tatlı Dokunuş",
    badgeEn: "Sweet Finish",
  },
  {
    href: "cakes",
    titleTr: "Pastalar & Kekler",
    titleEn: "Cakes & Bakes",
    tagTr: "Fırın & Hamurişi",
    tagEn: "Bakery & Bakes",
    descriptionTr: "Kekler, tartlar ve fırın sofraları için fırından çıkar çıkmaz eşsiz bir uyum.",
    descriptionEn: "Ready for tables, celebrations and slow morning bakes fresh from the oven.",
    image: "/images/cake.png",
    badgeTr: "Fırın İmzası",
    badgeEn: "Bakery Touch",
  },
  {
    href: "drinks",
    titleTr: "İçecekler",
    titleEn: "Drinks",
    tagTr: "Kahve & Kokteyl",
    tagEn: "Coffee & Cocktails",
    descriptionTr: "Kahveler, sıcak içecekler ve özel sunumlar için aromatik eşleşmeler ve rutinler.",
    descriptionEn: "Pairings built for aromatic coffee rutines, hot beverages and artisanal sips.",
    image: "/images/drink.png",
    badgeTr: "Aromatik Rutin",
    badgeEn: "Aroma Pairing",
  },
  {
    href: "meals",
    titleTr: "Yemekler & Tabaklar",
    titleEn: "Meals & Plates",
    tagTr: "Sıcak Tabaklar",
    tagEn: "Warm Plates",
    descriptionTr: "Her tabağa, ızgaralara ve ziyafet sofralarına zenginlik katan karakteristik son vuruş.",
    descriptionEn: "The distinctive final note for every plate, roasted savory dishes and gatherings.",
    image: "/images/meal.png",
    badgeTr: "Sofra Rutini",
    badgeEn: "Table Rutine",
  },
];

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#EFE6D5] py-16 sm:py-24">
      <Container className="max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.hero.eyebrow}</p>
          <Heading as="h1" className="heading-hero mt-3 text-[#241B14]">
            {locale === "tr" ? "Tüm Ürünler" : "All Products"}
          </Heading>
          <p className="mt-4 font-serif text-lg sm:text-xl font-medium leading-relaxed text-[#57402E]">
            {locale === "tr"
              ? "Tuz Biber’in sıcak, kontrollü ve sofraya özel ürün ailesi."
              : "The Tuz Biber collection blends warmth, texture and finishing precision for the table."}
          </p>
        </div>

        {/* 2x2 Eşit Genişlikte Kart Izgarası */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {products.map((product) => {
            const title = locale === "tr" ? product.titleTr : product.titleEn;
            const tag = locale === "tr" ? product.tagTr : product.tagEn;
            const badge = locale === "tr" ? product.badgeTr : product.badgeEn;
            const description = locale === "tr" ? product.descriptionTr : product.descriptionEn;

            return (
              <Link
                key={product.href}
                href={`/${locale}/${product.href}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#241B14]/15 bg-[#F6EFE8] p-5 sm:p-6 shadow-[0_4px_24px_rgba(36,27,20,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B86F3C] hover:shadow-[0_20px_44px_rgba(184,111,60,0.18)]"
              >
                <div>
                  {/* Görsel Kutusu - Eşit 16:10 Oran */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#241B14]/10 bg-[#1C130E] shadow-inner">
                    <img
                      src={product.image}
                      alt={title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    />
                    {/* Gradient Katmanı */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/90 via-[#1C130E]/25 to-transparent" />

                    {/* Üst Rozetler */}
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5 sm:p-4">
                      <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1 font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-[#EFE6D5] backdrop-blur-md">
                        Tuz Biber
                      </span>
                      <span className="rounded-full border border-[#B86F3C]/50 bg-[#B86F3C]/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#F6EFE8] backdrop-blur-sm shadow-sm">
                        {badge}
                      </span>
                    </div>

                    {/* Alt Başlık & Kategori İsmi */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#D4895A]">
                        {tag}
                      </p>
                      <span className="mt-0.5 block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F6EFE8] drop-shadow-sm transition-colors group-hover:text-[#D4895A]">
                        {title}
                      </span>
                    </div>
                  </div>

                  {/* Açıklama */}
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-[#57402E]">
                    {description}
                  </p>
                </div>

                {/* Alt Aksiyon */}
                <div className="mt-6 flex items-center justify-between border-t border-[#241B14]/10 pt-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8C4E22] transition-colors group-hover:text-[#B86F3C]">
                  <span>{locale === "tr" ? "Koleksiyonu İncele" : "Explore Category"}</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </main>
  );
}



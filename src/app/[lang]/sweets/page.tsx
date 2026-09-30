import { Coffee, Star, Sunrise, Utensils } from "lucide-react";
import { ProductCategoryPage } from "@/components/sections/ProductCategoryPage";
import { getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function SweetsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const tr = locale === "tr";

  return (
    <ProductCategoryPage
      locale={locale}
      eyebrow={tr ? "Yumuşak son dokunuş" : "Sweet final touch"}
      title={tr ? "Tatlılar" : "Sweets"}
      intro={
        tr
          ? "Sıcak, hafif tatlı ve baharatlı bir son nota için tasarlanmıştır; kahve, tatlı hamur işleri ve kahvaltı masalarında derinlik katar."
          : "Designed for warm, lightly sweet finishing notes that bring depth to coffee, pastries and slow morning tables."
      }
      heroChips={
        tr
          ? ["Pişirme sonrası", "El yapımı", "Sofra rutini"]
          : ["Post-cook", "Handcrafted", "Table rutine"]
      }
      spotlightSteps={
        tr
          ? [
              { title: "Sabah ışığı", description: "Kahvaltı masasında peynir ve ekmek üzerinde yumuşak, kavrulmuş bir derinlik." },
              { title: "Kahve anı", description: "Türk kahvesi veya filtre kahve eşliğinde aromatik, hafif baharatlı bir kapanış." },
              { title: "Tatlı final", description: "Hamur işleri ve şerbetli tatlılarda piştikten sonra serpilerek katmanlı lezzet." },
            ]
          : [
              { title: "Morning light", description: "A roasted depth over cheese and bread at a slow breakfast table." },
              { title: "Coffee moment", description: "An aromatic, gently spiced close beside Turkish or filter coffee." },
              { title: "Sweet finish", description: "Layered flavor when dusted after baking on pastries and syrupy sweets." },
            ]
      }
      pairings={[
        { icon: Coffee, label: tr ? "Türk Kahvesi" : "Turkish Coffee", note: tr ? "Üstüne serpin" : "Dust on top" },
        { icon: Sunrise, label: tr ? "Sabah Kahvaltısı" : "Slow Breakfast", note: tr ? "Beyaz peynir ile" : "With white cheese" },
        { icon: Star, label: tr ? "Tatlı Hamur İşleri" : "Sweet Pastries", note: tr ? "Piştikten sonra" : "After baking" },
        { icon: Utensils, label: tr ? "Şerbetli Tatlılar" : "Syrupy Sweets", note: tr ? "Son dokunuş" : "Final touch" },
      ]}
      usageTip={
        tr
          ? "Servis tabağına yerleştirdikten sonra, birkaç tutam Tuz Biber serpin. Yemek masasındaki son rutininiz olsun."
          : "After plating, dust a generous pinch of Tuz Biber. Let it be your final table rutine."
      }
      relatedCategories={[
        { href: `/${locale}/cakes`, title: tr ? "Pastalar" : "Cakes" },
        { href: `/${locale}/drinks`, title: tr ? "İçecekler" : "Drinks" },
        { href: `/${locale}/meals`, title: tr ? "Yemekler" : "Meals" },
      ]}
    />
  );
}

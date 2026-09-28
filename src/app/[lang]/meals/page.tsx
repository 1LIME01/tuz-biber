import { Beef, Egg, Salad, UtensilsCrossed } from "lucide-react";
import { ProductCategoryPage } from "@/components/sections/ProductCategoryPage";
import { getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function MealsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const tr = locale === "tr";

  return (
    <ProductCategoryPage
      locale={locale}
      eyebrow={tr ? "Sofra sonu" : "Final touch"}
      title={tr ? "Yemekler" : "Meals"}
      intro={
        tr
          ? "Ana yemeklerin öncesinde ya da sonrasında eklenerek tabağın karakterini değiştirir; sıcaklık, tuzluluk ve kısa ama güçlü baharatlı bir an oluşturur."
          : "A final flourish for main dishes, adding warmth, salinity and a quick punch of savory complexity right before serving."
      }
      heroChips={
        tr
          ? ["Pişirme sonrası", "El yapımı", "Sofra ritüeli"]
          : ["Post-cook", "Handcrafted", "Table ritual"]
      }
      spotlightSteps={
        tr
          ? [
              { title: "Ana yemek", description: "Izgara et, balık ve sebze tabaklarında pişirme sonrası son baharat katmanı." },
              { title: "Kahvaltı tabağı", description: "Yumurta, peynir ve ekmek üzerinde Trakya’dan gelen sıcak, tokluklu doku." },
              { title: "Paylaşılan sofra", description: "Ortaya konan mezelerde herkes kendi dilimine son dokunuşu ekler." },
            ]
          : [
              { title: "Main course", description: "A post-cook finishing layer on grilled meats, fish and vegetable plates." },
              { title: "Breakfast plate", description: "Warm, textured depth over eggs, cheese and bread from Thrace tradition." },
              { title: "Shared table", description: "On shared mezze, each guest adds their own final touch." },
            ]
      }
      pairings={[
        { icon: Egg, label: tr ? "Yumurta" : "Eggs", note: tr ? "Sahan ve omlet" : "Pan and omelette" },
        { icon: Beef, label: tr ? "Izgara Et" : "Grilled Meat", note: tr ? "Dinlendirdikten sonra" : "After resting" },
        { icon: Salad, label: tr ? "Fırın Sebze" : "Roasted Vegetables", note: tr ? "Sıcakken serp" : "Dust while hot" },
        { icon: UtensilsCrossed, label: tr ? "Meze Tabağı" : "Mezze Plate", note: tr ? "Ortaya son dokunuş" : "Finish at the table" },
      ]}
      usageTip={
        tr
          ? "Yemek tabağa alındıktan sonra, servis etmeden hemen önce serpin. Isı aromayı açar, tuzluluk dengeyi tamamlar."
          : "Dust after plating and just before serving. Heat opens the aroma; salinity completes the balance."
      }
      relatedCategories={[
        { href: `/${locale}/sweets`, title: tr ? "Tatlılar" : "Sweets" },
        { href: `/${locale}/drinks`, title: tr ? "İçecekler" : "Drinks" },
        { href: `/${locale}/cakes`, title: tr ? "Pastalar" : "Cakes" },
      ]}
    />
  );
}

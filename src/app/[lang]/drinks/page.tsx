import { Coffee, CupSoda, Leaf, Wine } from "lucide-react";
import { ProductCategoryPage } from "@/components/sections/ProductCategoryPage";
import { getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function DrinksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const tr = locale === "tr";

  return (
    <ProductCategoryPage
      locale={locale}
      eyebrow={tr ? "Tatlı ve baharatlı eşlik" : "Pairing ritual"}
      title={tr ? "İçecekler" : "Drinks"}
      intro={
        tr
          ? "Kahve, çay ve hafif içeceklerin üstüne serpilerek aroma ve doku katmanları oluşturur; her yudumda daha anlamlı bir sofra hissi verir."
          : "A finishing note for coffee, tea and gentle drinks — adding aroma, texture and a more memorable table moment in every sip."
      }
      heroChips={
        tr
          ? ["Pişirme sonrası", "El yapımı", "Sofra ritüeli"]
          : ["Post-cook", "Handcrafted", "Table ritual"]
      }
      spotlightSteps={
        tr
          ? [
              { title: "Kahve", description: "Espresso veya Türk kahvesinde kavrulmuş susam ve hafif ısının yudumla buluşması." },
              { title: "Çay", description: "Siyah veya bitki çayında temiz tuzluluk ve kekik notasının yumuşak kapanışı." },
              { title: "Soğuk içecek", description: "Limonata ve hafif mocktail’lerde beklenmedik, sofistike bir doku katmanı." },
            ]
          : [
              { title: "Coffee", description: "Roasted sesame and gentle heat meeting each sip of espresso or Turkish coffee." },
              { title: "Tea", description: "Clean salinity and thyme on black or herbal tea for a soft close." },
              { title: "Cold drinks", description: "An unexpected, sophisticated texture layer on lemonade and light mocktails." },
            ]
      }
      pairings={[
        { icon: Coffee, label: tr ? "Türk Kahvesi" : "Turkish Coffee", note: tr ? "Köpük üzerine ince serpi" : "Dust over the crema" },
        { icon: Leaf, label: tr ? "Bitki Çayı" : "Herbal Tea", note: tr ? "Demlemeden sonra" : "After steeping" },
        { icon: Wine, label: tr ? "Sıcak Çikolata" : "Hot Chocolate", note: tr ? "Kremalı final" : "Creamy finish" },
        { icon: CupSoda, label: tr ? "Limonata" : "Lemonade", note: tr ? "Buzlu bardakta" : "Over ice" },
      ]}
      usageTip={
        tr
          ? "İçecek servis edildikten hemen sonra bir tutam serpin; aromalar yüzeyde kalır ve ilk yudumda hissedilir."
          : "Dust immediately after serving so aromatics stay on the surface and greet the first sip."
      }
      relatedCategories={[
        { href: `/${locale}/sweets`, title: tr ? "Tatlılar" : "Sweets" },
        { href: `/${locale}/cakes`, title: tr ? "Pastalar" : "Cakes" },
        { href: `/${locale}/meals`, title: tr ? "Yemekler" : "Meals" },
      ]}
    />
  );
}

import { Cake, Heart, Sparkles, Star } from "lucide-react";
import { ProductCategoryPage } from "@/components/sections/ProductCategoryPage";
import { getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function CakesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const tr = locale === "tr";

  return (
    <ProductCategoryPage
      locale={locale}
      eyebrow={tr ? "Özel anlar" : "Celebrated moments"}
      title={tr ? "Pastalar" : "Cakes"}
      intro={
        tr
          ? "Pastalar ve kutlamalar için son dokunuş, yumuşak ısı ve baharat dengesiyle gelir; her dilimi hatırlanır kılar."
          : "Perfect for celebratory tables, where a final dusting brings texture, aromatic warmth and an unforgettable finish to each slice."
      }
      heroChips={
        tr
          ? ["Pişirme sonrası", "El yapımı", "Sofra ritüeli"]
          : ["Post-cook", "Handcrafted", "Table ritual"]
      }
      spotlightSteps={
        tr
          ? [
              { title: "Kutlama masası", description: "Doğum günü ve özel günlerde dilimler tabaklanmadan hemen önce hafif serpiştirme." },
              { title: "Krema ve katman", description: "Katmanlar arasında ince bir doku; görsel renk ve aromatik derinlik bir arada." },
              { title: "Hediye anı", description: "Kutu tatlılarda son dokunuş; paylaşılan sofrada unutulmaz bir imza." },
            ]
          : [
              { title: "Celebration table", description: "A light dusting just before slices are plated for birthdays and milestones." },
              { title: "Cream and layers", description: "Texture between layers with visible color and aromatic depth together." },
              { title: "Gifting moment", description: "A final signature on boxed sweets meant to be shared." },
            ]
      }
      pairings={[
        { icon: Cake, label: tr ? "Doğum Günü Pastası" : "Birthday Cake", note: tr ? "Her dilimi unutulmaz kılar" : "Makes every slice memorable" },
        { icon: Heart, label: tr ? "Düğün Tatlısı" : "Wedding Sweets", note: tr ? "Özel anlara değer katar" : "Elevates special moments" },
        { icon: Star, label: tr ? "Krema Katmanları" : "Cream Layers", note: tr ? "Aralarına serpin" : "Dust between layers" },
        { icon: Sparkles, label: tr ? "Kutu Tatlılar" : "Boxed Sweets", note: tr ? "Hediye için mükemmel" : "Perfect for gifting" },
      ]}
      usageTip={
        tr
          ? "Pasta dilimleri tabaklanmadan hemen önce hafifçe serpin. Rengi ve aromatik derinliği fark edilir."
          : "Dust lightly just before slicing and plating. The color and aromatic depth are immediately noticed."
      }
      relatedCategories={[
        { href: `/${locale}/sweets`, title: tr ? "Tatlılar" : "Sweets" },
        { href: `/${locale}/drinks`, title: tr ? "İçecekler" : "Drinks" },
        { href: `/${locale}/meals`, title: tr ? "Yemekler" : "Meals" },
      ]}
    />
  );
}

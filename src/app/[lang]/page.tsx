import { CategoryExplanation } from "@/components/sections/CategoryExplanation";
import { CraftProcess } from "@/components/sections/CraftProcess";
import { CulturalComparison } from "@/components/sections/CurturalComparison";
import { FounderStory } from "@/components/sections/FounderStory";
import { Hero } from "@/components/sections/Hero";
import { HowToUse } from "@/components/sections/HowToUse";
import { Ingredients } from "@/components/sections/Ingredients";
import { ProductMacro } from "@/components/sections/ProductMacro";
import { ServingIdeas } from "@/components/sections/ServingIdeas";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { CTA } from "@/components/sections/CTA";
import { HomeMotionSections } from "@/components/sections/HomeMotionSections";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tuz Biber",
    image: "https://example.com/og-image.jpg",
    description: dictionary.hero.subtitle,
    brand: {
      "@type": "Brand",
      name: "Tuz Biber",
    },
    category: "Food seasoning",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "18.00",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero lang={locale} dictionary={dictionary} />
      <HomeMotionSections lang={locale} />
      <TrustStrip dictionary={dictionary} />
      <CategoryExplanation dictionary={dictionary} lang={locale} />
      <ServingIdeas dictionary={dictionary} />
      <ProductMacro dictionary={dictionary} lang={locale} />
      <Ingredients dictionary={dictionary} />
      <CraftProcess dictionary={dictionary} />
      <FounderStory dictionary={dictionary} lang={locale} />
      <CulturalComparison dictionary={dictionary} />
      <HowToUse dictionary={dictionary} lang={locale} />
      <WaitlistForm dictionary={dictionary} lang={locale} />
    </>
  );
}
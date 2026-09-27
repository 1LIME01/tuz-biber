import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function MealsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const title = locale === "tr" ? "Yemekler" : "Meals";

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{locale === "tr" ? "Sofra sonu" : "Final touch"}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">{title}</Heading>
        <div className="mt-8 rounded-[2rem] border border-[#241B14]/10 bg-[#EFE6D5] p-8 text-[#241B14]">
          <p className="text-lg leading-8">{locale === "tr" ? "Ana yemeklerin öncesinde ya da sonrasında eklenerek tabağın karakterini değiştirir; sıcaklık, tuzluluk ve kısa ama güçlü baharatlı bir an oluşturur." : "A final flourish for main dishes, adding warmth, salinity and a quick punch of savory complexity right before serving."}</p>
          <Link href={`/${locale}/products`} className="mt-6 inline-flex items-center rounded-full bg-[#B86F3C] px-5 py-3 text-sm font-medium text-[#F6EFE8]">{locale === "tr" ? "Ürünlere dön" : "Back to products"}</Link>
        </div>
      </Container>
    </main>
  );
}

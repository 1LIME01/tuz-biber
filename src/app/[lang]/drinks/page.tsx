import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function DrinksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const title = locale === "tr" ? "İçecekler" : "Drinks";

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{locale === "tr" ? "Tatlı ve baharatlı eşlik" : "Pairing ritual"}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">{title}</Heading>
        <div className="mt-8 rounded-[2rem] border border-[#241B14]/10 bg-[#EFE6D5] p-8 text-[#241B14]">
          <p className="text-lg leading-8">{locale === "tr" ? "Kahve, çay ve hafif içeceklerin üstüne serpilerek aroma ve doku katmanları oluşturur; her yudumda daha anlamlı bir sofra hissi verir." : "A finishing note for coffee, tea and gentle drinks — adding aroma, texture and a more memorable table moment in every sip."}</p>
          <Link href={`/${locale}/products`} className="mt-6 inline-flex items-center rounded-full bg-[#B86F3C] px-5 py-3 text-sm font-medium text-[#F6EFE8]">{locale === "tr" ? "Ürünlere dön" : "Back to products"}</Link>
        </div>
      </Container>
    </main>
  );
}

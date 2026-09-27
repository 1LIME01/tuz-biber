import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

const products = [
  { href: "sweets", title: "Sweets", description: "Warm, sweet finishes with a savory edge." },
  { href: "cakes", title: "Cakes", description: "Ready for tables, celebrations and slow mornings." },
  { href: "drinks", title: "Drinks", description: "Pairings built for flavor and ritual." },
  { href: "meals", title: "Meals", description: "The final note for every plate and every occasion." },
];

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.hero.eyebrow}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">
          {locale === "tr" ? "Tüm Ürünler" : "All Products"}
        </Heading>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#57402E]">
          {locale === "tr"
            ? "Tuz Biber’in sıcak, kontrollü ve sofraya özel ürün ailesi."
            : "The Tuz Biber collection blends warmth, texture and finishing precision for the table."}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.href} href={`/${locale}/${product.href}`} className="rounded-[1.75rem] border border-[#241B14]/10 bg-[#EFE6D5] p-5 transition hover:-translate-y-1 hover:border-[#B86F3C]/30 hover:shadow-[0_20px_40px_rgba(36,27,20,0.12)]">
              <div className="h-34 rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(184,111,60,0.32),_rgba(36,27,20,0.85)_70%)]" />
              <h2 className="mt-5 text-xl font-semibold text-[#241B14]">{product.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#57402E]">{product.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

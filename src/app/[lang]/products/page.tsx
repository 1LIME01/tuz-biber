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
    <main className="bg-[#EFE6D5] py-20 sm:py-28">
      <Container className="max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.hero.eyebrow}</p>
        <Heading as="h1" className="heading-hero mt-4 text-[#241B14]">
          {locale === "tr" ? "Tüm Ürünler" : "All Products"}
        </Heading>
        <p className="mt-6 max-w-2xl font-serif text-xl font-medium leading-relaxed text-[#57402E]">
          {locale === "tr"
            ? "Tuz Biber’in sıcak, kontrollü ve sofraya özel ürün ailesi."
            : "The Tuz Biber collection blends warmth, texture and finishing precision for the table."}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.href} href={`/${locale}/${product.href}`} className="rounded-xl border border-[#241B14]/12 bg-[#F6EFE8] p-6 shadow-[0_8px_24px_rgba(36,27,20,0.03)] transition-colors duration-200 hover:border-[#B86F3C]">
              <div className="flex h-32 items-end rounded-lg bg-[linear-gradient(135deg,_#57402E_0%,_#241B14_100%)] p-4 text-[#EFE6D5]">
                <span className="font-serif text-sm font-bold uppercase tracking-wider text-[#B86F3C]">{product.title}</span>
              </div>
              <h2 className="mt-5 font-serif text-xl font-bold text-[#241B14]">{product.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-[#57402E]">{product.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}


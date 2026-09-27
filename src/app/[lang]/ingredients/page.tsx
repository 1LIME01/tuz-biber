import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export default async function IngredientsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <main className="py-16 sm:py-20">
      <Container className="max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.ingredientPage.eyebrow}</p>
        <Heading as="h1" className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#241B14] sm:text-5xl">
          {dictionary.ingredientPage.title}
        </Heading>
        <p className="mt-6 text-xl leading-8 text-[#57402E]">{dictionary.ingredientPage.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {dictionary.ingredients.items.map((item) => (
            <article key={item.name} className="rounded-[1.5rem] border border-[#241B14]/10 bg-[#EFE6D5] p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-[#B86F3C]">Ingredient</div>
              <h2 className="mt-4 text-2xl font-semibold text-[#241B14]">{item.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[#57402E]">{item.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 space-y-5 text-lg leading-8 text-[#241B14]">
          {dictionary.ingredientPage.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </main>
  );
}
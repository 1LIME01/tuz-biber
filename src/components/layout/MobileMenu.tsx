import Link from "next/link";
import type { BrandDictionary, Locale } from "@/types";

type MobileMenuProps = {
  lang: Locale;
  dictionary: BrandDictionary;
};

export function MobileMenu({ lang, dictionary }: MobileMenuProps) {
  const items = [
    { href: `/${lang}/story`, label: dictionary.header.nav[0].label },
    { href: `/${lang}/how-to-use`, label: dictionary.header.nav[1].label },
    { href: `/${lang}/ingredients`, label: dictionary.header.nav[2].label },
    { href: `/${lang}/faq`, label: dictionary.header.nav[3].label },
  ];

  return (
    <nav className="md:hidden" aria-label="Mobile navigation">
      <div className="mt-4 space-y-2 rounded-2xl border border-[#241B14]/10 bg-[#F6EFE8] p-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-xl px-2 py-3 text-sm text-[#57402E] hover:bg-[#EFE6D5]">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

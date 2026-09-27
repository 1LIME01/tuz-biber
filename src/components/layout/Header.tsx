"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { BrandDictionary, Locale } from "@/types";

type HeaderProps = {
  lang: Locale;
  dictionary: BrandDictionary;
};

export function Header({ lang, dictionary }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nextLocale = lang === "en" ? "tr" : "en";
  const currentPath = pathname?.replace(/^\/(en|tr)/, "") || "/";
  const localeSwitchHref = `/${nextLocale}${currentPath === "/" ? "" : currentPath}`;

  const links = [
    { href: `/${lang}`, label: lang === "tr" ? "Ana Sayfa" : "Home" },
    { href: `/${lang}/story`, label: lang === "tr" ? "Hikâyemiz" : "Story" },
    { href: `/${lang}/how-to-use`, label: lang === "tr" ? "Nasıl Kullanılır" : "How to use" },
    { href: `/${lang}/ingredients`, label: lang === "tr" ? "İçindekiler" : "Ingredients" },
    { href: `/${lang}/faq`, label: lang === "tr" ? "SSS" : "FAQ" },
    { href: `/${lang}/contact`, label: lang === "tr" ? "İletişim" : "Contact" },
  ];

  const productLinks = [
    { href: `/${lang}/sweets`, title: lang === "tr" ? "Tatlılar" : "Sweets", description: lang === "tr" ? "Kahveye eşlik eden sıcak dokunuş" : "Sweet finishes for warm moments" },
    { href: `/${lang}/cakes`, title: lang === "tr" ? "Pastalar" : "Cakes", description: lang === "tr" ? "Sofra keyfi ve görsel zarafet" : "Celebration-ready texture and flavor" },
    { href: `/${lang}/drinks`, title: lang === "tr" ? "İçecekler" : "Drinks", description: lang === "tr" ? "Baharatlı eşlikçiler" : "Pairings built for the table" },
    { href: `/${lang}/meals`, title: lang === "tr" ? "Yemekler" : "Meals", description: lang === "tr" ? "Öğünlerin son harcı" : "The final note for every plate" },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === href || pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`sticky top-0 z-50 pt-4 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"}`}>
      <div
        className={`glass-panel mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "bg-[rgba(36,27,20,0.92)] py-2.5 backdrop-blur-2xl" : "bg-[rgba(36,27,20,0.8)] backdrop-blur-xl"
        }`}
      >
        <Link href={`/${lang}`} className="flex items-center gap-3 text-[#EFE6D5]" aria-label="Tuz Biber home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(184,111,60,0.25)] bg-[#B86F3C] text-sm font-semibold text-[#F6EFE8] shadow-[0_12px_24px_rgba(184,111,60,0.28)]">
            T
          </span>
          <span className="text-sm font-semibold tracking-[0.16em] uppercase text-[#EFE6D5]">Tuz Biber</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {links.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-all duration-200 hover:text-[#B86F3C] ${active ? "font-semibold text-[#B86F3C]" : "text-[#EFE6D5]/70"}`}
              >
                {item.label}
                {active ? <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#B86F3C]" /> : null}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              className={`relative text-sm transition-all duration-200 hover:text-[#B86F3C] ${menuOpen ? "font-semibold text-[#B86F3C]" : "text-[#EFE6D5]/70"}`}
            >
              {lang === "tr" ? "Ürünler" : "Products"}
            </button>

            {menuOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 rounded-[1.5rem] border border-[#B86F3C]/20 bg-[#241B14]/90 p-3 shadow-[0_22px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl before:absolute before:-top-4 before:left-0 before:h-4 before:w-full before:content-['']">
                <div className="grid grid-cols-2 gap-3">
                  {productLinks.map((entry) => (
                    <Link key={entry.href} href={entry.href} className="rounded-[1rem] border border-[#B86F3C]/15 bg-[#F6EFE8]/5 p-3 text-left transition hover:border-[#B86F3C]/35 hover:bg-[#F6EFE8]/10">
                      <div className="mb-2 h-16 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(184,111,60,0.32),_rgba(36,27,20,0.8)_65%)]" />
                      <p className="text-sm font-semibold text-[#EFE6D5]">{entry.title}</p>
                      <p className="mt-1 text-xs leading-5 text-[#DCD3C1]/80">{entry.description}</p>
                    </Link>
                  ))}
                </div>
                <Link href={`/${lang}/products`} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-[#B86F3C]/25 bg-[#B86F3C]/10 px-3 py-2 text-sm font-medium text-[#F6EFE8] transition hover:border-[#B86F3C] hover:bg-[#B86F3C]/15">
                  {lang === "tr" ? "Tüm Ürünler" : "All products"} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link href={localeSwitchHref} className="rounded-full border border-[rgba(184,111,60,0.22)] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#EFE6D5]/80 transition hover:border-[rgba(184,111,60,0.5)] hover:text-[#F6EFE8]">
            {lang === "en" ? "TR" : "EN"}
          </Link>
          <Link href={`/${lang}/contact`} className="hidden items-center gap-2 rounded-full bg-[#B86F3C] px-4 py-2.5 text-sm font-medium text-[#F6EFE8] shadow-[0_12px_24px_rgba(184,111,60,0.28)] transition duration-200 hover:scale-[1.02] hover:bg-[#C67C46] sm:inline-flex">
            {dictionary.header.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => window.dispatchEvent(new Event("tuz-biber-chat-toggle"))} className="group hidden h-9 min-w-9 items-center justify-center gap-2 overflow-hidden rounded-full border border-[rgba(184,111,60,0.35)] bg-[#241B14]/70 px-2 text-[#EFE6D5] transition-all duration-300 hover:w-28 hover:border-[#B86F3C] hover:bg-[#B86F3C] md:flex" aria-label={lang === "tr" ? "Sofra asistanını aç" : "Open assistant"}>
            <Sparkles className="h-4 w-4 text-[#B86F3C]" />
            <span className="max-w-0 whitespace-nowrap text-xs font-semibold opacity-0 transition-all duration-300 group-hover:max-w-20 group-hover:opacity-100">{lang === "tr" ? "Sofra AI" : "Table AI"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

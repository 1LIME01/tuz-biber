"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Sparkles, Star, X } from "lucide-react";
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

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
    { href: `/${lang}/sweets`, title: lang === "tr" ? "Tatlılar" : "Sweets" },
    { href: `/${lang}/cakes`, title: lang === "tr" ? "Pastalar" : "Cakes" },
    { href: `/${lang}/drinks`, title: lang === "tr" ? "İçecekler" : "Drinks" },
    { href: `/${lang}/meals`, title: lang === "tr" ? "Yemekler" : "Meals" },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === href || pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "pt-2 pb-1" : "pt-4 pb-2"}`}>
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10 2xl:max-w-[1600px]">
        <div
          className={`rounded-2xl border border-[#B86F3C]/30 bg-[#1C130E]/95 backdrop-blur-xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 text-[#EFE6D5] shadow-[0_8px_32px_rgba(36,27,20,0.55),inset_0_1px_0_rgba(239,230,213,0.06)] transition-all duration-500 ${
            scrolled ? "py-2.5 border-[#B86F3C]/40" : "py-3.5 xl:py-4"
          }`}
        >
          <div className="flex w-full items-center justify-between gap-4 xl:grid xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:items-center xl:gap-x-3 2xl:gap-x-8">
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href={`/${lang}`}
            className="group flex shrink-0 items-center gap-2.5 text-[#EFE6D5] xl:col-start-1 xl:row-start-1"
            aria-label="Tuz Biber home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#C67C46,#8C4E22)] shadow-[0_0_0_2px_rgba(184,111,60,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(184,111,60,0.35)]">
              <span className="font-serif text-sm font-bold text-[#F6EFE8]">T</span>
            </span>
            <span className="whitespace-nowrap font-serif text-sm sm:text-base font-bold uppercase tracking-[0.16em] text-[#EFE6D5] transition-colors duration-200 group-hover:text-[#F6EFE8]">
              Tuz Biber
            </span>
          </Link>

          {/* ── Desktop Nav (≥ xl / 1280 px) ─────────────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-row flex-nowrap items-center justify-start gap-0.5 xl:flex xl:col-start-2 xl:row-start-1 2xl:justify-center 2xl:gap-2"
          >
            {links.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative shrink-0 px-1.5 py-1.5 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.08em] transition-colors duration-200 rounded-lg hover:bg-[#F6EFE8]/6 xl:px-2 xl:py-2 2xl:px-3.5 2xl:text-[11px] 2xl:tracking-[0.14em] ${
                    active ? "text-[#B86F3C]" : "text-[#EFE6D5]/70 hover:text-[#EFE6D5]"
                  }`}
                >
                  {item.label}
                  {/* animated underline */}
                  <span
                    className={`absolute bottom-0.5 left-1.5 right-1.5 h-[1.5px] rounded-full bg-[#B86F3C] transition-transform duration-300 origin-left xl:left-2 xl:right-2 2xl:left-3.5 2xl:right-3.5 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Products mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                className={`flex shrink-0 items-center gap-0.5 px-1.5 py-1.5 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.08em] transition-colors duration-200 rounded-lg cursor-pointer hover:bg-[#F6EFE8]/6 xl:px-2 xl:py-2 2xl:gap-1 2xl:px-3.5 2xl:text-[11px] 2xl:tracking-[0.14em] ${
                  menuOpen ? "text-[#B86F3C] bg-[#F6EFE8]/6" : "text-[#EFE6D5]/70 hover:text-[#EFE6D5]"
                }`}
              >
                {lang === "tr" ? "Ürünler" : "Products"}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${menuOpen ? "rotate-180 text-[#B86F3C]" : ""}`} />
              </button>

              {menuOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-[#B86F3C]/25 bg-[#1C130E] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                    <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B86F3C]/70">
                      {lang === "tr" ? "Kategoriler" : "Categories"}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {productLinks.map((entry) => (
                        <Link
                          key={entry.href}
                          href={entry.href}
                          className="group/card rounded-xl border border-[#EFE6D5]/8 bg-[#F6EFE8]/4 p-3.5 text-left transition-all duration-200 hover:border-[#B86F3C]/50 hover:bg-[#B86F3C]/10 hover:shadow-[0_4px_16px_rgba(184,111,60,0.15)]"
                        >
                          <p className="font-serif text-xs font-bold text-[#EFE6D5] transition-colors duration-200 group-hover/card:text-[#F6EFE8]">{entry.title}</p>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/${lang}/products`}
                      className="group/all mt-3 flex items-center justify-center gap-2 rounded-full border border-[#B86F3C]/40 bg-[#B86F3C]/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F6EFE8] transition-all duration-200 hover:bg-[#B86F3C] hover:border-[#B86F3C] hover:shadow-[0_4px_16px_rgba(184,111,60,0.3)]"
                    >
                      <Star className="h-3 w-3 fill-[#F6EFE8]/50 text-[#F6EFE8] transition-transform duration-300 group-hover/all:rotate-12" />
                      {lang === "tr" ? "Tüm Ürünler" : "All Products"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* ── Right Controls ───────────────────────────────── */}
          <div className="flex shrink-0 items-center justify-end gap-1.5 xl:col-start-3 xl:row-start-1 xl:gap-2 2xl:gap-4">

            {/* Language switcher */}
            <Link
              href={localeSwitchHref}
              className="shrink-0 rounded-full border border-[#B86F3C]/30 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EFE6D5]/70 transition-all duration-200 hover:border-[#B86F3C]/70 hover:bg-[#B86F3C]/10 hover:text-[#F6EFE8] xl:px-2 xl:py-1 xl:text-[9px] 2xl:px-3 2xl:py-1.5 2xl:text-[10px]"
            >
              {lang === "en" ? "TR" : "EN"}
            </Link>

            {/* ── Premium CTA ──────────────────────────────── */}
            <Link
              href={`/${lang}/contact`}
              className="group relative hidden shrink-0 overflow-hidden rounded-full sm:inline-flex"
              aria-label={dictionary.header.cta}
            >
              {/* gradient base */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_45%,#7A3D18_100%)] transition-opacity duration-300 group-hover:opacity-90" />
              {/* glow ring on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 shadow-[0_0_20px_4px_rgba(184,111,60,0.45)] transition-opacity duration-300 group-hover:opacity-100" />
              {/* shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.22)_50%,transparent_65%)] transition-transform duration-700 group-hover:translate-x-full" />
              {/* inner bevel */}
              <span className="absolute inset-[1px] rounded-full border border-white/12" />
              {/* label */}
              <span className="relative flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F6EFE8] transition-transform duration-200 group-hover:scale-[1.02] xl:px-2.5 xl:py-2 2xl:px-5 2xl:py-2.5 2xl:text-[11px] 2xl:tracking-[0.18em]">
                <Star className="h-3 w-3 shrink-0 fill-[#F6EFE8]/50 text-[#F6EFE8] transition-transform duration-300 group-hover:rotate-12" />
                <span className="hidden min-[1400px]:inline">{dictionary.header.cta}</span>
              </span>
            </Link>

            {/* ── AI Assistant button ───────────────────────── */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("tuz-biber-chat-toggle"))}
              className="group relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B86F3C]/35 bg-[#B86F3C]/10 text-xs font-semibold text-[#EFE6D5] transition-all duration-200 hover:border-[#B86F3C]/70 hover:bg-[#B86F3C]/20 hover:shadow-[0_0_16px_rgba(184,111,60,0.25)] xl:h-9 xl:w-9 2xl:w-auto 2xl:px-3"
              aria-label={lang === "tr" ? "Sofra asistanını aç" : "Open assistant"}
            >
              {/* pulse ring */}
              <span className="absolute inset-0 rounded-full border border-[#B86F3C]/0 transition-all duration-300 group-hover:border-[#B86F3C]/30 group-hover:scale-110" />
              <Sparkles className="h-3.5 w-3.5 text-[#B86F3C] transition-transform duration-300 group-hover:rotate-12" />
              <span className="hidden text-[11px] font-medium 2xl:inline">
                {lang === "tr" ? "Sofra AI" : "Table AI"}
              </span>
            </button>

            {/* ── Hamburger (< xl) ─────────────────────────── */}
            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B86F3C]/35 bg-[#241B14] text-[#EFE6D5] transition-all duration-200 xl:hidden hover:border-[#B86F3C]/70 hover:bg-[#B86F3C]/15 cursor-pointer"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            >
              {mobileNavOpen
                ? <X className="h-4 w-4 text-[#B86F3C] transition-transform duration-300 group-hover:rotate-90" />
                : <Menu className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              }
            </button>
          </div>
          </div>
        </div>

        {/* ── Mobile / Tablet Drawer (< xl) ─────────────────────── */}
        {mobileNavOpen && (
          <nav
            className="mt-2 rounded-2xl border border-[#B86F3C]/30 bg-[#1C130E]/98 backdrop-blur-xl p-5 shadow-[0_24px_60px_rgba(0,0,0,0.5)] xl:hidden"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col space-y-1">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[#B86F3C] text-[#F6EFE8] shadow-[0_4px_16px_rgba(184,111,60,0.3)]"
                      : "text-[#EFE6D5]/75 hover:bg-[#F6EFE8]/8 hover:text-[#EFE6D5]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-[#B86F3C]/20 pt-4 mt-2">
                <p className="mb-3 px-4 text-[9px] font-bold uppercase tracking-[0.28em] text-[#B86F3C]/60">
                  {lang === "tr" ? "Ürün Kategorileri" : "Product Categories"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {productLinks.map((entry) => (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      className="rounded-xl border border-[#EFE6D5]/10 bg-[#F6EFE8]/4 p-3 text-center text-xs font-serif font-bold text-[#EFE6D5] transition-all duration-200 hover:border-[#B86F3C]/50 hover:bg-[#B86F3C]/10 hover:text-[#F6EFE8]"
                    >
                      {entry.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-3">
                <Link
                  href={`/${lang}/contact`}
                  className="group relative flex w-full overflow-hidden rounded-full"
                >
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_45%,#7A3D18_100%)]" />
                  <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.22)_50%,transparent_65%)] transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="absolute inset-[1px] rounded-full border border-white/12" />
                  <span className="relative flex w-full items-center justify-center gap-2 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F6EFE8]">
                    <Star className="h-3 w-3 fill-[#F6EFE8]/50 text-[#F6EFE8]" />
                    {dictionary.header.cta}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}




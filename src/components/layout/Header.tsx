"use client";

import type { BrandDictionary, Locale } from "@/types";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const localeSwitchHref =
    nextLocale === "tr" && currentPath.startsWith("/blog")
      ? currentPath
      : `/${nextLocale}${currentPath === "/" ? "" : currentPath}`;

  const links = [
    { href: `/${lang}`, label: lang === "tr" ? "Ana Sayfa" : "Home" },
    { href: `/${lang}/story`, label: lang === "tr" ? "Hikâyemiz" : "Story" },
    {
      href: `/${lang}/how-to-use`,
      label: lang === "tr" ? "Nasıl Kullanılır" : "How to use",
    },
    {
      href: `/${lang}/ingredients`,
      label: lang === "tr" ? "İçindekiler" : "Ingredients",
    },
    { href: `/${lang}/faq`, label: lang === "tr" ? "SSS" : "FAQ" },
    { href: `/${lang}/contact`, label: lang === "tr" ? "İletişim" : "Contact" },
    { href: lang === "tr" ? "/blog" : "/en/blog", label: "Blog" },
  ];

  const productLinks = [
    {
      href: `/${lang}/sweets`,
      title: lang === "tr" ? "Tatlılar" : "Sweets",
      icon: "🍬",
    },
    {
      href: `/${lang}/cakes`,
      title: lang === "tr" ? "Pastalar" : "Cakes",
      icon: "🍰",
    },
    {
      href: `/${lang}/drinks`,
      title: lang === "tr" ? "İçecekler" : "Drinks",
      icon: "🥤",
    },
    {
      href: `/${lang}/meals`,
      title: lang === "tr" ? "Yemekler" : "Meals",
      icon: "🍽️",
    },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`)
      return (
        pathname === href || pathname === `/${lang}` || pathname === `/${lang}/`
      );
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "pt-2 pb-1" : "pt-3 pb-2"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10 2xl:max-w-[1600px]">
        <div
          className={`relative rounded-[26px] border border-[#D6B08B]/20 bg-[rgba(28,19,14,0.88)] backdrop-blur-2xl px-4 sm:px-6 lg:px-8 xl:px-9 2xl:px-11 text-[#EFE6D5] shadow-[0_14px_40px_rgba(36,27,20,0.38),inset_0_1px_0_rgba(255,248,240,0.06)] transition-all duration-500 ${
            scrolled ? "py-2.5 border-[#D6B08B]/28" : "py-3 xl:py-3.5"
          }`}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#F1D0AC]/35 to-transparent" />
          <div className="flex w-full items-center justify-between gap-2 lg:gap-3 xl:grid xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:items-center xl:gap-x-4 2xl:gap-x-6">
            {/* ── Logo ─────────────────────────────────────────── */}
            <Link
              href={`/${lang}`}
              className="group flex shrink-0 items-center gap-2 text-[#EFE6D5] xl:col-start-1 xl:row-start-1"
              aria-label="Tuz Biber home"
            >
              <span className="relative flex h-8 w-8 sm:h-[34px] sm:w-[34px] items-center justify-center rounded-full border border-[#F0D0AE]/20 bg-[linear-gradient(135deg,#C67C46,#8C4E22)] shadow-[0_0_0_1px_rgba(184,111,60,0.18)] transition-shadow duration-300 group-hover:shadow-[0_0_0_4px_rgba(184,111,60,0.2)]">
                <span className="font-editorial text-[13px] font-bold text-[#F6EFE8]">
                  T
                </span>
              </span>
              <span className="font-editorial whitespace-nowrap text-[15px] sm:text-[16px] font-semibold tracking-[0.08em] text-[#F6EFE8] transition-colors duration-200 group-hover:text-white">
                Tuz Biber
              </span>
            </Link>

            {/* ── Desktop Nav (≥ xl / 1280 px) ─────────────────── */}
            <nav
              aria-label="Main navigation"
              className="hidden min-w-0 flex-row flex-nowrap items-center justify-center gap-0.5 xl:flex xl:col-start-2 xl:row-start-1 2xl:gap-1.5"
            >
              {links.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group font-editorial relative shrink-0 rounded-full px-2 py-1.5 2xl:px-3 whitespace-nowrap text-[11px] 2xl:text-[12px] font-medium tracking-[0.03em] transition-all duration-200 hover:bg-[#F6EFE8]/6 ${
                      active
                        ? "text-[#E7B17B]"
                        : "text-[#EFE6D5]/72 hover:text-[#F6EFE8]"
                    }`}
                  >
                    {item.label}
                    {/* animated underline */}
                    <span
                      className={`absolute bottom-0.5 left-2 right-2 h-px rounded-full bg-[#D89A63] transition-transform duration-300 origin-left 2xl:left-3 2xl:right-3 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
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
                  className={`font-editorial flex shrink-0 items-center gap-0.5 rounded-full px-2 py-1.5 2xl:px-3 whitespace-nowrap text-[11px] 2xl:text-[12px] font-medium tracking-[0.03em] transition-colors duration-200 cursor-pointer hover:bg-[#F6EFE8]/6 2xl:gap-1 ${
                    menuOpen
                      ? "text-[#E7B17B] bg-[#F6EFE8]/6"
                      : "text-[#EFE6D5] hover:text-[#F6EFE8]"
                  }`}
                >
                  {lang === "tr" ? "Ürünler" : "Products"}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${menuOpen ? "rotate-180 text-[#E7B17B]" : ""}`}
                  />
                </button>

                {menuOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3">
                    <div className="rounded-[22px] border border-[#D6B08B]/18 bg-[#1C130E]/98 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                      <p className="mb-3 px-1 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B86F3C]/70">
                        {lang === "tr" ? "Kategoriler" : "Categories"}
                      </p>
                      <div className="mb-4 grid grid-cols-1 gap-2">
                        {productLinks.map((entry) => (
                          <Link
                            key={entry.href}
                            href={entry.href}
                            className="group/card rounded-[18px] border border-[#EFE6D5]/8 bg-[#F6EFE8]/4 p-3.5 text-center transition-all duration-200 hover:border-[#B86F3C]/50 hover:bg-[#B86F3C]/10 hover:shadow-[0_4px_16px_rgba(184,111,60,0.15)]"
                          >
                            <p className="font-editorial flex items-center justify-center gap-2 text-[13px] font-semibold text-[#EFE6D5] transition-colors duration-200 group-hover/card:text-[#F6EFE8]">
                              <span
                                aria-hidden="true"
                                className="text-[14px] leading-none"
                              >
                                {entry.icon}
                              </span>
                              <span>{entry.title}</span>
                            </p>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/${lang}/products`}
                        className="group/all flex items-center justify-center gap-2 rounded-full border border-[#B86F3C]/40 bg-[#B86F3C]/10 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F6EFE8] transition-all duration-200 hover:bg-[#B86F3C] hover:border-[#B86F3C] hover:shadow-[0_4px_16px_rgba(184,111,60,0.3)]"
                      >
                        <span>
                          {lang === "tr" ? "Tüm Ürünler" : "All Products"}
                        </span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover/all:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* ── Right Controls ───────────────────────────────── */}
            <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 xl:col-start-3 xl:row-start-1 xl:gap-2 2xl:gap-3">
              {/* Language switcher */}
              <Link
                href={localeSwitchHref}
                className="shrink-0 rounded-full border border-[#D6B08B]/25 bg-white/[0.03] px-2 sm:px-2.5 py-1 sm:py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#EFE6D5]/78 transition-all duration-200 hover:border-[#B86F3C]/60 hover:bg-[#B86F3C]/10 hover:text-[#F6EFE8] xl:px-2 xl:py-1 xl:text-[9px] 2xl:px-3 2xl:py-1.5 2xl:text-[9.5px]"
              >
                {lang === "tr" ? "TR" : "EN"}
              </Link>

              {/* ── Premium CTA ──────────────────────────────── */}
              <Link
                href={`/${lang}/contact`}
                className="group relative hidden md:inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[9.5px] xl:text-[10px] 2xl:text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_4px_16px_rgba(184,111,60,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_22px_rgba(184,111,60,0.5)] active:scale-95"
                aria-label={dictionary.header.cta}
              >
                {/* gradient base */}
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_50%,#8C4E22_100%)] transition-opacity duration-300 group-hover:opacity-95" />
                {/* shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
                {/* inner bevel */}
                <span className="absolute inset-[1px] rounded-full border border-white/20" />
                {/* label */}
                <span className="relative flex items-center gap-1.5 whitespace-nowrap">
                  <span className="whitespace-nowrap">
                    {dictionary.header.cta}
                  </span>
                  <ArrowRight className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>

              {/* ── AI Assistant button ───────────────────────── */}
              {/* <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("tuz-biber-chat-toggle"))}
                className="group relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6B08B]/24 bg-[#B86F3C]/10 text-xs font-semibold text-[#EFE6D5] transition-all duration-200 hover:border-[#B86F3C]/70 hover:bg-[#B86F3C]/20 hover:shadow-[0_0_16px_rgba(184,111,60,0.25)] xl:h-8 xl:w-8 2xl:h-9 2xl:w-auto 2xl:px-3"
                aria-label={lang === "tr" ? "Sofra asistanını aç" : "Open assistant"}
              > */}
              {/* pulse ring */}
              {/* <span className="absolute inset-0 rounded-full border border-[#B86F3C]/0 transition-all duration-300 group-hover:border-[#B86F3C]/30 group-hover:scale-110" />
              <Sparkles className="h-3.5 w-3.5 text-[#B86F3C] transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-editorial hidden text-[11px] font-medium 2xl:inline">
                {lang === "tr" ? "Sofra AI" : "Table AI"}
              </span>
            </button> */}

              {/* ── Hamburger (< xl) ─────────────────────────── */}
              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                className="group flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#B86F3C]/35 bg-[#241B14] text-[#EFE6D5] transition-all duration-200 xl:hidden hover:border-[#B86F3C]/70 hover:bg-[#B86F3C]/15 cursor-pointer"
                aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              >
                {mobileNavOpen ? (
                  <X className="h-4 w-4 text-[#B86F3C] transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                )}
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
                  className={`font-editorial flex items-center rounded-2xl px-4 py-3 text-[10.5px] font-medium tracking-[0.05em] transition-all duration-200 ${
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
                      className="font-editorial flex items-center justify-center gap-2 rounded-xl border border-[#EFE6D5]/10 bg-[#F6EFE8]/4 p-3 text-center text-[12px] font-semibold text-[#EFE6D5] transition-all duration-200 hover:border-[#B86F3C]/50 hover:bg-[#B86F3C]/10 hover:text-[#F6EFE8]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[14px] leading-none"
                      >
                        {entry.icon}
                      </span>
                      <span>{entry.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-3">
                <Link
                  href={`/${lang}/contact`}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full py-3.5 shadow-[0_4px_20px_rgba(184,111,60,0.35)] transition-all duration-300 active:scale-98"
                >
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,#D4895A_0%,#B86F3C_50%,#8C4E22_100%)]" />
                  <span className="absolute inset-0 -translate-x-full rounded-full bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.3)_50%,transparent_65%)] transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="absolute inset-[1px] rounded-full border border-white/20" />
                  <span className="relative flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F6EFE8]">
                    <span>{dictionary.header.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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

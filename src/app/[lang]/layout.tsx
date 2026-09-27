import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { getDictionary, getSupportedLocales } from "@/utils/i18n";
import type { Locale } from "@/types";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return getSupportedLocales().map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return {
    title: `Tuz Biber | ${dictionary.hero.eyebrow}`,
    description: dictionary.hero.subtitle,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = getSupportedLocales().includes(lang as Locale) ? (lang as Locale) : "en";
  const dictionary = getDictionary(locale);

  return (
    <div className="relative min-h-screen bg-[#241B14] text-[#EFE6D5]">
      <CursorGlow />
      <Header lang={locale} dictionary={dictionary} />
      <div className="relative z-10 min-h-[calc(100vh-90px)]">{children}</div>
      <Footer lang={locale} dictionary={dictionary} />
      <ChatWidget lang={locale} />
    </div>
  );
}
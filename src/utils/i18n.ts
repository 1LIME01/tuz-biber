import en from "@/dictionaries/en.json";
import tr from "@/dictionaries/tr.json";
import type { BrandDictionary, Locale } from "@/types";

export const dictionaries: Record<Locale, BrandDictionary> = {
  en: en as BrandDictionary,
  tr: tr as BrandDictionary,
};

export function getSupportedLocales(): Locale[] {
  return ["en", "tr"];
}

export function getDictionary(locale: Locale): BrandDictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

import Link from "next/link";
import { Camera, Mail, MapPin } from "lucide-react";
import type { BrandDictionary, Locale } from "@/types";

type FooterProps = {
  lang: Locale;
  dictionary: BrandDictionary;
};

export function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer className="border-t border-[#B86F3C]/20 bg-[#241B14] text-[#EFE6D5]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-12 lg:py-20">
        <div>
          <div className="mb-4 font-serif text-2xl font-bold tracking-[0.12em] uppercase text-[#EFE6D5]">Tuz Biber</div>
          <p className="max-w-md text-sm leading-relaxed text-[#EFE6D5]/80">{lang === "tr" ? "Florida’da küçük partiler halinde el yapımı, Sirius AI Tech tarafından geliştirildi." : "Handcrafted in small batches in Florida, engineered by Sirius AI Tech."}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#EFE6D5]/65">{dictionary.hero.subtitle}</p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{lang === "tr" ? "Keşfet" : "Explore"}</h3>
          <ul className="space-y-3.5 text-sm text-[#EFE6D5]/80">
            <li><Link href={`/${lang}/story`} className="transition-colors duration-200 hover:text-[#B86F3C]">{lang === "tr" ? "Hikâyemiz" : "Story"}</Link></li>
            <li><Link href={`/${lang}/how-to-use`} className="transition-colors duration-200 hover:text-[#B86F3C]">{lang === "tr" ? "Nasıl kullanılır" : "How to use"}</Link></li>
            <li><Link href={`/${lang}/ingredients`} className="transition-colors duration-200 hover:text-[#B86F3C]">{lang === "tr" ? "İçindekiler" : "Ingredients"}</Link></li>
            <li><Link href={`/${lang}/contact`} className="transition-colors duration-200 hover:text-[#B86F3C]">{lang === "tr" ? "İletişim" : "Contact"}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{lang === "tr" ? "Bize ulaşın" : "Find us"}</h3>
          <div className="space-y-3.5 text-sm text-[#EFE6D5]/80">
            <div className="flex items-center gap-3 text-xs leading-relaxed"><MapPin className="h-4 w-4 shrink-0 text-[#B86F3C]" /> Cumhuriyet Mahallesi, Esenyurt / İstanbul, Türkiye</div>
            <a href="mailto:miraczer05@gmail.com" className="flex items-center gap-3 text-xs transition-colors duration-200 hover:text-[#B86F3C]"><Mail className="h-4 w-4 shrink-0 text-[#B86F3C]" /> miraczer05@gmail.com</a>
            <a href="https://instagram.com" className="flex items-center gap-3 text-xs transition-colors duration-200 hover:text-[#B86F3C]"><Camera className="h-4 w-4 shrink-0 text-[#B86F3C]" /> Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#EFE6D5]/10 py-6 text-center text-xs tracking-wider text-[#EFE6D5]/60">© 2026 Sirius AI Tech • Tuz Biber</div>
    </footer>
  );
}


import Link from "next/link";
import { Camera, Mail, MapPin } from "lucide-react";
import type { BrandDictionary, Locale } from "@/types";

type FooterProps = {
  lang: Locale;
  dictionary: BrandDictionary;
};

export function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer className="border-t border-[#241B14]/10 bg-[#241B14] text-[#EFE6D5]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 text-xl font-semibold tracking-[0.14em] uppercase">Sirius AI Tech</div>
          <p className="max-w-md text-sm text-[#EFE6D5]/80">{lang === "tr" ? "Florida’da küçük partiler halinde el yapımı, Sirius AI Tech tarafından geliştirildi." : "Handcrafted in small batches in Florida, engineered by Sirius AI Tech."}</p>
          <p className="mt-4 max-w-md text-sm text-[#EFE6D5]/70">{dictionary.hero.subtitle}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#EFE6D5]/70">{lang === "tr" ? "Keşfet" : "Explore"}</h3>
          <ul className="space-y-3 text-sm text-[#EFE6D5]/80">
            <li><Link href={`/${lang}/story`}>{lang === "tr" ? "Hikâyemiz" : "Story"}</Link></li>
            <li><Link href={`/${lang}/how-to-use`}>{lang === "tr" ? "Nasıl kullanılır" : "How to use"}</Link></li>
            <li><Link href={`/${lang}/ingredients`}>{lang === "tr" ? "İçindekiler" : "Ingredients"}</Link></li>
            <li><Link href={`/${lang}/contact`}>{lang === "tr" ? "İletişim" : "Contact"}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#EFE6D5]/70">{lang === "tr" ? "Bize ulaşın" : "Find us"}</h3>
          <div className="space-y-3 text-sm text-[#EFE6D5]/80">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Cumhuriyet Mahallesi, Esenyurt / İstanbul, Türkiye</div>
            <a href="mailto:miraczer05@gmail.com" className="flex items-center gap-2 hover:text-[#F6EFE8]"><Mail className="h-4 w-4" /> miraczer05@gmail.com</a>
            <a href="https://instagram.com" className="flex items-center gap-2 hover:text-[#F6EFE8]"><Camera className="h-4 w-4" /> Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#EFE6D5]/10 py-4 text-center text-xs text-[#EFE6D5]/70">© 2026 Sirius AI Tech • Tuz Biber</div>
    </footer>
  );
}

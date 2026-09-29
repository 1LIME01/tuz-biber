import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ArrowRight, Sparkles } from "lucide-react";
import type { BrandDictionary, Locale } from "@/types";

type FounderStoryProps = { dictionary: BrandDictionary; lang?: Locale };

export function FounderStory({ dictionary, lang = "tr" }: FounderStoryProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6EFE8] via-[#FAF5EE] to-[#F6EFE8] py-20 sm:py-28">
      {/* Arka plan hafif sıcak ışıltı efekti */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#B86F3C]/10 blur-[100px]" />

      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Sol Görsel Kartı */}
        <div className="group rounded-3xl border border-[#B86F3C]/35 bg-[#241B14] p-3 sm:p-4 shadow-[0_24px_60px_rgba(36,27,20,0.18)] transition-transform duration-300 hover:scale-[1.01]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1C130E] p-6 sm:p-8 flex flex-col justify-between text-[#EFE6D5]">
            <img
              src="/images/home3.png"
              alt={lang === "tr" ? "Trakya Mirası El Yapımı Gelenek" : "Thrace Heritage Handcrafted Tradition"}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E]/95 via-black/20 to-black/35" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex rounded-full border border-white/25 bg-black/50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#F6EFE8] backdrop-blur-md shadow-sm">
                {lang === "tr" ? "Keşan Mirası" : "Keşan Heritage"}
              </span>
            </div>

            <div className="relative z-10 border-t border-white/15 pt-5 backdrop-blur-[2px]">
              <p className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F6EFE8]">
                {lang === "tr" ? "Trakya Mirası" : "Thrace Heritage"}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4895A]">
                {lang === "tr" ? "El Yapımı Gelenek" : "Handcrafted Tradition"}
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Hikaye İçeriği */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.founderStory.eyebrow}</p>
          <Heading as="h2" className="heading-section mt-4 text-[#241B14]">{dictionary.founderStory.title}</Heading>

          <div className="mt-6 space-y-5">
            {dictionary.founderStory.body.map((paragraph) => (
              <p key={paragraph} className="max-w-xl text-[15px] leading-[1.85] text-[#3D2B1E] sm:text-[17px] sm:leading-[1.9] font-medium tracking-[0.01em]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Şık Editoryal Alıntı Kartı */}
          <div className="mt-8 rounded-2xl border border-[#B86F3C]/25 bg-[#EFE6D5]/60 p-6 backdrop-blur-sm shadow-[0_4px_20px_rgba(184,111,60,0.06)]">
            <blockquote className="border-l-2 border-[#B86F3C] pl-4 font-serif text-lg sm:text-xl italic leading-relaxed text-[#241B14]">
              "{dictionary.founderStory.quote}"
            </blockquote>
            <div className="mt-3 flex items-center justify-between pl-4 text-xs font-bold text-[#8C4E22]">
              <span className="uppercase tracking-widest">— Şef İnan Doğru</span>
              <span className="text-[11px] text-[#B86F3C] font-semibold">Keşan → Florida</span>
            </div>
          </div>

          {/* Hikaye Sayfası Bağlantısı */}
          <div className="mt-10">
            <Link
              href={`/${lang}/story`}
              style={{ color: "#000000" }}
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#B86F3C]/50 bg-[#B86F3C]/10 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] shadow-[0_2px_8px_rgba(184,111,60,0.12)] transition-all duration-300 hover:border-[#B86F3C] hover:bg-[#B86F3C]/20 hover:shadow-[0_4px_16px_rgba(184,111,60,0.25)]"
            >
              <span style={{ color: "#000000" }}>{lang === "tr" ? "Hikâyemizin Devamını Oku" : "Read Full Story"}</span>
              <ArrowRight className="h-4 w-4" style={{ color: "#000000" }} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


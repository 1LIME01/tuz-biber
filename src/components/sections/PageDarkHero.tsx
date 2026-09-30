import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import type { ReactNode } from "react";

type PageDarkHeroProps = {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  intro: string;
  chips?: string[];
  footer?: ReactNode;
};

export function PageDarkHero({ eyebrow, title, titleClassName = "", intro, chips, footer }: PageDarkHeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#1C130E] px-6 pb-20 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_top_right,rgba(184,111,60,0.2),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F6EFE8] to-transparent" />
      </div>
      <Container className="relative max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#B86F3C]">{eyebrow}</p>
        <Heading as="h1" className={`heading-hero mt-4 text-[#EFE6D5] ${titleClassName}`}>
          {title}
        </Heading>
        <p className="mt-6 max-w-2xl font-serif text-xl font-medium leading-relaxed text-[#EFE6D5]/70 sm:text-2xl">
          {intro}
        </p>
        {chips && chips.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#B86F3C]/35 bg-[#B86F3C]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#EFE6D5]/85"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
        {footer}
      </Container>
    </div>
  );
}

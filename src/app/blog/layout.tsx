import { ChatWidget } from "@/components/chat/ChatWidget";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/utils/i18n";
import type { ReactNode } from "react";

export default function DefaultBlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  const dictionary = getDictionary("tr");

  return (
    <div className="relative min-h-screen bg-[#241B14] text-[#EFE6D5]">
      <CursorGlow />
      <Header lang="tr" dictionary={dictionary} />
      <div className="relative z-10 min-h-[calc(100vh-90px)] pt-24 sm:pt-28">
        {children}
      </div>
      <Footer lang="tr" dictionary={dictionary} />
      <ChatWidget lang="tr" />
    </div>
  );
}

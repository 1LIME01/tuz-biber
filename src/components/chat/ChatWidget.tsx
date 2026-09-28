"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Minus, SendHorizonal, X } from "lucide-react";
import type { Locale } from "@/types";

const STORAGE_KEY = "tuz-biber-chat-state";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function buildPricingTable() {
  return `| Ürün | Gramaj | Fiyat | Kullanım |
| --- | --- | --- | --- |
| Tuz Biber Signature | 80 g | 18 USD | Kahvaltı, omlet, burrata, ızgara |
| Tuz Biber Family Jar | 160 g | 32 USD | Sofra ve misafirler için |
| Tuz Biber Gift Set | 2 x 80 g | 54 USD | Hediye / özel etkinlikler |`;
}

function getAssistantReply(input: string, lang: Locale) {
  const value = input.trim().toLowerCase();

  if (!value) {
    return lang === "tr" ? "Merhaba! Tuz Biber ile ilgili fikir, içerik ya da kullanım önerisi sorabilirsiniz." : "Hello! Ask me about Tuz Biber, ingredients, use or shipping.";
  }

  if (/^(merhaba|selam|hello|hi)\b/i.test(value)) {
    return lang === "tr" ? "Merhaba, size nasıl yardımcı olabilirim?" : "Hello, how can I help you?";
  }

  if (/(nasılsın|nasilsin|how are you)/i.test(value)) {
    return lang === "tr" ? "İyiyim; bugün keyfinizi iyileştirebiliriz." : "I’m well — let’s make your table more delicious today.";
  }

  const isOffTopic = !/(tuz biber|biber|ürün|product|fiyat|price|paket|package|kargo|shipping|teslim|delivery|i̇çerik|ingredient|susam|sesame|kimyon|cumin|kekik|thyme|serp|sprinkle|pişir|cook|yumurta|egg|burrata|ızgara|grill|kullanım|use|sofra|table|baharat|seasoning)/i.test(value);
  if (isOffTopic) {
    return lang === "tr" ? "Ben sadece Tuz Biber ve lezzetlerimiz hakkında yardımcı olabilirim." : "I can only help with Tuz Biber and our flavors.";
  }

  if (/(fiyat|price|paket|package|gramaj|kg|g\b|ürünler)/i.test(value)) {
    return `İşte mevcut Tuz Biber paketleri:\n\n${buildPricingTable()}\n\nİsterseniz size en uygun paketi de öneririm.`;
  }

  if (/(kargo|shipping|teslim|delivery|gönderi)/i.test(value)) {
    return "Siparişler, küçük parti üretim süreciyle paketlenir ve 3-5 iş günü içinde teslim edilir. Uçak/ana kargo seçeneklerine göre süre değişebilir.";
  }

  if (/(içerik|malzeme|susam|kimyon|kekik|deniz tuzu|kırmızı biber)/i.test(value)) {
    return "Tuz Biber yalnızca 5 ana malzemeden oluşur: kavrulmuş susam, deniz tuzu, kırmızı biber, kimyon ve kekik. Katkı maddesi, koruyucu veya aroma verici yoktur.";
  }

  if (/(nasıl kullan|serp|pişir|yumurta|burrata|ızgara|börek|kahvaltı|sofra)/i.test(value)) {
    return "Önce pişir, sonra serp. Yumurtada, burrata üzerine, ızgara etin üstüne, tahıl salatasında ya da ekmek ve zeytinyağında kullanabilirsiniz.";
  }

  if (/(hikaye|trakya|florida|aile|tarif|story)/i.test(value)) {
    return "Tuz Biber, Keşan / Trakya kökenli aile tarifinden yola çıkarak Florida’da küçük parti olarak üretilir. Amacımız, pişirme sonrasında sofraya anlam katan bir finishing baharatı sunmaktır.";
  }

  return lang === "tr" ? "Ben sadece Tuz Biber ve lezzetlerimiz hakkında yardımcı olabilirim." : "I can only help with Tuz Biber and our flavors.";
}

export function ChatWidget({ lang = "tr" }: { lang?: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: lang === "tr" ? "Merhaba! Tuz Biber hakkında her şeyi sorabilirsiniz." : "Hello! Ask me anything about Tuz Biber.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener("tuz-biber-chat-toggle", handler);
    return () => window.removeEventListener("tuz-biber-chat-toggle", handler);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const sessionStarted = window.sessionStorage.getItem("tuz-biber-chat-session");
    if (!sessionStarted) {
      window.sessionStorage.setItem("tuz-biber-chat-session", "1");
      setIsOpen(false);
      setIsMinimized(false);
    }
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as { isOpen?: boolean; isMinimized?: boolean; messages?: ChatMessage[] };
      if (parsed.messages?.length) setMessages(parsed.messages);
      if (sessionStarted) {
        if (typeof parsed.isOpen === "boolean") setIsOpen(parsed.isOpen);
        if (typeof parsed.isMinimized === "boolean") setIsMinimized(parsed.isMinimized);
      }
    } catch {
      // Ignore malformed history.
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ isOpen, isMinimized, messages }));
  }, [isOpen, isMinimized, messages]);

  useEffect(() => {
    if (chatRef.current) {
      requestAnimationFrame(() => chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" }));
    }
  }, [messages, isOpen]);

  const quickReplies = useMemo(
    () => ["Ürünler ve fiyatlar", "Nasıl kullanılır?", "İçindekiler", "Kargo süresi"],
    [],
  );

  const handleSend = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const value = input.trim();
    if (!value) return;

    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: "user", content: value };
    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: getAssistantReply(value, lang),
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
    setInput("");
    setIsOpen(true);
    setIsMinimized(false);
  };

  const renderReply = (content: string) => {
    if (!/\|.*\|/m.test(content)) return content;

    const lines = content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .filter((line) => line.includes("|"));

    if (lines.length < 2) return content;

    const rows = lines.slice(1).map((line) =>
      line
        .split("|")
        .map((cell) => cell.trim())
        .filter((_, index, arr) => index > 0 && index < arr.length - 1),
    );

    return (
      <div className="overflow-hidden rounded-xl border border-[#B86F3C]/20 bg-[#F6EFE8] text-[#241B14]">
        <table className="w-full border-collapse text-left text-[11px]">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row.join("-")}-${rowIndex}`} className={rowIndex === 0 ? "bg-[#EFE6D5]" : "bg-transparent"}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="border border-[#B86F3C]/15 px-2 py-2 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="fixed right-4 bottom-5 z-[60] sm:right-8 sm:bottom-8 flex flex-col items-end">
      {!isOpen && !isMinimized && showHint && (
        <div className="mb-2 rounded-full border border-[#B86F3C]/30 bg-[#241B14] px-4 py-2 text-xs font-medium text-[#EFE6D5] shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
          {lang === "tr" ? "Hoş geldiniz! Nasıl yardımcı olabilirim?" : "Welcome! How can I help you?"}
        </div>
      )}

      {!isOpen && !isMinimized && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="flex h-13 w-13 items-center justify-center rounded-full border border-[#B86F3C]/40 bg-[#241B14] text-[#F6EFE8] shadow-[0_16px_32px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-[#B86F3C] cursor-pointer"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6 text-[#B86F3C]" />
        </button>
      )}

      {isOpen && (
        <div className="w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#B86F3C]/30 bg-[#241B14] text-[#EFE6D5] shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-all duration-300">
          <div className="flex items-center justify-between border-b border-[#B86F3C]/20 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B86F3C] font-serif text-sm font-bold text-[#F6EFE8]">
                TB
              </span>
              <div>
                <p className="font-serif text-sm font-bold text-[#EFE6D5]">Tuz Biber Sofra Asistanı</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B86F3C]">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setIsMinimized(true)} className="rounded-full border border-[#B86F3C]/20 p-1.5 text-[#EFE6D5] hover:border-[#B86F3C] transition-colors duration-200 cursor-pointer" aria-label="Minimize chat">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-full border border-[#B86F3C]/20 p-1.5 text-[#EFE6D5] hover:border-[#B86F3C] transition-colors duration-200 cursor-pointer" aria-label="Close chat">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div ref={chatRef} className="chat-scroll max-h-[320px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${message.role === "user" ? "bg-[#B86F3C] font-medium text-[#F6EFE8]" : "bg-[#EFE6D5] text-[#241B14]"}`}>
                  {renderReply(message.content)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#B86F3C]/20 px-4 py-3.5">
            <div className="mb-3 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-wider">
              {quickReplies.map((reply) => (
                <button key={reply} type="button" onClick={() => setInput(reply)} className="rounded-full border border-[#B86F3C]/25 bg-[#F6EFE8]/5 px-2.5 py-1 text-[#EFE6D5]/80 transition-colors duration-200 hover:border-[#B86F3C] hover:text-[#EFE6D5] cursor-pointer">
                  {reply}
                </button>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex gap-2">
              <input value={input} onChange={(event) => setInput(event.target.value)} className="min-h-[42px] flex-1 rounded-full border border-[#B86F3C]/25 bg-[#F6EFE8]/5 px-4 text-xs text-[#EFE6D5] placeholder:text-[#EFE6D5]/50 outline-none transition-colors duration-200 focus:border-[#B86F3C]" placeholder={lang === "tr" ? "Sorunuz nedir?" : "What would you like to know?"} aria-label="Ask the chat assistant" />
              <button type="submit" disabled={!input.trim()} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B86F3C] text-[#F6EFE8] transition-colors duration-200 hover:bg-[#C67C46] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer" aria-label="Send message">
                <SendHorizonal className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {isMinimized && !isOpen && (
        <button type="button" onClick={() => { setIsMinimized(false); setIsOpen(true); }} className="flex h-13 w-13 items-center justify-center rounded-full border border-[#B86F3C]/40 bg-[#241B14] text-[#F6EFE8] shadow-[0_16px_32px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:bg-[#B86F3C] cursor-pointer" aria-label="Reopen chat">
          <MessageCircle className="h-5 w-5 text-[#B86F3C]" />
        </button>
      )}
    </div>
  );
}



"use client";

import { useState } from "react";
import type { BrandDictionary, Locale } from "@/types";

export function WaitlistForm({ dictionary, lang }: { dictionary: BrandDictionary; lang: Locale }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lang }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || dictionary.waitlist.error);
        return;
      }

      setStatus("success");
      setMessage(data.message || dictionary.waitlist.success);
      setEmail("");
      setFirstName("");
    } catch {
      setStatus("error");
      setMessage(dictionary.waitlist.error);
    }
  }

  return (
    <section id="waitlist" className="bg-[#F6EFE8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 rounded-2xl border border-[#241B14]/12 bg-[#EFE6D5] p-8 sm:p-14 shadow-[0_12px_32px_rgba(36,27,20,0.04)] lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">{dictionary.waitlist.eyebrow}</p>
            <h2 className="heading-section mt-4 text-[#241B14]">{dictionary.waitlist.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-[#57402E] sm:text-lg">{dictionary.waitlist.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-[#241B14]">
                <span className="mb-2 block">{dictionary.waitlist.fields.firstName}</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="min-h-[48px] w-full rounded-full border border-[#241B14]/15 bg-[#F6EFE8] px-5 text-sm text-[#241B14] outline-none transition-colors duration-200 focus:border-[#B86F3C]"
                  placeholder={dictionary.waitlist.fields.firstName}
                />
              </label>
              <label className="text-xs font-semibold tracking-wider uppercase text-[#241B14]">
                <span className="mb-2 block">{dictionary.waitlist.fields.email}</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-[48px] w-full rounded-full border border-[#241B14]/15 bg-[#F6EFE8] px-5 text-sm text-[#241B14] outline-none transition-colors duration-200 focus:border-[#B86F3C]"
                  placeholder={dictionary.waitlist.fields.email}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden rounded-full px-9 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-[#F6EFE8] shadow-[0_8px_24px_rgba(184,111,60,0.38)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(184,111,60,0.5)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4895A] via-[#B86F3C] to-[#8C4E22]" />
              <span className="absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                {status === "loading" ? "..." : dictionary.waitlist.submit}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </button>

            {message && (
              <p className={`text-sm font-medium ${status === "success" ? "text-[#241B14]" : "text-[#B86F3C]"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


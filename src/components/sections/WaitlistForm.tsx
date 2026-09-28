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
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#B86F3C] px-8 py-3 text-sm font-semibold text-[#F6EFE8] transition-colors duration-200 hover:bg-[#C67C46] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              {status === "loading" ? "..." : dictionary.waitlist.submit}
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


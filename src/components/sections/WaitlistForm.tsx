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
    <section id="waitlist" className="bg-[#F6EFE8] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-[#241B14]/10 bg-[#EFE6D5] p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">{dictionary.waitlist.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#241B14] sm:text-4xl">{dictionary.waitlist.title}</h2>
            <p className="mt-5 text-lg leading-8 text-[#57402E]">{dictionary.waitlist.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-[#241B14]">
                <span className="mb-2 block">{dictionary.waitlist.fields.firstName}</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="min-h-[48px] w-full rounded-full border border-[#241B14]/15 bg-[#F6EFE8] px-4 text-[#241B14] outline-none ring-0 transition focus:border-[#B86F3C]"
                  placeholder={dictionary.waitlist.fields.firstName}
                />
              </label>
              <label className="text-sm text-[#241B14]">
                <span className="mb-2 block">{dictionary.waitlist.fields.email}</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-[48px] w-full rounded-full border border-[#241B14]/15 bg-[#F6EFE8] px-4 text-[#241B14] outline-none transition focus:border-[#B86F3C]"
                  placeholder={dictionary.waitlist.fields.email}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#B86F3C] px-6 py-3 text-sm font-medium text-[#F6EFE8] transition hover:bg-[#C67C46] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "..." : dictionary.waitlist.submit}
            </button>

            {message && (
              <p className={`text-sm ${status === "success" ? "text-[#241B14]" : "text-[#57402E]"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

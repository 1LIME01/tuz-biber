"use client";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { OtpModal } from "@/components/ui/OtpModal";
import { PhoneInput } from "@/components/ui/PhoneInput";
import type { BrandDictionary, Locale } from "@/types";

const MAX_MESSAGE_LENGTH = 500;
const COUNTRY_CODE_LENGTHS: Record<string, number> = {
  "+90": 10,
  "+1": 10,
  "+44": 10,
  "+49": 11,
  "+33": 9,
};

type ContactStatus = "idle" | "loading" | "success" | "error";
type FieldName = "name" | "email" | "phone" | "message";

export function ContactForm({ dictionary, lang }: { dictionary: BrandDictionary; lang: Locale }) {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [message, setMessage] = useState("");
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState<"+90" | "+1" | "+44" | "+49" | "+33">("+90");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});

  function validateForm() {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const digits = formData.phone.replace(/\D/g, "");
    const trimmedMessage = formData.message.trim();

    const nextErrors: Partial<Record<FieldName, string>> = {};
    const nameParts = trimmedName.split(/\s+/).filter(Boolean);
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿĞğİıŞşÇçÖöÜü\s]+$/.test(trimmedName) || trimmedName.length < 2 || trimmedName.length > 50 || nameParts.some((part) => part.length > 25)) {
      nextErrors.name = "Ad ve soyad yalnızca harflerden oluşmalı; her bölüm en fazla 25, toplam en fazla 50 karakter olmalıdır.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Lütfen geçerli bir e-posta adresi girin.";
    }

    const maxDigits = COUNTRY_CODE_LENGTHS[countryCode] ?? 10;
    if (digits.length < 7 || digits.length > maxDigits) {
      nextErrors.phone = `Telefon numarası geçerli bir aralıkta olmalıdır. Maksimum ${maxDigits} rakam.`;
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      nextErrors.message = `Mesaj uzunluğu 10 ile ${MAX_MESSAGE_LENGTH} karakter arasında olmalıdır.`;
    }
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length) throw new Error(Object.values(nextErrors)[0]);
  }

  async function waitForDelay() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async function requestOtp() {
    validateForm();
    setStatus("loading");
    setMessage("🛞 Gönderiliyor...");
    await waitForDelay();

    const response = await fetch("/api/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        phone: `${countryCode} ${formData.phone}`,
        lang,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(response.status === 404 ? "Gönderilmedi!" : data.message || "Gönderilemedi");
      return;
    }

    setStatus("idle");
    setMessage(data.message || dictionary.contact.otpDescription);
    setOtpModalOpen(true);
  }

  async function handleOtpSubmit(code: string) {
    setStatus("loading");
    setMessage("🛞 Gönderiliyor...");
    await waitForDelay();

    const response = await fetch("/api/contact/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        phone: `${countryCode} ${formData.phone}`,
        otp: code,
        lang,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const fallback = response.status === 404 ? "Gönderilmedi!" : response.status === 500 ? "Gönderilemedi" : data.message || dictionary.contact.error;
      setStatus("error");
      setMessage(fallback);
      throw new Error(data.message || dictionary.contact.error);
    }

    setStatus("success");
    setMessage(response.status === 200 ? "Gönderildi!" : data.message || dictionary.contact.success);
    setOtpModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await requestOtp();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : dictionary.contact.error);
    }
  }

  const FieldError = ({ name }: { name: FieldName }) =>
    fieldErrors[name] ? (
      <div className="relative mb-2 rounded-2xl border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-700">
        {fieldErrors[name]}
      </div>
    ) : null;

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-[#241B14] sm:col-span-2">
            <FieldError name="name" />
            <span className="mb-2 block">{dictionary.contact.fields.name}</span>
            <div className="relative">
              <input type="text" required value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿĞğİıŞşÇçÖöÜü\s]/g, "").slice(0, 50) }))} className={`min-h-[48px] w-full rounded-full border bg-[#F6EFE8] px-4 pr-12 text-[#241B14] outline-none transition focus:border-[#B86F3C] ${fieldErrors.name ? "border-red-500" : "border-[#241B14]/15"}`} />
              {fieldErrors.name ? <span className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">×</span> : null}
            </div>
          </label>

          <label className="block text-sm text-[#241B14]">
            <FieldError name="email" />
            <span className="mb-2 block">{dictionary.contact.fields.email}</span>
            <div className="relative">
              <input type="email" required value={formData.email} onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))} className={`min-h-[48px] w-full rounded-full border bg-[#F6EFE8] px-4 pr-12 text-[#241B14] outline-none transition focus:border-[#B86F3C] ${fieldErrors.email ? "border-red-500" : "border-[#241B14]/15"}`} />
              {fieldErrors.email ? <span className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">×</span> : null}
            </div>
          </label>

          <label className="block text-sm text-[#241B14]">
            <FieldError name="phone" />
            <span className="mb-2 block">{dictionary.contact.fields.phone}</span>
            <div className="relative">
              <PhoneInput
                value={formData.phone}
                countryCode={countryCode}
                onCountryCodeChange={(nextCode) => setCountryCode(nextCode)}
                onChange={(value) => setFormData((current) => ({ ...current, phone: value }))}
                className={`w-full ${fieldErrors.phone ? "border-red-500" : ""}`}
                inputClassName="min-h-[48px] w-full rounded-full border-0 bg-transparent px-2 py-2 pr-10 text-[#241B14] outline-none"
                selectClassName="min-h-[44px] rounded-full bg-[#EFE6D5] px-2 text-sm font-medium text-[#241B14] outline-none"
              />
              {fieldErrors.phone ? <span className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">×</span> : null}
            </div>
          </label>
        </div>

        <label className="block text-sm text-[#241B14]">
          <span className="mb-2 block">{dictionary.contact.fields.message}</span>
          <FieldError name="message" />
          <textarea
            required
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            className={`w-full rounded-[1.5rem] border bg-[#F6EFE8] px-4 py-3 text-[#241B14] outline-none transition focus:border-[#B86F3C] ${fieldErrors.message ? "border-red-500" : "border-[#241B14]/15"}`}
          />
          {fieldErrors.message ? <span className="float-right -mt-12 mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">×</span> : null}
          <span className="mt-2 block text-right text-xs text-[#57402E]">{formData.message.length}/{MAX_MESSAGE_LENGTH}</span>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-[#B86F3C] px-6 py-3 text-sm font-medium text-[#F6EFE8] transition duration-200 hover:scale-[1.01] hover:bg-[#C67F46] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "🛞 Gönderiliyor..." : dictionary.contact.submit}
          </button>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#57402E]">
            <ShieldCheck className="h-4 w-4 text-[#B86F3C]" />
            Secure OTP
          </div>
        </div>

        {message && (
          <p
            className={`text-sm transition-all duration-200 ${
              status === "success" ? "text-[#241B14]" : status === "error" ? "text-[#57402E]" : "text-[#57402E]"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <OtpModal
        isOpen={otpModalOpen}
        title={dictionary.contact.otpHeading}
        description={dictionary.contact.otpDescription}
        confirmLabel={dictionary.contact.otpSubmit}
        otpLabel={dictionary.contact.fields.otp}
        onClose={() => setOtpModalOpen(false)}
        onConfirm={handleOtpSubmit}
      />
    </>
  );
}

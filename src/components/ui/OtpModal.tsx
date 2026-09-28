import { useState } from "react";

type OtpModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  onClose: () => void;
  onConfirm: (code: string) => Promise<void> | void;
  otpLabel: string;
};

export function OtpModal({
  isOpen,
  title,
  description,
  confirmLabel,
  otpLabel,
  onClose,
  onConfirm,
}: OtpModalProps) {
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#241B14]/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-[#241B14]/12 bg-[#F6EFE8] p-7 shadow-[0_20px_50px_rgba(36,27,20,0.15)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B86F3C]">OTP Verification</p>
            <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-[#241B14]">{title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-[#241B14]/15 px-3 py-1 text-xs font-medium text-[#241B14] hover:bg-[#EFE6D5] transition-colors duration-200 cursor-pointer">Close</button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#57402E]">{description}</p>

        <label className="mt-6 block text-xs font-semibold uppercase tracking-wider text-[#241B14]">
          <span className="mb-2 block">{otpLabel}</span>
          <input
            type="text"
            inputMode="numeric"
            value={value}
            maxLength={6}
            onChange={(event) => setValue(event.target.value.replace(/\D/g, "").slice(0, 6))}
            className="min-h-[48px] w-full rounded-full border border-[#241B14]/15 bg-[#EFE6D5] px-5 font-mono text-base font-semibold tracking-widest text-[#241B14] outline-none transition-colors duration-200 focus:border-[#B86F3C]"
            placeholder="123456"
          />
        </label>

        <div className="mt-7 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-[#241B14]/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#241B14] transition-colors duration-200 hover:bg-[#241B14] hover:text-[#EFE6D5] cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={submitting || value.length !== 6}
            onClick={async () => {
              setSubmitting(true);
              try {
                await onConfirm(value);
              } finally {
                setSubmitting(false);
              }
            }}
            className="flex-1 rounded-full bg-[#B86F3C] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F6EFE8] transition-colors duration-200 hover:bg-[#C67C46] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          >
            {submitting ? "..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}


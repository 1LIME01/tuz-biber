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
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#241B14]/55 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-md rounded-[2rem] border border-[#241B14]/10 bg-[#F6EFE8] p-6 shadow-[0_24px_64px_rgba(36,27,20,0.18)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B86F3C]">OTP</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#241B14]">{title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-[#241B14]/10 px-3 py-1 text-sm text-[#241B14]">Close</button>
        </div>

        <p className="mt-4 text-sm leading-6 text-[#57402E]">{description}</p>

        <label className="mt-5 block text-sm font-medium text-[#241B14]">
          <span className="mb-2 block">{otpLabel}</span>
          <input
            type="text"
            inputMode="numeric"
            value={value}
            maxLength={6}
            onChange={(event) => setValue(event.target.value.replace(/\D/g, "").slice(0, 6))}
            className="min-h-[48px] w-full rounded-full border border-[#241B14]/15 bg-[#EFE6D5] px-4 text-[#241B14] outline-none transition focus:border-[#B86F3C]"
            placeholder="123456"
          />
        </label>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-[#241B14]/15 px-4 py-3 text-sm font-medium text-[#241B14]"
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
            className="flex-1 rounded-full bg-[#B86F3C] px-4 py-3 text-sm font-medium text-[#F6EFE8] transition hover:bg-[#C67C46] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

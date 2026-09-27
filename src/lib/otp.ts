const otpStore = new Map<string, { code: string; expiresAt: number }>();

export const OTP_TTL_MS = 5 * 60 * 1000;

export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function storeOtp(email: string, code: string, ttlMs = OTP_TTL_MS): void {
  otpStore.set(email.trim().toLowerCase(), { code, expiresAt: Date.now() + ttlMs });
}

export function verifyOtp(email: string, code: string): boolean {
  const key = email.trim().toLowerCase();
  const record = otpStore.get(key);

  if (!record) {
    return false;
  }

  const isValid = record.code === code && Date.now() < record.expiresAt;

  if (isValid || Date.now() >= record.expiresAt) {
    otpStore.delete(key);
  }

  return isValid;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

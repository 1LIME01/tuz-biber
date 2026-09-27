import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { escapeHtml, generateOtp, storeOtp } from "@/lib/otp";
import { sendSecureEmail } from "@/lib/smtp";
import { containsRepeatedWordSpam, hasDailyRequest, isSuspiciousProxy } from "@/lib/requestGuard";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (entry.count >= 3) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "local";

    if (isSuspiciousProxy(request)) {
      return NextResponse.json({ message: "Proxy or VPN connections are not accepted for contact requests." }, { status: 403 });
    }
    if (await hasDailyRequest(request)) {
      return NextResponse.json({ message: "Only one contact request per person is accepted each day." }, { status: 429 });
    }
    if (containsRepeatedWordSpam(message)) {
      return NextResponse.json({ message: "Your message was blocked as spam." }, { status: 400 });
    }
    if (!name || name.length < 2) {
      return NextResponse.json({ message: "Please provide your full name." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    if (phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json({ message: "Please provide a valid phone number." }, { status: 400 });
    }

    if (message.length < 10 || message.length > 500) {
      return NextResponse.json({ message: "Your message must be between 10 and 500 characters." }, { status: 400 });
    }

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ message: "Too many verification requests. Please wait a moment and try again." }, { status: 429 });
    }

    const otp = generateOtp();
    storeOtp(email, otp);

    const safeName = escapeHtml(name);

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px; color: #241B14; background: #F6EFE8; border-radius: 16px;">
        <h2 style="margin: 0 0 16px; font-size: 28px;">Tuz Biber verification</h2>
        <p style="margin: 0 0 12px; line-height: 1.6;">Hello ${safeName},</p>
        <p style="margin: 0 0 16px; line-height: 1.6;">Use the code below to verify your message before it is sent to the team.</p>
        <div style="padding: 20px; border-radius: 12px; background: #EFE6D5; font-size: 32px; letter-spacing: 0.2em; text-align: center; font-weight: 700; color: #241B14;">${otp}</div>
        <p style="margin-top: 16px; line-height: 1.6;">This code expires in 5 minutes.</p>
      </div>
    `;

    const sent = await sendSecureEmail({
      to: email,
      subject: "Your Tuz Biber verification code",
      html,
      text: `Your Tuz Biber verification code is ${otp}. It expires in 5 minutes.`,
    });

    if (!sent) {
      return NextResponse.json({ message: "SMTP is not configured. Please contact the administrator." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "A verification code was sent to your email." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Could not process the OTP request." }, { status: 500 });
  }
}

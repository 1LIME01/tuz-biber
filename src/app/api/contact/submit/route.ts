import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { escapeHtml, verifyOtp } from "@/lib/otp";
import { sendSecureEmail } from "@/lib/smtp";
import { containsRepeatedWordSpam, hasDailyRequest, isSuspiciousProxy, recordDailyRequest } from "@/lib/requestGuard";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();
    const otp = String(body.otp || "").trim();

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

    if (!otp || !verifyOtp(email, otp)) {
      return NextResponse.json({ message: "The OTP is invalid or has expired." }, { status: 401 });
    }

    const recipient = process.env.DEV_TEAM_EMAIL || "miraczer05@gmail.com";
    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedPhone = escapeHtml(phone);
    const sanitizedMessage = escapeHtml(message);

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #F6EFE8; color: #241B14; border-radius: 18px;">
        <h2 style="margin: 0 0 12px; color: #241B14;">New Tuz Biber inquiry</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${sanitizedName}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${sanitizedEmail}</p>
        <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
        <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
      </div>
    `;

    const sent = await sendSecureEmail({
      to: recipient,
      subject: `New inquiry from ${sanitizedName}`,
      html,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nPhone: ${sanitizedPhone}\nMessage: ${sanitizedMessage}`,
    });

    if (!sent) {
      return NextResponse.json({ message: "The message could not be delivered because SMTP is not configured." }, { status: 500 });
    }

    await recordDailyRequest(request);
    return NextResponse.json({ success: true, message: "Your message has been securely delivered to the dev team." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Could not submit the message." }, { status: 500 });
  }
}

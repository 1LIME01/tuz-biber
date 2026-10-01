import { escapeHtml } from "@/lib/html";
import { sendSecureEmail } from "@/lib/smtp";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please complete all fields with a valid email." },
        { status: 400 },
      );
    }

    const recipient = process.env.DEV_TEAM_EMAIL || "miraczer05@gmail.com";
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #F6EFE8; color: #241B14; border-radius: 18px;">
        <h2 style="margin: 0 0 12px; color: #241B14;">New Tuz Biber contact inquiry</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
        <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const sent = await sendSecureEmail({
      to: recipient,
      subject: `New inquiry from ${name}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (!sent) {
      return NextResponse.json(
        {
          message:
            "The message could not be delivered because SMTP is not configured.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Thanks — your message was received." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: "Could not process your request." },
      { status: 500 },
    );
  }
}

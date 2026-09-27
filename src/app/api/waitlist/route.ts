import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim();
    const firstName = String(body.firstName || "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email." }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Tuz Biber <hello@tuzbiber.com>",
          to: [email],
          subject: `New waitlist signup${firstName ? ` from ${firstName}` : ""}`,
          html: `<p>Email: ${email}</p><p>Name: ${firstName || "N/A"}</p>`,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json({ message: "Email provider rejected the request.", error: errorText }, { status: 502 });
      }
    }

    return NextResponse.json({ success: true, message: "You’re on the list. We’ll contact you soon." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Could not process your request." }, { status: 500 });
  }
}
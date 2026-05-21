import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, message, smsConsent } =
      body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeFirst = escapeHtml(String(firstName));
    const safeLast = escapeHtml(String(lastName));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone || "Not provided"));
    const safeCompany = escapeHtml(String(company || "Not provided"));
    const safeMessage = escapeHtml(String(message));

    await resend.emails.send({
      from: "Coolmore Logistics Website <noreply@coolmorelogistics.com>",
      to: ["support@coolmorelogistics.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${safeFirst} ${safeLast}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeFirst} ${safeLast}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${safePhone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeCompany}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">SMS Consent</td><td style="padding:8px;border-bottom:1px solid #eee;">${smsConsent ? "Yes" : "No"}</td></tr>
        </table>
        <h3 style="margin-top:20px;">Message</h3>
        <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

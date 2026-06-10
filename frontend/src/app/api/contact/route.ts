import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 10;

type ContactPayload = {
    name?: string;
    email?: string;
    message?: string;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4000;

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    const payload = (await request.json().catch(() => ({}))) as ContactPayload;
    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim();
    const message = (payload.message ?? "").trim();

    if (
        !name ||
        !email ||
        !message ||
        name.length > MAX_NAME_LENGTH ||
        email.length > MAX_EMAIL_LENGTH ||
        message.length > MAX_MESSAGE_LENGTH ||
        !isValidEmail(email)
    ) {
        return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@vistavise.com.au";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "VistaVise Contact <onboarding@resend.dev>";

    if (!apiKey) {
        return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const safeSubjectName = name.replace(/[\r\n]/g, " ").slice(0, 80);

    const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        signal: AbortSignal.timeout(8000),
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: email,
            subject: `New Contact Message from ${safeSubjectName}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Message:</strong></p>
              <p>${safeMessage}</p>
            `,
            text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
    });

    if (!resendResponse.ok) {
        return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}

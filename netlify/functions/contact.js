/* global process */
import nodemailer from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "All fields are required." }),
      };
    }

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
    const TO_EMAIL = process.env.TO_EMAIL || "ralphdarync@gmail.com";

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          ok: false,
          error: "Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });

    await transporter.sendMail({
      from: `RD Digital Technology <${GMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message || "Server error." }),
    };
  }
}
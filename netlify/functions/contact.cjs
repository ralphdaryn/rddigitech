const nodemailer = require("nodemailer");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "ok" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    const USER = process.env.GMAIL_USER;
    const PASS = process.env.GMAIL_APP_PASSWORD;
    const TO =
      process.env.TO_EMAIL || process.env.CONTACT_TO || process.env.GMAIL_USER;

    if (!USER || !PASS) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          ok: false,
          error: "Server misconfigured",
          details: "Missing GMAIL_USER or GMAIL_APP_PASSWORD",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: USER, pass: PASS },
    });

    await transporter.sendMail({
      from: `"RD Digitech Contact" <${USER}>`,
      to: TO,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        ok: false,
        error: "Internal Server Error",
        details: err?.message || String(err),
      }),
    };
  }
};
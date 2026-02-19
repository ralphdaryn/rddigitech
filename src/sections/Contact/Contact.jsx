import { useState } from "react";
import "./Contact.scss";
import Container from "../../components/Container/Container";
import { track } from "../../utils/ga4";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    track("contact_submit_attempt", { section: "contact" });

    setStatus({ type: "", msg: "" });
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        throw new Error(
          data?.details || data?.error || text || "Server error.",
        );
      }

      if (!data.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      track("contact_submit_success", { section: "contact" });

      setStatus({
        type: "success",
        msg: "Your message was sent successfully!",
      });
      form.reset();
    } catch (err) {
      track("contact_submit_error", { section: "contact" });

      setStatus({
        type: "error",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <Container className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">CONTACT</p>
          <h2 className="contact__title">Let’s work together</h2>
          <p className="contact__sub">
            Have a project in mind? <br></br>Send a message and I’ll follow up
            with recommendations.
          </p>
        </header>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name" className="contact__label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact__input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email" className="contact__label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__input"
              placeholder="you@email.com"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact__textarea"
              placeholder="Tell me a bit about your project…"
              rows="4"
              required
            />
          </div>

          <button type="submit" className="contact__btn" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>

          {status.msg && (
            <p
              className={`contact__status contact__status--${status.type}`}
              role="status"
            >
              {status.msg}
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
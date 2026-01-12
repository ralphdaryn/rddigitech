// Contact.jsx
import "./Contact.scss";
import Container from "../../components/Container/Container";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Container className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">CONTACT</p>
          <h2 className="contact__title">Let’s work together</h2>
          <p className="contact__sub">
            Have a project in mind? Send a message and I’ll get back to you.
          </p>
        </header>

        <form
          className="contact__form"
          name="contact"
          method="POST"
        >
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

          <button type="submit" className="contact__btn">
            Send message
          </button>
        </form>
      </Container>
    </section>
  );
}
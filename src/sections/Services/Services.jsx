// Services.jsx
import "./Services.scss";
import Container from "../../components/Container/Container";

export default function Services() {
  return (
    <section className="services" id="services">
      <Container className="services__inner">
        <header className="services__header">
          <p className="services__eyebrow">SERVICES</p>
          <h2 className="services__title">What we help with</h2>
          <p className="services__sub">
            Everything you need to get more inquiries and save time — done for
            you.
          </p>
        </header>

        <div className="services__grid">
          <article className="services__card">
            <h3 className="services__cardTitle">Website setup</h3>
            <p className="services__cardText">
              A clean, mobile-friendly website that clearly explains what you do
              and encourages people to contact you.
            </p>
          </article>

          <article className="services__card">
            <h3 className="services__cardTitle">Inquiry & Booking</h3>
            <p className="services__cardText">
              Simple forms or booking so inquiries come straight to you with the
              right details.
            </p>
          </article>

          <article className="services__card">
            <h3 className="services__cardTitle">Tracking & Automation</h3>
            <p className="services__cardText">
              See what’s working and automate basic follow-ups like
              confirmations and reminders.
            </p>
          </article>
        </div>

        <div className="services__cta">
          <p className="services__ctaText">
            Not sure where to start? I’ll recommend the simplest plan.
          </p>
          <a className="services__btn" href="#contact">
            Get started
          </a>
        </div>
      </Container>
    </section>
  );
}

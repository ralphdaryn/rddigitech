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
            A simple, done-for-you setup that helps your business get leads and
            save time.
          </p>
        </header>

        <div className="services__grid">
          <article className="services__card">
            <h3 className="services__cardTitle">Launch-ready website</h3>
            <p className="services__cardText">
              A clean, mobile-friendly site that clearly explains your offer and
              drives inquiries.
            </p>
          </article>

          <article className="services__card">
            <h3 className="services__cardTitle">Lead capture setup</h3>
            <p className="services__cardText">
              Forms or booking that send you the right information instantly.
            </p>
          </article>

          <article className="services__card">
            <h3 className="services__cardTitle">Tracking & follow-ups</h3>
            <p className="services__cardText">
              See what’s working and automate simple replies and reminders.
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
// Services.jsx
import "./Services.scss";
import Container from "../../components/Container/Container";

export default function Services() {
  return (
    <section className="services" id="services">
      <Container className="services__inner">
        <header className="services__header">
          <p className="services__eyebrow">SERVICES</p>
          <h2 className="services__title">What we help you with</h2>
          <p className="services__sub">
            Simple solutions to help your business look professional, get more
            leads, and save time.
          </p>
        </header>

        <div className="services__grid">
          <article className="services__card">
            <h3 className="services__cardTitle">Websites</h3>
            <p className="services__cardText">
              Clean, modern websites that clearly explain your business and work
              perfectly on mobile.
            </p>
          </article>

          <article className="services__card">
            <h3 className="services__cardTitle">Forms & Booking</h3>
            <p className="services__cardText">
              Easy ways for customers to contact you, book services, or request
              quotes.
            </p>
          </article>

          <article className="services__card">
            <h3 className="services__cardTitle">Analytics & Automation</h3>
            <p className="services__cardText">
              See what’s working on your site and automate small tasks so you
              don’t have to do everything manually.
            </p>
          </article>
        </div>

        <div className="services__cta">
          <p className="services__ctaText">
            Not sure what you need? I’ll help you choose the right setup.
          </p>
          <a className="services__btn" href="#contact">
            Get started
          </a>
        </div>
      </Container>
    </section>
  );
}
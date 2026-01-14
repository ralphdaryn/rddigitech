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
            <img
              src="/icons/visibility.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Design & Experience</h3>
            <p className="services__cardText">
              Thoughtful web design that works seamlessly across mobile, tablet,
              and desktop — built around how people experience your business.
            </p>
          </article>
          <article className="services__card">
            <img
              src="/icons/search.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Search & Discovery</h3>
            <p className="services__cardText">
              Helping the right people find your business through search and deliver a
              strong online presence.
            </p>
          </article>

          <article className="services__card">
            <img
              src="/icons/booking.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Inquiry & Booking</h3>
            <p className="services__cardText">
              Simple forms or booking tools that make it easy for people to
              reach out or book with the right details.
            </p>
          </article>

          <article className="services__card">
            <img
              src="/icons/automation.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Tracking & Automation</h3>
            <p className="services__cardText">
              Clear insight into what’s working, with behind-the-scenes systems
              that save you time.
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

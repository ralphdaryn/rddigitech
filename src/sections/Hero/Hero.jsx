// Hero.jsx
import "./Hero.scss";
import Container from "../../components/Container/Container";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background image */}
      <img className="hero__image" src="/hero.png" alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* subtle glow accents */}
      <span className="hero__glow hero__glow--a" aria-hidden="true" />
      <span className="hero__glow hero__glow--b" aria-hidden="true" />

      <Container className="hero__inner">
        <p className="hero__eyebrow">RD DIGITAL TECHNOLOGY</p>

        <div className="hero__copy">
          <h1 className="hero__title">
            Websites that <span className="hero__highlight">automate</span> and{" "}
            <span className="hero__highlight hero__highlight--soft">grow</span>{" "}
            your business.
          </h1>

          <p className="hero__sub">
            We design fast websites, share clear analytics, and build simple
            automations—so your business runs smarter while you focus on what
            matters.
          </p>

          <ul className="hero__points" aria-label="What we do">
            <li className="hero__point">
              <span className="hero__dot" aria-hidden="true" />
              <span>Modern websites & landing pages</span>
            </li>
            <li className="hero__point">
              <span className="hero__dot" aria-hidden="true" />
              <span>Analytics dashboards that make sense</span>
            </li>
            <li className="hero__point">
              <span className="hero__dot" aria-hidden="true" />
              <span>Automations that save time</span>
            </li>
          </ul>
        </div>

        <div className="hero__ctas">
          <a className="hero__btn hero__btn--primary" href="#contact">
            Start Project
          </a>
          <a className="hero__btn hero__btn--ghost" href="#work">
            View Work
          </a>
        </div>

        <ul className="hero__badges">
          <li>Fast turnaround</li>
          <li>Mobile-first</li>
          <li>Clear analytics</li>
        </ul>
      </Container>
    </section>
  );
}
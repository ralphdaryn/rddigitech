// Hero.jsx
import "./Hero.scss";
import Container from "../../components/Container/Container";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background image */}
      <img
        className="hero__image"
        src="/hero.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      {/* subtle glow accents */}
      <span className="hero__glow hero__glow--a" aria-hidden="true" />
      <span className="hero__glow hero__glow--b" aria-hidden="true" />

      <Container className="hero__inner">
        <p className="hero__eyebrow">RD DIGITAL TECHNOLOGY</p>

        <div className="hero__copy">
          <h1 className="hero__title">Websites. Analytics. Automation.</h1>

          <p className="hero__sub">
            Get more inquiries, understand what’s working, and save time with
            simple systems built for small businesses.
          </p>

          <ul className="hero__points" aria-label="What we do">
            <li className="hero__point">
              <span className="hero__dot" aria-hidden="true" />
              <span>Websites that turn visitors into inquiries</span>
            </li>
            <li className="hero__point">
              <span className="hero__dot" aria-hidden="true" />
              <span>Clear analytics that show what’s working</span>
            </li>
            <li className="hero__point">
              <span className="hero__dot" aria-hidden="true" />
              <span>Automations that reduce manual follow-ups</span>
            </li>
          </ul>
        </div>

        <div className="hero__ctas">
          <a className="hero__btn hero__btn--primary" href="#contact">
            Start a project
          </a>
          <a className="hero__btn hero__btn--ghost" href="#work">
            View work
          </a>
        </div>
      </Container>
    </section>
  );
}
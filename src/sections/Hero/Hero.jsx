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

      <Container className="hero__inner">
        <p className="hero__eyebrow">RD DIGITAL TECHNOLOGY</p>

        <div className="hero__copy">
          <h1 className="hero__title">
            Build smarter.
            <br className="hero__br" /> Automate faster.
            <br className="hero__br" /> Grow with clarity.
          </h1>

          <p className="hero__sub">
            We turn ideas into fast, data-driven websites with simple
            automations—so your business runs while you focus on what matters.
          </p>
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
          <li>1-week turnaround</li>
          <li>Mobile performance</li>
          <li>Clear analytics</li>
        </ul>
      </Container>
    </section>
  );
}
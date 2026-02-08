import "./Hero.scss";
import Container from "../../components/Container/Container";
import heroImg from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background image */}
      <img className="hero__image" src={heroImg} alt="" aria-hidden="true" />

      {/* Overlay gradients */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Glow accents */}
      <span className="hero__glow hero__glow--a" aria-hidden="true" />
      <span className="hero__glow hero__glow--b" aria-hidden="true" />

      <Container className="hero__inner">
        <p className="hero__eyebrow">RD DIGITAL TECHNOLOGY</p>

        <div className="hero__copy">
          <h1 className="hero__title">Websites. Analytics. Automation.</h1>

          <p className="hero__sub">
        We build fast, modern websites and simple tools that turn visitors into leads — and show you what’s actually working.
          </p>
        </div>

        <div className="hero__ctas">
          <a className="hero__btn hero__btn--primary" href="#contact">
            Start a project
          </a>
          <a className="hero__btn hero__btn--ghost" href="#work">
            View work
          </a>
        </div>

        <div className="hero__bubbles" aria-label="What we do">
          <span className="hero__bubble">Get Found Online</span>
          <span className="hero__bubble">See What’s Working</span>
          <span className="hero__bubble">Save Time Automatically</span>
        </div>
      </Container>
    </section>
  );
}

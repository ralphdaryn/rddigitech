import "./Hero.scss";
import Container from "../../components/Container/Container";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <p className="hero__eyebrow">RD DIGITAL TECHNOLOGY</p>
        <h1 className="hero__title">
          Building fast, data-driven websites that automate your business.
        </h1>
        <p className="hero__sub">
          Clean design. Modern React. Simple automations.
        </p>
      </Container>
    </section>
  );
}
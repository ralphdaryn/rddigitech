// Projects.jsx
import "./Projects.scss";
import Container from "../../components/Container/Container";

import stepByStepImg from "../../assets/images/stepbystepclub.png";
import rikakumaImg from "../../assets/images/rikakuma.png";
import ksnapImg from "../../assets/images/ksnapstudio.png";

const PROJECTS = [
  {
    title: "Step By Step Club",
    desc: "Website + booking flow for a kids fitness & events business.",
    tags: ["Website", "Booking"],
    href: "https://stepbystepclub.ca",
    image: stepByStepImg,
  },
  {
    title: "Rikakuma Shop",
    desc: "Product pages + cart experience for a small brand.",
    tags: ["Ecommerce", "UI"],
    href: "https://rikakuma.netlify.app",
    image: rikakumaImg,
  },
  {
    title: "K-Snap Studio",
    desc: "Portfolio site to showcase photography and drive inquiries.",
    tags: ["Portfolio", "Brand"],
    href: "https://ksnapstudio.ca",
    image: ksnapImg,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="work">
      <Container className="projects__inner">
        <header className="projects__header">
          <p className="projects__eyebrow">PROJECTS</p>
          <h2 className="projects__title">Work that speaks for itself</h2>
          <p className="projects__sub">
            A few recent builds—clean, fast, and made to convert.
          </p>
        </header>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              className="projects__card"
              href={p.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="projects__media" aria-hidden="true">
                <img className="projects__img" src={p.image} alt="" />
                <div className="projects__mediaOverlay" />
              </div>

              <div className="projects__body">
                <h3 className="projects__cardTitle">{p.title}</h3>
                <p className="projects__cardText">{p.desc}</p>

                <ul className="projects__tags" aria-label="Project tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        <div className="projects__cta">
          <p className="projects__ctaText">
            Want something like this for your business?
          </p>
          <a className="projects__btn" href="#contact">
            Start a project
          </a>
        </div>
      </Container>
    </section>
  );
}
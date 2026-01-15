// Projects.jsx
import "./Projects.scss";
import Container from "../../components/Container/Container";

import stepByStepImg from "../../assets/images/stepbystepclub.png";
import rikakumaImg from "../../assets/images/rikakuma.png";
import ksnapImg from "../../assets/images/ksnapstudio.png";

const PROJECTS = [
  {
    title: "Step By Step Club",
    desc: "Website with booking and event registration for a kids & fitness business.",
    tags: ["Booking Service", "Waiver Signature", "Contact Forms"],
    href: "https://stepbystepclub.ca",
    image: stepByStepImg,
  },
  {
    title: "Rikakuma Shop",
    desc: "Ecommerce website selling custom-designed products online.",
    tags: ["E-commerce", "Product Catalog", "Payment Processing"],
    href: "https://rikakuma.com",
    image: rikakumaImg,
  },
  {
    title: "K-Snap Studio",
    desc: "Website with galleries, client inquiries, and service packages.",
    tags: ["Photo Galleries", "Client Inquiries", "Service Packages"],
    href: "https://ksnapstudio.ca",
    image: ksnapImg,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="work">
      <Container className="projects__inner">
        <header className="projects__header">
          <p className="projects__eyebrow">WORK</p>
          <h2 className="projects__title">Featured Projects</h2>
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

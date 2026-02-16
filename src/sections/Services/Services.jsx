import "./Services.scss";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";

// ✅ Step images
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";

/* ✅ Inline SVG Icons */
const StepIconDiscover = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path
      d="M20 20l-3.5-3.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StepIconDashboard = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 14v-3M12 14V8M17 14v-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StepIconNotify = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M6.5 9a5.5 5.5 0 0 1 11 0c0 4.5 2 6 2 6h-15s2-1.5 2-6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M10 19a2 2 0 0 0 4 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Services() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedImage) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedImage]);

  return (
    <section className="services" id="services">
      <Container className="services__inner">
        {/* Header */}
        <header className="services__header">
          <p className="services__eyebrow">SERVICES</p>
          <h2 className="services__title">What we help with</h2>
          <p className="services__sub">
            Everything you need to attract the right visitors, turn them into
            inquiries, and keep your site running smoothly.
          </p>
        </header>

        {/* Grid */}
        <div className="services__grid">
          <article className="services__card">
            <img
              src="/icons/design.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Design & Experience</h3>
            <p className="services__cardText">
              Clean, modern websites that look great on all devices.
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
              Help the right people find your business online.
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
              Booking and inquiry flows that convert visitors.
            </p>
          </article>

          <article className="services__card">
            <img
              src="/icons/automation.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Analytics & Insights</h3>
            <p className="services__cardText">
              Track traffic, engagement, and conversions.
            </p>
          </article>

          <article className="services__card">
            <img
              src="/icons/host.svg"
              alt=""
              aria-hidden="true"
              className="services__icon"
            />
            <h3 className="services__cardTitle">Hosting & Reliability</h3>
            <p className="services__cardText">
              Fast, secure, fully managed hosting.
            </p>
          </article>
        </div>

        {/* HOW IT WORKS */}
        <section className="services__process">
          <header className="services__processHeader">
            <p className="services__eyebrow">PROCESS</p>
            <h3 className="services__processTitle">How it works</h3>
            <p className="services__sub">
              A simple 3-step system that turns visits into insight.
            </p>
          </header>

          <ol className="services__processList">
            <li className="services__processItem">
              <span className="services__processNum">1</span>

              <p className="services__processText">
                <strong className="services__processTitleRow">
                  Customers find you online
                  <StepIconDiscover className="services__inlineIcon" />
                </strong>
                <span>Your site appears on Google & social media.</span>
              </p>

              <img
                src={step1}
                alt="Step 1"
                className="services__stepImg"
                onClick={() => openModal(step1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(step1)}
              />
            </li>

            <li className="services__processItem">
              <span className="services__processNum">2</span>

              <p className="services__processText">
                <strong className="services__processTitleRow">
                  See what’s happening
                  <StepIconDashboard className="services__inlineIcon" />
                </strong>
                <span>Track visits, traffic & engagement.</span>
              </p>

              <img
                src={step2}
                alt="Step 2"
                className="services__stepImg"
                onClick={() => openModal(step2)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(step2)}
              />
            </li>

            <li className="services__processItem">
              <span className="services__processNum">3</span>

              <p className="services__processText">
                <strong className="services__processTitleRow">
                  Get notified
                  <StepIconNotify className="services__inlineIcon" />
                </strong>
                <span>Instant alerts when clients take action.</span>
              </p>

              <img
                src={step3}
                alt="Step 3"
                className="services__stepImg"
                onClick={() => openModal(step3)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(step3)}
              />
            </li>
          </ol>
        </section>

        {/* CTA */}
        <div className="services__cta">
          <p className="services__ctaText">
            Not sure where to start? I’ll recommend the right setup.
          </p>
          <a className="services__btn" href="#contact">
            Get started
          </a>
        </div>
      </Container>

      {/* ✅ Modal */}
      {selectedImage && (
        <div className="services__modal" onClick={closeModal}>
          <button
            className="services__modalClose"
            type="button"
            aria-label="Close image"
            onClick={closeModal}
          >
            ×
          </button>

          <div
            className="services__modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Expanded view" />
          </div>
        </div>
      )}
    </section>
  );
}
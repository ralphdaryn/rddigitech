import "./Services.scss";
import Container from "../../components/Container/Container";

export default function Services() {
  return (
    <section className="services" id="services">
      <Container className="services__inner">
        {/* Main Services Header */}
        <header className="services__header">
          <p className="services__eyebrow">SERVICES</p>
          <h2 className="services__title">What we help with</h2>
          <p className="services__sub">
            Everything you need to attract the right visitors, turn them into
            inquiries, and keep your site running smoothly.
          </p>
        </header>

        {/* Services Grid */}
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
              Clean, modern websites that look great on mobile, tablet, and
              desktop — designed around how real customers actually use your
              site.
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
              Help the right people find your business through Google and social
              media, with a clear and trustworthy online presence.
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
              Simple forms and booking tools that make it easy for customers to
              reach out or register — capturing the details you need to follow
              up properly.
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
              A clear dashboard showing traffic, page views, and sign-ups — so
              you can see what’s working and where to improve.
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
              Fast, secure hosting that keeps your website online, loading
              quickly, and protected — fully managed so you don’t have to think
              about it.
            </p>
          </article>
        </div>

        {/* HOW IT WORKS */}
        <section className="services__process" aria-label="How it works">
          <header className="services__processHeader">
            <p className="services__eyebrow">PROCESS</p>
            <h3 className="services__processTitle">How it works</h3>
            <p className="services__sub">
              A simple 3-step system that turns visits into clear insight and
              real action.
            </p>
          </header>

          <ol className="services__processList">
            <li className="services__processItem">
              <span className="services__processNum" aria-hidden="true">
                1
              </span>
              <p className="services__processText">
                <strong>Customers find you online</strong>
                <span>
                  Your website shows up on Google and social media — and we
                  track how people find you.
                </span>
              </p>
            </li>

            <li className="services__processItem">
              <span className="services__processNum" aria-hidden="true">
                2
              </span>
              <p className="services__processText">
                <strong>See what’s happening on your site</strong>
                <span>
                  View page visits, traffic sources, and sign-ups in one clear
                  dashboard.
                </span>
              </p>
            </li>

            <li className="services__processItem">
              <span className="services__processNum" aria-hidden="true">
                3
              </span>
              <p className="services__processText">
                <strong>Get notified when clients take action</strong>
                <span>
                  When someone fills out a form or registers, you’re notified
                  automatically.
                </span>
              </p>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <div className="services__cta">
          <p className="services__ctaText">
            Not sure where to start? I’ll recommend the right setup for your
            business.
          </p>
          <a className="services__btn" href="#contact">
            Get started
          </a>
        </div>
      </Container>
    </section>
  );
}

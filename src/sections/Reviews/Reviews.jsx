// Reviews.jsx
import "./Reviews.scss";
import Container from "../../components/Container/Container";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <Container className="reviews__inner">
        <header className="reviews__header">
          <p className="reviews__eyebrow">REVIEWS</p>
          <h2 className="reviews__title">What Clients Say</h2>
        </header>

        <div className="reviews__grid">
          <article className="reviews__card">
            <p className="reviews__quote">
              “Everything was explained clearly and the process was stress-free.
              The site looks professional and works great on mobile.”
            </p>
            <p className="reviews__author">
              — Small business owner
            </p>
          </article>

          <article className="reviews__card">
            <p className="reviews__quote">
              “Fast turnaround and great communication. I finally understand
              how people are finding my website.”
            </p>
            <p className="reviews__author">
              — Fitness studio owner
            </p>
          </article>

          <article className="reviews__card">
            <p className="reviews__quote">
              “Ralph handled everything from design to setup. I didn’t have to
              worry about anything.”
            </p>
            <p className="reviews__author">
              — Photographer
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

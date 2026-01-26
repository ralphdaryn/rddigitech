// Reviews.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import "./Reviews.scss";
import Container from "../../components/Container/Container";

export default function Reviews() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(1); // start with middle card active

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const cardsData = useMemo(
    () => [
      {
        quote:
          "“Everything was explained clearly and the process was stress-free. The site looks professional and works great on mobile.”",
        author: "— Step by Step Club",
      },
      {
        quote:
          "“Fast turnaround and great communication. I finally understand how people are finding my website.”",
        author: "— Rikakuma",
      },
      {
        quote:
          "“Ralph handled everything from design to setup. I didn’t have to worry about anything.”",
        author: "— Ksnap Studio",
      },
    ],
    []
  );

  // Track which card is most centered (active)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = { index: active, ratio: 0 };

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.index);
          const ratio = entry.intersectionRatio;
          if (ratio > best.ratio) best = { index, ratio };
        });

        if (best.ratio > 0) setActive(best.index);
      },
      {
        root: track,
        threshold: [0.25, 0.5, 0.6, 0.75, 0.9],
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update arrow enabled/disabled state
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const left = track.scrollLeft;

      setCanLeft(left > 6);
      setCanRight(left < maxScrollLeft - 6);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Center a specific index in the track
  const centerToIndex = (index) => {
    const track = trackRef.current;
    const el = cardRefs.current[index];
    if (!track || !el) return;

    const trackRect = track.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const trackCenter = trackRect.left + trackRect.width / 2;
    const elCenter = elRect.left + elRect.width / 2;

    const delta = elCenter - trackCenter;

    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  const goLeft = () => centerToIndex(Math.max(0, active - 1));
  const goRight = () => centerToIndex(Math.min(cardsData.length - 1, active + 1));

  // Optional: on first mount, gently center the middle card
  useEffect(() => {
    // tiny delay so layout measures correctly
    const t = setTimeout(() => centerToIndex(1), 50);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="reviews" id="reviews">
      <Container className="reviews__inner">
        <header className="reviews__header">
          <p className="reviews__eyebrow">REVIEWS</p>
          <h2 className="reviews__title">What Clients Say</h2>
        </header>

        <div className="reviews__carousel" aria-label="Client reviews carousel">
          {/* Left Arrow */}
          <button
            type="button"
            className={`reviews__arrow reviews__arrow--left ${
              canLeft ? "" : "reviews__arrow--disabled"
            }`}
            onClick={goLeft}
            aria-label="Previous review"
            disabled={!canLeft}
          >
            <span aria-hidden="true">‹</span>
          </button>

          {/* Track */}
          <div className="reviews__grid" ref={trackRef}>
            {cardsData.map((item, i) => (
              <article
                key={i}
                className={`reviews__card ${
                  active === i ? "reviews__card--active" : ""
                }`}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                tabIndex={0}
              >
                <p className="reviews__quote">{item.quote}</p>
                <p className="reviews__author">{item.author}</p>
              </article>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className={`reviews__arrow reviews__arrow--right ${
              canRight ? "" : "reviews__arrow--disabled"
            }`}
            onClick={goRight}
            aria-label="Next review"
            disabled={!canRight}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
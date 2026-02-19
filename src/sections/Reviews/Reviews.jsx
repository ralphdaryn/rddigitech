import { useEffect, useMemo, useRef, useState } from "react";
import "./Reviews.scss";
import Container from "../../components/Container/Container";

export default function Reviews() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const cardsData = useMemo(
    () => [
      {
        quote:
          "“Ralph made everything easy from start to finish. He explained things clearly, the whole process felt easy, and the website has been a huge help for our business. Booking, schedules, and the contact form all work seamlessly, and the tracking features let us better understand our visitors.”",
        author: "— Step by Step Club",
      },
      {
        quote:
          "“I’m so happy with how the store turned out. Everything feels clean and easy to navigate — from the product listings to checkout. It’s been perfect for selling my custom designs online.”",
        author: "— Rikakuma",
      },
      {
        quote:
          "“Working with Ralph was effortless. He handled the design and technical setup, and the website beautifully showcases our photo galleries while keeping client inquiries simple. I also love being able to see our traffic and visitor activity through the analytics.”",
        author: "— Ksnap Studio",
      },
    ],
    [],
  );

  // Track which card is most visible (active) ✅ FIXED
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const ratios = new Map(); // index -> latest intersection ratio

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          ratios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        // Pick highest ratio across ALL cards (not just the current entries)
        let bestIndex = 0;
        let bestRatio = 0;

        for (const [index, ratio] of ratios.entries()) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        }

        if (bestRatio > 0) setActive(bestIndex);
      },
      { root: track, threshold: [0.25, 0.5, 0.6, 0.75, 0.9] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
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

  // Scroll to a specific card, aligned to the LEFT (not centered)
  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const el = cardRefs.current[index];
    if (!track || !el) return;

    const styles = window.getComputedStyle(track);
    const paddingLeft = parseFloat(styles.paddingLeft || "0") || 0;

    const targetLeft = el.offsetLeft - paddingLeft;
    track.scrollTo({ left: targetLeft, behavior: "smooth" });

    // ✅ makes arrows react instantly (optional but recommended)
    setActive(index);
  };

  const goLeft = () => scrollToIndex(Math.max(0, active - 1));
  const goRight = () =>
    scrollToIndex(Math.min(cardsData.length - 1, active + 1));

  // On first mount, start from the LEFT (first card)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0, behavior: "auto" });
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

import { useState } from "react";
import { SLIDES } from "../data.js";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const go = (step) => setIndex((index + step + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="hero" aria-roledescription="carousel" aria-label="Photospace highlights">
      <div className="banner">
        <button className="arrow prev" onClick={() => go(-1)} aria-label="Previous slide">&lt;</button>
        <div className="banner" style={{ backgroundImage: `url(${SLIDES[index].image})` }}>
          <h1 className="brand">PHOTOSPACE</h1>
          <p className="tagline" aria-live="polite">{SLIDES[index].title}</p>
        </div>
        <button className="arrow next" onClick={() => go(1)} aria-label="Next slide">&gt;</button>
      </div>
      <div className="dots">
        {SLIDES.map((_, n) => (
          <button
            key={n}
            aria-label={"Go to slide " + (n + 1)}
            aria-current={n === index}
            onClick={() => setIndex(n)}
          />
        ))}
      </div>
    </section>
  );
}

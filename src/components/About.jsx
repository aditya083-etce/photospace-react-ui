import { ABOUT } from "../data.js";

export default function About() {
  return (
    <section id="about" className="sec about">
      <h2 className="sec-title">Our team and family</h2>
      <div className="about-list">
        {ABOUT.map(({ title, text }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

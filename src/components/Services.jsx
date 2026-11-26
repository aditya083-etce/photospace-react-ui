import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="sec services">
      <h2 className="sec-title">Services</h2>
      <div className="grid">
        {SERVICES.map(({ title, text }) => (
          <article className="card" key={title}>
            <span className="tag">{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

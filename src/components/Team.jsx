import { UserIcon } from "./Icons.jsx";
import { TEAM } from "../data.js";

export default function Team() {
  return (
    <section id="team" className="sec team">
      <h2 className="sec-title">Team</h2>
      <div className="people">
        {TEAM.map((p, n) => (
          <div className="person" key={n}>
            <UserIcon />
            <strong>{p.name}</strong>
            <span>{p.contact}</span>
            <span>{p.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

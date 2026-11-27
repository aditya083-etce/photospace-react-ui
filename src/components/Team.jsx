import { UserIcon } from "./Icons.jsx";
import { TEAM } from "../data.js";

export default function Team({ location }) {
  const members = TEAM.filter((p) => p.location === location);

  return (
    <section id="team" className="sec team">
      <h2 className="sec-title">Team · {location}</h2>
      {members.length === 0 ? (
        <p>No team members in {location} yet.</p>
      ) : (
        <div className="people">
          {members.map((p) => (
            <div className="person" key={p.name}>
              <UserIcon />
              <strong>{p.name}</strong>
              <span>{p.contact}</span>
              <span>{p.location}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
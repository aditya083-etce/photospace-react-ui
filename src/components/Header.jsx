import { MenuIcon, PinIcon, UserIcon } from "./Icons.jsx";
import { LOCATIONS } from "../data.js";

const MESSAGES = {
  loading: "Finding your location…",
  denied: "Location access is blocked. Pick a town manually.",
  unsupported: "GPS isn't supported here. Pick a town manually.",
  error: "Couldn't get your location. Pick a town manually.",
  far: "No team within 150 km of you. Pick a town manually.",
};

export default function Header({ onMenu, mode, location, detected, status, onSelect }) {
  return (
    <header className="bar">
      <button className="icon-btn" onClick={onMenu} aria-label="Open menu">
        <MenuIcon />
      </button>

      <label className="loc">
        <PinIcon />
        <span className="sr-only">Select location</span>
        <select
          value={mode === "auto" ? "auto" : location}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="auto">
            {detected ? `LIVE · ${detected.toUpperCase()}` : "LIVE LOCATION"}
          </option>
          {LOCATIONS.map((l) => (
            <option key={l} value={l}>{l.toUpperCase()}</option>
          ))}
        </select>
      </label>

      <button className="icon-btn" aria-label="Account">
        <UserIcon />
      </button>

      {mode === "auto" && MESSAGES[status] && (
        <p className="gps-msg" role="status">{MESSAGES[status]}</p>
      )}
    </header>
  );
}
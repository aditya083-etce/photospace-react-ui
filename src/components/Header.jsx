import { MenuIcon, PinIcon, UserIcon } from "./Icons.jsx";

export default function Header({ onMenu }) {
  return (
    <header className="bar">
      <button className="icon-btn" onClick={onMenu} aria-label="Open menu">
        <MenuIcon />
      </button>
      <div className="loc">
        <PinIcon />
        <span>KOLKATA, DUMDUM</span>
      </div>
      <button className="icon-btn" aria-label="Account">
        <UserIcon />
      </button>
    </header>
  );
}

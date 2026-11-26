import { useEffect } from "react";
import { MenuIcon } from "./Icons.jsx";
import { NAV } from "../data.js";

export default function Drawer({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const go = (e, id) => {
    e.preventDefault();
    onClose();
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <>
      <div className={"scrim" + (open ? " open" : "")} onClick={onClose} />
      <aside
        className={"drawer" + (open ? " open" : "")}
        aria-hidden={!open}
        inert={!open ? "" : undefined}
      >
        <button className="icon-btn" onClick={onClose} aria-label="Close menu">
          <MenuIcon />
        </button>
        <nav aria-label="Main">
          {NAV.map(({ label, id }) => (
            <a key={id} href={"#" + id} onClick={(e) => go(e, id)}>
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

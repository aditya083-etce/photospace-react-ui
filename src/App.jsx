import { useState } from "react";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import Hero from "./components/Hero.jsx";
import Team from "./components/Team.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import { LOCATIONS } from "./data.js";
import { useGpsLocation } from "./hooks/useGpsLocation.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState("auto"); // "auto" = live GPS, "manual" = user's pick
  const [manual, setManual] = useState(LOCATIONS[0]);

  const { detected, status } = useGpsLocation(mode === "auto");

  // Live location when available, otherwise fall back to the last manual pick
  const location = mode === "auto" && detected ? detected : manual;

  const handleSelect = (value) => {
    if (value === "auto") {
      setMode("auto");
    } else {
      setManual(value);
      setMode("manual");
    }
  };

  return (
    <>
      <Header
        onMenu={() => setMenuOpen(true)}
        mode={mode}
        location={location}
        detected={detected}
        status={status}
        onSelect={handleSelect}
      />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <Team location={location} />
        <Services />
        <About />
      </main>
      <footer>© 2026 Photospace, Dumdum, Kolkata</footer>
    </>
  );
}
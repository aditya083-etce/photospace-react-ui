import { useState } from "react";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import Hero from "./components/Hero.jsx";
import Team from "./components/Team.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onMenu={() => setMenuOpen(true)} />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <Team />
        <Services />
        <About />
      </main>
      <footer>© 2026 Photospace, Dumdum, Kolkata</footer>
    </>
  );
}

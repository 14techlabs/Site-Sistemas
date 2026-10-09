import { useState } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { navigation, site } from "./config/site";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useActiveSection } from "./hooks/useActiveSection";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Solutions } from "./components/sections/Solutions";
import { Differentiators } from "./components/sections/Differentiators";
import { About } from "./components/sections/About";
import { Audiences } from "./components/sections/Audiences";
import { Essence } from "./components/sections/Essence";
import { Contact } from "./components/sections/Contact";

export default function App() {
  useScrollReveal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navigation.map(([, id]) => id));

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <Header activeSection={activeSection} mobileOpen={mobileOpen} onToggle={() => setMobileOpen((value) => !value)} onNavigate={goTo} />
      {mobileOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileOpen(false)}>
          <nav className="mobile-drawer" aria-label="Navegação móvel" onClick={(event) => event.stopPropagation()}>
            <button className="icon-button drawer-close" onClick={() => setMobileOpen(false)} aria-label="Fechar menu"><X /></button>
            <img src="/brand/LOGO-14-TECH-BRANCA-HORIZONTAL.png" alt="14 Tech" className="drawer-logo" />
            {navigation.map(([label, id]) => (
              <button key={id} className={activeSection === id ? "mobile-link active" : "mobile-link"} onClick={() => goTo(id)}>
                {label}<ArrowRight size={17} />
              </button>
            ))}
            <a className="button button-primary drawer-cta" href={site.whatsapp} target="_blank" rel="noreferrer">Suporte <MessageCircle size={17} /></a>
          </nav>
        </div>
      )}

      <main>
        <Hero onContact={() => goTo("contato")} onSystems={() => goTo("solucoes")} />
        <Services />
        <Solutions />
        <Differentiators />
        <About />
        <Audiences />
        <Essence />
        <Contact />
      </main>

      <Footer />
      <a className="floating-whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a 14 Tech pelo WhatsApp">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

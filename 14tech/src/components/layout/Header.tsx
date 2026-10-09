import { Menu, ArrowUpRight } from "lucide-react";
import { navigation, site } from "../../config/site";

type Props = { activeSection: string; mobileOpen: boolean; onToggle: () => void; onNavigate: (id: string) => void };

export function Header({ activeSection, onToggle, onNavigate }: Props) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Ir para o início">
          <img src="./brand/LOGO-14-TECH-ORIGINAL-HORIZONTAL.png" alt="14 Tech" className="brand-logo" />
        </button>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, id]) => (
            <button key={id} className={activeSection === id ? "nav-link active" : "nav-link"} onClick={() => onNavigate(id)}>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <a className="support-link" href={site.whatsapp} target="_blank" rel="noreferrer">Suporte <ArrowUpRight size={15} /></a>
          <button className="menu-trigger" onClick={onToggle} aria-label="Abrir menu"><Menu size={23} /></button>
        </div>
      </div>
    </header>
  );
}

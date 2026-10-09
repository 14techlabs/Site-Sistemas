import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { navigation, site } from "../../config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="./brand/LOGO-14-TECH-BRANCA-HORIZONTAL.png" alt="14 Tech" className="footer-logo" />
          <p className="footer-tagline">Soluções para Gestão Pública.</p>
        </div>
        <div>
          <span className="footer-title">Navegação</span>
          <div className="footer-links">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
        </div>
        <div>
          <span className="footer-title">Contato</span>
          <div className="footer-contact">
            <a href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a>
            <a href={site.instagram} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2025 14 Tech. Todos os direitos reservados.</span>
        <span>{site.company.join(" • ")}</span>
      </div>
    </footer>
  );
}

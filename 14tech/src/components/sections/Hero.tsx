import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "../../config/site";

export function Hero({ onContact, onSystems }: { onContact: () => void; onSystems: () => void }) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy" data-reveal>
          <span className="hero-kicker"><Sparkles size={15} /> Tecnologia com propósito público</span>
          <h1>Soluções digitais para <span>gestão pública conectada ao futuro</span></h1>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onContact}>Entre em contato <ArrowRight size={18} /></button>
            <button className="button button-ghost" onClick={onSystems}>Conheça nossas soluções <ArrowRight size={18} /></button>
          </div>
          <div className="hero-trust"><span className="trust-dot" /> Tecnologia, inovação e gestão do conhecimento aplicadas na prática.</div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-card">
            <div className="hero-card-top"><span className="pulse" /> Soluções 14Tech</div>
            <div className="hero-card-core">
              <div className="core-ring"><img src="./brand/LOGO-14-TECH-BRANCA-HORIZONTAL.png" alt="" /></div>
              <span>Gestão pública</span>
              <strong>conectada</strong>
            </div>
            <div className="hero-metrics">
              <div><span>IA</span><small>Decisão</small></div>
              <div><span>IoT</span><small>Rastreamento</small></div>
              <div><span>Web</span><small>Integração</small></div>
            </div>
          </div>
        </div>
      </div>
      <button className="scroll-cue" onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })} aria-label="Rolar para serviços"><span /><span /><span /></button>
    </section>
  );
}

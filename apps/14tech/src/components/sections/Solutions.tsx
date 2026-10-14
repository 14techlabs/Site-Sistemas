import { ArrowUpRight } from "lucide-react";
import { systems } from "../../config/systems";
import { SectionIntro } from "../ui/SectionIntro";

export function Solutions() {
  return (
    <section className="section systems-section" id="solucoes">
      <div className="container">
        <SectionIntro
          eyebrow="Nossas Soluções"
          title="Tecnologia aplicada à gestão pública"
          description="Soluções digitais desenvolvidas para transformar processos, organizar informações e apoiar decisões mais eficientes."
        />

        <div className="system-grid">
          {systems.map((system) => (
            <article className={`system-card system-${system.theme}`} data-reveal key={system.id}>
              <div className="system-brand-row">
                <div className="system-logo-wrap">
                  <img src={system.logo} alt={`Logo ${system.name}`} loading="lazy" />
                </div>
                <span className="system-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>

              <div className="system-media">
                {system.preview && <img src={system.preview} alt={`Interface do ${system.name}`} loading="lazy" />}
              </div>

              <div className="system-body">
                <span className="system-eyebrow">{system.eyebrow}</span>
                <h3>{system.name}</h3>
                <p>{system.description}</p>
                <a className="arrow-link" href={system.href}>
                  Conheça a solução <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

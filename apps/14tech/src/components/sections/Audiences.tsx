import { Building2, Landmark, Network } from "lucide-react";
import { audiences } from "../../config/site";
import { SectionIntro } from "../ui/SectionIntro";

const icons = [Building2, Network, Landmark];

export function Audiences() {
  return <section className="section section-dark audiences">
    <div className="container">
      <SectionIntro eyebrow="Área de Atuação" title="Onde Atuamos" align="center" />
      <div className="audience-grid">
        {audiences.map(([title, text], i) => {
          const Icon = icons[i];
          return <article className="audience-card" data-reveal key={title}><div className="audience-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>;
        })}
      </div>
    </div>
  </section>;
}

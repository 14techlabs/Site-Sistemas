import { Check, Heart, Lightbulb, Leaf, Zap } from "lucide-react";
import { essence } from "../../config/site";
import { SectionIntro } from "../ui/SectionIntro";

const icons = [Check, Heart, Lightbulb, Zap, Leaf];

export function Essence() {
  return <section className="section section-light" id="essencia">
    <div className="container">
      <SectionIntro eyebrow="Nossa Essência" title="Quem Somos" align="center" />
      <div className="essence-top">
        {[["Propósito", essence.purpose], ["Missão", essence.mission], ["Visão", essence.vision]].map(([title, text]) =>
          <article className="essence-panel" data-reveal key={title}><span>{title}</span><p>{text}</p></article>
        )}
      </div>
      <div className="values-header"><span className="eyebrow">Nossos Valores</span></div>
      <div className="values-grid">
        {essence.values.map(([title, text], i) => {
          const Icon = icons[i];
          return <article className="value-card" data-reveal key={title}><div className="value-icon"><Icon size={19}/></div><h3>{title}</h3><p>{text}</p></article>;
        })}
      </div>
    </div>
  </section>;
}

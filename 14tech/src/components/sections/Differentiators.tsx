import { Lightbulb, ShieldCheck, Headphones } from "lucide-react";
import { differentiators, site } from "../../config/site";
import { SectionIntro } from "../ui/SectionIntro";

const icons = [Lightbulb, ShieldCheck, Headphones];

export function Differentiators() {
  return <section className="section section-soft">
    <div className="container">
      <SectionIntro eyebrow="Nossos Diferenciais" title="Por que nos escolher" align="center" />
      <div className="differentiator-grid">
        {differentiators.map(([title, text], i) => {
          const Icon = icons[i];
          return <article className="differentiator" data-reveal key={title}>
            <div className="icon-box"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p>
            {i === 2 && <a href={site.whatsapp} target="_blank" rel="noreferrer">Suporte via WhatsApp <span>↗</span></a>}
          </article>;
        })}
      </div>
    </div>
  </section>;
}

import { Bot, Code2, Smartphone, Webhook, Check } from "lucide-react";
import { services } from "../../config/site";
import { SectionIntro } from "../ui/SectionIntro";

const icons = [Bot, Code2, Smartphone, Webhook];

export function Services() {
  return (
    <section className="section section-light" id="servicos">
      <div className="container">
        <SectionIntro eyebrow="Nossos Serviços" title="Soluções Personalizadas para o Seu Negócio" />
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = icons[index];
            return <article className="service-card" data-reveal key={service.title}>
              <div className="icon-box"><Icon size={23} /></div>
              <span className="card-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
            </article>;
          })}
        </div>
        <div className="section-cta" data-reveal>
          <span>Precisa de uma solução personalizada para sua organização?</span>
          <a className="button button-dark" href="#contato">Entre em contato</a>
        </div>
      </div>
    </section>
  );
}

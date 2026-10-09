import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "../../config/site";
import { SectionIntro } from "../ui/SectionIntro";

export function Contact() {
  return <section className="section contact-section" id="contato">
    <div className="container contact-layout">
      <div><SectionIntro eyebrow="Fale Conosco" title="Entre em Contato" description="Tem alguma dúvida ou projeto em mente? Nossa equipe especializada está pronta para te atender e transformar suas ideias em soluções inovadoras." />
        <a className="button button-primary large" href={site.whatsapp} target="_blank" rel="noreferrer">Vamos conversar <MessageCircle size={18}/></a>
      </div>
      <div className="contact-card" data-reveal>
        <div className="contact-item"><MapPin/><div><span>Endereço</span>{site.address.map(line => <p key={line}>{line}</p>)}</div></div>
        <div className="contact-item"><Phone/><div><span>Telefone</span><a href={site.whatsapp} target="_blank" rel="noreferrer">{site.phone}</a></div></div>
        <div className="contact-item"><Building2/><div><span>Informações da Empresa</span>{site.company.map(line => <p key={line}>{line}</p>)}</div></div>
        <div className="contact-item"><Mail/><div><span>E-mail</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
      </div>
    </div>
  </section>;
}

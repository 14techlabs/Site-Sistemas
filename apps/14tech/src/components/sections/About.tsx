import { UsersRound } from "lucide-react";
import { SectionIntro } from "../ui/SectionIntro";

export function About() {
  return <section className="section section-light" id="sobre">
    <div className="container about-layout">
      <SectionIntro eyebrow="QUEM SOMOS" title="Soluções para Gestão Pública" />
      <div className="about-copy" data-reveal>
        <div className="about-mark"><UsersRound size={28} /></div>
        <p>A 14Tech Soluções Para Gestão Pública, atua na consultoria para desenvolvimento de sistemas para área pública, abrangendo especialmente o poder executivo.</p>
        <p>A nossa equipe é formada por profissionais extremamente capacitados e em constante processo de aprimoramento. Espírito de equipe e valorização dos indivíduos, representa um ambiente harmônico e de incentivo à colaboração, pautado no tratamento zeloso entre pessoas, o foco sempre está na Inovação e gestão do conhecimento e sua aplicação na prática.</p>
      </div>
    </div>
  </section>;
}

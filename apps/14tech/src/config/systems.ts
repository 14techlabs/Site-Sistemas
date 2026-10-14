export type System = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  logo: string;
  preview?: string;
  theme: "gardian" | "suapre" | "sigac" | "frotason";
};

const isDev = import.meta.env.DEV;

const DEV_PORTS: Record<System["theme"], number> = {
  gardian: 5174,
  suapre: 5175,
  sigac: 5176,
  frotason: 5177,
};

const PROD_URLS: Record<System["theme"], string> = {
  gardian: "https://gardian.14tech.com.br",
  suapre: "https://suapre.14tech.com.br",
  sigac: "https://sigac.14tech.com.br",
  frotason: "https://frotason.14tech.com.br",
};

const href = (id: System["theme"]): string =>
  isDev ? `http://localhost:${DEV_PORTS[id]}` : PROD_URLS[id];

export const systems: System[] = [
  {
    id: "gardian",
    name: "GARDIAN",
    eyebrow: "Monitoramento e gestão de riscos municipais",
    description:
      "Sistema desenvolvido para monitorar e gerenciar áreas de risco, apoiando o acompanhamento do território e a tomada de decisão.",
    href: href("gardian"),
    logo: "./systems/GARDIAN/logo_gardian_colorido.png",
    preview: "./systems/GARDIAN/monitoramento_gardian.png",
    theme: "gardian",
  },
  {
    id: "suapre",
    name: "SUAPRE",
    eyebrow: "Gestão integrada das contratações públicas",
    description:
      "Do planejamento ao almoxarifado, o SUAPRE organiza processos, documentos, contratos e recursos em um único sistema.",
    href: href("suapre"),
    logo: "./systems/SUAPRE/logo_suapre_azul.png",
    preview: "./systems/SUAPRE/contratos_suapre.png",
    theme: "suapre",
  },
  {
    id: "sigac",
    name: "SIGAC",
    eyebrow: "Sistema Integrado de Gestão Ambiental Compartilhada",
    description:
      "Acompanha o processo de licenciamento ambiental, da solicitação do cidadão à emissão da licença, além da gestão de fiscalização.",
    href: href("sigac"),
    logo: "./systems/SIGAC/icon_sigac.png",
    preview: "./systems/SIGAC/dashboard_sigac.png",
    theme: "sigac",
  },
  {
    id: "frotason",
    name: "FrotasON",
    eyebrow: "Sistema de Gerenciamento de Frotas Públicas",
    description:
      "Toda a gestão da frota pública em um único sistema: veículos, agendamentos, despesas, abastecimentos e manutenções organizados.",
    href: href("frotason"),
    logo: "./systems/Frotas-ON/logo_frotason.png",
    preview: "./systems/Frotas-ON/dashboard_frotason.png",
    theme: "frotason",
  },
];
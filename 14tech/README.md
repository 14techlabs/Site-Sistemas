# 14Tech — Landing Page

Landing page da 14Tech refatorada em React + TypeScript + Vite, mantendo a identidade visual e as informações institucionais do site fornecido.

## Estrutura

- `src/config/` — conteúdo institucional e configuração das soluções.
- `src/components/layout/` — cabeçalho e rodapé.
- `src/components/sections/` — seções da página.
- `src/components/ui/` — componentes de interface reutilizáveis.
- `src/hooks/` — comportamentos de interação e animação.
- `src/styles/` — estilos globais, responsividade e microinterações.
- `public/brand/` — identidade visual da 14Tech.
- `public/systems/` — logos e imagens dos sistemas apresentados.

## Soluções

A seção **Nossas Soluções** apresenta os sistemas GARDIAN, SUAPRE, SIGAC e FrotasON, usando as respectivas identidades visuais e imagens disponíveis nos projetos fornecidos.

Os links dos cards são relativos ao domínio principal:

- `./GARDIAN/`
- `./SUAPRE/`
- `./SIGAC/`
- `./Frotas-ON/`

Quando as páginas forem publicadas nesses caminhos, os cards já apontam para elas.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

O projeto usa `base: "./"` no Vite para facilitar a publicação como site estático.

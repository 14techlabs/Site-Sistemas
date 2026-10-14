# 14tech — Monorepo

Repositório único com cinco aplicações web independentes da 14tech, orquestradas
por [Turborepo](https://turbo.build/) e npm Workspaces. Cada aplicação mantém
seu próprio Vite config, identidade visual e dependências declaradas.

O site **14tech** funciona como hub institucional: a partir dele, o visitante
acessa os quatro sistemas de produto. Cada sistema tem um botão "← 14tech" para
voltar ao hub.

## Aplicações

| App | Pasta | Descrição |
|-----|-------|-----------|
| 14tech | `apps/14tech` | Site institucional (hub) |
| SUAPRE | `apps/suapre` | Sistema de gestão de contratações públicas |
| SIGAC | `apps/sigac` | Sistema integrado de gestão ambiental |
| GARDIAN | `apps/gardian` | Monitoramento e gestão de riscos |
| FrotasON | `apps/frotason` | Gestão de frotas públicas |

## Stack

- **React 19** + **TypeScript 5.9**
- **Vite 6.4.4** por aplicação
- **Tailwind CSS 4** (com configurações distintas por app)
- **TanStack Router** nos apps SIGAC, GARDIAN e FrotasON
- **Turborepo 2.11** para orquestração e cache
- **npm Workspaces** como gerenciador de pacotes

## Requisitos

- **Node.js** `>=20.12.0 <23` (versão de referência em `.nvmrc`: `22.16.0`)
- **npm** `>=10`

> ⚠️ Foi testado com Node 24 e funcionou, mas a faixa oficial é 20 a 22.

## Instalação

```bash
npm install
```

Isso instala as dependências de todas as aplicações e pacotes internos de uma vez.

## Comandos

### Na raiz (afetam todos os apps)

```bash
npm run dev         # roda todos os apps em paralelo
npm run build       # builda todos os apps (com cache do Turbo)
npm run lint        # roda lint em todos os apps
npm run type-check  # type-check em todos os apps
npm run verify      # type-check + lint + build (por app)
npm run clean       # limpa node_modules e caches
```

### Por aplicação

```bash
npm run dev --workspace=apps/14tech
npm run build --workspace=apps/14tech
npm run verify --workspace=apps/14tech
```

### Cache do Turbo

A segunda execução de `npm run build` costuma mostrar `FULL TURBO` e rodar em
menos de 2 segundos. Isso é o cache funcionando — não é bug.

## Rodando os apps em dev

Cada app roda em uma porta fixa:

| App | Porta | URL |
|-----|-------|-----|
| 14tech | 5173 | http://localhost:5173 |
| GARDIAN | 5174 | http://localhost:5174 |
| SUAPRE | 5175 | http://localhost:5175 |
| SIGAC | 5176 | http://localhost:5176 |
| FrotasON | 5177 | http://localhost:5177 |

### Rodar todos ao mesmo tempo

Abra 5 terminais ou use o `npm run dev` na raiz (Turborepo paraleliza):

```bash
npm run dev
```

### Rodar apenas um

```bash
npm run dev --workspace=apps/14tech
```

## Navegação entre aplicações

- **Em dev**: os cards do site 14tech (`localhost:5173`) apontam para os
  `localhost:5174` a `5177`. Cada sistema tem um botão "← 14tech" no canto
  inferior esquerdo.
- **Em produção**: os cards apontam para subdomínios
  (`https://suapre.14tech.com.br`, etc.) — configuração de DNS ainda pendente.

## Pacotes internos

- **`@14tech/ui`** — espaço reservado para componentes compartilhados. **Nenhum
  componente foi extraído ainda.**
- **`@14tech/styles`** — tokens CSS (`--ds-*`) e temas por produto.
- **`@14tech/config`** — convenções compartilhadas de ESLint, TypeScript e Vite.
- **`@14tech/utils`** — utilitários realmente compartilhados.
- **`@14tech/types`** — tipos realmente compartilhados.

Os pacotes são privados (`"private": true`) e não são publicados no npm.
Não há importações diretas entre aplicações — toda comunicação é via URL.

## Estrutura de diretórios

```
.
├── apps/                    # 5 aplicações independentes
│   ├── 14tech/
│   ├── suapre/
│   ├── sigac/
│   ├── gardian/
│   └── frotason/
├── packages/                # pacotes compartilhados
│   ├── ui/                  # (vazio por enquanto)
│   ├── styles/              # tokens + temas
│   ├── config/              # eslint, tsconfig, vite base
│   ├── utils/
│   └── types/
├── migration-artifacts/     # lockfiles originais + documentação da migração
│   └── legacy-lockfiles/
├── docs/                    # documentação arquitetural
├── tooling/                 # scripts de verificação e automação
├── package.json             # raiz do workspace
├── turbo.json
├── tsconfig.base.json
└── .nvmrc
```

## Estado atual do projeto

### ✅ Pronto e funcionando

- 5 apps buildando e passando type-check
- Navegação entre os 5 apps em dev
- Botão "← 14tech" nos 4 sistemas
- WhatsApp unificado entre os apps
- Cache do Turbo funcionando

### ⏳ Pendente

- **Deploy em subdomínios** — DNS, HTTPS e hospedagem ainda não configurados
- **`packages/ui`** — estrutura criada, mas sem componentes extraídos
- **ESLint** — config básica, precisa revisão
- **Testes automatizados** — não há testes ainda
- **CI/CD** — não há pipeline configurado
- **Frotason** — chunk de 900KB precisa code-splitting

### ⚠️ Riscos conhecidos

- Apps usam Tailwind 4 com configurações divergentes (uns com Preflight, outros
  sem — decisão intencional para preservar o CSS legado de 14tech e SUAPRE).
- `--orange` no SUAPRE e `--navy-2` no Frotason são variáveis com nomes
  enganosos (herança do design antigo). Não renomeadas para evitar quebra.
- Formatos de link de WhatsApp divergentes entre apps (`wa.me` vs
  `api.whatsapp.com/send?phone=`).

## Documentação adicional

- `MIGRATION_NOTES.md` — decisões e limitações da migração
- `docs/ARCHITECTURE.md` — arquitetura do monorepo
- `docs/DESIGN_SYSTEM.md` — tokens e temas por produto
- `docs/MIGRATION_GUIDE.md` — histórico da migração
- `docs/CONTRIBUTING.md` — convenções de código

## Convenções

- **Commits**: [Conventional Commits](https://www.conventionalcommits.org/) —
  `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- **CSS legado** em `apps/14tech` e `apps/suapre`: **não editar** sem
  autorização (a preservação byte a byte foi um requisito da migração)
- **Novos componentes** vão para `packages/ui` quando usados por 2+ apps
- **Imports entre apps são proibidos** — comunicação apenas via URL
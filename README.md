# 14tech — Monorepo

Repositório com cinco aplicações independentes e pacotes compartilhados internos. Cada aplicação mantém seu próprio Vite config, identidade visual e dependências declaradas.

## Aplicações

- `apps/14tech` — site institucional
- `apps/suapre` — SUAPRE
- `apps/sigac` — SIGAC
- `apps/gardian` — GARDIAN
- `apps/frotason` — FrotasON

## Requisitos

Node.js `>=20.12.0 <23` (versão de referência em `.nvmrc`: `22.16.0`) e npm `>=10`.

## Instalação e comandos

Na raiz: `npm install`, depois `npm run build`. Para executar tarefas de uma aplicação: `npm run dev --workspace=14tech-site` ou use o nome de workspace declarado no `package.json` da aplicação. Os nomes atuais dos workspaces são mantidos para minimizar mudanças.

`npm run verify --workspace=<nome-do-workspace>` executa type-check, lint e build quando os scripts e ferramentas correspondentes estão configurados. Veja `MIGRATION_NOTES.md` para limitações conhecidas.

## Pacotes internos

- `@14tech/ui`: espaço reservado para componentes compartilhados; nenhum componente foi extraído nesta migração.
- `@14tech/styles`: tokens e temas CSS por produto.
- `@14tech/config`: convenções compartilhadas de ESLint, TypeScript e Vite.
- `@14tech/utils` e `@14tech/types`: espaços reservados para utilitários e tipos realmente compartilhados.

Os pacotes são privados e não são publicados no npm. Não há importações diretas entre aplicações.

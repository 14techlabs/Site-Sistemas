# Notas da migração

## Executado

- Organizados os cinco projetos em `apps/14tech`, `apps/suapre`, `apps/sigac`, `apps/gardian` e `apps/frotason`.
- Criado o workspace npm na raiz, configuração Turbo, `tsconfig.base.json`, `.nvmrc`, `.gitignore`, README e diretrizes Conventional Commits.
- Criadas estruturas `packages/ui`, `packages/styles`, `packages/config`, `packages/utils` e `packages/types`.
- Criados tokens `--ds-*` e temas separados por produto.
- Adicionada infraestrutura Tailwind CSS 4 sem import de Preflight em 14tech e SUAPRE, incluindo plugin Vite e import em `main.tsx`. Os arquivos de CSS legado foram copiados sem edição.
- Adicionado `products.ts` com os quatro subdomínios propostos. Confirmar DNS/domínios antes de publicar.
- Adicionado script versionado de screenshots Playwright com viewports 1440×900 e 390×844 e movimento reduzido. Não executado.
- Preservados os package-locks antigos em `migration-artifacts/legacy-lockfiles/`; o lockfile raiz deve ser gerado por `npm install` no computador do usuário.

## Pendente / requer validação local

- Nenhum `npm install`, `npm ci`, build, lint ou teste foi executado nesta entrega, conforme solicitado.
- `npm install` na raiz deve gerar o lockfile único do workspace. Depois disso, avaliar se os lockfiles arquivados podem ser removidos do pacote.
- 14tech e SUAPRE receberam as dependências `tailwindcss` e `@tailwindcss/vite` na faixa `^4.0.14`, pois não as declaravam anteriormente. As versões já declaradas nas demais aplicações foram mantidas.
- Os scripts `verify` existem nos cinco apps. Em alguns apps, os comandos `type-check` e/ou `lint` podem precisar de dependências/configuração adicional; não foram instaladas ferramentas de lint onde não existiam para evitar atualização não solicitada de dependências.
- O script Playwright pressupõe URLs locais acessíveis e que Playwright/Chromium estejam instalados no ambiente que o executar. Ajustar as URLs/portas por variáveis de ambiente.
- Validar importação de Tailwind 4 e precedência do CSS legado, particularmente seletores globais e regras `!important`. Preflight foi omitido intencionalmente.
- Validar os caminhos dos assets, rotas TanStack geradas, aliases TypeScript, links de produtos, builds e screenshots nos dois viewports.
- Os temas e tokens são scaffolding inicial; não foram aplicados automaticamente às páginas para evitar alteração visual.
- `packages/ui` está vazio de componentes por decisão; não foram feitas importações entre apps.

## Preservação de estilos

Os arquivos `apps/14tech/src/styles/index.css` e `apps/suapre/src/styles.css` foram mantidos byte a byte conforme copiados da fonte. Nenhum arquivo CSS dos apps SIGAC, GARDIAN e Frotas-ON foi modificado intencionalmente.

## Git e dependências

O diretório `.git` da fonte foi preservado na raiz do monorepo. O ZIP não inclui diretórios `node_modules`.

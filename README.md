# Comando Financeiro Site

Portal institucional e comercial do ecossistema Comando Financeiro. Este projeto é independente da aplicação Central de Comando.

## Requisitos

- Node.js 22.12 ou superior
- npm

## Instalação

```sh
npm install
```

Copie `.env.example` para `.env`. O domínio oficial já está configurado como
`https://metodocomandofinanceiro.com.br`.

## Desenvolvimento local

```sh
npm run dev
```

Por padrão, o Astro informa no terminal o endereço local, normalmente `http://localhost:4321`.

## Verificações

```sh
npm run check
npm run build
```

O build estático é gerado em `dist/`.

## Publicação futura no Cloudflare Pages

O projeto está configurado como site estático e não requer adapter de servidor. Ao conectar futuramente o repositório do GitHub ao Cloudflare Pages, use:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `PUBLIC_SITE_URL` com o domínio público definitivo

Nenhuma publicação é executada automaticamente por este repositório.

## Estrutura

```text
public/                Arquivos estáticos
src/components/        Componentes compartilhados
src/config/            Configuração central do site
src/data/              Dados estruturados das soluções
src/layouts/           Layouts reutilizáveis
src/pages/             Rotas do site
src/styles/            CSS global e design tokens
```

## Rotas iniciais

- `/`
- `/formacao-commander`
- `/raio-x-financeiro`
- `/central-de-comando`
- `/contato`
- `/politica-de-privacidade`
- `/termos-de-uso`
- `/robots.txt`

O sitemap é gerado durante o build em `/sitemap-index.xml`.

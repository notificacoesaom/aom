
## Objetivo

Site institucional single-page para a **Associação Ornitológica Montemorense**, com design moderno em tons verde-floresta/branco/cinzento, totalmente responsivo, e compatível com GitHub Pages (build gera `dist/index.html` estático).

## Migração da base técnica

O template atual usa TanStack Start (SSR). Vou reconstruir como Vite SPA puro:

**Remover:**
- `src/server.ts`, `src/start.ts`
- `src/routes/` (incluindo `__root.tsx`, `index.tsx`, `README.md`, `api/`)
- `src/routeTree.gen.ts`
- Dependências: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`, `vinxi`

**Criar:**
- `index.html` na raiz (entrypoint Vite SPA)
- `src/main.tsx` — bootstrap React + ReactDOM
- `src/App.tsx` — layout único (single page)
- `vite.config.ts` — apenas plugin React + alias `@`, sem TanStack. Adicionar `base: './'` para caminhos relativos (GitHub Pages compatível em qualquer subpath).
- `package.json` scripts: `dev`, `build`, `preview` (standard Vite).

Manter Tailwind v4 + `src/styles.css` + shadcn/ui + `lucide-react`.

## Estrutura de componentes

```
src/
├── main.tsx
├── App.tsx
├── styles.css              (paleta verde-floresta)
├── components/
│   ├── Header.tsx          (nav + smooth scroll + botão CTA sócio)
│   ├── Hero.tsx            (imagem full-bleed + headline + CTA)
│   ├── Sobre.tsx           (texto + downloads Estatutos/Regulamento)
│   ├── Vantagens.tsx       (grid 4 cartões com ícones lucide)
│   ├── Anilhas.tsx         (info anilhas federais e quotas)
│   ├── Exposicoes.tsx      (countdown até outubro 2026 + info evento)
│   ├── Contactos.tsx       (opcional — pode integrar no footer)
│   └── Footer.tsx          (contactos, morada, horário, IBAN, redes)
└── assets/                 (imagens geradas)
```

Todas as secções recebem `id` (`#inicio`, `#sobre`, `#vantagens`, `#anilhas`, `#exposicoes`, `#contactos`) e o Header usa `<a href="#id">` com `scroll-behavior: smooth` no CSS global.

## Design system (src/styles.css)

Paleta em oklch:
- `--primary` — verde-floresta profundo
- `--primary-glow` — verde mais claro para gradientes
- `--background` — branco quente
- `--muted` — cinzento suave
- `--accent` — verde-sálvia
- Gradiente hero e sombra elegante como tokens

Tipografia: Inter (sans) via `<link>` no `index.html`. Headings com tracking apertado.

## Conteúdo

- **Nome:** Associação Ornitológica Montemorense
- **Hero headline:** "Preservar, criar e celebrar a ornitologia em Montemor"
- **CTA principal:** "Ser Sócio" → âncora `#inscricao` (ou link placeholder)
- **Vantagens (4):**
  1. Anilhamento Oficial (ícone `BadgeCheck`)
  2. Exposições (ícone `Trophy`)
  3. Comunidade (ícone `Users`)
  4. Descontos (ícone `Tag`)
- **Countdown exposição:** target date `2026-10-15T09:00:00` (outubro 2026, ajustável)
- **Downloads:** botões com `href="#"` placeholder para Estatutos.pdf e RegulamentoInterno.pdf
- **Rodapé:** morada Montemor placeholder, horário, IBAN `PT50 0000 0000 0000 0000 0000 0`, ícones Facebook/Instagram

## Imagens (geradas com IA, guardadas em src/assets/)

1. `hero-birds.jpg` (1920×1024) — canários e periquitos coloridos em ambiente natural sereno, luz dourada, estilo fotográfico profissional
2. `sobre-aviario.jpg` (1024×1024) — vista de aviário elegante com pássaros exóticos
3. `exposicao.jpg` (1024×1024) — gaiolas de exposição alinhadas em pavilhão iluminado

## Countdown

Componente cliente com `useEffect` + `setInterval` a calcular `dias / horas / minutos / segundos` até à data alvo. Sem dependências externas.

## Smooth scroll

`html { scroll-behavior: smooth; scroll-padding-top: 5rem; }` em `styles.css` para compensar header fixo.

## Responsividade

- Header colapsa para menu hambúrguer (`lucide-react` Menu/X) abaixo de `md:`
- Grid vantagens: 1 col mobile → 2 col `sm` → 4 col `lg`
- Hero: texto centrado em mobile, alinhado à esquerda em desktop

## Verificação final

- `bun run build` gera `dist/index.html` na raiz de `dist/`
- Assets com caminhos relativos (`./assets/...`) via `base: './'`
- Sem qualquer referência a TanStack, SSR ou server functions no bundle final

# bevz.dev

Personal site for `bevz.dev`.

The current version is a static public profile for Aleksey Bevz as a hands-on
DevOps / Platform Engineer. It is meant to be calm, concise, and publishable:
clear positioning, selected engineering work, short engineering notes, and a
direct contact path.

## Current State

The site is implemented and buildable.

What exists now:

- main landing page at `/`
- supporting pages for `/projects`, `/notes`, and `/cv`
- Ayu-inspired visual system with golden dragon brand mark
- typed data sources for profile, work cards, services, skills, and notes
- static Astro build ready for GitHub -> Cloudflare Pages deployment
- repository guidance in [AGENTS.md](./AGENTS.md)
- planning docs in [docs/PLAN.md](./docs/PLAN.md), [docs/STRUCTURE.md](./docs/STRUCTURE.md), and [docs/NOTES.md](./docs/NOTES.md)

## Intended Stack

- Astro
- TypeScript data modules for concise site content
- Markdown / MDX for future full engineering notes
- Cloudflare Pages
- optional analytics later

## Public Scope

- calm public profile at `bevz.dev`
- pages for selected engineering work, notes, and short-form CV
- no fake blog content or inflated consulting copy
- static deploy from GitHub to Cloudflare Pages

## Repository Layout

```text
docs/                  Planning and structure docs
public/                Static assets
src/components/        Astro UI components
src/content/notes/     Future full note articles in Markdown / MDX
src/data/              Typed project/content data
src/layouts/           Shared page layouts
src/pages/             Route entrypoints
src/styles/            Global styles and theme tokens
```

## Local Build

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

## Content Notes

- note listing cards currently come from [src/data/notes.ts](./src/data/notes.ts)
- future full note articles should live under `src/content/notes/`
- the writing contract for future articles is documented in [docs/NOTES.md](./docs/NOTES.md)

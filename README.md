# bevz.dev

Personal site for `bevz.dev`.

The first version is a static portfolio site for Aleksey Bevz as a DevOps /
Platform Engineer with emphasis on Kubernetes, Infrastructure as Code, CI/CD,
Observability, Cloudflare, and Go automation.

## Current State

This repository is intentionally in the planning and structure phase.

What exists now:

- project brief in [bevz_dev_codex_brief.md](./bevz_dev_codex_brief.md)
- repository workflow guidance in [AGENTS.md](./AGENTS.md)
- initial project plan in [docs/PLAN.md](./docs/PLAN.md)
- initial information architecture in [docs/STRUCTURE.md](./docs/STRUCTURE.md)
- starter directory skeleton for the Astro implementation

## Intended Stack

- Astro
- Tailwind CSS
- Markdown / MDX
- Cloudflare Pages
- Cloudflare Web Analytics

## Target Outcome For V1

- landing page at `bevz.dev`
- supporting pages for `/projects` and `/cv`
- Ayu-inspired design system
- clear project cards and contact links
- static deploy from GitHub to Cloudflare Pages

## Repository Layout

```text
docs/                  Planning and structure docs
public/                Static assets
src/components/        Astro UI components
src/data/              Typed project/content data
src/layouts/           Shared page layouts
src/pages/             Route entrypoints
src/styles/            Global styles and theme tokens
```

## Next Build Step

The next implementation step is to scaffold the Astro project itself into the
existing structure and turn the planning docs into a working site shell.

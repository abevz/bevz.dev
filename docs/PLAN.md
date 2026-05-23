# bevz.dev Plan

## Goal

Ship a static portfolio site for `bevz.dev` that improves hiring signal for
DevOps / Platform Engineering roles by showing real platform work, project
evidence, and a direct contact path.

## Phase 0: Repository Baseline

- [x] Preserve the project brief in the repository
- [x] Add repository instructions and workflow guidance
- [x] Define starter directory structure
- [x] Write planning and structure docs
- [ ] Convert the repo to bare + `main` worktree layout

## Phase 1: Site Skeleton

- [ ] Scaffold Astro project into the existing repository
- [ ] Add base layout, metadata, and global styles
- [ ] Implement Ayu-inspired theme tokens in `src/styles/global.css`
- [ ] Create initial routes: `/`, `/projects`, `/cv`
- [ ] Add shared components: header, footer, section heading

## Phase 2: Core Content

- [ ] Build hero section with CTA buttons
- [ ] Build terminal card
- [ ] Build featured projects section
- [ ] Build grouped skills section
- [ ] Build current focus section
- [ ] Build contact section

## Phase 3: Content Hardening

- [ ] Replace placeholders with final links and profile data
- [ ] Tighten wording for recruiter and hiring-manager readability
- [ ] Mark unfinished projects clearly as `In progress` where needed
- [ ] Add CV page content or download link

## Phase 4: Deployment

- [ ] Add Astro package scripts and build config
- [ ] Configure Cloudflare Pages
- [ ] Configure custom domain `bevz.dev`
- [ ] Configure `www.bevz.dev` redirect
- [ ] Enable Cloudflare Web Analytics

## Non-Goals For V1

- no backend API
- no contact form backend
- no database, KV, D1, or R2
- no blog engine unless explicitly prioritized later

## Immediate Next Task

Scaffold the Astro app structure into this repo and turn the planning skeleton
into a working static site shell.

# bevz.dev Plan

## Goal

Ship a static public profile for `bevz.dev` that supports hiring and selective
commercial work for DevOps / Platform Engineering roles through clear
positioning, practical work evidence, short notes, and direct contact.

## Phase 0: Repository Baseline

- [x] Preserve the project brief in the repository
- [x] Add repository instructions and workflow guidance
- [x] Define starter directory structure
- [x] Write planning and structure docs
- [x] Convert the repo to bare + `main` worktree layout

## Phase 1: Site Skeleton

- [x] Scaffold Astro project into the existing repository
- [x] Add base layout, metadata, and global styles
- [x] Implement Ayu-inspired theme tokens in `src/styles/global.css`
- [x] Create initial routes: `/`, `/projects`, `/notes`, `/cv`
- [x] Add shared components: header, footer, section heading

## Phase 2: Core Content

- [x] Build hero section with CTA buttons
- [x] Build terminal card
- [x] Build selected engineering work section
- [x] Build engineering notes index section
- [x] Build grouped skills section
- [x] Build current focus section
- [x] Build contact section

## Phase 3: Content Hardening

- [x] Replace placeholders with final links and profile data
- [x] Tighten wording for recruiter and hiring-manager readability
- [x] Add favicon and OG image assets
- [x] Add note-card structure without fake articles
- [x] Publish the first evidence-based engineering article with a content-driven detail page
- [ ] Add downloadable CV file if a public PDF is needed

## Phase 4: Deployment

- [x] Add Astro package scripts and build config
- [ ] Configure Cloudflare Pages
- [ ] Configure custom domain `bevz.dev`
- [ ] Configure `www.bevz.dev` redirect
- [ ] Decide on analytics approach and add only if needed

## Non-Goals For V1

- no backend API
- no contact form backend
- no database, KV, D1, or R2
- no generic blog engine
- no fake long-form technical articles

## Immediate Next Task

Publish additional articles only when the underlying evidence is ready; keep
planned topics visibly distinct from published work.

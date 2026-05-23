# bevz.dev - AI Agent Guide

This file provides repository guidance to AI coding agents working in
`/home/abevz/github/bevz.dev`.

## Instruction Files

- `AGENTS.md` is tracked in git and should live on `main` so new worktrees
  inherit it.
- `CLAUDE.md` should point to `AGENTS.md`.

## Git Workflow

- This repository should use a bare repo plus git worktrees.
- Bare repo path should be `/home/abevz/github/bevz.dev/.bare`.
- Main worktree path should be `/home/abevz/github/bevz.dev/main`.
- Treat `main` as read, update, and status only after the worktree layout is in
  place.
- Keep repository-wide instruction files in `main` so every new worktree starts
  with the same baseline.
- Make changes on feature branches in sibling worktrees under
  `/home/abevz/github/bevz.dev/`.
- One task means one branch, one sibling worktree, and one PR.
- Create new worktrees from `main`, then do task changes inside that sibling
  worktree.
- Do not push directly to `main`.
- Remove completed worktrees with `git worktree remove`, not raw directory
  deletion.

## Project Goal

- Build a personal portfolio site for `bevz.dev`.
- Optimize for hiring signal, not novelty for its own sake.
- The site should quickly show real platform/infrastructure work, project
  evidence, and a clean contact path.

## Source Of Truth

- The primary product brief is `bevz_dev_codex_brief.md`.
- If implementation choices are ambiguous, prefer the brief over generic web
  portfolio conventions.
- Keep planning docs in `docs/` aligned with the brief; do not let them drift.

## Product Constraints

- First release should stay static and cheap to host on Cloudflare Pages.
- Avoid backend work unless explicitly requested.
- Prefer content-first implementation with minimal JavaScript.
- Keep structure ready for future `/projects`, `/cv`, and optional `/notes`
  expansion.

## Design Constraints

- Preserve the Ayu-inspired visual direction from the brief.
- Avoid generic white startup pages, purple defaults, and neon hacker tropes.
- Keep the tone professional, warm, technical, and readable.
- Mobile layout must be first-class, not a desktop afterthought.

## Implementation Guidance

- Prefer Astro for page structure and content rendering.
- Keep data for projects and profile content separate from presentation
  components where practical.
- Use semantic HTML, accessible contrast, visible focus states, and reduced
  motion support when adding animation.
- Start with a strong content skeleton before spending time on decorative polish.

## Content Guidance

- Emphasize concrete infrastructure projects over broad skill lists.
- Keep claims evidence-based and interview-useful.
- Distinguish between active projects, in-progress work, and future ideas.

## Attribution Rules

- Do not add AI assistant names, agent names, or bot identities to commit
  authors, committers, co-author trailers, commit messages, PR descriptions, or
  repository documentation.
- Do not add `Co-authored-by`, `Generated-by`, or similar attribution lines for
  AI tools.

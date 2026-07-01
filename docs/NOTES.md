# Engineering Notes Authoring

## Goal

Use `Notes` as a compact engineering writing section, not as a generic blog.
Each published note should come from real troubleshooting, infrastructure work,
or platform-engineering decisions.

## Current State

Today the public `/notes` page is driven by:

- [src/data/notes.ts](../src/data/notes.ts) for the listing cards

That file controls:

- title
- short description
- tags
- slug
- planned coverage outline

## When To Create A Real Article

Create a full note page only when you have real material such as:

- a troubleshooting sequence
- a comparison or decision record
- a repeatable implementation pattern
- a practical lesson from production or production-like lab work

Do not publish a full note just to fill the site.

## Where To Put Full Articles

Put future full notes here:

```text
src/content/notes/<slug>.md
```

Use `.md` by default.
Use `.mdx` only if the note truly needs embedded components.

## File Naming

Use the same slug as in `src/data/notes.ts`.

Examples:

```text
src/content/notes/harbor-registry-container-runtime-troubleshooting.md
src/content/notes/kube-prometheus-stack-troubleshooting.md
```

## Frontmatter Contract

Use this frontmatter:

```md
---
title: "IRSA vs EKS Pod Identity"
description: "A practical comparison of AWS IAM approaches for Kubernetes workloads."
tags:
  - AWS
  - EKS
  - IAM
  - Kubernetes
status: "published"
publishedAt: "2026-05-23"
updatedAt: "2026-05-23"
---
```

Required fields:

- `title`
- `description`
- `tags`
- `status`
- `publishedAt`

Optional fields:

- `updatedAt`

## Recommended Article Shape

Keep articles practical and scannable.

Recommended structure:

```md
# Title

## Context
What environment or problem this note comes from.

## Problem
What failed, what was confusing, or what decision had to be made.

## What Matters
The short engineering takeaway.

## Details
Commands, config snippets, decision points, caveats.

## Practical Guidance
What to repeat, what to avoid, and when this pattern fits.
```

## Tone Rules

- Write like an engineer, not like a marketer.
- Prefer concrete observations over abstract claims.
- Avoid lifestyle-blog tone.
- Avoid filler intros.
- Avoid fake certainty when a trade-off is contextual.

## Practical Publishing Workflow

1. Add or update the note card in `src/data/notes.ts`.
2. When real content exists, create `src/content/notes/<slug>.md`.
3. Mark the note as published in the future content-driven route.
4. Replace the public `Planned` state with a real `Read note` link.

## First Good Candidates

These are strong first real notes for the site:

- `harbor-registry-container-runtime-troubleshooting`
- `kube-prometheus-stack-troubleshooting`

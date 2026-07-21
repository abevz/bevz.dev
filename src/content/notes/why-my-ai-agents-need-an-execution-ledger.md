---
title: "Why My AI Agents Need an Execution Ledger"
description: "How a single-writer daemon, renewable leases, and Git worktrees turned parallel coding agents into an auditable workflow."
tags:
  - AI agents
  - Go
  - SQLite
  - Git worktrees
status: "published"
publishedAt: "2026-07-22"
---

Running one coding agent is easy to understand. It gets a task, changes files,
and returns a result.

Running several agents across multiple repositories and Git worktrees creates a
different problem. The difficult question is no longer, “Can an agent write the
code?” It is, “Can every worker see the same execution state, and can I trust
that state afterwards?”

I kept seeing the same quiet failure modes: two workers starting the same task,
work landing in the wrong checkout, dependencies being missed, and abandoned
work looking permanently owned. None of these failures makes a dramatic demo.
Together, they make unattended automation hard to trust.

That is why I built
[`af-coordinator`](https://github.com/abevz/af-coordinator): a local-first
execution ledger for AI agents.

## The storage model was the first design decision

Before `af-coordinator`, I used useful task-flow ideas from Beads: short task
IDs, dependencies, a computed ready queue, and notes. My setup also used a
shared Dolt database. After recovering a corrupted journal, the mismatch became
clear. The workflow ideas were valuable; putting shared, multi-writer,
operational state behind shell-driven synchronization was the fragile part.

I kept the task semantics and replaced the write model:

```text
agents / scripts / tools
        |
        | HTTP + JSON over a Unix socket
        v
af-coordinatord
        |
        v
SQLite in WAL mode
```

The important property is not SQLite by itself. It is that one daemon owns all
writes. Agents never open the database directly. The daemon validates state
transitions, allocates IDs, manages leases, rejects dependency cycles, and
records an append-only event trail.

For a personal agent fleet on one machine, a Unix socket keeps the service
local and avoids inventing a network security model before one is needed.
SQLite keeps backup and recovery simple while the daemon preserves a clear
single-writer boundary.

## A claim is a lease, not an assignment

The worker protocol is deliberately small:

```text
ready -> claim -> heartbeat -> note -> close
                               |
                               +-> handoff and release
```

`ready` is computed from issue status, dependencies, and current leases. A
worker claims an issue for a limited time and receives a secret lease token. It
renews that lease while working. If it disappears, the lease expires and the
issue can return to the ready pool.

This matters because autonomous workers fail differently from people. A human
assignment can remain on a board until someone notices it. A crashed process
should not own work forever.

The coordinator also turns concurrency failures into stable machine-readable
results. If two workers race to claim one issue, exactly one succeeds. The
other receives `lease_held` and can select different work instead of parsing a
paragraph of error text.

## Git and the coordinator own different truths

I do not want an issue database hidden inside Git, and I do not want an
execution ledger to replace specifications.

The boundary I use is:

| Concern | Source of truth |
|---|---|
| Requirements and design | Spec files in Git |
| Live ownership, attempts, blockers, and handoffs | `af-coordinator` |
| Implementation and review | Worktree, branch, commit, and pull request |

Each agent works in an isolated sibling worktree. The issue can link to the
relevant spec before work starts and to the branch, pull request, and commit
when it closes. This creates an audit path from intent to execution to evidence
without putting transient leases or runtime data in the repository.

The distinction is also useful when reviewing AI-heavy work. A list of closed
issues with merge commits gives me the exact review scope. The bookkeeping that
prevents duplicate execution becomes a map of what the agents actually changed.

## Dogfooding changed the design

The coordinator tracks its own development. Before editing the repository, a
worker checks the `afc` ready queue, claims the matching issue, works in a
sibling worktree, and closes or hands it off with a note.

That exposed problems that a whiteboard design did not: leaked lease tokens,
ambiguous identifiers, stale installed binaries, missing atomic handoff, and
confusing dependency direction. Those failures became specs, regression tests,
and protocol changes.

At the time of writing, the live coordinator contains 403 issues across nine
projects, with 336 completed. The `af-coordinator` project itself had completed
50 of 56 issues in the statistics snapshot used for this article. The numbers
are not a scale claim; they show that the protocol is being exercised by real
daily work rather than only unit tests.

Most of the Go implementation was produced by AI agents working from my specs
and review. My role is architecture, protocol design, task slicing, review, and
operation. I think that distinction is worth stating plainly: the interesting
engineering result is not pretending I typed every line. It is building a
system in which agent-produced changes remain bounded and reconstructable.

## What the coordinator is not

`af-coordinator` is not a project-management UI, an agent runtime, or a
distributed workflow engine. It does not replace Temporal in my agent factory,
and it does not make GitHub Issues mandatory.

It answers a smaller set of operational questions:

- What work is actually ready?
- Who holds it now?
- What blocks it?
- What happened during the attempt?
- Can another worker continue safely?

That narrow scope is a feature. A local daemon and SQLite are enough until a
real requirement proves otherwise.

## What comes next

The next priority is not “more orchestration.” It is a stronger trust boundary
for privileged operator actions, followed by basic public-release hygiene and
a reproducible concurrent-claim demo.

I do have a concrete remote-worker use case: keep the coordinator and database
on my laptop while some workers run on Proxmox VMs or containers in the same
home network. If I implement it, the Unix socket will remain the default and an
optional authenticated network listener will sit over the same API. It will
need per-worker identity, authorization, TLS or an equivalent private-network
envelope, request limits, and idempotency. Simply opening the current local API
with one shared key would destroy the audit guarantees the project exists to
provide.

External trackers are a later adapter problem. Some of my work is on GitHub,
some is not. The coordinator should continue to own execution state while
GitHub, GitLab, Markdown specs, or native issues remain optional planning and
reporting surfaces.

## The practical lesson

When coding agents become parallel workers, the missing layer is often not a
smarter model. It is explicit operational state.

For my setup, four rules carry most of the value:

1. Give writes one authority.
2. Use expiring leases instead of permanent assignment.
3. Keep specs, execution state, and code review as separate truths.
4. Enforce the protocol where tools mutate state; documentation alone is not a
   concurrency control mechanism.

The implementation is intentionally small. The confidence comes from knowing
who may change state, why a task is ready, and how the next worker can continue.

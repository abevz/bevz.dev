---
title: "Why My AI Agents Need an Execution Ledger"
description: "How a corrupted task-tracker journal led me to a single-writer daemon, renewable leases, and an auditable workflow for coding agents."
tags:
  - AI agents
  - Go
  - SQLite
  - Git worktrees
status: "published"
publishedAt: "2026-07-22"
---

The command that finally pushed me to build a coordinator was this:

```text
dolt fsck --revive-journal-with-data-loss
```

My agents were using Beads as a task tracker, backed by a shared Dolt service.
The service had entered a crash loop because its chunk journal was corrupted.
Before an agent could even list its work, I had to stop the service, find a
stray Dolt process occupying the port, copy the database, repair the journal,
and start everything again.

The data survived. My confidence in the operating model did not.

The tracker had become a prerequisite for doing any work, yet several agents
were reaching it through shell commands and shared synchronization. A failure
in that layer could stop every repository attached to it.

I still liked the workflow: short issue IDs, dependencies, notes, and a
computed ready queue. I did not want to throw those away. I wanted a less
fragile owner for the live state.

That became
[`af-coordinator`](https://github.com/abevz/af-coordinator).

## One process is allowed to write

The core architecture is deliberately boring:

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

Agents never open SQLite. They ask the daemon to create an issue, claim it,
renew a lease, add a note, or close the work. The daemon checks the transition
and records an event.

This removed an entire category of questions from the clients. They do not
need to know how IDs are allocated, whether a dependency creates a cycle, or
how concurrent claims are serialized. There is one place where those rules are
enforced.

I chose a Unix socket because the coordinator currently lives on my laptop.
There is no reason to expose a port for local workers. I chose SQLite because I
can inspect, back up, and restore it without operating another database service.
WAL improves concurrency, but the more important constraint is still the same:
only the daemon writes.

## An agent owns work only while its lease is alive

The worker loop fits on one line:

```text
ready -> claim -> heartbeat -> note -> close
                               |
                               +-> handoff and release
```

`ready` does not mean “present in the backlog.” It means the issue is open, its
blocking dependencies are complete, and nobody holds a valid lease.

When a worker claims an issue, it receives a secret lease token. It renews the
lease while working. If the process disappears, ownership expires instead of
remaining stuck on an agent that no longer exists.

Two workers can still race for the same issue. That is expected. The daemon
commits one claim and returns `lease_held` to the loser. The losing worker can
pick another issue without guessing whether the first claim succeeded.

Handoff needed its own operation for the same reason. “Write a note, then
release” looks like two simple commands until the process dies between them.
The coordinator now stores the `HANDOFF:` note and releases the lease in one
transaction.

## Specs, execution state, and Git have different jobs

I use three records rather than forcing one tool to describe everything:

| Record | What it owns |
|---|---|
| Specification files | Requirements, design, and acceptance criteria |
| `af-coordinator` | Readiness, leases, attempts, blockers, and handoffs |
| Git | Worktree, branch, commit, and pull-request evidence |

An issue links to the relevant spec. The agent works in a sibling Git worktree.
When the issue closes, it can record the branch, pull request, and merge commit.

This turned out to help with review as much as coordination. When agents have
produced a large set of changes, I can query the completed issues and recover
the exact commits that belong to a phase. I do not have to reconstruct the
scope from branch names or a long Git log.

## The coordinator found its own bugs

`af-coordinator` tracks work on `af-coordinator`. A worker must claim an `afc`
issue before editing the repository, use a separate worktree, and finish with a
close or an explicit handoff.

That loop exposed defects I had not anticipated in the first design:

- a detail endpoint leaked a lease token;
- an installed daemon could be older than the CLI that was calling it;
- dependency direction was easy to read backwards;
- close and handoff needed stronger atomicity;
- multiple sessions could accidentally report the same actor identity.

These were not hypothetical backlog items. They interrupted real sessions, so
they became specs and regression tests.

On 22 July 2026, my local coordinator held 403 issues across nine projects; 336
were completed. This is still a personal system on one machine. The useful part
of those numbers is simply that the design has been exercised outside its own
test suite.

Most of the Go implementation was produced by AI agents from my specifications
and reviewed by me. I designed the protocol, split the work, reviewed the
changes, and operate the result. I am not presenting the repository as 403
handwritten tasks. The project is evidence of a different skill: making
agent-produced work bounded, reviewable, and recoverable.

## Where I am stopping for now

Today the coordinator is local-first. It has no web UI, no distributed
database, and no built-in synchronization with GitHub Issues. Those are not
missing checkboxes I intend to fill automatically.

The next change is smaller and more important: protect privileged operator
actions so an autonomous runner cannot use the same override path as the human
operator.

I may later run workers on Proxmox while keeping the daemon and SQLite on my
laptop. That would require an authenticated network listener with per-worker
identity. Opening the existing API on the LAN with one shared key would make
the audit log less trustworthy, so I will not call that a shortcut.

I started this project because two agents should not silently take the same
task. The more valuable result is that, the next morning, I can tell what they
claimed, what changed, where the code landed, and whether another worker can
continue safely.

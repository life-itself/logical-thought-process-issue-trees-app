# Plan of Work

Problem framing (SCQH) and the "why" live in [MOTIVATION.md](MOTIVATION.md). This file is the plan of work: streams, dependencies, next actions.

## Decisions locked

- **Run Streams 1 and 2 in parallel** — build + comms are different work modes, no shared state.
- **Stream 1 validates on the TOY example first** (remote-work productivity), not a real application.
- **Stream 3 (Second Renaissance LTP) deferred** until a toy example works end-to-end.
- **Stream 4 (Discord bot wiring) dropped** this round.
- **Skill form** — Claude Code skills live in a dedicated top-level `skills/` dir (so they're usable by Codex too) and are symlinked into `.claude/` when needed.

## Stream map & dependencies

```
Stream 1 (build)  ─┐  parallel, independent
Stream 2 (comms)  ─┘

Stream 3 (2R experiment) ── DEFERRED until Stream 1 toy works
Stream 4 (infra polish)  ── DROPPED this round
```

**Key unlock:** [claim-tree-annotation.md](claim-tree-annotation.md) already contains a **gold-standard toy case** — a hand-authored tree for "Does remote work increase productivity?", a source doc (Bloom 2015 Ctrip study), and 3 target annotations mapped to nodes. This is the test fixture for Stream 1. No new data needed to start.

## Stream 1 — Product / prototype

- **1a. Tree-gen skill** — input claim/question → claim tree. Validate against the hand-authored remote-work tree.
- **1b. Annotation-mapping skill** — source doc + tree → fragments mapped to nodes + relation label (supports / complicates / limits) + link back. Validate against the 3 gold annotations.
- **1c. Interactive UI + data model** — only after 1a/1b look good. Evolve the demo from scripted → live: persist a tree, feed docs in, accumulate annotations.

**Internal parallelization:** 1a → 1b is the natural order, but **1b can start immediately** against the gold tree. So 1a and 1b run in parallel; 1c waits on both.

Skills live in `skills/` (see `skills/README.md`).

## Stream 2 — Narrative / comms

- **2a. Background post** — synthesise background + personal story. **Blocked on inputs:** Jun 6 transcript/recording, written material shared with David, old issue-tree diagrams. *Gather these first.*
- **2b. Four-step diagram** — clean Mermaid of material → tree → doc → annotation. No dependency; start now from `claim-tree-annotation.md`.

## Immediate next actions

| Stream | Action | Blocker |
|--------|--------|---------|
| 1a | Implement tree-gen skill; score vs gold tree | none |
| 1b | Implement annotation-mapping skill; score vs 3 gold annotations | none — start now |
| 2a | Gather Jun 6 transcript + old issue-tree diagrams | find the files |
| 2b | Draft clean Mermaid 4-step diagram | none — start now |

## Verification

- **Stream 1** — run each skill on the toy input; diff structured output against the gold data in `claim-tree-annotation.md`. "Good enough" = tree covers the same major sub-questions; annotation-mapping places each of the 3 fragments on the correct node with a sensible relation. Then eyeball on one *new* doc to check it generalises.
- **Stream 2** — 2b: render Mermaid, confirm it reads cleanly. 2a: draft reviewed by Rufus, then shared with David for a "does this capture it" check.

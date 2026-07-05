# AGENTS.md

Guide for AI agents (Claude Code, Codex, etc.) working in this repo. `CLAUDE.md` is a symlink to this file.

## What this is

Logical Thinking Process (LTP) / Issue Tree app — a tool to decompose a top-level claim into a tree of sub-claims and accumulate evidence (annotations from source docs) against that stable tree scaffold. Collaboration of Rufus Pollock + David Joseph.

## Where to look

| Need | File |
|------|------|
| Project overview + references | `README.md` |
| Why this matters + problem framing (SCQH) | `MOTIVATION.md` |
| Plan of work — streams, next actions, verification | `PLAN.md` |
| Process spec + **gold-standard toy fixture** (tree, doc, annotations) | `claim-tree-annotation.md` |
| Static animated demo of the 4-step vision | `claim-tree-annotation-demo/` |
| AI skills (tree-gen, annotation-mapping) | `skills/` (see `skills/README.md`) |

## Conventions

- **Skills** live in top-level `skills/<name>/` so they're usable outside Claude Code (e.g. Codex). Symlink into `.claude/skills/` when Claude Code needs to discover them.
- **Toy example first.** Validate any AI skill against the gold data in `claim-tree-annotation.md` before touching real applications (e.g. Second Renaissance).
- Keep `MOTIVATION.md` (why + SCQH) and `PLAN.md` (plan of work) current; both are referenced from `README.md`.

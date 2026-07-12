# Skills

AI skills for the LTP / Issue Tree app. Kept here (top-level, not inside `.claude/`) so they're usable by any agent runtime (Claude Code, Codex). Symlink an individual skill into `.claude/skills/<name>` when Claude Code needs to discover it.

## Skills

| Skill | Purpose | Status |
|-------|---------|--------|
| `tree-gen/` | Input claim/question → claim tree (Stream 1a) | v0.1 — verified vs gold on the toy claim, see `tree-gen/VERIFICATION.md` |
| `annotation-mapping/` | Source doc + tree → fragments mapped to nodes with relation labels (Stream 1b) | v0.1 — verified vs gold annotations (5/5), see `annotation-mapping/VERIFICATION.md` |
| `project-ltp/` | Codebase / roadmap / plan → evidence-backed causal model rendered as the six Theory-of-Constraints LTP trees (Goal, Current Reality, Evaporating Cloud, Future Reality, Prerequisite, Transition) + a single next-action recommendation | v0.1 — SKILL.md + `agents/` + `references/` + `evals/` |

The canonical **tree JSON schema** is defined in `tree-gen/SKILL.md`; `tree-gen/gold/remote-work.tree.json` is the gold fixture (extracted from `../claim-tree-annotation.md`) that also seeds 1b and 1c.

Each is validated against the gold-standard toy case in `../claim-tree-annotation.md` (remote-work productivity). See `../PLAN.md` for verification criteria.

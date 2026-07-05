# Skills

AI skills for the LTP / Issue Tree app. Kept here (top-level, not inside `.claude/`) so they're usable by any agent runtime (Claude Code, Codex). Symlink an individual skill into `.claude/skills/<name>` when Claude Code needs to discover it.

## Skills

| Skill | Purpose | Status |
|-------|---------|--------|
| `tree-gen/` | Input claim/question → claim tree (Stream 1a) | not started |
| `annotation-mapping/` | Source doc + tree → fragments mapped to nodes with relation labels (Stream 1b) | not started |

Each is validated against the gold-standard toy case in `../claim-tree-annotation.md` (remote-work productivity). See `../PLAN.md` for verification criteria.

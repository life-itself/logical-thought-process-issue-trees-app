# Validation, outputs, and interaction

Use this reference when validating a model, writing deliverables, updating an
existing analysis, or formatting the final response.

# Validation Checks

Before finalizing the analysis, verify:

## Goal Tree

* The goal is an outcome, not an action.
* Critical Success Factors are jointly necessary.
* Necessary Conditions are actually necessary.
* Features have not been mistaken for conditions.

## Current Reality Tree

* UDEs are observable effects.
* Arrows express causality.
* Root causes explain multiple effects where possible.
* Important additional causes are represented.
* Circular logic has been removed.

## Evaporating Clouds

* Both sides serve legitimate needs.
* The common objective is genuinely shared.
* The conflict is real rather than merely sequential.
* Assumptions are explicit.
* At least one plausible conflict-breaking direction is identified.

## Future Reality Tree

* Injections address causes or assumptions.
* Desired Effects connect to the goal.
* Negative branches have been considered.
* Trimming injections are included where needed.

## Prerequisite Tree

* Obstacles are real barriers.
* Intermediate Objectives overcome obstacles.
* Dependency order is logical.
* Actions have not been substituted for objectives.

## Transition Tree

* Every action has a stated need.
* Every action has an observable expected effect.
* Preconditions are represented.
* Verification is possible.
* Actions trace back to the goal.

## Cross-tree consistency

* Each major UDE threatens at least one Goal Tree condition.
* Each important root cause is addressed or intentionally accepted.
* Each injection resolves a root cause, conflict assumption, or causal link.
* Each Intermediate Objective enables an injection.
* Each transition advances an Intermediate Objective.
* The recommended next action lies on a traceable path to the goal.
* Every link has a stable identifier.
* Every entity and link named in `views` exists in the shared model.

---

# Output Files

Create an `ltp/` directory containing:

```text
ltp/
  00-coverage-and-evidence.md
  01-project-model.md
  02-goal-tree.md
  03-current-reality-tree.md
  04-evaporating-clouds.md
  05-future-reality-tree.md
  06-prerequisite-tree.md
  07-transition-tree.md
  08-next-action.md
  09-assumptions-and-questions.md
  ltp-model.yaml
  throughput.yaml              # optional; only with real, defined metrics
```

Each tree document should contain:

1. Purpose
2. Entities
3. Logical connections
4. Evidence
5. Assumptions
6. Confidence
7. Open reservations
8. Diagram
9. Cross-tree references

Use Mermaid diagrams when supported. Also preserve a textual representation so the logic remains readable without diagram rendering.

---

# Incremental Updates

When the skill is run again:

1. Load the existing `ltp-model.yaml`.
2. Examine changed project evidence.
3. Identify which entities and links are affected.
4. Preserve stable identifiers where meanings remain unchanged.
5. Mark invalidated conclusions rather than silently deleting them.
6. Update all dependent trees.
7. Explain how the recommended next action changed and why.

Treat implementation results as new evidence.

When an action produces an unexpected effect:

* Do not merely edit the transition.
* Re-examine the assumptions, causal links, injections, and possibly the inferred goal.
* Record the learning in the model.

---

# Interaction Behavior

When useful, ask the user to confirm:

* The project boundary
* The intended customer or beneficiary
* The provisional goal
* The most important UDEs
* The core conflict
* The preferred injection
* External constraints not represented in the repository

However, lack of a response must not prevent analysis. Continue with clearly labeled provisional assumptions.

Do not overwhelm the user with every low-confidence inference. Surface the uncertainties that would materially change:

* The goal
* The constraint
* The root cause
* The selected injection
* The next recommended action

---

# Invocation Examples

## Analyze a codebase

```text
Use project-ltp on this directory. Construct the complete LTP model and tell me what to work on next.
```

## Analyze a plan

```text
Use project-ltp on PLAN.md and TODO.md. Treat the listed work as a provisional Transition Tree and infer the remaining trees.
```

## Reconcile plan and implementation

```text
Use project-ltp on the repository and roadmap. Identify where the roadmap's implied logic conflicts with the current system and recommend the next action.
```

## Update after implementation

```text
Refresh the existing LTP analysis using the changes since the previous run. Preserve IDs, identify invalidated assumptions, and update the next-action recommendation.
```

---

# Final Response Format

After writing the files, summarize:

## Provisional goal

State the inferred goal and confidence.

## Current constraint

State the factor presently limiting progress toward the goal.

## Core problem

State the root cause or conflict explaining the largest set of significant UDEs.

## Proposed change

State the principal injection or direction of solution.

## Recommended next action

State one concrete next action and its expected immediate effect.

## Important uncertainty

State the uncertainty most capable of changing the recommendation.

## Coverage

State what was and was not examined.

Never claim certainty that the evidence does not support.

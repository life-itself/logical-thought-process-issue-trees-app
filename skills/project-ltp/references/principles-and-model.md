# Principles and shared causal model

This reference contains the evidence, uncertainty, causal-rigor,
traceability, and shared-model rules used by Project LTP.

# Core Principles

## Evidence before inference

Every material statement must be classified as one of:

* **Observed**: directly supported by project evidence
* **Inferred**: a reasonable interpretation of observed evidence
* **Provisional**: necessary to continue the analysis but weakly supported
* **Confirmed**: explicitly stated or approved by the user
* **Disputed**: contradicted by evidence or user feedback

For every observed or inferred entity, record:

* Evidence source
* File path or artifact
* Line range when available
* Reasoning
* Confidence: high, medium, or low

Never present inferred business intent as established fact.

## Explicit uncertainty

A codebase often does not contain enough evidence to determine the ultimate business goal.

When the goal is uncertain:

1. Produce up to three candidate goals.
2. Explain the evidence for and against each.
3. Select the strongest candidate as the provisional goal.
4. Continue the analysis using that candidate.
5. Clearly mark all conclusions that depend on it.

Do not stop merely because confirmation is unavailable.

## Causal rigor

Each causal connection must be readable as:

> If the cause exists, then the effect follows, because...

For every important connection, expose the assumption represented by “because.”

Apply the Categories of Legitimate Reservation:

* Clarity
* Entity existence
* Causality existence
* Cause insufficiency
* Additional cause
* Cause-effect reversal
* Predicted effect
* Tautology

Do not confuse:

* Sequence with causality
* Correlation with causality
* Implementation detail with objective
* Absence of a feature with an undesirable effect
* A proposed action with its expected result
* A symptom with a root cause

## Traceability

Every important entity must have a stable identifier.

Examples:

* `G-1`: Goal
* `CSF-1`: Critical Success Factor
* `NC-1`: Necessary Condition
* `UDE-1`: Undesirable Effect
* `RC-1`: Root Cause
* `EC-1`: Evaporating Cloud
* `INJ-1`: Injection
* `DE-1`: Desirable Effect
* `NBR-1`: Negative Branch
* `OBS-1`: Obstacle
* `IO-1`: Intermediate Objective
* `TR-1`: Transition
* `ACT-1`: Action
* `ASM-1`: Assumption
* `EVD-1`: Evidence item

When an entity appears in more than one tree, reuse its identifier.

---

# Shared Causal Model

Maintain a machine-readable model in `ltp-model.yaml`.

Use a structure equivalent to:

```yaml
project:
  name: ""
  analyzed_path: ""
  analysis_mode: forward
  provisional_goal: G-1

entities:
  - id: G-1
    type: goal
    statement: ""
    status: inferred
    confidence: medium
    evidence: [EVD-1]
    assumptions: [ASM-1]

  - id: UDE-1
    type: undesirable_effect
    statement: ""
    status: observed
    confidence: high
    evidence: [EVD-2, EVD-3]

links:
  - from: RC-1
    to: UDE-1
    relation: causes
    logic: sufficient
    assumption: ASM-4
    confidence: medium

evidence:
  - id: EVD-1
    source: path/to/file
    lines: "10-24"
    observation: ""
    interpretation: ""

open_questions: []
contradictions: []
coverage_gaps: []
```

The exact serialization may vary, but the semantic information must be preserved.

---

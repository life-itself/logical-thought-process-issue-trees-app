# Manual for Uptake-Integrity Agentic Coding

## Integrating the Uptake Integrity Protocol with coding skills, harness engineering, and loop engineering

**Version:** 0.1
**Status:** Design manual and candidate implementation standard
**Audience:** Developers of coding agents, agent skills, development harnesses, and autonomous or semi-autonomous software-development workflows

---

# 1. Purpose

Agentic coding is often treated as a cycle of:

> inspect → plan → edit → test → repeat

That cycle is necessary but epistemically incomplete.

It does not distinguish:

* an observation from an interpretation;
* a proposed cause from an established cause;
* a passing test from evidence for the broader theory of change;
* a failed implementation from a defeated hypothesis;
* a consequence from the process by which the consequence is made to count as evidence;
* a locally correct change from movement toward the project’s actual ideal.

The Uptake Integrity Protocol supplies those distinctions.

Its role in agentic coding is to make the coding agent’s working model explicit, testable, revisable, dependency-aware, and capable of being defeated by evidence.

The resulting architecture has three layers:

| Layer                   | Primary question                                                                  |
| ----------------------- | --------------------------------------------------------------------------------- |
| **Skill engineering**   | What reasoning discipline should the agent follow?                                |
| **Harness engineering** | What external conditions make that discipline enforceable and observable?         |
| **Loop engineering**    | How should repeated observation, action, evidence, and revision unfold over time? |

The relationship is:

> **The skill defines the method.**
> **The harness creates the material and governance conditions under which the method can operate.**
> **The loop determines how the method progresses, reacts to surprise, and terminates.**

A skill without a harness can be ignored.
A harness without a skill can enforce activity without improving reasoning.
A loop without either can become a fast self-confirming cycle.

---

# 2. Agentic coding as semiotic conduct

A coding agent does not act directly on a repository.

It encounters signs:

* source files;
* error messages;
* issue descriptions;
* test failures;
* traces;
* API documentation;
* code-review comments;
* performance measurements.

It interprets those signs through a code:

* programming knowledge;
* repository conventions;
* tool-use policies;
* assumptions about the defect;
* architectural expectations;
* priorities;
* security rules;
* learned development habits.

That interpretation produces an action-ready plan. The agent then acts by:

* reading files;
* executing commands;
* editing code;
* modifying tests;
* changing configuration;
* generating migrations;
* updating documentation.

Those actions co-produce consequences with the rest of the environment:

* compilation succeeds or fails;
* tests pass or fail;
* latency changes;
* a regression appears;
* a security boundary weakens;
* deployment succeeds;
* users behave differently;
* another subsystem becomes the constraint.

The consequences become evidence only after they are selected, classified, attributed, and registered.

This is the same conduct architecture described in the formal theory:

> interpretation organizes response; response changes a materially independent world; traces of those consequences undergo evidential uptake; criticism evaluates them against alternatives and ends; revision changes later conduct. 

For agentic coding, the traversal can be expressed as:

```text
Repository state and task signs
        ↓
Agent interpretation and hypothesis portfolio
        ↓
Plan and tool actions
        ↓
Changed repository and execution environment
        ↓
Raw traces: diffs, logs, test results, metrics
        ↓
Selection, classification, attribution, registration
        ↓
Verdict on claims
        ↓
Model, code, tests, or goal revised
```

The coding agent is therefore not merely a code generator.

It is an inquirer acting within a controlled development environment.

---

# 3. The central object: a losable coding claim

A losable coding process does not begin with:

> “Here is the fix.”

It begins with:

> “Here is the current hypothesis about what is wrong, what change may improve it, and what evidence would cause us to revise that view.”

Examples of coding claims include:

### Observation claim

> Requests using expired credentials return HTTP 500.

### Classification claim

> This behavior is an authentication failure rather than a general server error.

### Causal claim

> The refresh-token parser throws an uncaught exception when the key version is absent.

### Necessity claim

> Key-version validation must occur before token decryption.

### Sufficiency claim

> Validation plus a typed authentication exception is sufficient to produce the required 401 response for this defect class.

### Intervention claim

> Moving validation into the token boundary will eliminate the uncaught exception without changing valid-token behavior.

### Risk claim

> The proposed validation may reject legacy tokens that were previously accepted.

### Measurement claim

> The current integration test accurately represents production token parsing.

### Normative claim

> Invalid credentials must fail closed and must not expose internal parsing details.

Agentic coding becomes losable when these claims are visible and at least the pivotal ones have:

* live rivals;
* predicted consequences;
* possible defeating consequences;
* a valid evidence route;
* revision rules.

---

# 4. Mapping LTP artifacts into agentic coding

The ideal-directed theory treats the LTP as a control-design grammar: the Goal Tree represents a provisional ideal, the Current Reality Tree models the persistent loop, the Cloud exposes policy conflict, the injection is a candidate steering or inquiry action, and the Future Reality Tree is a prospective causal simulation. 

In agentic coding, the mapping becomes:

| LTP artifact             | Agentic coding role                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| **Goal Tree**            | Desired behavior, architectural qualities, acceptance conditions, and protected floors          |
| **Current Reality Tree** | Fault model explaining observed failures and recurring development symptoms                     |
| **Evaporating Cloud**    | Design or operational conflict maintained by assumptions                                        |
| **Hidden assumptions**   | Hypotheses about code, architecture, users, tools, performance, compatibility, or incentives    |
| **Injection**            | Candidate code change, architectural change, test, probe, migration, or process adjustment      |
| **Future Reality Tree**  | Predicted effects of the change, including intermediate behavior and possible regressions       |
| **Prerequisite Tree**    | Dependencies, access, infrastructure, migration, approval, capability, and sequencing obstacles |
| **Transition Tree**      | Executable implementation plan with expected effects at each step                               |

A full graphical tree is not required for every coding task.

The principle is:

> **Use the smallest representation that preserves the pivotal logic and makes it losable.**

A one-line defect may need only a Claim Record and Test Contract.

A cross-service migration may require the full tree set.

---

# 5. Three engineering disciplines

## 5.1 Skill engineering

A skill is the reusable reasoning and action discipline given to the agent.

The skill should define:

* when to use the method;
* what claims must be recorded;
* how to identify pivotal uncertainty;
* how to formulate tests;
* how to distinguish traces from evidence;
* how to react to failure;
* when to reopen diagnosis;
* what artifacts must be retained.

The skill is the **semantic method**.

It tells the agent what kind of inquiry it is conducting.

---

## 5.2 Harness engineering

A harness is the external environment that constrains, observes, and supports the agent.

It includes:

* repository isolation;
* tool permissions;
* command execution;
* test runners;
* static analysis;
* logs;
* checkpoints;
* budgets;
* rollback;
* version control;
* artifact storage;
* review gates;
* evaluation;
* escalation.

The harness is the **material and institutional implementation** of the protocol.

It makes critical requirements enforceable rather than aspirational.

---

## 5.3 Loop engineering

Loop engineering concerns the temporal organization of agent activity.

It defines:

* the states through which the task progresses;
* what triggers another iteration;
* what triggers re-abduction;
* what information survives between iterations;
* when the agent must stop;
* when human review is required;
* how local loops interact with project and deployment loops.

Loop engineering is the **control dynamics** of agentic coding.

---

# 6. Why the three layers must remain separate

Suppose a skill instructs the agent:

> Preserve raw test evidence before interpreting it.

But the harness captures only the final exit code.

The skill cannot realize its own requirement.

Suppose the harness preserves every command and diff, but the skill never asks what claim a test bears upon.

The result is extensive logging without disciplined inquiry.

Suppose both are present, but the loop retries the same failed edit indefinitely.

The system has evidence and reasoning rules, but no transition rule from repeated failure to re-abduction.

The architecture therefore requires all three:

```text
Skill:
    defines epistemic and procedural obligations

Harness:
    provides tools, constraints, evidence, authority, and memory

Loop:
    sequences the obligations and reacts to outcomes
```

---

# Part I — Building the Skill

# 7. The Uptake-Integrity Agentic Coding Skill

A suitable platform-neutral name is:

```text
uptake-integrity-agentic-coding
```

Its purpose is:

> To guide a coding agent through explicit diagnosis, hypothesis formation, discriminating tests, controlled implementation, evidential uptake, dependency-aware revision, and retention.

---

## 8. When the skill should activate

The skill should activate when one or more of the following applies:

* the cause of a defect is uncertain;
* more than one plausible implementation exists;
* the proposed change crosses subsystem boundaries;
* requirements conflict;
* a test failure has multiple possible causes;
* the task has security, compatibility, migration, or data-loss risk;
* previous attempts have failed;
* the agent is modifying architecture;
* the agent is making assumptions about user or production behavior;
* the agent must interpret ambiguous evidence;
* the change may affect the project’s stated goal rather than merely local code.

For a trivial formatting change, the full protocol is unnecessary.

The skill should support risk tiers.

| Tier                   | Typical task                                                        | Required protocol                                    |
| ---------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| **0 — Mechanical**     | Formatting, spelling, unambiguous rename                            | Direct edit and verification                         |
| **1 — Local**          | Isolated defect with clear reproduction                             | Claim, test, edit, verification                      |
| **2 — Diagnostic**     | Uncertain cause or multiple rivals                                  | Claim portfolio, Test Contract, evidence ledger      |
| **3 — Systemic**       | Cross-module behavior or architectural change                       | Compact LTP model and dependency propagation         |
| **4 — High assurance** | Security, payments, destructive migration, safety-critical behavior | Full protocol, independent review, explicit approval |

---

# 9. Skill invariants

The skill should state non-negotiable invariants.

## 9.1 No unmarked assumptions

The agent must distinguish:

* observed facts;
* repository-derived facts;
* user-provided requirements;
* inferred claims;
* speculative explanations.

## 9.2 No pivotal change without a claim

A significant edit must be tied to at least one explicit intervention claim.

## 9.3 No claim promotion without possible defeat

A hypothesis cannot be treated as established unless it has survived a result it could have failed.

The interrogative account of hypothesis is useful here: a hypothesis initially authorizes investigation, not reliance. 

## 9.4 No collapsing consequence into verdict

The raw test output and the interpretation of that output must remain distinguishable.

## 9.5 No repeated action without changed information

After repeated failure, the agent must not continue applying cosmetically different versions of the same intervention.

It must:

* revise the hypothesis;
* add a rival;
* inspect a new evidence source;
* or escalate.

## 9.6 No local success mistaken for system success

Passing a unit test does not establish:

* integration correctness;
* performance improvement;
* user outcome;
* architectural adequacy;
* movement toward the project ideal.

## 9.7 No silent dependency breakage

When a pivotal claim changes, dependent assumptions, tests, plans, and documentation must be reviewed.

## 9.8 No closure without residual uncertainty

Completion must record:

* what was established;
* what remains uncertain;
* the scope of support;
* known risks;
* what evidence would reopen the task.

---

# 10. Skill inputs and outputs

## Inputs

The skill may receive:

* task description;
* repository;
* issue or ticket;
* test suite;
* logs;
* architectural documentation;
* coding standards;
* deployment constraints;
* protected-floor policies;
* user clarification.

## Required outputs

Depending on risk tier:

* Task Charter;
* Claim Register;
* compact tree model;
* Test Contract;
* code changes;
* raw execution traces;
* evidence interpretation;
* verdict;
* revision record;
* dependency impact;
* final residual-risk statement.

---

# 11. Recommended skill package

```text
skills/
└── uptake-integrity-agentic-coding/
    ├── SKILL.md
    ├── templates/
    │   ├── task-charter.yaml
    │   ├── claim-record.yaml
    │   ├── test-contract.yaml
    │   ├── evidence-entry.yaml
    │   ├── revision-delta.yaml
    │   └── completion-report.md
    ├── schemas/
    │   ├── claim.schema.json
    │   ├── test-contract.schema.json
    │   └── evidence.schema.json
    ├── scripts/
    │   ├── validate_records.py
    │   ├── dependency_check.py
    │   └── summarize_evidence.py
    ├── examples/
    │   ├── local_bugfix/
    │   ├── api_migration/
    │   └── performance_regression/
    └── evals/
        ├── uptake_bench_cases.yaml
        ├── uptake_bench_scoring_rubric.md
        └── defeat_conditions.md
```

The skill should contain instructions. The harness should execute validation and enforcement.

---

# 12. Example `SKILL.md`

```markdown
---
name: uptake-integrity-agentic-coding
description: >
  Use for coding work involving uncertain diagnosis, competing explanations,
  non-trivial risk, cross-component change, or repeated failure. Structures the
  task as a set of revisable claims and requires discriminating tests,
  preserved evidence, and dependency-aware revision.
---

# Objective

Move the repository toward the stated task ideal while preserving protected
floors and maintaining the ability for evidence to defeat the current model.

# Invariants

1. Distinguish observations from inferences.
2. Record pivotal hypotheses and at least one rival.
3. State what result would weaken or defeat the pivotal hypothesis.
4. Preserve raw traces before interpreting them.
5. Do not repeat a failed intervention without revising the model.
6. Propagate changes through dependent tests, code, plans, and documentation.
7. Record residual uncertainty at completion.

# Procedure

## 1. Charter

State:
- desired result;
- protected floors;
- scope;
- stop and escalation conditions.

## 2. Diagnose

Inspect the repository and record:
- observed effects;
- candidate causes;
- live rivals;
- uncertain measurement or environmental assumptions.

## 3. Select the pivotal claim

Choose the claim with the greatest combination of:
- leverage;
- uncertainty;
- cost of being wrong;
- testability.

## 4. Contract the test

Before the decisive edit, state:
- predicted result;
- defeating result;
- raw traces;
- interpretation rules;
- revision consequences.

## 5. Probe or implement

Prefer the smallest reversible action that can distinguish the live hypotheses.

## 6. Acquire and preserve evidence

Capture:
- commands;
- outputs;
- environment;
- diff;
- timing;
- failures;
- deviations from the planned intervention.

## 7. Adjudicate

Use only the permitted verdicts:
- supported;
- weakly supported;
- qualified;
- weakened;
- defeated;
- rival favored;
- measurement invalid;
- implementation failure;
- uptake compromised;
- inconclusive;
- second-order surprise.

## 8. Revise

Update:
- diagnosis;
- code;
- tests;
- scope;
- measurement;
- or goal.

After second-order surprise, reopen hypothesis generation.

## 9. Propagate and retain

Review dependent:
- code paths;
- tests;
- documentation;
- configuration;
- migration logic;
- operational monitoring.

## 10. Complete

Report:
- established claims;
- scope;
- evidence;
- remaining uncertainty;
- rollback path;
- reopening conditions.
```

---

# 13. Skill data model

A compact claim record can be represented in YAML.

```yaml
claim_id: C-17
text: >
  The stale response is caused by the request cache retaining an entry after
  account permissions are updated.
type: causal
status: in_probation
scope:
  service: account-api
  endpoints:
    - GET /accounts/{id}
boundary_conditions:
  - distributed cache enabled
  - permission update occurs after cache population
rivals:
  - id: R-1
    text: The database replica is stale.
  - id: R-2
    text: The authorization middleware caches roles independently.
predictions:
  incumbent:
    - deleting the request-cache entry removes the stale response immediately
  R-1:
    - stale response persists until replica convergence
  R-2:
    - deleting the request-cache entry does not change authorization
defeat_conditions:
  - stale authorization persists after request-cache invalidation
dependencies:
  - C-22
  - I-4
owner: coding-agent
```

A Test Contract:

```yaml
test_id: T-17
target_claim: C-17
probe: >
  Reproduce the permission update, invalidate only the request-cache entry,
  then repeat the authorized request without changing database or middleware state.
raw_traces:
  - service logs
  - cache keys and versions
  - database role value
  - middleware role value
  - HTTP response
selection_rule: Preserve all traces from the complete request sequence.
classification_rule:
  stale_response: response reflects the pre-update role
attribution_rule: >
  Favor the cache hypothesis only if the stale response disappears following
  request-cache invalidation while the other candidate states remain unchanged.
verdicts:
  supported: C-17 survives and R-1/R-2 are weakened.
  defeated: Remove C-17 as primary cause and reopen diagnosis.
  inconclusive: Instrument candidate caches separately.
```

---

# Part II — Harness Engineering

# 14. What the harness must do

The skill says what ought to happen.

The harness must make it practically possible to:

* preserve evidence;
* control the action space;
* maintain provenance;
* prevent silent mutation;
* compare alternatives;
* constrain risk;
* checkpoint progress;
* restore prior states;
* call for review;
* enforce stopping conditions.

Harness engineering turns epistemic principles into operational affordances and constraints.

---

# 15. Harness components

## 15.1 Workspace isolation

Each task should run in an isolated:

* branch;
* worktree;
* container;
* virtual environment;
* or sandbox.

The agent should be able to modify the task environment without contaminating unrelated work.

Required harness functions:

```text
create_checkpoint()
show_diff()
restore_checkpoint()
discard_workspace()
```

---

## 15.2 Reproducible execution

The harness should record:

* command;
* working directory;
* environment variables relevant to behavior;
* dependency versions;
* seed values where applicable;
* time;
* exit code;
* stdout;
* stderr;
* generated artifacts.

Without reproducibility, a failure may be classified as a code defect when it was an environmental difference.

---

## 15.3 Tool permissions

Permissions should be tiered.

| Risk                      | Default permission               |
| ------------------------- | -------------------------------- |
| Read repository           | Allowed                          |
| Run local tests           | Allowed                          |
| Modify task workspace     | Allowed after checkpoint         |
| Install dependency        | Logged and constrained           |
| Access secrets            | Denied unless explicitly granted |
| Modify production         | Denied by default                |
| Run destructive migration | Requires human approval          |
| Push or merge             | Requires policy-specific gate    |

The harness implements protected floors.

The skill should not be expected to exercise perfect restraint in an environment that grants unnecessary destructive power.

---

## 15.4 Evidence capture

Every significant tool call should produce a trace object.

```json
{
  "trace_id": "X-91",
  "timestamp": "2026-07-13T14:18:00Z",
  "command": "pytest tests/auth/test_refresh.py -q",
  "working_directory": "/workspace/project",
  "exit_code": 1,
  "stdout_artifact": "artifacts/X-91.stdout",
  "stderr_artifact": "artifacts/X-91.stderr",
  "repository_commit": "abc123",
  "workspace_diff_hash": "d91f..."
}
```

The evidence record should point to the trace rather than replacing it.

This implements the distinction between consequence and evidential uptake developed in sign-loop theory. 

---

## 15.5 Test orchestration

The harness should support levels of testing.

| Level                 | Claim exposed                                                |
| --------------------- | ------------------------------------------------------------ |
| Syntax or compilation | Code is structurally valid                                   |
| Unit test             | Local behavior holds under specified examples                |
| Property test         | Behavior holds across a generated input region               |
| Integration test      | Components interact as expected                              |
| Contract test         | Interfaces preserve agreed semantics                         |
| System test           | End-to-end behavior occurs                                   |
| Performance test      | Resource or latency claims hold                              |
| Security test         | Security properties resist specified threats                 |
| Migration test        | Old and new states interoperate safely                       |
| Production probe      | Predicted operational effect occurs in a bounded environment |

A passing lower-level test does not automatically establish a higher-level claim.

The harness should preserve this distinction in reports.

---

## 15.6 Static and dynamic analysis

The harness may expose additional rivals through:

* type checking;
* linting;
* dependency analysis;
* security scanning;
* data-flow analysis;
* race detection;
* memory analysis;
* profiling;
* tracing;
* fault injection.

These tools should not merely function as gates.

Their outputs should enter the Claim and Evidence records.

---

## 15.7 Versioned epistemic artifacts

The following should be versioned with the code or in an associated task store:

* charter;
* claims;
* tests;
* evidence references;
* verdicts;
* revisions;
* unresolved surprises.

A code diff without the model revision loses the reason for the change.

A model revision without the code diff loses its material consequence.

---

## 15.8 Independent adjudication

For higher-risk work, the harness should support separation among:

* implementing agent;
* reviewing agent;
* test or evaluation agent;
* human approver.

Possible arrangements:

```text
Agent A:
    diagnoses and implements

Agent B:
    receives the claim, Test Contract, diff, and raw traces
    attempts to defeat the conclusion

Harness:
    preserves both interpretations
    requires reconciliation or escalation
```

The objective is not agent plurality for its own sake.

The objective is to reduce the risk that the same code produces the intervention and adjudicates its own evidence.

---

## 15.9 Checkpoints and rollback

The harness should automatically checkpoint:

* before the first edit;
* before dependency changes;
* before migrations;
* before broad refactors;
* before destructive commands;
* before switching hypotheses.

Each checkpoint should be associated with:

* active claim;
* intended intervention;
* expected effect.

Rollback should be a normal revision operation, not treated as exceptional failure.

---

## 15.10 Budget and stopping controls

The harness should constrain:

* elapsed time;
* tool calls;
* token or compute budget;
* number of repeated failed attempts;
* scope of touched files;
* allowable dependency changes.

When a limit is reached, the loop should not silently continue.

It should produce one of:

* re-abduction request;
* scope-reduction proposal;
* human escalation;
* inconclusive verdict.

---

# 16. Harness enforcement rules

The harness can enforce the following.

### Rule H1 — Pivotal edit gate

Before changing files outside the initially identified local scope, require an active intervention claim.

### Rule H2 — Test-before-promotion gate

A claim cannot be marked provisionally supported without a linked trace and Test Contract.

### Rule H3 — Repetition gate

After two materially similar failed interventions, require a changed hypothesis or explicit override.

### Rule H4 — Destructive-action gate

Require:

* protected-floor review;
* rollback path;
* human authorization.

### Rule H5 — Dependency gate

Before completion, run:

* affected test selection;
* import or call-graph review;
* schema compatibility check;
* documentation impact check.

### Rule H6 — Completion gate

Require:

* clean or declared test state;
* residual uncertainty;
* known unresolved risks;
* evidence references;
* rollback or recovery note.

---

# 17. Harness modes

## Lightweight mode

Suitable for low-risk local changes.

Provides:

* isolated branch;
* command logging;
* test capture;
* one Claim Record;
* one completion report.

## Standard mode

Suitable for uncertain diagnosis and cross-module work.

Adds:

* Test Contract;
* evidence ledger;
* dependency checking;
* retry limits;
* explicit verdict.

## Adversarial mode

Suitable for security, migration, payment, or architectural work.

Adds:

* independent reviewer;
* separate test design;
* stronger provenance;
* approval gates;
* fault injection;
* rollback rehearsal.

---

# Part III — Loop Engineering

# 18. The Losable Coding Loop

The core loop is:

```text
CHARter
    ↓
OBSERVE
    ↓
MODEL
    ↓
SELECT pivotal claim
    ↓
CONTRACT test
    ↓
ACT
    ↓
ACQUIRE traces
    ↓
UPTAKE
    ↓
ADJUDICATE
    ↓
REVISE
    ↓
PROPAGATE
    ↓
RETAIN
    ↓
REVIEW ideal
```

This should be implemented as an explicit state machine rather than an informal repetition.

---

# 19. Loop states

## 19.1 `CHARTERED`

The task has:

* desired outcome;
* scope;
* protected floors;
* authority;
* completion conditions.

Transition to `OBSERVING`.

---

## 19.2 `OBSERVING`

The agent gathers traces without yet committing to one explanation.

Outputs:

* observed effects;
* repository structure;
* current tests;
* relevant recent changes;
* environmental facts.

Transition to `MODELING`.

---

## 19.3 `MODELING`

The agent constructs:

* current causal model;
* competing explanations;
* assumptions;
* relevant conflict;
* candidate interventions.

Transition to `PIVOTAL_CLAIM_SELECTED`.

---

## 19.4 `PIVOTAL_CLAIM_SELECTED`

One claim is selected because it combines:

* leverage;
* uncertainty;
* consequence of error;
* testability.

Transition to `TEST_CONTRACTED`.

---

## 19.5 `TEST_CONTRACTED`

Predictions, rivals, defeat conditions, evidence rules, and revision consequences are fixed.

Transition to `ACTING`.

---

## 19.6 `ACTING`

The agent performs the smallest admissible action capable of:

* improving the system;
* distinguishing hypotheses;
* or both.

Transition to `TRACES_ACQUIRED`.

---

## 19.7 `TRACES_ACQUIRED`

Raw outputs and execution conditions are preserved.

Transition to `UPTAKE_REVIEW`.

---

## 19.8 `UPTAKE_REVIEW`

The system records:

* selection;
* classification;
* attribution;
* registration.

Transition to `ADJUDICATION`.

---

## 19.9 `ADJUDICATION`

A permitted verdict is issued.

Possible next states:

| Verdict                | Next state                             |
| ---------------------- | -------------------------------------- |
| Supported              | `REVISING_OR_RETAINING`                |
| Qualified              | `REVISING_OR_RETAINING`                |
| Defeated               | `MODELING`                             |
| Rival favored          | `MODELING`                             |
| Measurement invalid    | `TEST_CONTRACTED`                      |
| Implementation failure | `ACTING` or `MODELING`                 |
| Uptake compromised     | `TRACES_ACQUIRED` or `TEST_CONTRACTED` |
| Inconclusive           | `MODELING`                             |
| Second-order surprise  | `RE_ABDUCTION`                         |
| Normative conflict     | `IDEAL_REVIEW`                         |

---

## 19.10 `RE_ABDUCTION`

The current hypothesis portfolio is considered inadequate.

The agent must introduce:

* a new mechanism;
* a new scale;
* a new vocabulary;
* an environmental explanation;
* a user or requirement interpretation;
* or an explicit admission that diagnosis remains unresolved.

The two-crossings account identifies registered surprise as the hinge through which failed probation should reopen the hypothesis space. 

---

## 19.11 `REVISING_OR_RETAINING`

The agent updates:

* code;
* claim status;
* test;
* scope;
* measurement;
* or architecture.

Transition to `DEPENDENCY_PROPAGATION`.

---

## 19.12 `DEPENDENCY_PROPAGATION`

The agent reviews consequences across:

* callers;
* interfaces;
* tests;
* schemas;
* documentation;
* deployment;
* monitoring;
* assumptions.

Transition to `RETENTION`.

---

## 19.13 `RETENTION`

The change is made durable through:

* regression tests;
* type constraints;
* documentation;
* static rules;
* migration checks;
* monitoring;
* updated skill or harness rules.

Transition to `IDEAL_REVIEW`.

---

## 19.14 `IDEAL_REVIEW`

The agent asks:

* Did the result satisfy the actual task?
* Were protected floors preserved?
* Did success expose a misunderstood goal?
* Did the change merely optimize a proxy?
* Should the acceptance model change?

Transition to `COMPLETE` or back to `MODELING`.

---

# 20. Nested loops

Agentic coding usually contains at least four nested loops.

## 20.1 Micro loop

```text
edit → compile/test → inspect
```

Time scale: seconds or minutes.

Purpose: local implementation correction.

Risk: mistaking a locally passing test for task completion.

---

## 20.2 Hypothesis loop

```text
claim → discriminating probe → evidence → verdict → revision
```

Time scale: minutes or hours.

Purpose: determine which explanation or intervention is adequate.

---

## 20.3 Task loop

```text
task ideal → model → implementation → integration → review
```

Time scale: hours or days.

Purpose: satisfy the complete coding objective.

---

## 20.4 Project loop

```text
delivered behavior → production consequence → organizational uptake → roadmap revision
```

Time scale: days or months.

Purpose: determine whether software changes produced the intended operational or user effect.

A software test commonly operates in the micro or hypothesis loop.

The Future Reality Tree may span the task and project loops.

The protocol prevents evidence from one loop from being treated as sufficient for another.

---

# 21. Loop triggers

## 21.1 First-order surprise

A result contradicts the active hypothesis.

Response:

* inspect test validity;
* compare rivals;
* revise or qualify the claim.

## 21.2 Second-order surprise

No live hypothesis explains the result.

Response:

* stop local patching;
* reopen diagnosis;
* seek different evidence or vocabulary.

## 21.3 Repetition trigger

The same class of action fails twice without new evidence.

Response:

* prohibit another equivalent attempt;
* require model revision.

## 21.4 Scope trigger

The change expands beyond the original task boundary.

Response:

* revise charter;
* reassess risk tier;
* obtain approval where required.

## 21.5 Normative trigger

A technically successful change violates a protected floor.

Response:

* stop;
* rollback or contain;
* enter Ideal Review.

## 21.6 Budget trigger

The agent approaches time, compute, or modification limits.

Response:

* narrow;
* checkpoint;
* summarize;
* escalate;
* or mark inconclusive.

---

# 22. Loop termination

A loop may terminate as `COMPLETE` only when:

1. the task ideal has been satisfied within the declared scope;
2. pivotal claims have valid evidence or have been appropriately qualified;
3. relevant tests pass or remaining failures are declared;
4. negative branches have been checked at the appropriate level;
5. dependency propagation is complete;
6. retention artifacts exist;
7. rollback or recovery is understood;
8. residual uncertainty is recorded;
9. no unresolved protected-floor violation remains.

The loop may terminate as `INCONCLUSIVE` when:

* evidence cannot distinguish the live hypotheses;
* required access is absent;
* the environment cannot reproduce the effect;
* the budget is exhausted;
* or human judgment is required.

“Inconclusive” is preferable to fabricated certainty.

---

# 23. Preventing loop pathologies

## 23.1 Confirmation loop

```text
Agent assumes cause A
→ edits A
→ runs only tests related to A
→ interprets any improvement as confirmation
```

Repair:

* require rivals;
* preserve broader baseline;
* include a result that would favor a rival.

---

## 23.2 Test-fitting loop

```text
Test fails
→ agent weakens test
→ test passes
→ task declared solved
```

Repair:

* treat the test as a measurement claim;
* require justification for changing it;
* preserve the old test and reason for replacement.

---

## 23.3 Patch accumulation loop

```text
Failure
→ special case
→ new failure
→ another special case
```

Repair:

* after repeated exceptions, reopen the causal model;
* test whether the underlying abstraction is wrong.

---

## 23.4 Local-green/global-red loop

```text
Unit tests pass
→ integration or production behavior remains wrong
```

Repair:

* identify the level of claim each test supports;
* require at least one test at the level of the task ideal.

---

## 23.5 Hidden-state loop

```text
Outcome changes
→ agent attributes it to code
→ environment or cached state actually changed
```

Repair:

* capture environment;
* reset state;
* rerun from checkpoint;
* compare deterministic and fresh-environment results.

---

## 23.6 Infinite retry loop

```text
Agent repeats near-identical edits
```

Repair:

* retry counter;
* intervention similarity check;
* mandatory re-abduction.

---

## 23.7 Premature closure loop

```text
One passing example
→ hypothesis promoted
```

Repair:

* require the result to discriminate against rivals;
* use boundary, negative, and property tests.

---

## 23.8 Retention failure loop

```text
Fix works once
→ no regression test or documentation
→ defect returns
```

Repair:

* retention state is mandatory;
* completion requires a durable carrier.

---

# Part IV — End-to-End Operating Procedure

# 24. Step 1: Name the coding ideal

State the desired result in behavioral and systemic terms.

Weak:

> Refactor the authentication service.

Stronger:

> Expired and invalid credentials produce consistent typed authentication failures, valid sessions remain unaffected, error details do not cross the security boundary, and existing public interfaces remain compatible.

Record protected floors:

* no reduction in authentication security;
* no secret exposure;
* no destructive data change;
* no undocumented API break.

---

# 25. Step 2: Audit current reality

Collect observations before committing to a cause.

```text
O-1: Expired refresh token returns 500.
O-2: Stack trace shows KeyError in key-version lookup.
O-3: Valid refresh token returns 200.
O-4: Unit tests cover malformed signature but not absent key version.
O-5: API documentation says all invalid credentials return 401.
```

Construct a compact Current Reality model:

```text
Absent key version
        ↓
Lookup raises untyped exception
        ↓
Exception bypasses authentication handler
        ↓
Generic server handler returns 500
        ↓
Public contract is violated
```

Mark every non-observed arrow as a hypothesis.

---

# 26. Step 3: Surface the conflict

Possible Cloud:

```text
A: Preserve secure, reliable authentication behavior

B: Fail invalid tokens early and consistently
C: Preserve compatibility with legacy token formats

D: Reject tokens without key version
D′: Continue accepting tokens without key version
```

Potential assumption:

> Rejecting missing-version tokens will invalidate legitimate legacy sessions.

That assumption is testable.

---

# 27. Step 4: Identify the pivotal claim

```text
C-1:
Some currently legitimate production tokens omit the key-version field.
```

If false, strict rejection may be safe.

If true, the intervention requires migration or fallback logic.

This claim is more pivotal than the local exception-handling detail because it determines whether the apparent fix creates a compatibility regression.

---

# 28. Step 5: Create the Test Contract

```text
Target claim:
    Legitimate legacy tokens without key version remain in active use.

Rivals:
    R-1: No valid active token lacks the field.
    R-2: Missing-field tokens exist but are already expired.
    R-3: Missing-field tokens are generated only in test fixtures.

Evidence:
    token metadata distribution from an approved anonymized production sample;
    issuer-version records;
    token expiration distribution.

Defeating condition:
    No active legitimate token without the field is found within the defined
    population and observation period.

Protected floor:
    Do not expose token material or user identity.

Revision:
    If supported, design migration or controlled fallback.
    If defeated, implement strict rejection.
```

---

# 29. Step 6: Generate an admissible probe

The probe may be:

* inspect anonymized token metadata;
* add instrumentation in a non-sensitive environment;
* replay approved fixtures;
* compare issuer versions;
* introduce a feature-flagged validator.

The smallest code change is not always the best first action.

An information-gathering probe may have greater value.

---

# 30. Step 7: Act and acquire traces

The harness records:

* repository commit;
* instrumentation change;
* commands;
* sample definition;
* output;
* data transformations;
* access approval;
* deletion or retention policy.

---

# 31. Step 8: Perform uptake

### Selection

Which token population was sampled?

### Classification

What counts as:

* legitimate;
* active;
* legacy;
* missing version?

### Attribution

Does absence of the field imply compatibility risk, or are the tokens otherwise invalid?

### Registration

Where are the aggregate results and definitions preserved?

---

# 32. Step 9: Adjudicate

Suppose the evidence shows:

* 0.3% of active tokens lack the field;
* all originate from one legacy issuer;
* issuer retirement is scheduled in two weeks.

Verdict:

> C-1 is supported but scope-qualified.

The original strict-rejection injection is not yet admissible.

---

# 33. Step 10: Revise the solution

Revised Future Reality model:

```text
Instrument missing-version usage
        ↓
Confirm legacy issuer population
        ↓
Disable legacy issuance
        ↓
Wait for existing token expiration
        ↓
Enforce required key version
        ↓
Map validation failure to typed authentication error
        ↓
Invalid tokens return 401
```

Negative branches:

* fallback path may weaken validation;
* instrumentation may expose sensitive metadata;
* expiration delay prolongs inconsistent behavior.

---

# 34. Step 11: Implement through a Transition Tree

```text
Current condition:
    Legacy issuer still produces missing-version tokens.

Action:
    Disable new legacy issuance behind a controlled rollout.

Expected effect:
    Population of active missing-version tokens begins monotonically declining.

Evidence:
    Daily aggregate count by issuer.

Next action:
    When count reaches zero, enforce strict field validation.

Expected effect:
    Missing-field tokens fail through typed authentication handling.

Evidence:
    unit, integration, contract, and rollout monitoring.
```

Each step is a local testable action–effect claim.

---

# 35. Step 12: Propagate and retain

Review:

* token parser;
* authentication middleware;
* API contract tests;
* SDK assumptions;
* error telemetry;
* deployment configuration;
* incident runbooks;
* documentation.

Retention artifacts:

* regression test;
* issuer deprecation check;
* validation invariant;
* monitoring alert;
* migration note.

---

# Part V — Multi-Agent Arrangements

# 36. Single-agent arrangement

A single agent may perform all roles for low-risk tasks.

To reduce self-confirmation, the harness should create separate phases:

```text
Phase A:
    Diagnose and pre-register test

Phase B:
    Execute without modifying the contract

Phase C:
    Re-read raw evidence before seeing the earlier preferred verdict

Phase D:
    Adjudicate
```

Separate context windows or structured artifacts can help prevent the current narrative from overwriting earlier commitments.

---

# 37. Two-agent arrangement

## Agent A — Builder

* constructs model;
* writes code;
* states evidence.

## Agent B — Challenger

* receives task ideal;
* receives claims and raw traces;
* examines rival explanations;
* tests negative branches;
* challenges uptake and attribution.

The harness records disagreements.

Agent A may not erase Agent B’s objections.

---

# 38. Three-role arrangement

For high-assurance work:

| Role             | Responsibility                         |
| ---------------- | -------------------------------------- |
| **Investigator** | Diagnosis and hypothesis portfolio     |
| **Implementer**  | Code and controlled probe              |
| **Adjudicator**  | Evidence review, verdict, and approval |

This does not require three distinct foundation models.

It requires sufficiently separated roles, contexts, incentives, and artifacts.

---

# 39. Human standing

Human review is especially important for:

* normative claims;
* destructive operations;
* changes in public behavior;
* security tradeoffs;
* legal or compliance interpretation;
* user-impact classification;
* revisions to the ideal;
* cases where the agent lacks access to decisive evidence.

The agent may assist in structuring the issue.

It should not fabricate authority.

---

# Part VI — Relationship to BDD and Software Testing

# 40. BDD inside the skill

BDD can implement part of a Test Contract.

```gherkin
Given an expired refresh token without a key-version field
When the client requests a new access token
Then the service returns 401
And the response does not expose internal parsing details
And no server-error event is emitted
```

This establishes observable system behavior.

It does not establish:

* whether production contains legitimate legacy tokens;
* whether strict rejection is operationally safe;
* whether the authentication policy is the correct ideal;
* whether another subsystem interprets the error correctly.

BDD is therefore one test implementation within the larger losable model.

---

# 41. Test classification

Every test should identify the claim it bears upon.

```yaml
test:
  name: expired_missing_version_returns_401
  level: integration
  supports_claims:
    - C-8
  does_not_establish:
    - production_legacy_token_absence
    - client_compatibility
    - user_outcome
```

This prevents overclaiming.

---

# Part VII — Relationship to Harness Engineering

# 42. Harness engineering as externalized epistemic discipline

The most important role of the harness is not convenience.

It is to prevent the agent from controlling every part of its own evidence loop.

A well-engineered harness externalizes:

* memory;
* provenance;
* permissions;
* test execution;
* budgets;
* rollback;
* review;
* stop conditions.

This creates bounded adjudicative independence.

The formal conduct theory treats independence, pre-registration, adversarial review, provenance, and separate records as mechanisms that increase loop integrity. 

---

# 43. Harness controls by closure type

| Closure risk                           | Harness response                                      |
| -------------------------------------- | ----------------------------------------------------- |
| Relevant evidence never collected      | Mandatory instrumentation or test coverage            |
| Agent changes test after seeing result | Versioned pre-test contract                           |
| Environment explains result            | Environment capture and clean rerun                   |
| Agent repeatedly patches one theory    | Retry limit and re-abduction gate                     |
| Raw outputs disappear                  | Append-only trace store                               |
| Classification favors implementation   | Rival reviewer or explicit alternative classification |
| Verdict cannot alter work              | Revision authority and rollback support               |
| Fix is not retained                    | Completion gate requiring regression carrier          |
| Local test hides global regression     | Layered test orchestration                            |
| Agent edits beyond authority           | Permission and path restrictions                      |

Harness engineering is therefore the implementation of losability at the boundary between the agent and the development world.

---

# Part VIII — Relationship to Loop Engineering

# 44. Loop engineering as the design of correction dynamics

A coding agent may have excellent tools and instructions yet still behave poorly because its loop dynamics are wrong.

Examples:

* it tests too late;
* it edits before modeling;
* it commits to one explanation;
* it retries without learning;
* it stops at the first green test;
* it never updates its task model;
* it preserves no state between iterations;
* it cannot distinguish local failure from hypothesis failure.

Loop engineering specifies:

* order;
* recurrence;
* branching;
* escalation;
* memory;
* termination.

---

# 45. The critical loop distinction

There are two different loops:

## Improvement loop

> What action moves the repository toward the desired state?

## Inquiry loop

> What action makes the competing explanations distinguishable?

They often overlap, but not always.

A diagnostic log may not improve the product immediately, yet may enable the correct change.

A broad refactor may improve code quality while producing little evidence about the actual defect.

The loop should explicitly optimize both:

[
\text{Action value}
===================

\text{expected improvement}
+
\beta \cdot \text{expected information gain}
--------------------------------------------

## \text{cost}

\text{risk}
]

This mirrors the ideal-navigation theory’s distinction between steering value and inquiry value. 

---

# 46. Re-abduction as a loop transition

Most coding loops implement only:

```text
failure → another attempt
```

The losable loop introduces:

```text
failure of active hypothesis
        ↓
review uptake and measurement
        ↓
compare rivals
        ↓
if no rival explains result:
    re-abduction
```

Re-abduction means changing the hypothesis space, not merely changing the patch.

Examples:

* move from function-level cause to concurrency;
* move from code defect to environmental mismatch;
* move from backend failure to client caching;
* move from performance problem to measurement artifact;
* move from individual service to cross-service contract;
* move from implementation problem to misunderstood requirement.

---

# 47. Loop memory

The loop should not rely solely on conversation history.

It should maintain external state:

```text
active ideal
active claims
claim statuses
current rivals
test contracts
raw traces
verdicts
failed interventions
unresolved surprises
dependency impacts
remaining budget
```

This protects the inquiry from context compression and narrative drift.

---

# Part IX — Evaluation and Meta-Losability

# 48. The skill itself must be tested

The claim is not:

> A Uptake-Integrity Agentic Coding Skill can describe coding work.

That would be too weak.

The relevant claim is:

> Using the skill, harness, and loop produces better coding outcomes and better model correction than credible alternatives at acceptable cost.

---

# 49. Comparative evaluation

Evaluate at least four conditions:

| Condition | Description                                         |
| --------- | --------------------------------------------------- |
| A         | Ordinary coding agent                               |
| B         | Ordinary agent with stronger tests and tool harness |
| C         | Losable skill without dedicated harness enforcement |
| D         | Full skill, harness, and loop integration           |

Optional fifth condition:

| E | Rival structured method |

Tasks should vary across:

* local bug fixing;
* ambiguous diagnosis;
* performance;
* security;
* migration;
* integration;
* architectural change;
* misleading tests;
* incomplete requirements.

---

# 50. Evaluation measures

## Product measures

* functional correctness;
* regression rate;
* security violations;
* hidden-test performance;
* maintainability;
* compatibility;
* successful rollback.

## Inquiry measures

* accuracy of causal diagnosis;
* calibration of confidence;
* number of unsupported assumptions;
* percentage of pivotal claims with rivals;
* ability to detect measurement defects;
* rate of appropriate re-abduction;
* rate of repeated failed interventions;
* quality of residual-risk reporting.

## Efficiency measures

* elapsed time;
* compute;
* tool calls;
* changed lines;
* unnecessary scope expansion;
* human-review burden.

## Integrity measures

* raw trace preservation;
* post hoc test modification;
* attribution disagreement;
* dependency propagation;
* appeal outcomes;
* proportion of negative evidence retained.

---

# 51. Defeat conditions

The full approach should be narrowed or rejected if comparative evaluation shows that:

* it does not improve correctness;
* it does not improve diagnosis;
* a simpler harness provides the same benefit;
* the records impose cost without changing agent behavior;
* agents produce ritualistic claim forms disconnected from action;
* the method increases false confidence;
* agents exploit “implementation failure” to protect bad hypotheses;
* re-abduction creates unproductive branching;
* completion latency becomes unacceptable;
* human reviewers cannot use the artifacts;
* benefits occur only on specially designed benchmark tasks;
* the method performs worse than a credible rival.

This makes the proposed integration itself losable.

---

# Part X — Implementation Roadmap

# 52. Phase 1: Minimal viable skill

Implement:

* Task Charter;
* one pivotal Claim Record;
* one Test Contract;
* permitted verdicts;
* residual uncertainty.

Do not begin with the entire formal system.

Use on Tier 2 tasks.

---

# 53. Phase 2: Harness evidence support

Add:

* isolated workspace;
* automatic command capture;
* trace identifiers;
* checkpoint and rollback;
* test-level labeling;
* retry limits.

---

# 54. Phase 3: Dependency-aware revision

Add:

* claim dependency graph;
* touched-file and call-graph analysis;
* affected-test selection;
* revision propagation report.

---

# 55. Phase 4: Adversarial review

Add:

* challenger agent;
* protected raw traces;
* alternative classifications;
* appeal mechanism;
* pre-registration enforcement.

---

# 56. Phase 5: Project and production loops

Connect:

* coding claims;
* deployment observations;
* production metrics;
* user outcomes;
* ideal revision.

At this stage, the Future Reality Tree becomes a living theory of how code changes are expected to produce operational results.

---

# 57. Phase 6: Meta-evaluation

Run comparative trials.

Revise or remove protocol elements that do not contribute.

The skill should become smaller where evidence permits, not larger by default.

---

# Part XI — Compact Operating Standard

# 58. The ten obligations

A conforming Uptake-Integrity Agentic Coding system must:

1. state the task ideal and protected floors;
2. distinguish observations from hypotheses;
3. identify the pivotal claim;
4. maintain at least one credible rival when uncertainty is material;
5. state possible defeating evidence before promotion;
6. preserve raw traces separately from interpretation;
7. use explicit verdicts rather than pass/fail alone;
8. revise the model after adverse evidence;
9. propagate revisions through dependencies;
10. record residual uncertainty and reopening conditions.

---

# 59. The three-layer standard

## Skill

Must provide:

* claim grammar;
* test discipline;
* revision calculus;
* closure audit.

## Harness

Must provide:

* bounded action;
* trace preservation;
* provenance;
* checkpoints;
* enforceable gates.

## Loop

Must provide:

* explicit state transitions;
* surprise handling;
* re-abduction;
* termination;
* retention.

---

# 60. Final architecture

```text
                    PROJECT IDEAL
                         │
                         ▼
              ┌─────────────────────┐
              │  LOSABLE CODING     │
              │       SKILL         │
              │                     │
              │ claim grammar       │
              │ LTP models          │
              │ test contracts      │
              │ revision rules      │
              └─────────┬───────────┘
                        │ directs
                        ▼
              ┌─────────────────────┐
              │  AGENTIC CODING     │
              │        LOOP         │
              │                     │
              │ observe             │
              │ model               │
              │ probe               │
              │ act                 │
              │ adjudicate          │
              │ revise              │
              └─────────┬───────────┘
                        │ operates through
                        ▼
              ┌─────────────────────┐
              │      HARNESS        │
              │                     │
              │ tools               │
              │ permissions         │
              │ sandbox             │
              │ tests               │
              │ trace store         │
              │ checkpoints         │
              │ reviewers           │
              └─────────┬───────────┘
                        │ changes
                        ▼
              ┌─────────────────────┐
              │ REPOSITORY, SYSTEM, │
              │ AND MATERIAL WORLD  │
              └─────────┬───────────┘
                        │ consequences
                        ▼
              ┌─────────────────────┐
              │ EVIDENTIAL UPTAKE   │
              │                     │
              │ select              │
              │ classify            │
              │ attribute           │
              │ register            │
              └─────────┬───────────┘
                        │
                        └──── evidence returns to loop
```

---

# Conclusion

The Uptake Integrity Protocol can serve as the epistemic constitution of agentic coding.

As a **skill**, it tells the agent how to represent uncertainty, formulate hypotheses, design discriminating probes, interpret evidence, and revise its model.

As **harness engineering**, it externalizes memory, permissions, provenance, testing, review, rollback, and stopping conditions so that the agent cannot silently control every part of its own evidence process.

As **loop engineering**, it organizes repeated action into a stateful inquiry process that distinguishes ordinary correction from re-abduction, prevents unproductive repetition, propagates revisions, and preserves warranted change.

The core operating principle is:

> **Every significant code change is an intervention in a model of reality. The model, the intervention, the evidence path, and the project ideal must all remain capable of revision.**

A mature coding agent should therefore not merely ask:

> Did the code pass?

It should ask:

> What claim did this result test?
> What alternatives did it discriminate?
> How did the consequence become evidence?
> What must now change in the code, the model, the test, the harness, the loop, or the ideal?

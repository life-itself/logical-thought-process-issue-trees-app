# Analysis workflow

This reference contains the detailed analysis modes, repository examination
procedure, and next-work selection method.

# Analysis Modes

## Forward mode: project to transition plan

Use this mode when the input is primarily a codebase, system, or collection of project artifacts.

Construct:

1. Project evidence map
2. Goal Tree
3. Current Reality Tree
4. Evaporating Clouds
5. Future Reality Tree
6. Prerequisite Tree
7. Transition Tree
8. Next-action recommendation

## Reverse mode: plan to project logic

Use this mode when the input is primarily a TODO list, roadmap, implementation plan, or set of tasks.

Begin by treating each task as a candidate action in a Transition Tree.

For each task, infer:

1. The expected immediate effect
2. Why that effect is needed
3. The prerequisite or obstacle it addresses
4. The desirable effect it is intended to create
5. The undesirable effect it is intended to remove
6. The underlying conflict or assumption
7. The necessary condition it supports
8. The goal it ultimately serves

Then construct the other trees in reverse.

Do not assume the listed tasks are valid merely because they appear in a plan. Identify:

* Tasks with no traceable contribution to the goal
* Tasks that duplicate one another
* Tasks whose expected effects are unstated
* Tasks ordered by habit rather than dependency
* Missing prerequisites
* Actions aimed at symptoms rather than causes
* Actions based on conflicting assumptions
* Actions likely to create negative branches

## Reconciliation mode

When both code and a plan are available, compare:

* What the codebase currently does
* What the plan assumes it does
* What the plan intends to change
* What the inferred goal requires
* What work is underway but not goal-relevant
* What necessary work is absent from the plan

Treat discrepancies as important evidence.

---

# Repository Examination

## Coverage

First enumerate all files and classify them.

Use categories such as:

* Source code
* Tests
* Build and package configuration
* Deployment and infrastructure
* Documentation
* Architecture records
* API specifications
* Database schemas and migrations
* User-interface text
* CI/CD configuration
* Monitoring and operational configuration
* TODOs and comments
* Issue or roadmap exports
* Generated files
* Vendor dependencies
* Binary assets
* Unknown

Inspect all analyzable, project-relevant files.

Do not claim complete examination when files were omitted, unreadable, binary, generated, too large, or inaccessible. Produce a coverage report listing:

* Total files discovered
* Files examined
* Files summarized indirectly
* Files excluded
* Reasons for exclusion
* Areas where coverage is weak

Generated files, vendored dependencies, lock files, and large binary assets may be classified rather than read in full unless they contain material project evidence.

## Evidence priority

Give greater weight to evidence in approximately this order:

1. Executable behavior and tests
2. Configuration and schemas
3. Public interfaces and API contracts
4. Architecture and decision records
5. Current operational documentation
6. Issue descriptions and plans
7. README statements
8. Comments and TODOs
9. Names and directory structure

A test that contradicts a README is stronger evidence of current behavior. A user-confirmed purpose is stronger evidence of intended purpose than naming conventions.

## Multi-pass examination

Use multiple passes rather than trying to infer the entire model while reading files individually.

### Pass 1: Inventory

Map the project structure, technologies, components, boundaries, and entry points.

### Pass 2: Behavioral model

Identify:

* Users and external actors
* Inputs and outputs
* Main workflows
* Data transformations
* State changes
* External systems
* Failure paths
* Tests and acceptance criteria

### Pass 3: Intent signals

Identify:

* Product claims
* Architectural intent
* TODOs
* Missing implementations
* Workarounds
* Deprecations
* Repeated failures
* Contradictory requirements
* Operational pain
* Security or reliability concerns

### Pass 4: Causal synthesis

Build the shared LTP model and expose gaps, contradictions, and assumptions.

---

# Determining What to Work on Next

Do not simply choose the first unfinished task or the task with the highest apparent urgency.

Use the following decision sequence.

## 1. Identify the current constraint

Determine what presently limits progress toward the goal.

The constraint may be:

* A technical bottleneck
* A missing decision
* A policy
* A knowledge gap
* A dependency
* A validation gap
* A recurring conflict
* An unsatisfied prerequisite
* A lack of reliable feedback

Prefer an action that exploits, protects, or elevates the constraint over actions that optimize non-constraints.

## 2. Locate the earliest blocked objective

In the Prerequisite and Transition Trees, find the earliest unsatisfied Intermediate Objective on the path to an important injection.

An action is not ready when its necessary predecessor conditions do not exist.

## 3. Prefer leverage over activity

Prefer work that:

* Removes a root cause affecting multiple UDEs
* Breaks a core conflict
* Enables multiple downstream transitions
* Provides decisive evidence about a major assumption
* Protects the current constraint
* Prevents a serious negative branch

Avoid recommending work merely because it is easy, visible, or already partially started.

## 4. Resolve uncertainty economically

When two causal models remain plausible, recommend the smallest safe action that distinguishes between them.

This may be:

* A targeted test
* A trace or metric
* A minimal experiment
* A code-path investigation
* A user validation step
* A reversible prototype

## 5. Produce one primary recommendation

Output:

* Recommended next action
* Why it is next
* Constraint addressed
* Obstacle removed
* Expected immediate effect
* Downstream effects
* Preconditions
* Completion evidence
* Risks
* What becomes possible afterward
* Confidence

Also list up to three actions that should explicitly not be started yet, with reasons.

---

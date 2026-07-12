# Tree construction

Use these rules to construct each Logical Thinking Process view from the
shared causal model.

# Tree Construction

## 1. Goal Tree

Infer the hierarchy:

* Goal
* Critical Success Factors
* Necessary Conditions

A Goal Tree describes the conditions that must exist for the project to succeed. It is not a list of features.

For each condition, ask:

* Is this necessary for the parent condition?
* Is it within the project’s sphere of influence?
* Is it an enduring condition or merely a one-time action?
* Does the codebase provide evidence that the condition matters?
* Is another necessary condition missing?

Use necessity logic:

> To achieve the parent condition, it is necessary that the child condition exist.

Output:

* Candidate goals
* Selected provisional goal
* Critical Success Factors
* Necessary Conditions
* Supporting evidence
* Uncertainties and assumptions
* Goal Tree diagram
* Conditions not currently satisfied

## 2. Current Reality Tree

The Current Reality Tree, also called the problem tree in this skill, explains why important Necessary Conditions are not currently satisfied.

Identify Undesirable Effects that are:

* Observable
* Significant
* Present-tense
* Within or relevant to the system
* Undesirable in relation to the goal

Avoid writing UDEs as:

* “We do not have feature X”
* “The team has not implemented Y”
* “Technology Z is missing”

Instead describe the harmful effect:

* Users cannot complete a critical workflow
* Changes create regressions in unrelated components
* Deployment outcomes cannot be predicted
* Operational failures are detected only after users are affected

Connect UDEs through causal sufficiency.

Search for root causes that explain multiple UDEs. Prefer a compact tree with strong causality over a large tree of weak associations.

Mark each root cause as:

* Directly observed
* Structurally inferred
* Hypothesized
* Outside the system boundary

## 3. Evaporating Clouds

Construct an Evaporating Cloud for each important persistent conflict.

Use:

* `A`: Common objective
* `B`: Need served by `D`
* `C`: Need served by `D'`
* `D`: One action, policy, design choice, or requirement
* `D'`: The conflicting action, policy, design choice, or requirement

Validate:

* `B` is genuinely necessary for `A`
* `C` is genuinely necessary for `A`
* `D` is believed necessary for `B`
* `D'` is believed necessary for `C`
* `D` and `D'` cannot both be fully performed as currently understood

Expose assumptions on every arrow.

Look especially for conflicts such as:

* Speed versus reliability
* Flexibility versus standardization
* Local optimization versus system optimization
* Backward compatibility versus simplification
* Feature delivery versus foundational work
* Strict validation versus ease of use
* Central control versus team autonomy
* Immediate patching versus root-cause removal

Do not settle for naming the conflict. Identify assumptions that can be invalidated, supplemented, or reframed.

## 4. Future Reality Tree

Convert validated conflict-breaking ideas into injections.

For each injection:

* State the change as a condition or policy
* Explain which root cause or assumption it addresses
* Trace expected Desirable Effects
* Connect those effects to Goal Tree conditions
* Test whether the injection is sufficient
* Identify additional required injections

Perform Negative Branch Reservation.

For each plausible adverse consequence:

1. State the negative outcome.
2. Trace how the injection could cause it.
3. Identify the assumptions in that chain.
4. Add a trimming injection or control.
5. Re-evaluate the branch.

Do not describe an injection as successful merely because implementation is possible. Its expected effects must connect to the goal.

## 5. Prerequisite Tree

For each injection or major Future Reality condition, identify obstacles that prevent achievement.

Represent:

* Objective
* Obstacle
* Intermediate Objective that overcomes the obstacle
* Dependencies among Intermediate Objectives

Obstacles may include:

* Missing knowledge
* Missing observability
* Incompatible architecture
* Data migration risk
* Unclear ownership
* Unavailable test coverage
* Environmental constraints
* External dependencies
* Unresolved policy decisions
* Conflicting incentives
* Lack of user validation

An Intermediate Objective is a condition that overcomes an obstacle. It is not yet a detailed action.

Order Intermediate Objectives by logical dependency, not by convenience.

## 6. Transition Tree

Translate Intermediate Objectives into executable changes.

For each transition include:

* Current reality
* Need
* Action
* Expected immediate effect
* Expected higher-level effect
* Preconditions
* Files or components likely affected
* Verification method
* Risk
* Rollback or containment strategy
* Tree entities supported
* Confidence

Use the following form:

```text
Transition ID:
Current reality:
Need:
Action:
Expected immediate effect:
Expected contribution:
Prerequisites:
Verification:
Likely scope:
Risk:
Rollback:
Traceability:
```

Actions must be concrete enough to execute and effects must be observable enough to verify.

Do not write vague actions such as:

* Improve architecture
* Add more tests
* Refactor the system
* Fix performance

State the specific transition and its expected effect.

---

# The Uptake Integrity Protocol for Software Change

## A definitive manual for integrating the Logical Thinking Process with software testing

**Version:** 1.0
**Audience:** Mid-level software engineers, test engineers, technical leads, architects, and engineering managers
**Status:** Complete operational specification; still a testable candidate methodology

---

# Executive summary

The Uptake Integrity Protocol treats software development as the maintenance of a **provisional causal model**.

That model explains:

* what is happening now;
* why it is happening;
* what conflict or assumption keeps it happening;
* what change is expected to improve it;
* what evidence would support or defeat that expectation;
* and how the model must change when reality does not behave as predicted.

Its goal is:

> **Reliably move a software system toward its intended outcomes by maintaining an explicit, testable, and revisable causal model that remains answerable to both software behavior and real-world consequences.**

The Logical Thinking Process supplies the structure:

1. **Goal Tree:** What outcome are we trying to create, and what conditions must remain true?
2. **Current Reality Tree:** What undesirable effects exist, and what common causes may explain them?
3. **Evaporating Cloud:** What conflict prevents an adequate solution, and what assumptions maintain it?
4. **Future Reality Tree:** What intervention do we propose, and what effects should follow?
5. **Prerequisite Tree:** What obstacles prevent implementation or valid testing?
6. **Transition Tree:** What actions should be taken, in what order, with what expected and testable effects?

Software testing supplies the principal means by which claims in those trees are confronted with reality.

The crucial qualification is that **a test result is not automatically evidence for the whole tree**.

A unit test may establish that a function behaves as expected under stated conditions. It does not establish that:

* the function is integrated correctly;
* users can accomplish their work;
* the operational problem has been solved;
* the intervention caused the business outcome;
* or the project is moving toward the right goal.

The protocol therefore connects each test to the precise claim it bears upon.

The core operating cycle is:

> **Model → predict → probe → observe → perform evidential uptake → adjudicate → revise → propagate → retain**

A model is losable when some possible, admissible course of evidence could cause its pivotal claims to be qualified, replaced, or removed.

---

# Part I — The Goal Tree

# 1. The goal

The top-level goal of the protocol is:

> **Reliably move a software system toward its intended outcomes by maintaining an explicit, testable, and revisable causal model that remains answerable to both software behavior and real-world consequences.**

Several terms matter.

## Reliably

Success should not depend primarily on luck, heroics, or one unusually knowledgeable engineer.

## Move toward intended outcomes

The objective is not merely to produce code or make tests green.

The objective may include:

* correct software behavior;
* user progress;
* operational reliability;
* security;
* maintainability;
* lower cost;
* faster delivery;
* reduced risk.

## Explicit causal model

The team should be able to state why it believes a proposed change will create a desired result.

## Testable

Important claims should imply observable consequences.

## Revisable

Evidence should be able to change the model, not merely be interpreted through it.

## Answerable to reality

The team should not control every stage by which its own intervention is judged.

The hypothesis must initially be held as a question that commands investigation, not as an assertion already entitled to belief. This corresponds to the interrogative treatment of hypothesis in the underlying research. 

---

# 2. Necessary conditions

The goal requires the following conditions.

## NC1 — The desired change is clear enough to guide action

The team knows:

* what should become better;
* for whom;
* under what conditions;
* how success will be recognized;
* what must not be sacrificed.

## NC2 — The current reality is represented adequately

Observed effects are distinguished from inferred causes.

The model accounts for:

* software behavior;
* environmental conditions;
* architecture;
* workflow;
* incentives;
* constraints;
* affected users.

## NC3 — Pivotal uncertainty is visible

Important assumptions are not silently embedded in requirements, code, tests, or architecture.

## NC4 — Proposed changes imply testable consequences

The team can state:

* what should happen;
* where;
* when;
* under what conditions;
* what would count against the claim.

## NC5 — Tests bear upon identifiable claims

A passing test is interpreted only at the level warranted by that test.

## NC6 — Consequences survive into evidence

Raw traces are preserved sufficiently to examine:

* what was observed;
* what was omitted;
* how it was classified;
* what it was attributed to;
* how it was recorded.

## NC7 — Evidence can change the model

Failed or surprising tests can alter:

* a causal arrow;
* an assumption;
* a measurement;
* an intervention;
* the project scope;
* or the goal itself.

## NC8 — Revisions propagate

When a pivotal claim changes, dependent:

* tests;
* code;
* requirements;
* architectural decisions;
* rollout plans;
* documentation

are reviewed.

## NC9 — Warranted change is retained

The system preserves learning through:

* regression tests;
* constraints;
* documentation;
* monitoring;
* automation;
* operational procedures.

---

# 3. The Goal Tree

```text
GOAL:
Reliably move the software system toward intended outcomes
through an explicit, testable, and revisable causal model
│
├── Desired outcomes and protected floors are explicit
├── Current reality is modeled adequately
├── Pivotal assumptions and conflicts are visible
├── Proposed changes imply discriminating predictions
├── Tests are connected to precise claims
├── Consequences are preserved through evidential uptake
├── Evidence can revise the model
├── Revisions propagate through dependencies
└── Warranted changes are retained
```

This Goal Tree is itself provisional.

The goal may require revision when implementation reveals:

* omitted stakeholders;
* unacceptable tradeoffs;
* misleading outcome measures;
* conflicts among necessary conditions;
* a project that optimizes the wrong result.

The ideal-directed theory treats the goal as an orientation containing viable conditions, protected floors, and a procedure for revising the end itself. 

---

# Part II — The Current Reality Tree

# 4. The recurring software-testing problem

Many software teams possess:

* automated tests;
* continuous integration;
* code review;
* issue tracking;
* observability;
* deployment pipelines.

Yet they still encounter recurring undesirable effects.

## Common undesirable effects

### UDE1 — Tests pass while the delivered behavior is wrong

A test suite verifies the implementation it was written around, but not the behavior users or operations require.

### UDE2 — The team fixes symptoms instead of causes

A local patch removes one failure while preserving the mechanism that generates the class of failures.

### UDE3 — Bugs return

The immediate code is corrected, but:

* no regression carrier is added;
* the broader dependency is missed;
* the operational condition recurs.

### UDE4 — Engineers argue about evidence rather than learn from it

One person says:

> The test proves the implementation works.

Another says:

> The test is unrealistic.

Neither has stated precisely what claim the test can establish.

### UDE5 — Failed experiments are explained away

A proposed change does not produce the expected result, but the theory remains unchanged because the team attributes the outcome to:

* poor rollout;
* unusual users;
* insufficient time;
* environmental noise;
* incorrect implementation.

Any of these may be true. None should be accepted automatically.

### UDE6 — Local success creates global regressions

A unit or component test passes, while:

* API compatibility breaks;
* latency increases;
* operational load moves elsewhere;
* security weakens;
* another workflow fails.

### UDE7 — Teams accumulate tests without increasing confidence

The suite grows, but engineers cannot state:

* which claims are strongly supported;
* which remain uncertain;
* which tests are redundant;
* which outcomes are not observed.

### UDE8 — Tree diagrams or design documents become stale

The original explanation remains in place after reality has contradicted it.

### UDE9 — Product outcomes are inferred from implementation correctness

The feature works as specified, but:

* users do not adopt it;
* support demand remains unchanged;
* incidents continue;
* the intended business result does not improve.

---

# 5. The Current Reality Tree

A common causal structure looks like this:

```text
Important software claims are not typed or explicitly registered
│
├── Observations, assumptions, causes, and goals look alike
│
├── Tests are written without explicit target claims
│   │
│   ├── Passing tests are interpreted too broadly
│   └── Failing tests do not identify which belief should change
│
├── Consequence is collapsed into evidence
│   │
│   ├── Sampling choices remain invisible
│   ├── Classifications remain implicit
│   ├── Attributions are made after the outcome
│   └── Raw traces are lost
│
├── The same team designs the intervention and judges its meaning
│   │
│   └── Disconfirming evidence is easily explained away
│
├── Tree and test dependencies are not tracked
│   │
│   └── Local revisions fail to propagate
│
└── No formal revision discipline exists
    │
    ├── Models become stale
    ├── Similar defects recur
    ├── Local success is mistaken for system success
    └── Teams become less confident despite more testing
```

The deeper root problem is:

> **Software testing is usually connected to code artifacts, but not consistently connected to an explicit and revisable model of why the change should create the desired result.**

---

# 6. Consequence is not evidence

Suppose a service change is deployed and support calls decrease.

That consequence does not by itself establish:

> The service change caused the reduction.

The evidence depends on at least four operations:

1. **Selection:** Which support calls and time periods were counted?
2. **Classification:** Which calls were categorized as relevant?
3. **Attribution:** Why was the reduction attributed to the service change?
4. **Registration:** What data, rules, and alternative interpretations were preserved?

The research refers to these four operations as evidential uptake. 

In software work, uptake occurs whenever teams interpret:

* test output;
* logs;
* metrics;
* incident reports;
* user feedback;
* performance data;
* security findings;
* production experiments.

A green test is a consequence of code, environment, fixtures, assertions, and execution.

It becomes evidence for a claim only through an interpretation that should remain open to scrutiny.

---

# Part III — The Evaporating Cloud

# 7. The central conflict

Most teams face a real conflict between speed and inquiry.

```text
                       A
       Deliver valuable, reliable change quickly
                    /       \
                   B         C
       Maintain flow and     Avoid acting on a
       implementation speed  wrong model of reality
                |                 |
                D                 D′
      Implement quickly     Investigate, test assumptions,
      using current model   and delay commitment
```

The apparent conflict is:

> We must act quickly.
> We must not commit until the model is adequately tested.

---

# 8. Assumptions behind the conflict

## Assumptions behind D

> To maintain delivery speed, we must avoid additional modeling and evidence work.

Possible hidden assumptions:

* explicit reasoning creates bureaucracy;
* tests already provide sufficient evidence;
* the cost of being wrong is lower than the cost of delay;
* experienced engineers can keep the model in their heads;
* documentation becomes obsolete too quickly to be useful.

## Assumptions behind D′

> To avoid acting on the wrong model, we must investigate extensively before implementing.

Possible hidden assumptions:

* every uncertainty must be resolved first;
* only large tests provide useful evidence;
* action and inquiry are separate;
* implementation cannot itself serve as a probe;
* the full tree set is required for every task.

---

# 9. Evaporating the conflict

The conflict dissolves when we introduce:

> **A risk-tiered protocol in which the smallest reversible action is chosen to produce both improvement and discriminating evidence.**

This invalidates both sides’ strongest assumptions.

We do not need exhaustive analysis before acting.

We do need enough explicit logic to ensure that action can teach us something.

The principle is:

> **Choose the smallest admissible change that either moves the system toward the goal or increases our ability to determine what will.**

This combines:

* steering value;
* inquiry value.

The ideal-navigation research explicitly treats these as two distinct but compatible values of an intervention. 

---

# 10. Secondary conflict: testing versus delivery

A second Cloud often appears.

```text
                       A
          Maintain dependable software delivery
                    /       \
                   B         C
       Preserve confidence   Preserve adaptability
       through tests         and low maintenance cost
                |                 |
                D                 D′
      Add more tests         Avoid excessive or brittle tests
```

The injection is not “always add more tests.”

It is:

> **Maintain sufficient tests to expose pivotal claims and preserve warranted learning, while removing tests that no longer provide distinct evidential value.**

The protocol is therefore not test maximalism.

It is claim-centered testing.

---

# Part IV — The Future Reality Tree

# 11. The proposed solution

The main injection is:

> **Integrate the Uptake Integrity Protocol into software design, testing, implementation, and operational review.**

The protocol introduces:

1. an Ideal Charter;
2. a versioned tree set;
3. typed claim records;
4. explicit test contracts;
5. preserved raw traces;
6. evidential-uptake records;
7. permitted verdicts;
8. revision rules;
9. dependency propagation;
10. retention and reopening conditions.

---

# 12. The Future Reality Tree

```text
Claims in the trees are typed and versioned
│
├── Observations are separated from causal hypotheses
├── Assumptions become visible
└── Pivotal uncertainty can be selected
        │
        ▼
Each pivotal claim receives rivals and defeat conditions
        │
        ▼
Tests are designed to discriminate among claims
        │
        ├── Test scope becomes clear
        ├── Overclaiming is reduced
        └── Missing evidence becomes visible
        │
        ▼
Raw traces and uptake decisions are preserved
        │
        ├── Alternative interpretations can be examined
        ├── Post hoc explanation becomes harder
        └── Production evidence remains connected to provenance
        │
        ▼
Verdicts trigger explicit revision rules
        │
        ├── Claims are retained, qualified, weakened, or defeated
        ├── Second-order surprise reopens diagnosis
        └── Invalid tests or measurements are distinguished from invalid causes
        │
        ▼
Revisions propagate through dependencies
        │
        ├── Code, tests, and plans remain aligned
        ├── Stale branches are suspended
        └── Negative branches are reconsidered
        │
        ▼
Learning is retained through regression carriers and operational controls
        │
        ▼
The software system moves more reliably toward intended outcomes
```

---

# 13. Negative branches

The proposed protocol can create new problems.

## NBR1 — Excessive process

Every task becomes burdened with forms and diagrams.

### Countermeasure

Use risk tiers.

A one-line defect does not require a full CRT and FRT.

---

## NBR2 — False precision

Engineers assign formal statuses to claims without improving actual reasoning.

### Countermeasure

Require evidence links, rivals, and revision consequences.

A filled form without a possible loss is not compliant.

---

## NBR3 — Test proliferation

Every arrow generates a separate automated test.

### Countermeasure

Not every claim requires automation.

Tests may be:

* logical challenges;
* code tests;
* observations;
* experiments;
* audits;
* monitored rollout conditions.

---

## NBR4 — Teams game the protocol

Every adverse result is classified as “implementation failure.”

### Countermeasure

Implementation failure becomes a new claim requiring its own evidence.

It cannot automatically preserve the original causal theory.

---

## NBR5 — Engineers delay action indefinitely

The team keeps expanding the model.

### Countermeasure

Use bounded probe selection and explicit budgets.

---

## NBR6 — The protocol becomes self-sealing

Any result is absorbed into its vocabulary.

### Countermeasure

The protocol itself has explicit defeat conditions and must be compared against simpler alternatives.

---

# Part V — The Prerequisite Tree

# 14. The implementation objective

The implementation objective is:

> **Use the Uptake Integrity Protocol as the normal method for planning, testing, revising, and retaining non-trivial software changes.**

The most common obstacles are practical rather than philosophical.

---

# 15. Obstacles and intermediate objectives

| Obstacle                                 | Intermediate objective                                          |
| ---------------------------------------- | --------------------------------------------------------------- |
| The goal is vague                        | Create a concise Ideal Charter                                  |
| The problem cannot be reproduced         | Create a stable reproduction or observable production signature |
| Claims are implicit                      | Build a Claim Register                                          |
| Too many explanations exist              | Select the pivotal uncertainty                                  |
| No safe test is possible                 | Create isolation, rollback, simulation, or bounded rollout      |
| Tests do not distinguish rivals          | Write a Test Contract before the decisive action                |
| Raw evidence is lost                     | Capture commands, outputs, environment, and versions            |
| Production conditions differ from test   | Add production-representative probes or monitoring              |
| Metrics are proxies                      | Register measurement claims separately                          |
| Failed tests do not change plans         | Define verdict-to-revision rules                                |
| One changed claim affects many artifacts | Maintain a dependency graph                                     |
| Teams lack authority to revise           | Assign decision and revision ownership                          |
| Changes revert later                     | Add retention mechanisms                                        |
| The process is too heavy                 | Use risk-tiered implementation                                  |

---

# 16. Risk tiers

## Tier 0 — Mechanical

Examples:

* formatting;
* typo correction;
* generated-file update;
* unambiguous rename.

Required:

* stated objective;
* direct verification.

---

## Tier 1 — Local behavior

Examples:

* clear defect with a reproducible failing test;
* isolated validation bug;
* local calculation error.

Required:

* one pivotal claim;
* one test;
* implementation;
* regression carrier;
* residual-risk note.

---

## Tier 2 — Diagnostic uncertainty

Examples:

* multiple possible causes;
* flaky test;
* performance regression;
* race condition;
* inconsistent environmental behavior.

Required:

* compact CRT;
* rival hypotheses;
* Test Contract;
* evidence ledger;
* explicit verdict.

---

## Tier 3 — Systemic change

Examples:

* cross-service behavior;
* API evolution;
* schema migration;
* caching policy;
* authentication changes;
* architectural refactor.

Required:

* Goal Tree;
* CRT;
* Cloud where relevant;
* FRT;
* PRT;
* Transition Tree;
* dependency propagation;
* staged testing.

---

## Tier 4 — High assurance

Examples:

* payment correctness;
* destructive migration;
* authorization;
* privacy;
* critical infrastructure;
* safety-sensitive behavior.

Required:

* full protocol;
* independent review;
* strong provenance;
* adversarial testing;
* rollback rehearsal;
* explicit approval.

---

# Part VI — Transition Tree and Operating Manual

This section is the practical core of the manual.

---

# 17. The complete workflow

For a non-trivial software change, follow this sequence:

1. Name the goal.
2. Define protected floors.
3. Record current undesirable effects.
4. Build the smallest adequate causal model.
5. Identify the pivotal conflict or uncertainty.
6. Register the pivotal claim and rivals.
7. Build the proposed future-reality model.
8. Identify implementation and testing obstacles.
9. Create a Test Contract.
10. Choose the smallest admissible probe or implementation step.
11. Preserve raw traces.
12. Perform evidential uptake.
13. Issue a verdict.
14. Revise the model.
15. Propagate the revision.
16. Retain the learning.
17. Review whether the goal remains adequate.

---

# 18. Step 1 — Write the Ideal Charter

The Ideal Charter prevents the team from mistaking a local code change for the project objective.

## Template

```text
IDEAL CHARTER

Desired outcome:
Who benefits:
Relevant environment:
Observable success:
Required quality attributes:
Protected floors:
Out-of-scope effects:
Decision owner:
Affected parties:
Conditions that would require goal review:
```

## Example

```text
Desired outcome:
Role changes take effect promptly and consistently across all services.

Observable success:
Ninety-nine percent of authorization decisions reflect a completed role change
within 30 seconds.

Required quality attributes:
Low request latency, service availability, traceability, and compatibility.

Protected floors:
No unauthorized access.
No silent privilege retention.
No direct dependency of every request on the identity database.
No destructive migration without rollback.
```

A useful charter states outcomes rather than features.

Weak:

> Add cache invalidation.

Stronger:

> Authorization decisions reflect completed role changes within 30 seconds while preserving low latency and availability.

---

# 19. Step 2 — Build the Current Reality Tree

Begin with observable undesirable effects.

Do not begin with the presumed cause.

## Example observations

```text
UDE-1:
Some requests continue using old permissions after a role update.

UDE-2:
The delay lasts between 30 seconds and 10 minutes.

UDE-3:
Restarting the authorization service removes the stale behavior.

UDE-4:
The identity database contains the correct role immediately.

UDE-5:
Current tests pass.
```

## Candidate CRT

```text
Role update is committed to identity database
│
├── Authorization service maintains cached role records
│
├── Cache entry is not reliably invalidated
│
└── Requests continue reading the stale cached role
        │
        ▼
Authorization decisions use outdated permissions
        │
        ▼
Users retain or lack access incorrectly after a role change
```

At this stage:

* the database observation may be supported;
* cache existence may be observed;
* unreliable invalidation may still be a hypothesis;
* stale-read causality is a hypothesis.

Mark them differently.

---

# 20. Step 3 — Register claims

Each pivotal claim receives an ID.

## Example

```yaml
claim_id: C-12
text: >
  Stale authorization decisions are caused primarily by role-cache entries
  that remain after a completed role update.
type: causal
status: proposed
scope:
  services:
    - authorization-service
  operation:
    - role update followed by authorized request
boundary_conditions:
  - distributed cache enabled
rivals:
  - id: R-1
    text: Authorization tokens embed the old role.
  - id: R-2
    text: Database replicas return stale role values.
  - id: R-3
    text: A downstream policy engine maintains its own cache.
predictions:
  - invalidating the role-cache entry removes the stale decision immediately
defeat_conditions:
  - stale decisions persist after verified cache invalidation
```

---

# 21. Claim types

Use the following claim types.

| Type                | Example                                                             |
| ------------------- | ------------------------------------------------------------------- |
| Observation         | A request used the old role after the database update               |
| Classification      | This is an authorization-staleness failure                          |
| Causal contribution | Cache retention contributes to stale decisions                      |
| Sufficiency         | Invalidation plus a fresh role read prevents this failure class     |
| Necessity           | The system must observe a role-version change before enforcing it   |
| Additional cause    | Embedded tokens may independently preserve the old role             |
| Conflict            | Immediate revocation appears incompatible with low latency          |
| Assumption          | Immediate consistency requires a database lookup on every request   |
| Intervention        | Versioned role events will invalidate dependent caches              |
| Transition          | Publishing the role-version event will update cache state           |
| Risk                | Event loss may preserve stale authorization                         |
| Measurement         | The stale-decision metric represents actual incorrect authorization |
| Normative           | Unauthorized access must fail closed                                |

---

# 22. Claim statuses

| Status                  | Meaning                                                |
| ----------------------- | ------------------------------------------------------ |
| Proposed                | Candidate claim                                        |
| Clarified               | Precise enough to evaluate                             |
| Logically admissible    | Survives current logical review                        |
| In probation            | Has rivals, predictions, and a test route              |
| Provisionally supported | Survived a discriminating test                         |
| Qualified               | Supported only within stated boundaries                |
| Weakened                | Warrant reduced                                        |
| Contested               | Important disagreement remains                         |
| Defeated                | Removed from active reliance                           |
| Superseded              | Replaced by a better claim                             |
| Dormant                 | Preserved but not active                               |
| Normatively unresolved  | Causal model may be clear, but legitimacy is unsettled |

Avoid “proven.”

Software environments change, and tests are scope-bound.

---

# 23. Step 4 — Build the Cloud

For the authorization example:

```text
                           A
          Secure and responsive authorization
                       /       \
                      B         C
        Reflect role changes    Preserve low latency
        promptly                and service availability
                    |               |
                    D               D′
       Re-read authoritative     Cache role data
       role data frequently      aggressively
```

## Assumptions

Behind D:

> Prompt consistency requires frequent authoritative reads.

Behind D′:

> Caching necessarily means accepting stale authorization.

Possible injection:

> Use versioned authorization state and event-driven invalidation, with bounded fallback validation.

The Cloud protects the team from framing the problem as:

> Cache or no cache.

The real opportunity may be to invalidate the assumption that caching and prompt revocation are inseparable.

---

# 24. Step 5 — Build the Future Reality Tree

The FRT is the proposed theory of change.

```text
Role updates receive a monotonic version
│
├── A versioned update event is published
│
├── Authorization caches compare stored and current versions
│
└── Stale cache entries are invalidated or rejected
        │
        ▼
Requests after a completed role change use current permissions
        │
        ├── Unauthorized access does not persist
        ├── Newly granted access becomes available promptly
        └── Request latency remains low
```

Each arrow is a hypothesis.

## Example FRT claim table

| Claim                                       | Predicted observation                          | Possible defeat                    |
| ------------------------------------------- | ---------------------------------------------- | ---------------------------------- |
| Versioned event reaches all consumers       | Consumer version catches up within target time | Consumer remains stale             |
| Version comparison identifies stale cache   | Stale entry is rejected or refreshed           | Old value is still accepted        |
| Invalidation produces current authorization | Post-change requests reflect new role          | Requests remain stale              |
| Event approach preserves latency            | Request latency remains within threshold       | Tail latency increases materially  |
| Event approach preserves safety             | Lost or reordered events fail safely           | Privileges remain after revocation |

---

# 25. Step 6 — Add negative branches

Potential negative branches:

```text
Versioned invalidation is introduced
│
├── Event delivery is delayed
│   └── Stale authorization persists longer than expected
│
├── Event is duplicated or reordered
│   └── Older role state overwrites newer state
│
├── Cache misses increase
│   └── Identity database load rises
│
└── Revocation fails open
    └── Unauthorized access persists
```

Each significant negative branch becomes:

* a risk claim;
* a test target;
* a rollout monitor;
* or a protected-floor stop condition.

---

# 26. Step 7 — Build the Prerequisite Tree

## Obstacles

```text
O-1:
No role-version field exists.

O-2:
Update events are not idempotent.

O-3:
The test environment does not reproduce event loss or reordering.

O-4:
No metric identifies stale authorization decisions.

O-5:
Several services own independent caches.

O-6:
The team cannot safely test revocation in production without a rollback path.
```

## Intermediate objectives

```text
IO-1:
Add a role version without changing current behavior.

IO-2:
Make update handling idempotent and monotonic.

IO-3:
Create fault-injection tests for lost, duplicated, and reordered events.

IO-4:
Instrument authorization decisions with role-version provenance.

IO-5:
Inventory and register all cache-owning consumers.

IO-6:
Introduce a feature flag and bounded canary.
```

---

# 27. Step 8 — Write the Test Contract

A Test Contract connects a test to a claim.

## Template

```text
TEST CONTRACT

Test ID:
Target claim:
Claim type:
Question:
Incumbent hypothesis:
Rivals:

Scope:
Boundary conditions:
Preconditions:
Protected floors:
Stop conditions:

Probe or observation:
Why the test discriminates:

Expected trace under incumbent:
Expected trace under each rival:
Possible defeating result:

Raw traces to preserve:
Sampling rule:
Measurement method:
Time horizon:

Selection rule:
Classification rule:
Attribution rule:
Registration rule:

Permitted verdicts:
Revision required for each verdict:
Dependent claims to review:
```

---

# 28. Authorization example Test Contract

```text
Test ID:
T-12

Target claim:
C-12 — retained role-cache entries are the primary cause of stale authorization.

Rivals:
R-1 — embedded authorization token contains old role.
R-2 — database replica is stale.
R-3 — downstream policy engine maintains a second cache.

Probe:
Reproduce a completed role update.
Verify the authoritative database and replica values.
Invalidate only the authorization-service role cache.
Repeat the same authorization request without issuing a new token.

Expected under C-12:
The request immediately reflects the new role.

Expected under R-1:
The request remains stale until the token changes.

Expected under R-2:
The request remains stale while the replica is stale.

Expected under R-3:
The request remains stale until the downstream cache changes.

Defeating result:
The decision remains stale after verified role-cache invalidation.

Raw traces:
Database role and version.
Replica role and version.
Token claims.
Role-cache entry and version.
Policy-engine cache state.
Authorization decision and provenance.

Revision:
Supported — retain C-12 and design invalidation.
Defeated — remove C-12 as primary explanation.
Rival favored — revise CRT around the favored rival.
Inconclusive — add instrumentation at the unresolved boundary.
```

---

# 29. Software tests as implementations of `Test`

A Test is a general interface:

> Expose a claim to consequences that may support, qualify, or defeat it.

Software tests are implementations of this interface.

Different test types expose different claims.

---

# 30. The software-testing ladder

## Level 1 — Static validation

Examples:

* compiler;
* type checker;
* linter;
* schema validator;
* dependency scanner.

Can establish:

* code satisfies defined structural rules;
* types are consistent under the checker;
* prohibited patterns were not detected.

Cannot establish:

* runtime correctness;
* user behavior;
* operational success.

---

## Level 2 — Unit tests

Can establish:

* a small unit produces expected outputs under controlled inputs;
* local error cases are handled;
* local invariants hold.

Cannot establish:

* dependency integration;
* deployment behavior;
* production data compatibility;
* user outcome.

---

## Level 3 — Property-based tests

Can establish stronger claims about:

* invariants;
* algebraic properties;
* broad generated input spaces;
* round trips;
* ordering;
* idempotence.

Useful FRT examples:

> Applying an older role version never overwrites a newer version.

> Processing the same event twice produces the same state as processing it once.

---

## Level 4 — Component tests

Can establish:

* the behavior of a service or module with controlled boundaries;
* persistence behavior;
* internal collaboration.

Cannot fully establish:

* real network behavior;
* external system contracts;
* production topology.

---

## Level 5 — Contract tests

Can establish:

* provider and consumer expectations align;
* interface schemas remain compatible;
* error semantics are preserved.

Contract tests often correspond to necessity claims:

> For the consumer workflow to remain valid, the provider must preserve this behavior.

---

## Level 6 — Integration tests

Can establish:

* multiple real components collaborate as expected;
* events, storage, caches, and APIs interact correctly;
* system boundaries preserve the intended behavior.

They still may not reproduce:

* production scale;
* production timing;
* partial failure;
* real data distribution.

---

## Level 7 — End-to-end tests

Can establish:

* a complete workflow succeeds under the test environment;
* visible behavior crosses major boundaries.

They are useful but often poor at identifying the exact failed claim.

---

## Level 8 — Performance tests

Can test claims about:

* latency;
* throughput;
* resource consumption;
* scalability;
* saturation;
* queue behavior.

A benchmark is a measurement system and therefore requires:

* stable environment;
* representative workload;
* declared variance;
* valid comparison.

---

## Level 9 — Security tests

Can test claims about:

* authorization;
* confidentiality;
* input boundaries;
* privilege escalation;
* attack resistance;
* failure mode.

Security claims frequently involve protected floors rather than average improvement.

---

## Level 10 — Fault-injection and resilience tests

Can expose claims about:

* retries;
* idempotence;
* event loss;
* service failure;
* network delay;
* dependency unavailability;
* recovery.

These tests are especially valuable for negative branches.

---

## Level 11 — Canary and production probes

Can expose:

* real topology;
* actual workload;
* production data shape;
* adoption;
* operational side effects;
* rare interactions.

They require:

* safeguards;
* rollback;
* monitoring;
* attribution discipline.

---

## Level 12 — Product and user-outcome tests

Can expose higher-level FRT claims such as:

> The new workflow reduces support demand.

> Users complete the task more successfully.

> Incident recovery time decreases.

These may require:

* observational studies;
* controlled rollout;
* A/B tests;
* cohort analysis;
* qualitative evidence;
* causal inference.

---

# 31. What a test result can establish

Every test should declare:

```yaml
supports_claims:
  - C-12
  - C-18

does_not_establish:
  - production_event_delivery_reliability
  - user_outcome
  - global_authorization_consistency
```

This simple practice prevents a large class of reasoning errors.

A passing unit test should not be narrated as:

> The bug is fixed.

It should be narrated as:

> The local behavior represented by this test now satisfies the expected condition.

The broader conclusion depends on additional claims and tests.

---

# 32. BDD within the protocol

BDD scenarios are useful for converting selected FRT or Transition Tree entities into observable behavior.

```gherkin
Feature: Role revocation

  Scenario: A revoked role no longer authorizes a protected operation
    Given a user currently has the "approver" role
    And the user has an active authorization session
    When the "approver" role is revoked
    And the role update is confirmed
    Then a protected approval request is rejected within 30 seconds
    And the authorization decision records the current role version
```

This scenario establishes a behavioral expectation.

It does not by itself establish:

* event delivery reliability at scale;
* database-load impact;
* client compatibility;
* absence of another stale cache;
* real production timing.

BDD is therefore a valuable test implementation, not the full causal model.

---

# 33. Step 9 — Preserve raw traces

A test runner normally reports:

* pass;
* fail;
* output.

The protocol requires enough context to reconstruct what happened.

## Minimum trace record

```json
{
  "trace_id": "X-204",
  "test_id": "T-12",
  "repository_commit": "8a1e7cf",
  "workspace_diff": "artifact://diff-204",
  "command": "pytest tests/auth/test_role_invalidation.py -q",
  "working_directory": "/workspace/auth-service",
  "environment": "integration",
  "dependency_versions": "artifact://deps-204",
  "started_at": "2026-07-13T13:00:00Z",
  "exit_code": 1,
  "stdout": "artifact://stdout-204",
  "stderr": "artifact://stderr-204"
}
```

For production evidence, preserve:

* cohort definition;
* feature-flag state;
* time period;
* baseline;
* environmental changes;
* metric query;
* relevant deployment versions.

---

# 34. Step 10 — Perform evidential uptake

The protocol does not permit the team to jump directly from:

> The test failed

to:

> The implementation is wrong.

Review the four stations.

## Selection

Ask:

* Did we execute the relevant condition?
* Did the fixture represent the real case?
* Were failing data points omitted?
* Did retries hide transient failures?
* Did we observe only successful requests?

## Classification

Ask:

* Is this a product defect, test defect, environmental failure, timeout, incompatibility, or expected rejection?
* Are different failures being collapsed into one category?
* Does “flaky” hide several distinct mechanisms?

## Attribution

Ask:

* Did the code change cause the result?
* Did state leak from another test?
* Did a dependency version change?
* Did the environment explain the result?
* Is the test observing the wrong boundary?

## Registration

Ask:

* Was the raw output retained?
* Can another engineer reproduce the interpretation?
* Was the test modified after seeing the result?
* Are dissenting interpretations preserved?

---

# 35. Evidence Ledger

```text
EVIDENCE ENTRY

Evidence ID:
Related Test:
Related Claims:

Raw trace:
Source:
Time:
Environment:
Known deviations:

Selection:
What was included:
What was excluded:
Why:

Classification:
Primary classification:
Alternative classifications:
Disagreement:

Attribution:
Primary attribution:
Alternative attributions:
Known confounders:

Registration:
Storage:
Version:
Provenance:
Reviewer:
```

The ledger should be append-only.

Corrections should create a new version, not erase the old interpretation.

---

# 36. Step 11 — Issue a verdict

Do not use only pass and fail.

## Permitted verdicts

### Supported

The result was positively predicted and discriminated against credible rivals.

### Weakly supported

The result is compatible with the claim but not strongly discriminating.

### Qualified

The claim holds only under narrower conditions.

### Weakened

The result reduces confidence without identifying a better replacement.

### Defeated

The claim should no longer govern action.

### Rival favored

A competing explanation fits the evidence better.

### Measurement invalid

The test or metric does not represent the intended entity.

### Implementation failure

The intended intervention was not materially instantiated.

### Uptake compromised

The evidence route was damaged by sampling, classification, attribution, or registration.

### Inconclusive

The test did not distinguish the claims sufficiently.

### Second-order surprise

No live hypothesis explains the evidence.

### Normative conflict

The intervention may work causally but violates the goal or protected floors.

---

# 37. Step 12 — Revise the tree

When a claim receives adverse evidence, choose the appropriate revision.

## Revision operators

### Retain

The claim survives.

### Reduce warrant

Continue using the claim cautiously.

### Add a boundary condition

Before:

> Cache invalidation prevents stale authorization.

After:

> Cache invalidation prevents stale authorization when the token does not embed role state.

### Add a co-condition

Before:

> Publishing the update event refreshes authorization.

After:

> Publishing the update event and enforcing monotonic version handling refresh authorization.

### Add an alternative cause

> Downstream policy caching can also produce stale decisions.

### Split an entity

Before:

> Authorization is stale.

After:

* token claims are stale;
* role cache is stale;
* policy cache is stale;
* database replica is stale.

### Change time relation

> The update is eventually reflected, but not within the required 30 seconds.

### Change scope

> The intervention works for interactive requests but not long-lived batch sessions.

### Revise measurement

> The stale-decision metric counts expected grace-period behavior as failure.

### Remove an arrow

The presumed causal connection is not supported.

### Replace the mechanism

The outcome may remain correct while the explanation changes.

### Reopen abduction

Required when no current explanation fits.

### Revise the injection

The diagnosis may be sound while the proposed change is inadequate.

### Revise the ideal

The project may be optimizing the wrong outcome.

---

# 38. Diagnosing a failed test

Use this order.

## Question 1 — Did the intended condition occur?

If not, the causal claim was not tested.

Example:

The integration test never enabled distributed caching.

## Question 2 — Could the competing outcomes physically differ?

If not, the test was non-discriminating.

Example:

Both implementations use the same mocked cache behavior.

## Question 3 — Did the measurement preserve the distinction?

If not, revise the measurement.

Example:

The test checks HTTP 403 but not which role version produced the decision.

## Question 4 — Did the implementation reach the pivotal mechanism?

If not, record implementation failure.

Example:

The event is published but the consumer is disabled.

## Question 5 — Does the result favor a rival?

If yes, revise the CRT.

## Question 6 — Is a missing condition sufficient to explain the mismatch?

If yes, add it as a new probationary claim.

Do not use it as an untested exception.

## Question 7 — Does no live hypothesis explain the result?

If yes, register second-order surprise.

The two-crossings research treats registered surprise as the hinge that should reopen the hypothesis space. 

---

# 39. Step 13 — Propagate revisions

Trees, tests, and implementation artifacts form a dependency network.

Suppose the claim:

> The authorization-service cache is the primary cause

is defeated.

Review:

* the selected injection;
* FRT branches relying on cache invalidation;
* integration tests written around that mechanism;
* rollout steps;
* performance forecasts;
* documentation;
* ownership.

## Impact statuses

| Status          | Meaning                              |
| --------------- | ------------------------------------ |
| Unaffected      | Support remains intact               |
| Review required | Support may have changed             |
| Suspended       | Do not rely on this pending review   |
| Invalidated     | Supporting path has been removed     |
| Reconstructed   | Re-established through revised logic |

## Practical propagation procedure

1. Mark the changed claim.
2. Identify direct dependents.
3. Suspend dependents with no independent support.
4. Review tests that encode the old assumption.
5. Review code introduced solely for the old mechanism.
6. Update the FRT and Transition Tree.
7. Update the backlog or rollout.
8. Preserve the old version and revision rationale.

---

# 40. Tests are also claims

A test contains assumptions.

Example:

> This integration test represents production role-update behavior.

That may depend on:

* the same cache implementation;
* the same event-delivery semantics;
* representative timing;
* representative token format;
* equivalent database behavior.

When a test is changed, ask:

> Did reality change, did the specification change, or did the measurement prove invalid?

Never weaken a test merely because the implementation fails it.

Never preserve a test merely because it already exists.

---

# 41. Step 14 — Implement through a Transition Tree

The Transition Tree turns the FRT into a safe sequence.

Use this structure:

```text
Current condition:
Why change is needed:
Action:
Expected immediate effect:
Why that effect should occur:
Evidence:
Failure interpretation:
Fallback:
Next condition enabled:
```

---

# 42. Authorization Transition Tree

## Step 1 — Add role versions

```text
Current condition:
Roles have no monotonic version.

Need:
Consumers cannot determine whether cached state is older than authoritative state.

Action:
Add a role-version field and expose it through internal APIs without changing decisions.

Expected effect:
Every role update produces a higher version.

Evidence:
Migration tests, property tests, database checks.

Fallback:
Read old rows as version zero.
```

---

## Step 2 — Add provenance instrumentation

```text
Current condition:
Authorization decisions do not record which role state was used.

Need:
Stale decisions cannot be distinguished from correct denials.

Action:
Record role version, cache source, token version, and policy version.

Expected effect:
Each decision can be traced to its effective state.

Evidence:
Structured-log and trace validation.

Fallback:
Disable high-cardinality fields if operational limits are exceeded.
```

---

## Step 3 — Implement event-driven invalidation

```text
Current condition:
Cache entries expire only by TTL.

Need:
Role changes must become visible promptly.

Action:
Publish versioned role-update events and invalidate older cached versions.

Expected effect:
Cache versions converge after an update.

Evidence:
Unit, property, integration, and event-order tests.

Fallback:
Feature flag disables event invalidation.
```

---

## Step 4 — Test negative branches

```text
Current condition:
Normal delivery succeeds.

Need:
The system must remain safe under event loss, duplication, and reordering.

Action:
Inject delivery faults.

Expected effect:
Older versions never overwrite newer versions.
Revocation uncertainty fails within protected policy.

Evidence:
Fault-injection tests and state traces.

Fallback:
Use bounded authoritative revalidation.
```

---

## Step 5 — Canary

```text
Current condition:
The implementation passes controlled tests.

Need:
Production topology and workload remain untested.

Action:
Enable for a small cohort.

Expected effect:
Stale-decision rate decreases without material latency or error increase.

Evidence:
Versioned authorization metrics and control cohort.

Stop condition:
Any unauthorized-access event or threshold breach.

Fallback:
Disable feature flag and restore previous behavior.
```

---

## Step 6 — Retain

```text
Current condition:
The intervention appears successful.

Need:
The learning must survive future changes.

Action:
Add regression tests, operational alerts, documentation, and ownership.

Expected effect:
The failure class is detected before broad recurrence.

Evidence:
CI enforcement, alert rehearsal, and review.
```

---

# 43. CI/CD integration

The protocol should become part of normal delivery.

## Repository structure

```text
.ltp/
├── ideal-charter.yaml
├── claims/
│   ├── C-12.yaml
│   └── C-18.yaml
├── tests/
│   ├── T-12.yaml
│   └── T-18.yaml
├── evidence/
│   └── index.yaml
├── revisions/
│   └── R-07.yaml
└── trees/
    ├── goal.md
    ├── crt.md
    ├── cloud.md
    ├── frt.md
    ├── prt.md
    └── transition.md
```

Not every repository needs all files.

A Tier 1 change might include only:

```text
.ltp/task-204/
├── claim.yaml
├── test-contract.yaml
└── completion.md
```

---

# 44. Pull-request integration

A non-trivial pull request should answer:

```text
Goal:
What desired effect does this change support?

Current reality:
What observable problem exists?

Pivotal claim:
What explanation or intervention assumption matters most?

Rivals:
What else might explain the problem?

Tests:
Which claims does each test expose?

Possible defeat:
What result would weaken the proposed model?

Evidence:
What traces were preserved?

Verdict:
What did the results establish?

Scope:
What remains untested?

Dependencies:
What else was reviewed?

Rollback:
How can the change be contained or reversed?
```

---

# 45. CI gates

Useful automated gates include:

## Claim gate

A high-risk change must reference a Claim Record.

## Test-link gate

New or modified tests identify the claims they support.

## Trace gate

Key test runs preserve environment and version information.

## Dependency gate

Changed public interfaces trigger:

* contract tests;
* consumer review;
* migration checks.

## Negative-branch gate

Security, migration, and destructive changes require explicit risk tests.

## Completion gate

The change records:

* residual uncertainty;
* rollout condition;
* rollback path.

---

# 46. Production testing

Many FRT claims cannot be resolved in CI.

Examples:

* latency under real load;
* cache convergence;
* user adoption;
* support reduction;
* incident frequency;
* rare failure modes.

Use:

* shadow traffic;
* canary rollout;
* feature flags;
* staged cohorts;
* operational metrics;
* synthetic probes;
* error-budget monitoring;
* qualitative user research.

Production tests require stronger safeguards because they act on real systems.

The Test Contract must include:

* population;
* exposure;
* stop conditions;
* rollback;
* data handling;
* attribution plan;
* time horizon.

---

# 47. Measurement claims

Every important metric should have its own claim.

Example:

> The stale-authorization rate accurately represents incorrect permission decisions.

Potential problems:

* expected grace periods are included;
* only observed requests are counted;
* unauthorized attempts are overrepresented;
* missing traces are treated as success;
* retries hide first failures.

Record:

```text
Metric:
Entity represented:
Population:
Numerator:
Denominator:
Exclusions:
Latency:
Known blind spots:
Gaming risk:
Validation method:
```

---

# 48. Handling flaky tests

“Flaky” is a classification, not an explanation.

Build a CRT.

```text
Test result varies across runs
│
├── Shared state may persist
├── Timing may be uncontrolled
├── External dependency may vary
├── Random seed may differ
├── Resource contention may vary
└── Product behavior may genuinely be nondeterministic
```

Register rivals.

Design discriminating probes:

* fixed seed;
* isolated environment;
* repeated-run distribution;
* dependency virtualization;
* schedule control;
* trace comparison;
* stress test.

Do not simply add retries.

Retries may suppress the evidence that the system is unstable.

---

# 49. Handling performance regressions

A performance claim requires:

* workload;
* hardware;
* environment;
* concurrency;
* warm-up;
* cache state;
* variance;
* baseline;
* acceptable threshold.

Possible rivals:

* code path changed;
* dataset changed;
* dependency version changed;
* runtime configuration changed;
* measurement noise;
* resource contention;
* tracing overhead.

A benchmark without a causal model often generates argument rather than learning.

---

# 50. Handling security changes

Security often imposes protected floors.

Examples:

* unauthorized access must not be accepted;
* secrets must not be exposed;
* encryption must not silently downgrade;
* destructive operations require explicit authorization.

Security testing should include:

* misuse cases;
* negative branches;
* adversarial inputs;
* privilege-boundary checks;
* fault behavior;
* logging and data exposure;
* recovery.

A security test may pass while the larger policy remains wrong.

Normative review remains separate from technical verification.

---

# 51. Handling migrations

Migration FRTs should include:

* old readers and new writers;
* new readers and old writers;
* partial rollout;
* rollback;
* duplicated processing;
* reordered events;
* failed backfill;
* stale caches;
* schema compatibility;
* data repair.

A migration Transition Tree should expose each intermediate mixed state.

Do not test only:

> Before migration.

and:

> After migration.

Most serious migration failures occur in between.

---

# 52. Team roles

For low-risk tasks, one engineer may perform all roles.

For consequential work, distinguish:

| Role                          | Responsibility                               |
| ----------------------------- | -------------------------------------------- |
| Model builder                 | Constructs the trees and claims              |
| Test designer                 | Designs discriminating probation             |
| Implementer                   | Makes the change                             |
| Trace custodian               | Preserves raw outputs and provenance         |
| Reviewer                      | Challenges uptake and attribution            |
| Adjudicator                   | Issues the verdict                           |
| Revision owner                | Updates the model and plan                   |
| Affected-party representative | Brings consequences from those who bear them |

Perfect independence is impossible.

The objective is enough separation that unwelcome evidence can survive.

---

# 53. Common anti-patterns

## Anti-pattern 1 — The test proves the feature works

Correction:

> Which precise behavior or outcome does the test establish?

---

## Anti-pattern 2 — We added tests after the fix

Correction:

Record whether the test:

* reproduced the original failure;
* distinguishes the causal hypothesis;
* merely locks in the chosen implementation.

---

## Anti-pattern 3 — The implementation failed, so the theory remains valid

Correction:

Implementation failure requires evidence.

The theory does not receive automatic protection.

---

## Anti-pattern 4 — We need more coverage

Correction:

Ask:

* Which pivotal claims remain unexposed?
* Which negative branches lack tests?
* Which test levels are missing?
* Which existing tests provide redundant evidence?

---

## Anti-pattern 5 — The metric improved, so the intervention worked

Correction:

Review:

* baseline;
* attribution;
* confounders;
* selection;
* classification;
* delayed effects;
* displaced harm.

---

## Anti-pattern 6 — The test is flaky, so ignore it

Correction:

Treat flakiness as evidence of an unresolved mechanism.

---

## Anti-pattern 7 — The tree must remain stable

Correction:

A useful tree changes when understanding changes.

Preserve the revision history.

---

## Anti-pattern 8 — Every box needs an automated test

Correction:

Some claims require:

* review;
* observation;
* production monitoring;
* experiment;
* user evidence;
* normative judgment.

---

# 54. Minimal “just tell me how to do it” procedure

For a normal Tier 2 task, use this compact method.

## 1. State the outcome

```text
We want:
```

## 2. State the protected floors

```text
We must not:
```

## 3. Record the observed problem

```text
We observe:
```

## 4. State the leading explanation

```text
We currently believe:
```

## 5. State at least one rival

```text
Another explanation is:
```

## 6. State the proposed intervention

```text
We propose:
```

## 7. State the prediction

```text
If our model is correct, we should observe:
```

## 8. State the possible defeat

```text
We would revise our view if:
```

## 9. Run the smallest safe discriminating test

```text
We will test by:
```

## 10. Preserve traces

```text
We recorded:
```

## 11. Issue a verdict

```text
Supported / qualified / weakened / defeated / rival favored /
measurement invalid / implementation failure / inconclusive
```

## 12. Revise and propagate

```text
This changes:
Code:
Tests:
Tree:
Plan:
Risks:
```

---

# 55. Completion report template

```text
LOSABLE TREE COMPLETION REPORT

Goal:
Protected floors:

Observed problem:
Pivotal claim:
Rivals:

Intervention:
Tests performed:
Raw evidence:

Verdict:
Reason:

Tree revisions:
Code revisions:
Test revisions:
Dependency review:

Desired effects observed:
Negative branches checked:

Remaining uncertainty:
Known unsupported assumptions:
Production monitoring:

Rollback:
Conditions that should reopen this work:
```

---

# 56. Measures of protocol health

The protocol should not be judged by how many records it creates.

Useful measures include:

* percentage of pivotal claims with rivals;
* percentage with explicit defeating evidence;
* time from adverse evidence to model revision;
* percentage of revisions propagated;
* number of repeated failures before re-abduction;
* rate of test changes made after outcomes;
* defects prevented from recurring;
* negative branches detected before broad rollout;
* production surprises traceable to an existing claim;
* percentage of tests with a clear evidential purpose.

The desired result is not more revision.

It is more **warranted revision**.

---

# 57. Making the protocol itself losable

The protocol’s central contention is:

> Using explicit LTP models, claim-linked tests, preserved evidential uptake, and dependency-aware revision improves the correctness, transparency, and durability of software change at an acceptable cost.

Rival contentions include:

* competent conventional engineering already provides the same benefits;
* a smaller test-contract method is sufficient;
* the full tree structure adds unnecessary cost;
* benefits appear only in unusual high-risk cases;
* the vocabulary enables more sophisticated rationalization;
* a different method performs better.

The protocol should be narrowed or rejected if comparative use shows that:

* it does not improve diagnosis;
* it does not improve correctness;
* simpler methods perform equally well;
* engineers complete artifacts ritualistically;
* process cost outweighs reduced failure;
* revisions become more frequent but less accurate;
* teams use “implementation failure” to protect weak theories;
* the method reduces useful experimentation;
* important results do not generalize beyond expert facilitators.

The formal conduct theory defines losability as a complete route from representable alternative, through discriminating consequence and uptake, to implemented revision. 

The protocol must satisfy that requirement itself.

---

# 58. Final operating principles

## Principle 1

A test is evidence for a claim, not proof of an entire project.

## Principle 2

Every significant software change rests on a model of reality, whether or not that model is written down.

## Principle 3

The purpose of making the model explicit is not documentation for its own sake.

It is to make the model easier to challenge, test, and revise.

## Principle 4

Passing tests can establish local behavioral correctness while leaving the system-level theory false.

## Principle 5

Failed tests do not all mean the same thing.

They may reveal:

* false code;
* false diagnosis;
* false measurement;
* missing condition;
* invalid environment;
* compromised uptake;
* or an exhausted hypothesis space.

## Principle 6

The smallest useful action is often one that combines improvement with information gain.

## Principle 7

A revised box in a tree is not enough.

The revision must propagate through code, tests, plans, and operating behavior.

## Principle 8

A project is not complete merely because the implementation works.

The intended effects must appear without unacceptable negative branches.

## Principle 9

The goal itself remains reviewable.

## Principle 10

A software-development model that cannot lose cannot learn.

---

# Conclusion

The Logical Thinking Process gives software teams a disciplined answer to four questions:

1. What are we trying to achieve?
2. Why are we not already achieving it?
3. What change do we believe will create the desired reality?
4. How will we cause, test, revise, and retain that change?

Software testing becomes much more powerful when placed inside that structure.

A test is no longer merely:

> code that returns green or red.

It becomes:

> a controlled exposure of a specific claim to a consequence that may support, qualify, or defeat it.

The Uptake Integrity Protocol therefore treats software delivery as a continuing inquiry:

> **Define the ideal.
> Model the current reality.
> Surface the conflict.
> Propose the future reality.
> Remove the obstacles.
> Act in testable steps.
> Preserve the consequences.
> Revise the model when reality resists.**

That is the foundation of software testing as a genuine learning discipline rather than merely a verification activity.

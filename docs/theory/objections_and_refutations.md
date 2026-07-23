## 1. Learnability

### The objection in its strongest form

The system may be coherent yet practically unlearnable.

It contains a large number of distinctions that are individually defensible but collectively demanding:

* goals, ideals, protected floors, and provenance;
* observations, classifications, causal claims, assumptions, promises, and assessments;
* receptive uptake versus evidential uptake;
* consequences versus evidence versus verdicts;
* trees, loops, gates, circuits, receipts, ledgers, safeguards, and revision authority;
* individual, relational, scaffolded, collective, and cross-scale agency.

A practitioner could easily learn the vocabulary without acquiring the judgment needed to use it. That would produce cargo-cult artifacts: beautiful trees, formally typed claims, and meticulous ledgers that do not correspond to the operative system.

The problem becomes worse across substrates. A human learner, an AI agent, and an organization do not learn in the same way. A human may be overwhelmed by procedural detail. An AI may reproduce the form while silently ignoring it during action. A collective may require a skilled facilitator who becomes the true carrier of the capability.

If the methodology works only when taught by an exceptional expert, then Agency Engineering has not created a transferable discipline. It has created a facilitator-dependent craft.

### The steelman

The system does not require every participant to learn the complete theory.

Its own architecture already supports **progressive disclosure, role differentiation, risk tiers, and the smallest adequate representation**. The collective and agentic-coding protocols explicitly distinguish lightweight cases from high-assurance cases and advise using only the structure needed to preserve the pivotal logic.  

The learnable core can be reduced to one operational loop:

> **What are we trying to change?
> What currently prevents it?
> What do we predict?
> What bounded action or test could teach us?
> What happened?
> What does it actually count as evidence for?
> What must now change and be retained?**

Everything else is an elaboration needed under particular conditions.

A novice might use:

```text
Goal
Current obstacle
Current hypothesis
Small test
Raw result
Verdict
Next change
```

A higher-risk project adds:

```text
Rival hypotheses
Protected floors
Test Contract
Evidence uptake
Dependency propagation
Independent assessment
Retention plan
```

A public, safety-critical, or coercive system adds the full governance layer.

That means Agency Engineering can be taught as a **spiral curriculum**:

1. learn to distinguish a consequence from a verdict;
2. learn to make a claim losable;
3. learn to design a discriminating action;
4. learn to revise dependent claims;
5. learn to work across multiple agents and scales;
6. learn governance, provenance, and controlled reliance.

The theory itself need not live inside every user. It can be externalized into templates, interfaces, prompts, role assignments, software constraints, and review gates. The agentic-coding architecture already separates:

* **skill**: what reasoning discipline should be followed;
* **harness**: what the environment enforces and preserves;
* **loop**: how action progresses and reacts to results. 

That separation is the answer to learnability. People need not memorize what the environment can reliably scaffold.

The system should therefore evaluate competence behaviorally, not terminologically. A learner has understood the method when they can:

* identify the pivotal uncertainty;
* state what would count against their view;
* choose an appropriately bounded probe;
* preserve the result without prematurely interpreting it;
* revise rather than explain away;
* retain the warranted change.

They need not lecture on Peircean semiotics.

So the coherent response is:

> **Learnability is itself an Agency Engineering problem. The methodology should be taught through staged capability, external scaffolds, role-specific interfaces, and increasingly complex cases—not as one enormous theoretical package.**

The danger of expert dependence remains real, but the framework already treats failure to survive facilitator removal as a defeat condition rather than as successful adoption. 

---

## 2. Infrastructure

### The objection in its strongest form

The system assumes an information infrastructure that mostly does not exist.

Ordinary collaboration tools do not natively represent:

* a promise with scope, conditions, acceptance criteria, and evidence requirements;
* an assessment with authority, provenance, appeal, and reliability;
* a hypothesis held in probation rather than accepted as fact;
* a goal with persistent identity and typed revision history;
* a distinction between raw consequence, evidence event, verdict, and obligation;
* a dependency graph capable of propagating revisions;
* cross-scale gates that preserve provenance;
* versioned authority, standing, and commitments.

Even if these objects can be represented, difficult implementation questions immediately appear:

* What is the source of truth?
* How are identities and principals resolved?
* What happens when two agents edit the same claim?
* How are contradictory verdicts handled?
* How are stale subscribers prevented from acting on superseded models?
* How are permissions, confidentiality, and affected-party access reconciled?
* How are append-only records corrected without falsifying history?
* How are dependency explosions contained?
* How are events ordered across distributed systems?
* How are schema versions migrated?
* What happens during network partitions or incomplete synchronization?
* Who maintains the infrastructure after the pilot ends?

If the system is manual, its administrative cost may destroy its usefulness. If it is automated, the software may silently impose false semantic precision. A dropdown labeled `refinement` does not establish that the goal was genuinely refined rather than replaced.

Infrastructure failure would not merely inconvenience the method. It would break its epistemic claims.

### The steelman

The primitives do not need to exist as natural kinds inside minds or software platforms. They need to exist as **explicit protocol objects with reconstructible semantics**.

The documentation already contains much of an object model:

* The Goal Provenance Graph gives goals persistent identity, versions, typed relations, and append-only lifecycle events. 
* The Losable Tree System defines an Ideal Charter, Claim Registry, Dependency Graph, Test Contracts, Evidence Ledger, Revision Log, and Retention Register. 
* The Collective Evidence Bus separates test execution, test result, evidence, verdict, revision, and obligation events. 
* The Promise Loop defines specification objects, assessment channels, outcome receipts, domain-specific reliability, and safeguard updates. 

These can be implemented using ordinary computing primitives:

```text
Typed object registry
    goals, claims, promises, tests, assessments, commitments

Append-only event store
    creation, execution, result, verdict, revision, retirement

Versioned dependency graph
    supports, depends_on, tests, implements, conflicts_with

Authority and provenance registry
    who may propose, assess, revise, bind, appeal, or stop

Policy engine
    safeguards, escalation, review burden, permissions, stop conditions

Subscription router
    sends relevant changes to owners, dependents, affected parties, and reviewers

Human-readable views
    trees, timelines, dashboards, disputes, current operative model
```

The system does not require one universal monolithic platform.

A low-risk implementation might be a versioned document plus a small claim table.

A team implementation might use a database and event stream.

A high-assurance collective implementation might require cryptographic provenance, formal access controls, replicated logs, and independent evidence custody.

The core invariant is not technological sophistication. It is that the system preserves the distinctions required for later reconstruction:

> What was claimed?
> Under which version and conditions?
> What happened?
> How was it converted into evidence?
> Who issued the verdict?
> What changed because of it?

Concurrency and propagation problems can also be handled coherently by treating the records as events rather than mutable truth:

* immutable object and event identifiers;
* explicit object versions;
* supersession rather than silent overwrite;
* idempotent event handling;
* conflict states rather than forced automatic resolution;
* acknowledgement requirements for consequential updates;
* stop conditions that take precedence over ordinary continuation;
* visible stale-version warnings;
* bounded automatic propagation followed by human or authorized adjudication.

The infrastructure must not pretend to decide semantic questions that belong to judgment. Software can record:

```text
G-17:v3 CLAIMED_TO_REFINE G-17:v2
```

It cannot prove that the relation is correct. That claim remains challengeable and must have an authority and evidence basis.

So the steelman is not:

> “All infrastructure questions are solved.”

It is:

> **The system has a coherent representational architecture: typed, versioned objects; append-only events; dependency-aware routing; explicit authority; and reconstructible provenance. The remaining work is implementation engineering, not a conceptual impossibility.**

The practical design principle remains proportionality:

> Use the lightest infrastructure that preserves the relevant distinctions and makes consequential revision executable.

---

## 3. Adoption and incentive compatibility

### The objection in its strongest form

Even if the system is learnable and technically implementable, the actors whose participation matters may have no reason to adopt it.

Agency Engineering asks people and institutions to:

* make goals and authority explicit;
* expose assumptions;
* preserve disconfirming evidence;
* distinguish procedural acceptance from genuine endorsement;
* record dissent;
* permit claims to lose;
* make assessments accountable;
* allow failures to alter permissions, resources, or authority.

Those requirements threaten existing advantages.

An incumbent leader may benefit from vague goals. A department may benefit from treating failure as someone else’s defect. A professional may resist making judgment auditable. An organization may prefer symbolic consultation to affected-party standing. A software team may prefer green tests to revisiting the product goal.

The benefits of the methodology are often delayed and collective. The costs are immediate and concentrated:

* more work;
* more exposure;
* slower apparent progress;
* loss of discretion;
* visible uncertainty;
* possible reduction in authority.

This creates a hostile adoption equilibrium. The actors most capable of implementing the system may be those with the least interest in making themselves answerable to it.

Worse, organizations can adopt the surface form while neutralizing the substance:

* claims are registered but cannot really lose;
* dissent is recorded but ignored;
* evidence is preserved but cannot change decisions;
* goals are versioned but leadership controls every revision;
* “relationship” language conceals unchanged coercive practice.

The method could therefore become a ceremonial bureaucracy that legitimizes the same closed system it was meant to reopen.

### The steelman

This is not an external objection to the framework. It is exactly the kind of loop the framework is designed to analyze.

Adoption cannot be produced by explaining the framework more persuasively. It must be engineered through repeated experiences in which participation produces visible local value.

The Cybersyn case makes the point sharply. Reporting failed when factories experienced it as extraction for Santiago rather than as reciprocal participation. The proposed repair was not a communications campaign; it was a new operational relation:

> truthful signals must produce timely help, protection, and useful coordination. 

LEAP offers the corresponding positive pattern. The new interpretation of absence became credible only because it was embodied in home visits, staffing, barrier diagnosis, service connection, follow-up, and evaluation. Friendlier language without changed machinery would not have constituted the recode. 

Agency Engineering therefore handles adoption through several principles.

### Immediate reciprocal value

Participants should experience early that making a problem visible results in useful response rather than punishment or extraction.

```text
Signal → useful response → visible improvement → increased willingness to signal
```

### Bounded entry

The full protocol should not be imposed everywhere at once. It begins with:

* a painful recurring problem;
* a bounded domain;
* a small number of pivotal claims;
* a short feedback cycle;
* visible operational value.

### Protection for truthful participation

If reporting failure predictably produces blame, the evidence channel will corrupt. The governance structure must alter incentives so that early disclosure activates assistance, containment, or joint diagnosis rather than automatic punishment.

### Role-specific benefit

Different participants need different reasons to participate:

* frontline actors gain faster help and recognition of local knowledge;
* managers gain clearer constraints and fewer arbitrary surprises;
* reviewers gain reconstructible evidence;
* affected parties gain standing and appeal;
* executives gain more reliable coordination and earlier warning.

### Institutional retention

A successful workshop is not adoption. The collective theory already states that one-shot interventions are absorbed by restoring institutional dynamics; durable change requires persistent practices, roles, records, and authority. 

### Controlled expansion

The vouching and controlled-reliance machinery supplies a plausible path for scaling adoption without granting immediate universal authority. Participants or components can enter bounded probation, produce assessed receipts, and earn broader reliance gradually. 

Most importantly, implementation of Agency Engineering must itself be a losable intervention.

Before adoption, it should specify:

* what burden it expects to impose;
* what local capability should improve;
* what behavior would show genuine rather than ceremonial adoption;
* what would indicate facilitator dependence;
* what would count as failure;
* when the protocol should be simplified or abandoned.

So the coherent steelman is:

> **Agency Engineering does not assume that actors will voluntarily embrace answerability. It treats adoption as a sign-and-incentive loop that must produce reciprocal local value, protect truthful participation, begin in bounded domains, and become materially institutionalized.**

## Synthesis

These three objections reveal three different implementation layers:

```text
Learnability
    Can agents acquire and perform the method?

Infrastructure
    Can the necessary distinctions, events, dependencies, and authorities be represented and executed?

Adoption
    Will the surrounding system reward real use rather than resist or ceremonialize it?
```

None can substitute for another.

A teachable method without infrastructure becomes aspiration.

Infrastructure without learnable practice becomes bureaucracy.

Both without adoption dynamics become an unused or performative system.

The strongest steelman is therefore that these are not peripheral deployment problems. They are themselves instances of Agency Engineering: capability must be built in the learner, the supporting infrastructure, and the institutional loop that sustains actual use.

The Process: Claim Tree + Cumulative Annotation

Three core objects:

1. Claim Tree — hierarchical decomposition of a top-level claim (or question) into sub-claims (or sub-questions). No scoring, no attribution. Just structure.
2. Source Document — any external text: paper, blog post, comment thread. The raw material that exists elsewhere in the world.
3. Annotations — extracted fragments from source docs, mapped onto specific nodes in the claim tree, with a link back to origin. AI does the mapping; user confirms/corrects.

The flow:

```
[Source doc OR seed claim]
       ↓
  [Claim Tree]        ← AI generates from input
       ↓
[New source doc]      ← user brings in external material
       ↓
[AI analysis]         ← "which parts of this doc are relevant to which nodes?"
       ↓
[Annotated Tree]      ← tree nodes now have attached quotes/links
       ↓
[Repeat with more docs] ← cumulative sense-making
```

Key insight worth naming: The claim tree is a stable scaffold. Documents come and go, but the tree is the persistent structure that discourse accumulates against. That's the
cathedral-building idea.

## Toy Example Options

Need something: (a) simple enough to grasp fast, (b) substantive enough to be interesting, (c) has existing real material to annotate with.

Candidates:

┌────────────────────────────────────────────┬─────────────────────────────────────────────────────┐
│                   Claim                    │                      Why good                       │
├────────────────────────────────────────────┼─────────────────────────────────────────────────────┤
│ "Coffee improves cognitive performance"    │ Simple, decomposable, tons of studies               │
├────────────────────────────────────────────┼─────────────────────────────────────────────────────┤
│ "Remote work increases productivity"       │ Relatable, contested, lots of blog posts + research │
├────────────────────────────────────────────┼─────────────────────────────────────────────────────┤
│ "Social media harms teenage mental health" │ Hot, decomposable, real papers exist                │
├────────────────────────────────────────────┼─────────────────────────────────────────────────────┤
│ "Reading fiction increases empathy"        │ Surprising, decomposable, studies exist             │
└────────────────────────────────────────────┴─────────────────────────────────────────────────────┘

Suggested: "Does remote work increase productivity?" — relatable to any knowledge worker, genuinely contested, decomposable into clear sub-questions (for whom? what tasks? short vs long
term?), and real material (Stanford studies, company blog posts, HBR articles) exists to annotate with.


## Visualization Shape

For a walkthrough site/slides, suggest 4 panels, left-to-right or top-down progression:

Panel 1: SEED
"Remote work increases productivity"
[raw claim or input doc excerpt]

Panel 2: TREE
Question/claim tree with 3-4 nodes expanded

Panel 3: SOURCE DOC
Blog post or paper excerpt highlighted

Panel 4: ANNOTATED TREE
Same tree, but nodes now have callout cards
attached — quote + link to source

Each panel reveals progressively. Slides or a simple scrollytelling web page would both work.

## Toy Example: "Does remote work increase productivity?"

### Issue Tree

```
Does remote work increase productivity?
├── For whom? (what types of workers/roles?)
│   ├── Individual contributors vs managers?
│   └── Deep work roles vs collaborative roles?
├── For what tasks?
│   ├── Focused/solo tasks?
│   └── Creative/collaborative tasks?
├── Over what time horizon?
│   ├── Short-term (first months)?
│   └── Long-term (1+ years)?
└── Under what conditions?
    ├── Home setup quality?
    └── Managerial practices?
```

### Source Document

Nick Bloom (Stanford, 2015) — study of call centre workers at Ctrip.

Key findings:
- 13% productivity gain for remote workers
- Gain was on solo call-handling tasks specifically
- Gain partially reversed when workers chose to return to office

### Annotations (AI-generated, mapped to tree nodes)

- "13% productivity gain" → root question + "focused/solo tasks" node — **supports** remote productivity
- "gain partially reversed on return" → "time horizon" node — **complicates** (short-term vs long-term distinction matters)
- "call centre workers only" → "for whom" + "what tasks" nodes — **limits scope** (may not generalise to knowledge workers)

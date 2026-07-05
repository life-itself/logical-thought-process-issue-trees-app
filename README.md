---
created: 2026-06-06
status: in-progress
---

# Logial Thinking Process (LTP) / Issue Tree App and Exploration

Collaboration of Rufus Pollock with David Joseph to build tooling for structured thinking — specifically a Logical Thinking Process (LTP) / Issue Tree app. Both David and Rufus share a long-standing frustration with how poorly structured public argument is: claims are vague, debate doesn't accumulate, evidence doesn't clearly map to specific sub-points.

**Core shared vision:** A tool where you take a top-level claim, recursively decompose it into sub-claims, and build a directed graph (DAG) of claims + evidence. Enables "cathedral building" where discourse actually accumulates rather than being scattered across forum posts.

<div class="demo-cta">
  <a href="claim-tree-annotation-demo/index.html" class="btn-primary btn-primary-lg">
    Explore the claim tree annotation demo
  </a>
</div>

**Key docs:** [MOTIVATION.md](MOTIVATION.md) — why this matters + problem framing (SCQH) · [PLAN.md](PLAN.md) — plan of work, streams, next actions · [AGENTS.md](AGENTS.md) — guide for AI agents.

David's angle: his "Abductio" process for proposition decomposition — takes any claim, breaks into subclaims until confidence threshold is met. Built into his Promise Protocol framework.

Rufus's angle: issue trees / SCQH / Minto pyramids — wanted an app for this for 10+ years. Previously almost built one 3–4 years ago.

**First shared experiment:** Create a LTP for Second Renaissance (theory of constraints / prerequisite tree).

**Communication channel:** Second Renaissance Discord sub-channel.

## References

- Meeting notes (Jun 6, 2026): https://docs.google.com/document/d/1UEEZSlEMlOlsDxiQOR5WIfxbiQ7Mlw7nw060j_1jqcM/edit
- David's LTP project: https://stitch.withgoogle.com/projects/3568286358932959093
- David's "Signs of Change": https://drive.google.com/file/d/1hAKIH8aCyS_xk5mFlFWNZ_cvF4yteF30/view
- Promise Foundation: https://www.promise.foundation/how-it-works
- Provisio (David's AI risk/promise app): https://praevisio.promise.foundation/
- issuetrees.com (Rufus's site): https://issuetrees.com

## Next Steps

- [x] Create Discord channel for LTP collaboration **✅2026-06-06 - new channel in 2R server**
- [ ] Begin with AI skill development for claim tree generation
- [ ] Focus on minimal viable implementation before complex features
- [ ] Test with Life Itself research group as initial use case

### 1. Write up background post on Rufus's interest in structured thinking
- [ ] Get transcript / recording from Jun 6 conversation with David
- [ ] Locate written material shared with David in that session
- [ ] Find old issue tree diagrams
- [ ] Draft post synthesising background + personal story

### 2. Create diagram of four steps for the app
- [ ] Sketch the four-step process Rufus has in mind for the app
- [ ] Produce clean diagram (Mermaid or similar) to share with David

### 3. Create shared repo for ideas collaboration
- [ ] Set up GitHub repo for LTP / issue tree app ideas
- [ ] Invite David as collaborator

### 4. Setup Discord bot for Second Renaissance channel
- [x] Set up bot to monitor the LTP collaboration Discord sub-channel **✅2026-06-23 - setup done, not doing anything yet**
- [ ] Configure summaries / updates to feed into workplan

### 5. Sketch simple website demo (4 steps)
- [x] Rufus to produce sketch of demo site showing the four-step flow: **[claim tree annotation demo](claim-tree-annotation-demo/index.html)**
  1. Material (input) → 2. Tree (claim decomposition) → 3. Related doc → 4. Annotation

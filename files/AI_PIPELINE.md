# NOVA — AI Reasoning Pipeline

Most projects that use an LLM document it as one box labeled "AI." NOVA's AI layer is a pipeline with distinct, testable stages — this document walks through each one, because it's the part of the system most reviewers won't think to ask about, and the part that makes NOVA's answers trustworthy instead of generic.

## Contents

- [Why This Pipeline Exists](#why-this-pipeline-exists)
- [The Full Pipeline](#the-full-pipeline)
- [AI Lifecycle (Simplified)](#ai-lifecycle-simplified)
- [Module Breakdown](#module-breakdown)
- [What the AI Layer Never Does](#what-the-ai-layer-never-does)

---

## Why This Pipeline Exists

Ask an LLM a business question with no structure around it, and you get a plausible-sounding, ungrounded answer. NOVA's entire AI layer exists to prevent that. Every question a user asks is deliberately narrowed down to *only* the relevant business data, converted into evidence, and only then handed to Gemini — with instructions to reason over that evidence, not invent its own.

---

## The Full Pipeline

```text
User Question
   ↓
Brain Query Builder
   ↓
Decision Orchestrator
   ↓
Context Selector
   ↓
Evidence Builder
   ↓
Evidence Formatter
   ↓
Prompt Builder
   ↓
Gemini
   ↓
Response Parser
   ↓
Frontend
```

Each arrow in this diagram is a hard boundary — the output of one stage is the only input the next stage receives. No stage reaches back into raw inventory data on its own; everything flows forward through the pipeline.

---

## AI Lifecycle (Simplified)

For a bird's-eye view, the same pipeline collapses to:

```text
Question
   ↓
Brain Query
   ↓
Context
   ↓
Evidence
   ↓
Gemini
   ↓
Structured Response
   ↓
React UI
```

---

## Module Breakdown

### Brain Query Builder
Takes the user's raw natural-language question and turns it into a structured query the rest of the pipeline can act on — identifying what's actually being asked (a specific SKU? overall health? a comparison?) before anything else happens.

### Decision Orchestrator
Determines which engines and data sources are relevant to the query and coordinates the order in which they're consulted. This is the layer that decides *what needs to be looked up* to answer the question.

### Context Selector
Pulls only the slice of inventory/business data relevant to this specific question — never the entire dataset. This keeps responses fast and keeps the AI focused on what actually matters to the user's question.

### Evidence Builder
Converts the selected business objects into explainable evidence: concrete numbers, thresholds, and comparisons pulled directly from engine output, with nothing invented.

### Evidence Formatter
Structures that evidence into a consistent shape so the prompt layer can rely on predictable formatting regardless of which engines contributed data.

### Prompt Builder
Constructs a deterministic prompt for Gemini — the same evidence structure produces the same prompt structure every time. This is what keeps NOVA's responses consistent rather than randomly worded from one run to the next.

### Gemini
Reasons over the assembled evidence and produces a natural-language explanation, recommendation, and confidence assessment — grounded entirely in what it was given.

### Response Parser
Converts Gemini's raw output into a structured business object (summary, evidence, business impact, recommendation, confidence) that the frontend can render predictably, rather than parsing free-form text on the client.

---

## What the AI Layer Never Does

To keep NOVA explainable, the AI layer operates under hard constraints:

- **It never calculates business numbers.** Every dollar figure, score, and threshold comes from the deterministic business engines (see [`ARCHITECTURE.md`](./ARCHITECTURE.md#business-engines)) before Gemini ever sees it.
- **It never sees the full inventory dataset.** The context selector guarantees Gemini only receives what's relevant to the current question.
- **It never skips the evidence step.** Every response is required to be traceable back to specific evidence, not a general impression of the data.
- **It never returns unstructured output to the frontend.** The response parser is a mandatory gate between Gemini and the UI.

This is the difference between "an AI chatbot bolted onto a dashboard" and an AI layer that's actually part of the system's architecture.

---

For where this evidence originates, see the [Business Engines](./ARCHITECTURE.md#business-engines) section of `ARCHITECTURE.md`.
For the API surface that exposes the copilot, see [`API_REFERENCE.md`](./API_REFERENCE.md#post-apichat).

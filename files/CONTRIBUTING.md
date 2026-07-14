# Contributing to NOVA

Thanks for considering a contribution to NOVA. This guide covers how to get set up locally, how the codebase is organized, and the conventions that keep it consistent.

## Contents

- [Before You Start](#before-you-start)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Conventions](#coding-conventions)
- [Adding a New Business Engine](#adding-a-new-business-engine)
- [Working on the AI Layer](#working-on-the-ai-layer)
- [Submitting a Pull Request](#submitting-a-pull-request)

---

## Before You Start

Read [`ARCHITECTURE.md`](./ARCHITECTURE.md) first. NOVA follows a strict layered architecture (controllers → services → builders → engines → repository → AI layer), and contributions are expected to respect those boundaries rather than shortcut across them.

If your change touches the AI Copilot specifically, also read [`AI_PIPELINE.md`](./AI_PIPELINE.md) — the reasoning pipeline has hard rules (e.g., the AI layer never calculates business numbers) that PRs are expected to preserve.

---

## Development Setup

### Prerequisites
- Node.js (v18+)
- PostgreSQL instance
- Google Gemini API key

### Setup

```bash
git clone https://github.com/TUMMALA-AKSHAYA/nova.git
cd nova

cd server && npm install
cd ../client && npm install
```

Create `server/.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/nova"
GEMINI_API_KEY="your_gemini_api_key_here"
PORT=5000
```

Run both apps in development:
```bash
# Terminal 1 — backend
cd server && npm run dev

# Terminal 2 — frontend
cd client && npm run dev
```

---

## Project Structure

```text
src/
├── controllers/    # HTTP request handling and validation only
├── services/       # Use-case orchestration
├── builders/       # Raw data → business object transformation
├── engines/        # Core business logic (financial, health, decisions)
├── ai/             # Context, evidence, prompting, reasoning, parsing
├── brain/          # Intent understanding, context selection, orchestration
└── repositories/   # Single source of truth for inventory data
```

Before adding code, decide which layer it belongs in using [`ARCHITECTURE.md`](./ARCHITECTURE.md#folder-by-folder-breakdown). If you're not sure, open an issue or draft PR and ask — it's easier to place logic correctly the first time than to refactor it later.

---

## Coding Conventions

- **Controllers stay thin.** No business logic, no direct engine calls — controllers validate and delegate to a service.
- **Engines are pure and deterministic.** Given the same inputs, an engine must always produce the same outputs. No randomness, no AI calls, no side effects.
- **The AI layer never computes business numbers.** If you find yourself asking Gemini to calculate a dollar figure or health score, that logic belongs in an engine instead — the AI layer should only reason over numbers that already exist.
- **The repository is the only source of truth.** Don't cache or duplicate inventory state elsewhere; read and write through the repository layer.
- **Every AI response must remain traceable to evidence.** If a change makes the copilot's output harder to trace back to specific data, it should be reconsidered before merging.
- **TypeScript types over `any`.** Business objects (inventory items, engine outputs, evidence objects) should have explicit types shared across layers.

---

## Adding a New Business Engine

1. Define the engine's single responsibility — one engine, one concern (see existing engines in [`ARCHITECTURE.md`](./ARCHITECTURE.md#business-engines) for the pattern).
2. Implement it as a pure function or class in `engines/` with clearly typed input and output.
3. Wire it into the relevant service — never call it directly from a controller.
4. If its output should ever reach the AI Copilot, add an evidence mapping in the AI layer rather than passing raw engine output straight to Gemini.
5. Document it in `ARCHITECTURE.md` under Business Engines, following the existing Purpose/Output format.

---

## Working on the AI Layer

If you're modifying anything in `ai/` or `brain/`:

- Preserve the pipeline order described in [`AI_PIPELINE.md`](./AI_PIPELINE.md#the-full-pipeline) — stages should not reach past their immediate neighbor.
- Keep prompts deterministic. The Prompt Builder should produce consistent structure for the same evidence input.
- The Response Parser is mandatory — no code path should return raw Gemini output directly to the frontend.
- Add or update tests around the Context Selector and Evidence Builder in particular, since they determine what the model sees.

---

## Submitting a Pull Request

1. Fork the repo and create a branch from `main`.
2. Keep PRs scoped to one concern — a new engine, a bug fix, a docs update. Avoid mixing refactors with feature work.
3. Update relevant documentation (`ARCHITECTURE.md`, `AI_PIPELINE.md`, or `API_REFERENCE.md`) alongside any code change that affects them.
4. Describe **what** changed and **why** in the PR description — link to any related issue.
5. Be responsive to review feedback; small, iterative PRs get merged faster than large ones.

Questions or ideas that don't fit neatly into an issue are welcome on the [issues page](https://github.com/TUMMALA-AKSHAYA/nova/issues).

---

Thanks for helping build NOVA.

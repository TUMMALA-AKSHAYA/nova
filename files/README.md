<div align="center">

# NOVA
### AI COO for Modern Retail

**Upload Inventory → Detect Risks → Prioritize Decisions → Talk to AI → Take Action**

*An AI-powered operating system for inventory intelligence.*

<br/>

<img src="https://img.shields.io/badge/AI-Google_Gemini-4285F4?style=for-the-badge&logo=google"/>
<img src="https://img.shields.io/badge/Frontend-React_19-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js"/>
<img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql"/>
<img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma"/>

<br/><br/>

<a href="#what-is-nova">What is NOVA</a> •
<a href="#executive-capabilities">Capabilities</a> •
<a href="#documentation">Documentation</a> •
<a href="#getting-started">Getting Started</a> •
<a href="#roadmap">Roadmap</a>

</div>

---

## What is NOVA?

Inventory isn't the problem. **Decision making is.**

Most retail tools stop at showing you data. NOVA goes further — it behaves like an AI Chief Operating Officer sitting on top of your inventory. It continuously analyzes stock levels, identifies operational risk, calculates the financial impact of that risk, prioritizes what needs attention today, and explains *why* — with evidence, not guesses.

No black-box scores. No vague alerts. Every recommendation NOVA makes is traceable back to the exact data that produced it.

---

## Executive Capabilities

| Capability | What it does |
|---|---|
| 📊 **Executive Dashboard** | Real-time view of inventory health, risk, and financial exposure |
| 🤖 **AI Chief Operating Officer** | A reasoning layer that interprets inventory state the way an operator would |
| 💰 **Revenue Risk Analysis** | Quantifies revenue at risk from stockouts, overstock, and dead inventory |
| 📉 **Stockout Prediction** | Flags SKUs likely to run out before they impact sales |
| 🪦 **Dead Stock Detection** | Surfaces inventory that's stopped moving and is tying up capital |
| 📦 **Overstock Detection** | Identifies excess inventory before it becomes a write-off |
| 🧠 **Inventory Intelligence** | Turns raw stock data into prioritized, actionable insight |
| 📁 **Dynamic CSV Upload** | Works with any inventory export — no fixed schema required |
| 🗺️ **AI Header Mapping** | Automatically maps messy or inconsistent CSV headers to a standard schema |
| 🔍 **Evidence-Based Recommendations** | Every action is backed by underlying data, not a black box |
| 💬 **Natural Language Business Assistant** | Ask questions about your inventory in plain English and get grounded answers |

---

## How It Works

```mermaid
graph TD
    A[CSV Upload] --> B[Universal Parser]
    B --> C[AI Header Mapping]
    C --> D[Inventory Repository]
    D --> E[Inventory Intelligence Engine]
    E --> F[Business Health Engine]
    F --> G[Executive Dashboard]
    F --> H[AI Copilot]
    H --> I[Executive Decisions]
```

You upload a CSV. NOVA parses it, uses AI to map whatever headers it finds to a standard schema, stores it in the inventory repository, and runs it through the intelligence and business health engines. The result surfaces on the executive dashboard — and you can interrogate it further through the AI Copilot.

For the full breakdown of every layer, see [`ARCHITECTURE.md`](./ARCHITECTURE.md).

---

## Documentation

NOVA is documented like a production system, not a single script. Each doc has a specific job:

| Document | Purpose |
|---|---|
| [`README.md`](./README.md) | Product overview — what NOVA is and why it exists *(you are here)* |
| [`ARCHITECTURE.md`](./ARCHITECTURE.md) | Full system architecture — every layer, every folder, design principles |
| [`AI_PIPELINE.md`](./AI_PIPELINE.md) | How NOVA reasons — context, evidence, prompting, and response parsing |
| [`API_REFERENCE.md`](./API_REFERENCE.md) | Backend endpoints, request/response shapes, and request lifecycle |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md) | Development setup, coding conventions, and how to contribute |

---

## Reviewer Navigation

For reviewers, judges, and recruiters — here's where to look first:

| Area | What to check |
|---|---|
| **Dashboard** | Executive-level view of inventory health |
| **Products** | Underlying SKU-level inventory data |
| **Upload** | Dynamic CSV ingestion + AI header mapping in action |
| **AI Copilot** | Natural-language querying over live inventory data |
| **Inventory Engine** | Core logic for stockout / overstock / dead stock detection |
| **Decision Engine** | Prioritization logic behind recommended actions |
| **Business Health** | Aggregated financial and operational risk scoring |
| **Financial Engine** | Revenue-at-risk calculations |
| **AI Context** | How context is assembled and passed to the AI layer |
| **Evidence Engine** | How each recommendation is tied back to source data |

---

## Design Principles

- **Single Source of Truth** — the inventory repository, not scattered state
- **Modular Business Engines** — each engine owns one concern and nothing else
- **Explainable AI** — every recommendation ships with its evidence
- **Deterministic Business Logic** — numbers come from code, never from the model
- **AI Never Calculates Business Numbers** — Gemini reasons over evidence; it doesn't compute it
- **Separation of Business Logic and AI Reasoning** — engines and AI layer never merge responsibilities
- **Scalable, Service-Oriented Architecture** — built to add stores, forecasting, and reporting without rewrites

More on why these choices matter in [`ARCHITECTURE.md`](./ARCHITECTURE.md#design-principles).

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL instance
- Google Gemini API key

### Installation

```bash
git clone https://github.com/TUMMALA-AKSHAYA/nova.git
cd nova

cd server && npm install
cd ../client && npm install
```

### Environment Setup

Create a `.env` file in `server/`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nova"
GEMINI_API_KEY="your_gemini_api_key_here"
PORT=5000
```

### Run Locally

```bash
# Backend (from /server)
npm run dev

# Frontend (from /client)
npm run dev
```

Upload an inventory CSV and NOVA takes it from there.

---

## Roadmap

| Phase | Milestone | Status |
|---|---|---|
| 1 | Dynamic Inventory Intelligence | ✅ Shipped |
| 2 | AI Copilot | ✅ Shipped |
| 3 | Historical Snapshots | 🚧 In progress |
| 4 | Forecasting | 🚧 Planned |
| 5 | Multi-store Intelligence | 🚧 Planned |
| 6 | SaaS Platform | 🚧 Planned |
| 7 | Executive Daily Briefings | 🚧 Planned |

---

## Contributing

Contributions, issues, and feature requests are welcome — see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the development setup and conventions. Feel free to check the [issues page](https://github.com/TUMMALA-AKSHAYA/nova/issues) or open a pull request.

---

<div align="center">

Built with ❤️ by **Team NOVA**

*AI should help businesses make better decisions, not just generate more dashboards.*

NOVA is building the operating system for modern retail.

</div>

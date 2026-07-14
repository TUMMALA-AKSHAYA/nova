<p align="center">
  <h1 align="center">NOVA</h1>
  <p align="center"><b>AI COO for Retail Operations</b></p>
  <p align="center">Transform inventory data into executive decisions in seconds.</p>
  <p align="center">
    <i>Upload inventory → Analyze risks → Prioritize actions → Ask AI → Take action</i>
  </p>
</p>

<p align="center">

  <img src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" />

  <img src="https://img.shields.io/badge/Frontend-React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=white" />

  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />

  <img src="https://img.shields.io/badge/Framework-Express-000000?style=for-the-badge&logo=express&logoColor=white" />

  <img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />

  <img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />

</p>
<p align="center">

  <img src="https://img.shields.io/github/license/TUMMALA-AKSHAYA/nova?style=flat-square" />

  <img src="https://img.shields.io/github/last-commit/TUMMALA-AKSHAYA/nova?style=flat-square" />

  <img src="https://img.shields.io/github/repo-size/TUMMALA-AKSHAYA/nova?style=flat-square" />

  <img src="https://img.shields.io/github/languages/top/TUMMALA-AKSHAYA/nova?style=flat-square" />

</p>

<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#executive-capabilities">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## Why NOVA?

Inventory isn't the problem. **Decision making is.**

Businesses don't need another dashboard — they need an AI Chief Operating Officer. NOVA continuously analyzes inventory, identifies operational risks, calculates financial impact, prioritizes actions, and explains every recommendation using transparent, evidence-based reasoning.

No black-box scores. No vague alerts. Every recommendation NOVA makes is traceable back to the data that produced it.

---

## Executive Capabilities

| Capability | Description |
|---|---|
| 📊 **Executive Dashboard** | Real-time view of inventory health, risk, and financial exposure |
| 🤖 **AI Chief Operating Officer** | Natural-language reasoning layer that interprets inventory state like an operator would |
| 💰 **Revenue Risk Analysis** | Quantifies revenue at risk from stockouts, overstock, and dead inventory |
| 📉 **Stockout Prediction** | Flags SKUs at risk of running out before they impact sales |
| 🪦 **Dead Stock Detection** | Surfaces inventory that's stopped moving and tying up capital |
| 📦 **Overstock Detection** | Identifies excess inventory ahead of it becoming a write-off |
| 🧠 **Inventory Intelligence** | Turns raw stock data into actionable, prioritized insight |
| 📁 **Dynamic CSV Upload** | Works with any inventory export, no fixed schema required |
| 🗺️ **AI Header Mapping** | Automatically maps messy/inconsistent CSV headers to a standard schema |
| 🔍 **Evidence-Based Recommendations** | Every action is backed by the underlying data, not a black box |
| 💬 **Natural Language Business Assistant** | Ask questions about your inventory in plain English and get grounded answers |

---

## How It Works

```
CSV Upload
   ↓
Universal Parser
   ↓
AI Header Mapping
   ↓
Inventory Repository
   ↓
Inventory Intelligence Engine
   ↓
Business Health Engine
   ↓
Executive Dashboard  ──►  AI Copilot
```

```mermaid
graph TD
    A[CSV Upload] --> B[CSV Parser]
    B --> C[AI Header Mapping]
    C --> D[Inventory Repository]
    D --> E[Inventory Intelligence]
    E --> F[Business Health]
    F --> G[Executive Dashboard]
    F --> H[AI Copilot]
    H --> I[Business Decisions]
```

You upload a CSV. NOVA parses it, maps whatever headers it finds to a standard schema using AI, stores it in the inventory repository, and runs it through the intelligence and business health engines. The result surfaces on the executive dashboard — and you can interrogate it further through the AI Copilot.

---

## Architecture

```
Frontend                    AI Layer                 Business Engines
─────────                   ────────                 ─────────────────
React 19                    Gemini                    Inventory Engine
TypeScript                  Reasoning Engine           Financial Engine
Tailwind CSS                Evidence Engine             Business Health Engine
Recharts
     │                           │                           |
     └───────────► REST API ◄────┴──────────► Repository ◄───┘
                        │                    (Inventory Snapshot)
                        ▼
                    Node.js / Express
                        │
                        ▼
                    PostgreSQL (via Prisma ORM)
```

**Design principle:** every layer is separable. The reasoning and evidence engines sit between raw inventory data and the business engines so that every number the dashboard shows can be traced back to its source.

---

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Recharts
- **Backend:** Node.js, Express (REST API)
- **Database:** PostgreSQL
- **ORM:** Prisma
- **AI:** Google Gemini (header mapping, reasoning, and the natural-language copilot)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL instance
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/TUMMALA-AKSHAYA/nova.git
cd nova

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Environment Setup

Create a `.env` file in the `server` directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nova"
GEMINI_API_KEY="your_gemini_api_key_here"
PORT=5000
```

### Run Locally

```bash
# Start the backend (from /server)
npm run dev

# Start the frontend (from /client)
npm run dev
```

Then open the app in your browser and upload an inventory CSV to get started.

---

## Project Navigation

For reviewers, judges, and recruiters — here's where to look:

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

## Roadmap

**Shipped**
- [x] Executive Dashboard
- [x] AI Copilot
- [x] Inventory Intelligence
- [x] Dynamic CSV Upload
- [x] Products view
- [x] Business Health Engine

**Coming Soon**
- [ ] Historical Snapshots
- [ ] Demand Forecasting
- [ ] Multi-store Support
- [ ] Executive Reports (exportable)
- [ ] Daily AI Briefing
- [ ] SaaS Platform

---

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/TUMMALA-AKSHAYA/nova/issues) or open a pull request.

---

<p align="center">
  Built with ❤️ by <b>Team NOVA</b><br/>
  <i>AI should help businesses make better decisions, not just generate more dashboards.</i><br/>
  NOVA is building the operating system for modern retail.
</p>

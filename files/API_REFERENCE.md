# NOVA — API Reference

Base URL (local): `http://localhost:5000/api`

All endpoints return JSON. This document covers the three core endpoints that drive NOVA's frontend — the dashboard, the upload pipeline, and the AI copilot.

## Contents

- [Request Lifecycle](#request-lifecycle)
- [GET /api/dashboard](#get-apidashboard)
- [POST /api/upload](#post-apiupload)
- [POST /api/chat](#post-apichat)
- [Error Handling](#error-handling)

---

## Request Lifecycle

Every request below follows the same path through the system:

```text
Frontend
   ↓
Express Route
   ↓
Controller
   ↓
Service
   ↓
Builders
   ↓
Engines
   ↓
Repository
   ↓
Response
```

See [`ARCHITECTURE.md`](./ARCHITECTURE.md#request-lifecycle) for what each layer is responsible for.

---

## `GET /api/dashboard`

Returns the current executive view of the business — everything the dashboard needs in a single call.

**Response includes:**
- Executive Brief — the day's top-level summary
- Business Health — aggregated health score and risk breakdown
- Metrics — key inventory and financial figures
- Today's Decisions — the current prioritized action list
- Products at Risk — SKUs flagged by the inventory engines

**Example response shape:**
```json
{
  "executiveBrief": {
    "summary": "string",
    "generatedAt": "ISO-8601 timestamp"
  },
  "businessHealth": {
    "score": 0,
    "trend": "up | down | stable",
    "topRisks": ["string"]
  },
  "metrics": {
    "totalRevenueAtRisk": 0,
    "stockoutCount": 0,
    "overstockCount": 0,
    "deadStockCount": 0
  },
  "todaysDecisions": [
    {
      "id": "string",
      "priority": "high | medium | low",
      "action": "string",
      "sku": "string"
    }
  ],
  "productsAtRisk": [
    {
      "sku": "string",
      "riskType": "stockout | overstock | deadstock",
      "healthScore": 0
    }
  ]
}
```

---

## `POST /api/upload`

Accepts a CSV file and runs it through the full ingestion pipeline.

**Request:** `multipart/form-data` with the CSV file attached.

**What happens on the server:**
1. Uploads and parses the CSV (any structure — no fixed schema required)
2. Maps headers to NOVA's internal schema using AI
3. Normalizes the resulting inventory data
4. Updates the inventory repository

**Example response:**
```json
{
  "success": true,
  "rowsProcessed": 0,
  "mappedHeaders": {
    "originalHeader": "mappedField"
  },
  "warnings": ["string"]
}
```

See [`ARCHITECTURE.md`](./ARCHITECTURE.md#inventory-intelligence-pipeline) for the full ingestion pipeline this endpoint triggers.

---

## `POST /api/chat`

Accepts a natural-language question and returns a grounded, evidence-based answer from the AI Copilot.

**Request body:**
```json
{
  "question": "string"
}
```

**Response fields:**

| Field | Description |
|---|---|
| `summary` | Plain-language answer to the question |
| `evidence` | The specific data points the answer is grounded in |
| `businessImpact` | What this means in operational/financial terms |
| `recommendation` | The suggested next action, if any |
| `confidence` | How confident the response is, based on evidence completeness |

**Example response:**
```json
{
  "summary": "string",
  "evidence": [
    {
      "source": "string",
      "value": "string",
      "detail": "string"
    }
  ],
  "businessImpact": "string",
  "recommendation": "string",
  "confidence": "high | medium | low"
}
```

For how this response is actually constructed, see [`AI_PIPELINE.md`](./AI_PIPELINE.md#the-full-pipeline).

---

## Error Handling

All endpoints return standard HTTP status codes. Error responses follow a consistent shape:

```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

| Status | Meaning |
|---|---|
| `400` | Malformed request (e.g., missing file, empty question) |
| `422` | CSV could not be parsed or mapped with sufficient confidence |
| `500` | Unexpected server error |

---

For local setup, see [`README.md`](./README.md#getting-started).
For architectural context on how these endpoints are backed, see [`ARCHITECTURE.md`](./ARCHITECTURE.md).

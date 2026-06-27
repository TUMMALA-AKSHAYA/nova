## 🎯 Vision

We are building **NOVA**, an AI-powered inventory intelligence platform for retail stores, restaurants, cafés, supermarkets, pharmacies, etc.

The biggest problem today is:

* Every business exports inventory differently.
* Different POS systems use different column names.
* Before doing analytics, someone has to manually clean the data.

Our goal is:

> **Upload any inventory file → NOVA understands it automatically → AI provides business insights.**

---

# Phase 1 — Backend Foundation

## 1. Express Server

We created an Express backend.

```
Client
     ↓
Express Server
```

Purpose:

* Receive API requests
* Handle uploads
* Return AI results

---

## 2. PostgreSQL + Prisma

We connected PostgreSQL using Prisma.

Purpose:

Store:

* Users
* Stores
* Inventory
* Future AI memory

Example:

```
Store
    ↓
Products
    ↓
Inventory
```

---

## 3. Upload API

Created:

```
POST /api/upload
```

Example:

Restaurant uploads:

```
inventory.csv
```

NOVA receives it.

Before:

```
CSV
```

After:

```
CSV
↓

Server receives file
```

---

## 4. Multer Middleware

Used Multer for uploads.

Purpose:

Temporarily save uploaded files.

Example:

```
inventory.csv
```

↓

```
server/src/uploads/
```

---

## 5. CSV Parser

Built:

```
csvParser.service.ts
```

Purpose:

Convert CSV into JavaScript objects.

Example CSV

```
Product,Qty,Price

Coffee,20,200
Milk,10,50
```

Parser returns:

```javascript
[
  {
    Product:"Coffee",
    Qty:"20",
    Price:"200"
  },
  {
    Product:"Milk",
    Qty:"10",
    Price:"50"
  }
]
```

---

# Phase 2 — Intelligence Layer

This is where NOVA starts becoming different from a normal inventory system.

---

## Problem

Different businesses use different headers.

Example 1

```
Product
```

Example 2

```
Item Name
```

Example 3

```
Food Item
```

Example 4

```
P.Name
```

All mean the same thing.

Humans understand this.

Computers don't.

So we built an Intelligence Layer.

---

# 6. Header Normalizer

File:

```
headerNormalizer.ts
```

Purpose:

Standardize headers.

Example:

Input

```
PRODUCT_NAME
```

↓

Output

```
product name
```

Another example

```
Product-Name
```

↓

```
product name
```

Another

```
P.Name
```

↓

```
p name
```

This removes:

* Capitalization
* Dots
* Hyphens
* Extra spaces

Now every header becomes clean.

---

# 7. Dictionary Matcher

Purpose:

Map known words to NOVA's standard fields.

Example

```
Product
```

↓

```
productName
```

Example

```
Item Name
```

↓

```
productName
```

Example

```
Food Item
```

↓

```
productName
```

Example

```
Qty
```

↓

```
quantity
```

Example

```
Inventory
```

↓

```
quantity
```

This is basically NOVA's vocabulary.

---

# 8. Fuzzy Matcher

Purpose:

Handle spelling mistakes.

Example

Instead of

```
Product
```

restaurant uploads

```
Prodct
```

Instead of

```
Quantity
```

they upload

```
Quatity
```

Instead of

```
Price
```

they upload

```
Prce
```

Future output:

```
Prodct
↓

Product
```

This module exists but isn't fully implemented yet.

---

# 9. Semantic Mapper

Purpose:

Understand meaning instead of exact words.

Example

Restaurant A

```
Closing Balance
```

Restaurant B

```
Stock Available
```

Restaurant C

```
Current Inventory
```

Humans know all mean quantity.

Semantic Mapper will too.

This is still a placeholder.

---

# 10. Learning Memory

Purpose:

Learn from previous mappings.

Example

Restaurant uploads

```
Prod_Name
```

Manager manually maps it.

Next upload

```
Prod_Name
```

NOVA remembers.

No need to ask again.

Still a placeholder.

---

# 11. Column Mapping Agent

This is the CEO.

Instead of every component working independently,

```
Normalizer

Dictionary

Fuzzy

Semantic

Memory
```

The Agent controls them.

Flow:

```
Header

↓

Normalize

↓

Dictionary

↓

Fuzzy

↓

Semantic

↓

Memory

↓

Final Mapping
```

Example:

Input

```
Item Name
```

↓

Output

```
productName
```

---

# 12. Row Normalizer

Purpose:

Convert entire rows into NOVA's universal format.

CSV

```
Product,Qty,Price

Coffee,20,200
```

Before

```javascript
{
 Product:"Coffee",
 Qty:"20",
 Price:"200"
}
```

After

```javascript
{
 productName:"Coffee",
 quantity:20,
 price:200
}
```

Now every inventory file becomes identical.

---

# 13. Intelligent Upload Pipeline

Previously:

```
Upload

↓

CSV Parser

↓

Preview
```

Now:

```
Upload

↓

CSV Parser

↓

Header Normalizer

↓

Dictionary Matcher

↓

Column Mapping Agent

↓

Row Normalizer

↓

Intelligent JSON
```

---

# Current API Response

Today our upload API returns:

```json
{
  "headers":[...],

  "mappedHeaders":[...],

  "preview":[...],

  "normalizedPreview":[...]
}
```

This is huge.

Because now NOVA doesn't just read CSVs.

It understands them.

---

# Current Project Structure

```
server/

controllers/
upload.controller.ts

middleware/
upload.ts

routes/
upload.routes.ts

services/
csvParser.service.ts
rowNormalizer.service.ts

agents/
columnMappingAgent.ts

engines/

mapping/
headerNormalizer.ts
dictionaryMatcher.ts
fuzzyMatcher.ts
semanticMapper.ts
learningMemory.ts

inventory/
forecasting/

types/
mapping.ts
```

---

# What Makes NOVA Different?

Most inventory systems expect the CSV to already be in the correct format.

Example:

```
Product
Qty
Price
```

If the headers are different, they fail or ask the user to manually map columns.

NOVA's approach is:

```
Upload ANY inventory file
          ↓
Normalize headers
          ↓
Understand synonyms
          ↓
Correct spelling mistakes
          ↓
Learn from previous uploads
          ↓
Convert to a universal schema
          ↓
Run AI insights
```

---


import { Request, Response } from "express";

import { parseCSV } from "../services/csvParser.service";
import { mapColumns } from "../agents/columnMappingAgent";
import { normalizeRows } from "../services/rowNormalizer.service";

import { buildInventoryItem } from "../builders/inventoryItemBuilder";
import { setInventoryItems } from "../repositories/inventoryRepository";

export async function uploadCSV(
  req: Request,
  res: Response
) {
  try {

    if (!req.file) {

      return res.status(400).json({
        error: "No file uploaded"
      });

    }

    // Parse CSV
    const rows = await parseCSV(req.file.path);
    console.log("ROWS");
    console.log(rows);

    // Read headers
    const headers =
      rows.length ? Object.keys(rows[0]) : [];
    console.log("HEADERS");
    console.log(headers);

    // AI Header Mapping
    // AI Header Mapping
const mappedHeaders =
  mapColumns(headers);

console.log("===== MAPPED HEADERS =====");
console.table(mappedHeaders);

// Normalize Rows
const normalizedRows =
  normalizeRows(rows, mappedHeaders);

console.log("===== NORMALIZED ROW =====");
console.log(normalizedRows[0]);

// Convert to InventoryItem[]
const inventoryItems =
  normalizedRows.map(buildInventoryItem);

console.log("===== INVENTORY ITEM =====");
console.log(inventoryItems[0]);

    // Replace repository data
    setInventoryItems(inventoryItems);

    return res.json({

      success: true,

      message:
        "Inventory uploaded successfully.",

      totalProducts:
        inventoryItems.length,

      mappedHeaders,

      preview:
        inventoryItems.slice(0, 5)

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      error:
        "Failed to process inventory."

    });

  }

}
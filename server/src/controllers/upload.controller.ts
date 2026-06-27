import { Request, Response } from "express";
import { parseCSV } from "../services/csvParser.service";
import { mapColumns } from "../agents/columnMappingAgent";
import { normalizeRows } from "../services/rowNormalizer.service";
export async function uploadCSV(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }

    const rows = await parseCSV(req.file.path);

    const headers = rows.length ? Object.keys(rows[0]) : [];

    const mappedHeaders = mapColumns(headers);

    const normalizedPreview = normalizeRows(rows, mappedHeaders);

    return res.json({
      success: true,
      totalRows: rows.length,
      headers,
      mappedHeaders,
      preview: rows.slice(0, 5),
      normalizedPreview: normalizedPreview.slice(0, 5),
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to parse CSV",
    });
  }
}
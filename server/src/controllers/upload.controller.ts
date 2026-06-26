import { Request, Response } from "express";
import { parseCSV } from "../services/csvParser.service";

export async function uploadCSV(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }

    const rows = await parseCSV(req.file.path);

    return res.json({
      success: true,
      totalRows: rows.length,
      headers: rows.length ? Object.keys(rows[0]) : [],
      preview: rows.slice(0, 10),
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to parse CSV",
    });
  }
}
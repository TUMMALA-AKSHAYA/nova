import fs from "fs";
import csv from "csv-parser";

export async function parseCSV(path: string): Promise<Record<string, string>[]> {
  return new Promise((resolve, reject) => {
    const rows: Record<string, string>[] = [];

    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data: Record<string, string>) => rows.push(data))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}
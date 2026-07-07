export function normalizeHeader(header: string): string {

  return header
    .trim()
    .toLowerCase()

    // Remove text inside brackets
    .replace(/\(.*?\)/g, "")

    // Replace underscores and hyphens
    .replace(/[_-]+/g, " ")

    // Replace dots
    .replace(/\./g, " ")

    // Remove common currency symbols
    .replace(/[₹$€£]/g, "")

    // Collapse multiple spaces
    .replace(/\s+/g, " ")

    .trim();

}
export function normalizeHeader(header: string): string {
  return header
    .trim()                     // remove spaces at beginning/end
    .toLowerCase()              // lowercase everything
    .replace(/[_-]+/g, " ")     // _ and - become spaces
    .replace(/\./g, " ")        // dots become spaces
    .replace(/\s+/g, " ")       // multiple spaces -> one space
    .trim();
}
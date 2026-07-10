import { Evidence } from "./evidenceBuilder";

export function formatEvidence(
  evidence: Evidence[]
): string {

  if (evidence.length === 0) {
    return "No relevant evidence.";
  }

  return evidence
    .map(item => {

      return `
Category: ${item.category}
Title: ${item.title}

${Object.entries(item.data)
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n")}
`;

    })
    .join("\n-----------------------------\n");

}
import { Evidence } from "./evidenceBuilder";

export function selectEvidence(
  question: string,
  evidence: Evidence[]
): Evidence[] {

  const query = question.toLowerCase();

  // Product-specific questions
  const productEvidence = evidence.filter(item =>
    query.includes(item.title.toLowerCase())
  );

  if (productEvidence.length > 0) {
    return productEvidence;
  }

  // Business Health
  if (
    query.includes("health")
  ) {
    return evidence.filter(item =>
      item.category === "BUSINESS_HEALTH"
    );
  }

  // Revenue
  if (
    query.includes("revenue") ||
    query.includes("profit")
  ) {
    return evidence.filter(item =>
      item.category === "PRODUCT_RISK"
    );
  }

  // Inventory Decisions
  if (
    query.includes("reorder") ||
    query.includes("decision") ||
    query.includes("stock")
  ) {
    return evidence.filter(item =>
      item.category === "DECISION"
    );
  }

  // Executive Summary
  if (
    query.includes("summary") ||
    query.includes("overview") ||
    query.includes("today")
  ) {
    return evidence;
  }

  return evidence;

}
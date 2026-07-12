export interface MappingResult {
  mappedField: string | null;

  confidence: number;

  matchedBy:
    | "semantic"
    | "learning-memory";
}
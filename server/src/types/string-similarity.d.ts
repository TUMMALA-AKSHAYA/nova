declare module "string-similarity" {
  export interface Match {
    target: string;
    rating: number;
  }

  export interface BestMatchResult {
    ratings: Match[];
    bestMatch: Match;
    bestMatchIndex: number;
  }

  const stringSimilarity: {
    compareTwoStrings(first: string, second: string): number;
    findBestMatch(
      mainString: string,
      targetStrings: string[]
    ): BestMatchResult;
  };

  export default stringSimilarity;
}
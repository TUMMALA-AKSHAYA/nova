import { classifyIntent } from "./intentClassifier";
import { extractEntity } from "./entityExtractor";

import { BrainQuery } from "../types/query";

export function buildBrainQuery(
  message: string
): BrainQuery {

  return {

    intent:
      classifyIntent(message),

    entity:
      extractEntity(message),

    originalQuestion:
      message,

  };

}
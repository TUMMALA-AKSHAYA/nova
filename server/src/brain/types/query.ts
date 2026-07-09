import { Intent } from "./intent";

export interface BrainQuery {

  intent: Intent;

  entity?: string;

  originalQuestion: string;

}
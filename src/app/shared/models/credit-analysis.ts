import { RuleItemResultEnum } from "../enums/rule-item-result.enum";
import { Document } from "./document";

export interface CreditAnalysis {
  uuid: string;
  policyName: string;
  status: string;
  createdAt: string;
  totalPoints: number;
  recommendation: RuleItemResultEnum;
  documents: Array<Document>;
}
import { RuleItem } from "./rule-item";

export interface Rule {
  blocked?: Array<RuleItem>;
  alerts?: Array<RuleItem>;
  proceed?: Array<RuleItem>;
}
import { RuleItemResultEnum } from "../enums/rule-item-result.enum";
import { Rule } from "./rule";

export interface Analysis {
  id: string;
  name: string;
  result: RuleItemResultEnum;
  rules: Rule;
}
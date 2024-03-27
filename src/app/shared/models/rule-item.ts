import { RuleItemResultEnum } from "../enums/rule-item-result.enum";
import { RuleItemStatusEnum } from "../enums/rule-item-status.enum";
import { RuleAttribute } from "./rule-attribute";

export interface RuleItem {
  name: string;
  description: string;
  status: RuleItemStatusEnum;
  executedAt: string;
  variables: Array<RuleAttribute>;
  result: RuleItemResultEnum;
}
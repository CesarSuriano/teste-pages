import { Analysis } from "./analysis";

export interface Document {
  document: string;
  name: string;
  analysis: Array<Analysis>;
}
import type { Expression } from "./Expression";


export interface Parameter {
  expressions: Expression[];
  guid?: string;
  id?: string;
}

import type { FunctionCall } from "./FunctionCall";


export interface SubFunction {
  functions: FunctionCall[];
  guid?: string;
  id?: string;
}

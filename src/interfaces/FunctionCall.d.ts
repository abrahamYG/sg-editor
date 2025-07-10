import type { Parameter } from "./Parameter";
import type { SubFunction } from "./SubFunction";


export interface FunctionCall {
  function_id: string;
  guid?: string;
  is_enabled: boolean;
  parameters?: Parameter[];
  sub_functions?: SubFunction[];
}

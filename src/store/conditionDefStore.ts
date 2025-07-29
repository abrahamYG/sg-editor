import ConditionDefs from "../definitions/ConditionDefs.json";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
import { functionDefCompare } from "../utils/functionDefCompare";

export const ConditionDefStore = ConditionDefs as IFunctionDef[]; //.sort(functionDefCompare)

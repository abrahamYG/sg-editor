import FunctionDefs from "../definitions/FunctionDefs.json";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
//import { functionDefCompare } from "../utils/functionDefCompare";

export const FunctionDefStore = FunctionDefs as IFunctionDef[]; //.sort(functionDefCompare)

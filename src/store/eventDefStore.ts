import EventDefs from "../definitions/EventDefs.json";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
import { functionDefCompare } from "../utils/functionDefCompare";

export const EventDefStore = EventDefs as IFunctionDef[]; //.sort(functionDefCompare)

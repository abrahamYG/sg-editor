import ActionDefs from "../definitions/ActionDefs.json";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
import { functionDefCompare } from "../utils/functionDefCompare";

export const ActionDefStore = ActionDefs as IFunctionDef[]; /*.sort((a,b)=>{
	console.log("Sorting ActionDefs", a.id, b.id);
	return functionDefCompare(a,b)
}
)*/

import type { FunctionType } from "../interfaces/FunctionType";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
import { ActionDefStore } from "../store/actionDefStore";
import { FunctionDefStore } from "../store/functionDefStore";
import { EventDefStore } from "../store/eventDefStore";
import { ConditionDefStore } from "../store/conditionDefStore";

export function findFunctionDefinition(
	id: string,
	type?: FunctionType
): IFunctionDef | undefined {
	const definitions: IFunctionDef[] = [
		...FunctionDefStore,
		...ActionDefStore,
		...EventDefStore,
		...ConditionDefStore,
	];
	return definitions.find(
		(def: IFunctionDef) => def.id === id && (!type || def.type === type)
	);
}

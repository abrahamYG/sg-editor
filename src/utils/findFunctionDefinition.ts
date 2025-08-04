import type { FunctionType } from "../interfaces/FunctionType";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
import { ActionDefStore } from "../store/actionDefStore";
import { FunctionDefStore } from "../store/functionDefStore";
import { EventDefStore } from "../store/eventDefStore";
import { ConditionDefStore } from "../store/conditionDefStore";
const definitions: IFunctionDef[] = [
		...FunctionDefStore,
		...ActionDefStore,
		...EventDefStore,
		...ConditionDefStore,
	];
export function findFunctionDefinition(
	id: string,
	type?: FunctionType
): IFunctionDef | undefined {
	const found = definitions.find(
		({id:defId}) => defId === id
	);
	console.log(`findFunctionDefinition: id=${id}, type=${type}, found=${!!found}`);
	return found;
}

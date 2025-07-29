import type { IFunctionDef } from "../interfaces/IFunctionDef";

export function functionDefCompare(a: IFunctionDef, b: IFunctionDef): number {
	return a.id && b.id ? a.id.localeCompare(b.id) : 1;
}

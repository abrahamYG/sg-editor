import type { FunctionCall } from "./FunctionCall";

export interface ISubFunction {
	functions: FunctionCall[];
	guid?: string;
	id?: string;
}

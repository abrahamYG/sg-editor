import type { Parameter } from "./IParameter";
import type { ISubFunction } from "./ISubFunction";

export interface FunctionCall {
	function_id: string;
	guid?: string;
	is_enabled: boolean;
	parameters?: Parameter[];
	sub_functions?: ISubFunction[];
}

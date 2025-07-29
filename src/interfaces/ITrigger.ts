import type { ISubFunction } from "./ISubFunction";
import type { FunctionCall } from "./FunctionCall";
import type { Variable } from "./Variable";

export interface ITrigger {
	id: string;
	__base_type: string;
	based_on: string;
	dev_only?: boolean;
	enabled?: boolean;
	actions: FunctionCall[];
	conditions: FunctionCall[];
	events: FunctionCall[];
	variables: Variable[];
	sub_functions?: ISubFunction[];
}

import type { FunctionCall } from "./FunctionCall";
import type { VariableRef } from "./VariableRef";
import type { Value } from "./Value";
import type { Preset } from "./Preset";

export interface InitialValue {
	function?: FunctionCall;
	guid?: string;
	preset?: Preset;
	script?: string;
	type?: string;
	value?: Value;
	variable?: VariableRef;
}

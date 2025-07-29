import type { FunctionCall } from "./FunctionCall";
import type { Preset } from "./Preset";
import type { Value } from "./Value";
import type { VariableRef } from "./VariableRef";

type ExpressionType = "Function" | "Preset" | "Script" | "Value" | "Variable";

export interface Expression {
	function?: FunctionCall;
	guid?: string;
	preset?: Preset;
	script?: string;
	type?: ExpressionType;
	value?: Value;
	variable?: VariableRef;
}

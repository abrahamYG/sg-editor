import type { Expression } from "../interfaces/Expression";
import { findFunctionDefinition } from "./findFunctionDefinition";

export function getExpressionValue(expression: Expression): string {
	switch (expression.type) {
		case "Value":
			return expression.value?.value || "";
		case "Variable":
			return expression.variable?.variable_id || "";
		case "Function":
			return `(${
				findFunctionDefinition(expression.function?.function_id || "")
					?.grammar_text || ""
			})`;
		case "Preset":
			return expression.preset?.value_id || "";
		default:
			return "";
	}
}

import type { Parameter } from "../interfaces/IParameter";
import { getExpressionValue } from "./getExpressionValue";

export function parseFunctionGrammarText(
	grammar_text: string,
	parameters: Parameter[]
) {
	return grammar_text.replace(/\{(\w+)\}/g, (match, index) => {
		const param = parameters.find((p: Parameter) => p.id === index);
		if (param) {
			return getExpressionValue(param.expressions[0]);
		}
		return match;
	});
}

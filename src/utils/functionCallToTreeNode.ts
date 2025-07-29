import type { FunctionCall } from "../interfaces/FunctionCall";
import type { ISubFunction } from "../interfaces/ISubFunction";
import type { TreeNode } from "primereact/treenode";
import { parseFunctionGrammarText } from "./parseFunctionGrammarText";
import { findFunctionDefinition } from "./findFunctionDefinition";

/**
 * Maps a FunctionCall object to an ITreeNode.
 * @param funcCall FunctionCall object
 * @returns ITreeNode
 */
export function functionCallToTreeNode(funcCall: FunctionCall): TreeNode {
	const node: TreeNode = {
		key: funcCall.guid || funcCall.function_id,
		label: parseFunctionGrammarText(
			findFunctionDefinition(funcCall.function_id)?.grammar_text || "",
			funcCall.parameters || []
		),
		data: funcCall,
		icon: funcCall.is_enabled ? "pi pi-check" : "pi pi-times",
	};
	if (funcCall.sub_functions && funcCall.sub_functions.length > 0) {
		node.children = funcCall.sub_functions.flatMap((sub: ISubFunction) =>
			sub.functions.map(functionCallToTreeNode)
		);
	}
	return node;
}

import { Tree, type TreeExpandedKeysType } from "primereact/tree";
import type { FunctionCall } from "../interfaces/FunctionCall";
import type { FunctionType } from "../interfaces/FunctionType";
import { functionCallToTreeNode } from "../utils/functionCallToTreeNode";
import type { TreeNode } from "primereact/treenode";
import TriggerItemFunctionCall from "./TriggerItemFunctionCall";

interface FunctionCallTreeProps {
	functionCalls: FunctionCall[];
	type: FunctionType;
}

function FunctionCallTree({ functionCalls, type }: FunctionCallTreeProps) {
	const treeNodes = functionCalls.map((call) => functionCallToTreeNode(call));

	const nodeTemplate = (type: FunctionType) => (node: TreeNode) => {
		return (
			<TriggerItemFunctionCall
				key={node.key}
				type={type}
				data={node.data}
			/>
		);
	};
	const expandAllNodes = (nodes: TreeNode[]): TreeExpandedKeysType => {
		const expandedKeys: TreeExpandedKeysType = {};
		for (const node of nodes) {
			if (node.key) {
				expandedKeys[node.key] = true;
			}
		}
		return expandedKeys;
	};

	const expandedKeys = expandAllNodes(treeNodes);
	return (
		<Tree
			value={treeNodes}
			expandedKeys={expandedKeys}
			className="w-full md:w-30rem"
			nodeTemplate={nodeTemplate(type)}
		/>
	);
}

export default FunctionCallTree;

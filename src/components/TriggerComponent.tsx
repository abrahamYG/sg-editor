import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import type { ITrigger } from "../interfaces/ITrigger";
//import TriggerItemFunctionCall from "./TriggerItemFunctionCall";
import TriggerItemVariable from "./TriggerItemVariable";
import { Tree, type TreeExpandedKeysType } from "primereact/tree";
import { functionCallToTreeNode } from "../utils/functionCallToTreeNode";
import type { TreeNode } from "primereact/treenode";

interface TriggerProps {
	triggerData: ITrigger;
}
function TriggerComponent({ triggerData }: TriggerProps) {
	const { events, variables, conditions, actions } = triggerData;
	const id = triggerData.id || "unknown-trigger";
	const treeNodes = {
		events: events.map((event) => functionCallToTreeNode(event)),
		conditions: conditions.map((condition) =>
			functionCallToTreeNode(condition)
		),
		actions: actions.map((action) => functionCallToTreeNode(action)),
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

	const expandedKeys = {
		events: expandAllNodes(treeNodes.events),
		conditions: expandAllNodes(treeNodes.conditions),
		actions: expandAllNodes(treeNodes.actions),
	};
	//  const nodeTemplate = (type:string,node: TreeNode) => {
	//       return <TriggerItemFunctionCall key={node.key} type={type} data={node.data} />
	//   }
	return (
		<Tab.Pane eventKey={"#" + id}>
			<Tabs
				defaultActiveKey="profile"
				id="uncontrolled-tab-example"
				className="mb-3"
			>
				<Tab eventKey="form" title="Form">
					<Form>
						<Form.Group
							as={Row}
							className="mb-3 border-light-subtle border rounded"
						>
							<Form.Label as="legend" column sm={2}>
								Events
							</Form.Label>
							<Col sm={10}>
								<Tree
									value={treeNodes.events}
									expandedKeys={expandedKeys.events}
								/>
							</Col>
						</Form.Group>
						<Form.Group
							as={Row}
							className="mb-3 border-light-subtle border rounded"
						>
							<Form.Label as="legend" column sm={2}>
								Variables
							</Form.Label>
							<Col sm={10}>
								{variables.map((variable, index) => (
									<TriggerItemVariable
										key={index}
										data={variable}
									/>
								))}
							</Col>
						</Form.Group>
						<Form.Group
							as={Row}
							className="mb-3 border-light-subtle border rounded"
						>
							<Form.Label as="legend" column sm={2}>
								Conditions
							</Form.Label>
							<Col sm={10}>
								<Tree
									value={treeNodes.conditions}
									expandedKeys={expandedKeys.events}
								/>
							</Col>
						</Form.Group>
						<Form.Group
							as={Row}
							className="mb-3 border-light-subtle border rounded"
						>
							<Form.Label as="legend" column sm={2}>
								Actions
							</Form.Label>
							<Col sm={10}>
								<Tree
									value={treeNodes.actions}
									expandedKeys={expandedKeys.events}
								/>
							</Col>
						</Form.Group>
					</Form>
				</Tab>
				<Tab eventKey="json" title="JSON">
					<Form.Control
						as="textarea"
						rows={20}
						value={JSON.stringify(triggerData, null, 2)}
					/>
				</Tab>
			</Tabs>
		</Tab.Pane>
	);
}

export default TriggerComponent;

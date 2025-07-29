import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import type { ITrigger } from "../interfaces/ITrigger";
import MeleeInitialization from "../samples/MeleeInitialization.json";
import StormgateContested from "../samples/StormgateContested.json";
import TriggerComponent from "./TriggerComponent";

function TriggerList() {
	const triggers: ITrigger[] = [MeleeInitialization, StormgateContested];
	return (
		<Tab.Container id="list-group-tabs-example">
			<Row>
				<Col sm={2}>
					<ListGroup>
						{triggers.map((trigger) => (
							<ListGroup.Item
								action
								href={`#${trigger.id}`}
								key={trigger.id}
							>
								{trigger.id}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
				<Col sm={8}>
					<Tab.Content>
						{triggers.map((trigger) => (
							<TriggerComponent
								triggerData={trigger}
								key={trigger.id}
							/>
						))}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
}

export default TriggerList;

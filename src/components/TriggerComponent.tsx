import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import TriggerItemVariable from "./TriggerItemVariable";
import type { Trigger } from "../interfaces/Trigger";
import TriggerItemFunctionCall from "./TriggerItemFunctionCall";

interface TriggerProps {
    triggerData: Trigger;
}
function TriggerComponent({ triggerData }: TriggerProps) {
  const { events, variables, conditions, actions } = triggerData;
  const id = triggerData.id || "unknown-trigger";
  return (
    <Tab.Pane eventKey={"#" + id}>
      <Form>
        <Form.Group
          as={Row}
          className="mb-3 border-light-subtle border rounded"
        >
          <Form.Label as="legend" column sm={2}>
            Events
          </Form.Label>
          <Col sm={10}>
            {events.map((event, index) => (
              <TriggerItemFunctionCall key={index} type="Event" data={event} />
            ))}
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
              <TriggerItemVariable key={index} data={variable} />
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
            {conditions.map((condition, index) => (
              <TriggerItemFunctionCall key={index} type="Condition" data={condition} />
            ))}
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
            {actions.map((action, index) => (
              <TriggerItemFunctionCall key={index} type="Action" data={action} />
            ))}
          </Col>
        </Form.Group>
      </Form>
    </Tab.Pane>
  );
}

export default TriggerComponent;

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import TriggerItem from "./TriggerItem";

interface TriggerData{
    id: string;
    events: { label: string }[];
    variables: { label: string }[];
    conditions: { label: string }[];
    actions: { label: string }[];
}
interface TriggerProps {
    triggerData: TriggerData;
}
function Trigger({ triggerData }: TriggerProps) {
  const { id, events, variables, conditions, actions } = triggerData;
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
              <TriggerItem key={index} data={event} />
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
              <TriggerItem key={index} data={variable} />
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
              <TriggerItem key={index} data={condition} />
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
              <TriggerItem key={index} data={action} />
            ))}
          </Col>
        </Form.Group>
      </Form>
    </Tab.Pane>
  );
}

export default Trigger;

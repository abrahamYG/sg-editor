import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Trigger from "./Trigger";
function TriggerList() {
  const triggers = [
    {
      id: "link1",
      label: "Melee Initialization",
      events: [
        {
          label: "Melee Init",
        }
      ],
      variables: [
        
      ],
      conditions: [
        
      ],
      actions: [
        {
          label: "Create melee units",
        },
      ],
    },
    { 
		id: "link2", 
		label: "Hero enters location",
		events: [
        {
          label: "(Hero) Enters (Region)",
        },
        {
          label: "(Hero) Enters (Region)",
        },
      ],
      variables: [
        {
          label: "Hero<unit> = (Triggering Unit)",
        }
      ],
      conditions: [
        {
          label: 'Unit type of (Hero) = "Akama"',
        },
      ],
      actions: [
        {
          label: "End game in (Victory)", 
        },
      ],
	},
  ];
  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={2}>
          <ListGroup>
            {triggers.map((trigger) => (
              <ListGroup.Item action href={`#${trigger.id}`} key={trigger.id}>
                {trigger.label}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {triggers.map((trigger) => (
              <Trigger triggerData={trigger} key={trigger.id} />
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TriggerList;

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FunctionListModal from "./FunctionListModal";
import { Button } from "react-bootstrap";

interface TriggerItemData {
  label: string;
}


interface TriggerItemProps {
  data: TriggerItemData;
}

function TriggerItem({data} : TriggerItemProps) {
    const {label} = data;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control
        readOnly
        aria-label="Text input with checkbox"
        defaultValue={label ||"Hero enters Region"}
      />
      <FunctionListModal label="Change" />
      <Button variant="danger">Remove</Button>
    </InputGroup>
  );
}

export default TriggerItem;

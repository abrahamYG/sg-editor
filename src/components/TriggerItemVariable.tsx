import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FunctionListModal from "./FunctionListModal";
import { Button } from "react-bootstrap";
import type { Variable } from "../interfaces/Variable";

interface TriggerItemVariableProps {
	data: Variable;
}

function TriggerItemVariable({ data }: TriggerItemVariableProps) {
	const label = data.id;
	return (
		<InputGroup className="mb-3">
			<InputGroup.Checkbox aria-label="Checkbox for following text input" />
			<Form.Control
				readOnly
				aria-label="Text input with checkbox"
				defaultValue={label || ""}
			/>
			<FunctionListModal label="Change" />
			<Button variant="danger">Remove</Button>
		</InputGroup>
	);
}

export default TriggerItemVariable;

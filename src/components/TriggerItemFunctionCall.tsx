import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FunctionListModal from "./FunctionListModal";
import { Button } from "react-bootstrap";
import type { FunctionCall } from "../interfaces/FunctionCall";
import type { FunctionType } from "../interfaces/FunctionType";
import { findFunctionDefinition } from "../utils/findFunctionDefinition";
import { parseFunctionGrammarText } from "../utils/parseFunctionGrammarText";

interface TriggerItemFunctionCallProps {
	data: FunctionCall;
	type: FunctionType;
}

function TriggerItemFunctionCall({ data, type }: TriggerItemFunctionCallProps) {
	const definition = findFunctionDefinition(data.function_id, type);
	const label = parseFunctionGrammarText(
		definition?.grammar_text || "",
		data.parameters || []
	);

	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Checkbox aria-label="Checkbox for following text input" />
				<Form.Control
					readOnly
					aria-label="Text input with checkbox"
					defaultValue={label || ""}
				/>
				<FunctionListModal type={type} label="Change" />
				<Button variant="danger">Remove</Button>
			</InputGroup>
		</>
	);
}

export default TriggerItemFunctionCall;

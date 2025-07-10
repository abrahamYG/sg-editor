import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FunctionListModal from "./FunctionListModal";
import { Button } from "react-bootstrap";
import type { FunctionCall } from "../interfaces/FunctionCall";
import type { FunctionType } from "../interfaces/FunctionType";
import ActionDefs from "../definitions/ActionDefs.json";
import ConditionDefs from "../definitions/ConditionDefs.json";
import EventDefs from "../definitions/EventDefs.json";
import FunctionDefs from "../definitions/FunctionDefs.json";
import type { FunctionDef } from "../interfaces/FunctionDef";
import type { Parameter } from "../interfaces/Parameter";
import type { Expression } from "../interfaces/Expression";


interface TriggerItemFunctionCallProps {
  data: FunctionCall;
  type: FunctionType
}

const definitions:FunctionDef[] = [
  ...ActionDefs as FunctionDef[],
  ...ConditionDefs as FunctionDef[], 
  ...EventDefs as FunctionDef[], 
  ...FunctionDefs as FunctionDef[]
];
function findDefinition(type:FunctionType, id: string):FunctionDef | undefined {
  return definitions.find((def:FunctionDef) => def.id === id && def.type === type);
 }

function getExpressionValue(expression: Expression):string {
  if (expression.type === "Value") {
    return expression.value?.value || "";
  } else if (expression.type === "Variable") {
    return expression.variable?.variable_id || "";
  } else if (expression.type === "Function") {
    return `(${findDefinition("Function",expression.function?.function_id)?.grammar_text|| ""})` ;
  } else if (expression.type === "Preset") {
    return expression.preset?.value_id || "";
  }
  return "";
}

function parseGrammarText(text: string, parameters: Parameter[]) {
  return text.replace(/\{(\w+)\}/g, (match, index) => {
    const param = parameters.find((p: any) => p.id === index);
    if(param) {
        return getExpressionValue(param.expressions[0]);
    }
    return match;
  });
  
}

function TriggerItemFunctionCall({data,type} : TriggerItemFunctionCallProps) {
    const definition = findDefinition(type, data.function_id);
    const label = parseGrammarText(definition?.grammar_text||"",data.parameters || []);
  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <Form.Control
        readOnly
        aria-label="Text input with checkbox"
        defaultValue={label ||""}
      />
      <FunctionListModal label="Change" />
      <Button variant="danger">Remove</Button>
    </InputGroup>
  );
}

export default TriggerItemFunctionCall;

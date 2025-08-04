import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import type { IFunctionDef } from "../interfaces/IFunctionDef";
import ListGroup from "react-bootstrap/ListGroup";
interface FunctionListModalProps {
	label?: string;
	type?: string;
}

function FunctionListModal({ label, type }: FunctionListModalProps) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const definitions: {
		Function: IFunctionDef[];
		Action: IFunctionDef[];
		Event: IFunctionDef[];
		Condition: IFunctionDef[];
	} = {
		Function: useSelector(
			(state: RootState) => state.functionDef.functions
		),
		Action: useSelector((state: RootState) => state.functionDef.actions),
		Event: useSelector((state: RootState) => state.functionDef.events),
		Condition: useSelector(
			(state: RootState) => state.functionDef.conditions
		),
	};

	//console.log(type, definitions[type as keyof typeof definitions]);
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				{label || "Open Modal"}
			</Button>

			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>{type}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ListGroup>
						{definitions[type as keyof typeof definitions].map(
							(functionDef) => (
								<ListGroup.Item
									action
									href={`#${functionDef.id}`}
									key={functionDef.id}
								>
									{`${type}: ${functionDef.name} - ${functionDef.grammar_text}`}
								</ListGroup.Item>
							)
						)}
					</ListGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default FunctionListModal;

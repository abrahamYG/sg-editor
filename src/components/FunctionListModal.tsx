import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface FunctionListModalProps {
  label?: string;
  category?: string;
}

function FunctionListModal({ label, category }: FunctionListModalProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
	<>
	  <Button variant="primary" onClick={handleShow}>
		{label || "Open Modal"}
	  </Button>

	  <Modal show={show} onHide={handleClose} centered>
		<Modal.Header closeButton>
		  <Modal.Title>Modal heading</Modal.Title>
		</Modal.Header>
		<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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

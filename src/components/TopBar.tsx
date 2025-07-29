import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function TopBar() {
	return (
		<>
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">SG Editor</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Triggers</Nav.Link>
						<Nav.Link href="#features">Definitions</Nav.Link>
						<Nav.Link href="#pricing">Settings</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

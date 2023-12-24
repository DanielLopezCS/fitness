import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-white mt-4">
      {" "}
      {/* Apply the bg-white class for a white background */}
      <Navbar.Brand
        href="#home"
        style={{ fontSize: "30px", marginLeft: "15px" }}
      >
        <strong>Fit Buddy</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav className="ml-auto p-4 mr-4">
          <Nav.Link href="#account">
            <strong>Account</strong>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;

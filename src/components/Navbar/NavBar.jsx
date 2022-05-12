import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";
  import Widget from "../Widget/Widget";
  
  function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Blessed</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Categoria</Nav.Link>
              <Nav.Link href="#action2">New In</Nav.Link>
  
              <NavDropdown title="Accesorios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Hombre</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Mujer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">NIÑOS </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">
                <Widget />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  export default NavBar;
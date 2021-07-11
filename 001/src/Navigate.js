import logo from './logo.svg';


// or less ideally
import { Button, FormControl, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';

function Navigate() {
  return (

    <Navbar bg="success" variant="dark">
      <Navbar.Brand href="#home">MasonLS</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Resume</Nav.Link>
        <Nav.Link href="#features">Linkedin</Nav.Link>
        <Nav.Link href="#pricing">Github</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>

  );
}

export default Navigate;

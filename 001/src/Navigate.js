import logo from './logo.svg';

import React, { Component } from 'react';
// or less ideally
// import { Button, FormControl, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';

export class Navigate extends Component{
  render(){
    return (
      //
      // <Navbar bg="dark" variant="dark" sticky="top" width="100%">
      //   <Navbar.Brand href="#home">MasonLS</Navbar.Brand>
      //   <Nav className="mr-auto">
      //     <Nav.Link href="#home">Resume</Nav.Link>
      //     <Nav.Link href="#features">Linkedin</Nav.Link>
      //     <Nav.Link href="#pricing">Github</Nav.Link>
      //     <Nav.Link href="#pricing">Contact</Nav.Link>
      //   </Nav>
      //   <Form inline>
      //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //     <Button variant="outline-light">Search</Button>
      //   </Form>
      // </Navbar>

      <nav class="navbar navbar-expand-lg  navbar-light bg-primary">
          <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Helpful Link
                </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="https://www.Piglerautomation.com/" target="_blank">Pigler Automation Website</a></li>
                    <li><a class="dropdown-item" href="https:192.168.5.254" target="_blank">Palo Alto Skyway</a></li>
                    <li><a class="dropdown-item" href="https:192.168.1.254" target="_blank">Palo Alto Main</a></li>
                    <li><a class="dropdown-item" href="https:192.168.20.254" target="_blank">Palo Alto Main(Need Global Protect)</a></li>
                    <li><a class="dropdown-item" href="https:192.168.2.254" target="_blank">Palo Alto Steamboat</a></li>

                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <a class="navbar-brand text-white" href="#">PA Internal Tools</a>
              </form>
            </div>
          </div>
      </nav>

    );
  }
}

export default Navigate;

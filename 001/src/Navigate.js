import logo from './logo.svg';

import React, { Component } from 'react';
// or less ideally

import { Button, FormControl, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';

export class Navigate extends Component{
  render(){
    return (

      <header class="site-header sticky-top py-1 bg-white">
        <nav class="container d-flex flex-column flex-md-row justify-content-between">

          <a class="py-2 d-none d-md-inline-block" href="#home">Resume</a>
          <a class="py-2 d-none d-md-inline-block" href="https://www.linkedin.com/in/mason-salmon-5781b3159/">Linkedin</a>
          <a class="py-2 d-none d-md-inline-block" href="https://github.com/Salmonmonmasons">Github</a>
          <a class="py-2 d-none d-md-inline-block" href="mailto:masa8532@colorado.edu">Contact</a>

        </nav>
      </header>

      // <a class="py-2" href="#" aria-label="Product">
      //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
      // </a>
      // <Navbar class="containter-sm" bg="primary" variant="dark" sticky="top" width="100%">
      //   <Navbar.Brand class="center"  href="#home">MasonLS</Navbar.Brand>
      //   <Nav >
      //     <Nav.Link href="#home">Resume</Nav.Link>
      //     <Nav.Link href="https://www.linkedin.com/in/mason-salmon-5781b3159/">Linkedin</Nav.Link>
      //     <Nav.Link href="https://github.com/Salmonmonmasons">Github</Nav.Link>
      //     <Nav.Link href="mailto:masa8532@colorado.edu">Contact</Nav.Link>
      //   </Nav>
      // </Navbar>
    );
  }
}

export default Navigate;

import logo from './logo.svg';

import React, { Component } from 'react';
// or less ideally

import { Button, FormControl, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';

export class Navigate extends Component{
  render(){
    return (

      // <header class="site-header sticky-top py-1 bg-primary">
      //   <nav class="container d-flex flex-column flex-md-row justify-content-between">
      //     <a class="py-2 d-none d-md-inline-block text-white"><strong>Masonls</strong></a>
      //     <a class="py-2 d-none d-md-inline-block text-white" href="#home">Resume</a>
      //     <a class="py-2 d-none d-md-inline-block text-white" href="https://www.linkedin.com/in/mason-salmon-5781b3159/">Linkedin</a>
      //     <a class="py-2 d-none d-md-inline-block text-white" href="https://github.com/Salmonmonmasons">Github</a>
      //     <a class="py-2 d-none d-md-inline-block text-white" href="mailto:masa8532@colorado.edu">Contact</a>
      //
      //   </nav>
      // </header>


      <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-primary">
        <div class="container-fluid ">
          <a class="py-2 d-none d-md-inline-block text-white px-4 " ><strong>Masonls</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <a class="nav-link text-white" href="#home">Resume</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link text-white" href="https://www.linkedin.com/in/mason-salmon-5781b3159/">Linkedin</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link text-white" href="https://github.com/Salmonmonmasons">Github</a>

              </li>
              <li class="nav-item px-3">
                <a class="nav-link text-white" tabindex="-1" aria-disabled="true" href="mailto:masa8532@colorado.edu">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    );
  }
}

export default Navigate;

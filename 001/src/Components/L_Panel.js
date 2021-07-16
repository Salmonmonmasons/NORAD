
import React, { Component } from 'react';
// import  { Mail } from './components/Mail';

// import   ContactUs from './ContactUs';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Toast, Image, Button, FormControl, Jumbotron, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';
import Forms from 'react-bootstrap';

export class L_Panel extends Component{

  render(){
    return(
      // <body class="text-center">
      //   <main role="main" className="container, position-fixed" >
      //     <div class="card mb-3">
      //       // <img src="..." class="card-img-top" alt="...">
      //       <div class="card-body">
      //         // <img src="ProPic.jpeg" alt="" width="250px" height="250px" class="rounded-circle "></img>
      //         <div class="">
      //           <br/>
      //           <p class="text-center">Information Technology Engineer</p>
      //           <p class="text-center">Pigler Automation, LLC</p>
      //         </div>
      //       </div>
      //     </div>
      //   </main>
      // </body>
      //
      //

            <body class="align-items-center">
             <main role="main" className="container, position-fixed" >
              <Col class="align-items-center">
                <Card class="align-items-center">
                  <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                      <Nav.Item>
                        <Nav.Link href="#first">Twitter</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#disabled" disabled>
                          Disabled
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body>

                    <Card.Text>

                      <img src="ProPic.jpeg" alt="" width="250px" height="250px" class="rounded-circle " />
                      <div class="">
                        <br/>
                        <p class="text-center">Information Technology Engineer</p>
                        <p class="text-center">Pigler Automation, LLC</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </main>
            </body>
    );

  }
}

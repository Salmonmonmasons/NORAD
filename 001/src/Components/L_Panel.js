
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
                    <div class="text-center">
                      <h3 class="fw-light">Mason L. Salmon</h3>
                    </div>

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
                <Card class="align-items-center">
                  <Card.Text>
                    <div class="">
                      <br/>
                      <p class="text-center">Information Technology Engineer</p>
                      <p class="text-center">Pigler Automation, LLC</p>
                    </div>
                  </Card.Text>
                </Card>
               </Col>
               </main>
            </body>
    );

  }
}

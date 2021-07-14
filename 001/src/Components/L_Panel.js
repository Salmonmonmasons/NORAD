
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
      <body>
       <main role="main" className=" position-fixed" >
         <Col>
          <Card>
            <Card.Header>

            </Card.Header>
            <Card.Body>
               <img src="ProPic.jpeg" alt="" width="250px" height="250px" class="rounded-circle " />
               <div class="">
                 <br/>
                 <p class="text-center">Information Technology Engineer</p>
                 <p class="text-center">Pigler Automation, LLC</p>


               </div>

            </Card.Body>
          </Card>
         </Col>
        </main>
      </body>
    );

  }
}

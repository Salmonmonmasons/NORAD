import React, { Component } from 'react';
// import  { Mail } from './components/Mail';


// import   ContactUs from './ContactUs';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Toast, Image, Button, FormControl, Jumbotron, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';
import Forms from 'react-bootstrap';



export class R_Panel extends Component{

  render(){
    return(
      <body>
       <main role="main" className="container, position-fixed" >
         <Col>
           <Card>
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
                 <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="Mason99181010"
                  options={{height: 550}}
                 />
               </Card.Text>
             </Card.Body>
           </Card>
           <br></br>
         </Col>
       </main>
     </body>
    );
  }
}

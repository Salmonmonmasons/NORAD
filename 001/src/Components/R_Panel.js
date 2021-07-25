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
             <Card.Body>
               <Card.Text>
                 <div class="tab-content" id="myTabContent">
                   <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                     <div class="tab-pane active" id="first" role="rabpanel">
                       <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="Mason99181010"
                        options={{height: 600}}
                       />
                     </div>
                   </div>
                   <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">T2</div>
                   <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">T3</div>
                 </div>
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

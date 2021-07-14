
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
       <main role="main" >
         <Col>
           <Card class="container">

               <img src="BG_image.jpg" alt="" width="100%" height="5%" />
               <div class="">
                 <h5 class="card-title">Card title</h5>
                 <p class="card-text">This is a wider card </p>
                 <p class="card-text">Last updated 3 mins ago</p>
               </div>

           </Card>
           <br></br>
         </Col>
       </main>
     </body>


    );

  }
}

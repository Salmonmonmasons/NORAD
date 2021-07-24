import React, { Component } from 'react';
// import  { Mail } from './components/Mail';


// import   ContactUs from './ContactUs';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Toast, Image, Button, FormControl, Jumbotron, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';
import Forms from 'react-bootstrap';



export class Feed extends Component{

  render(){
    return(

       <body class="">
         <Jumbotron>
           <h1>Hello, world!</h1>
           <p>
             My name is Mason L. Salmon I am a Software/IT Engineer. I graduated from the University Of Colorado with a Bachelors Degree in Computer Science.
             I currently Live in Boulder Colorado.
           </p>
           <p>
             <Button variant="primary">Learn more</Button>
           </p>
         </Jumbotron>

         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>11 mins ago</small>
           </Toast.Header>
           <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
         </Toast>


         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>11 mins ago</small>
           </Toast.Header>
           <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
         </Toast>



         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>11 mins ago</small>
           </Toast.Header>
           <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
         </Toast>


         <br></br>
         <div class="jumbotron">

         </div>
         <div class="jumbotron">

         </div>
         <div class="jumbotron">

         </div>
         <div class="jumbotron">

         </div>
         <div class="jumbotron">

         </div>
         <div class="jumbotron">

         </div>
      </body>
    );

  }
}


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
      <body class="align-items-center">
        <main role="main" class="  position-fixed" >
            <Card class=" align-items-center">
              <Card.Header>
                <div class="text-center">
                  <h3 class="fw-light">Mason L. Salmon</h3>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <img src="ProPic.jpeg" alt="" width="250px" height="250px" class="rounded-circle mx-auto d-block" />
                  <div class="">
                    <br/>
                    <p class="text-center">Information Technology Engineer</p>
                    <p class="text-center">Pigler Automation, LLC</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"> 🎯 <strong>Web Dev:</strong>MERN,React.js,HTML,</li>
                    <li class="list-group-item">CSS,Bootstrap, npm Dev, GitHub</li>



                    <li class="list-group-item">💻 <strong>Programing:</strong> Python, C, C#, C++</li>
                    <li class="list-group-item">🔌 <strong>IT:</strong> AWS, Vmware, Salesforce</li>


                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>

       </main>
    </body>
    );



  }
}

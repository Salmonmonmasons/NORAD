
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
      <body class="  flex-row-reverse align-items-center">
        <main role="main" class=" container, position-fixed" >
          <div class=" align-items-center">
            <Card class=" align-items-center">
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
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">🎯 Web Dev: React.js, HTML, CSS</li>
                    <li class="list-group-item">💻 Programing: Python, C, C#, C++</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
       </main>
    </body>
    );

  }
}

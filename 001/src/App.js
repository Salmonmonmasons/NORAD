import logo from './logo.svg';
import './App.css';
import  { Weekly } from './Components/Weekly';

import  { R_Panel } from './Components/R_Panel';
import  { L_Panel } from './Components/L_Panel';
import  { Feed } from './Components/Feed';





// import   ContactUs from './ContactUs';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Toast, Image, Button, FormControl, Jumbotron, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';
import Forms from 'react-bootstrap';


function App() {
  return (

      <Row>
        <Row>
          <Col xs={3}>
            <L_Panel />
          </Col>
          <Col xs={5}>
            <Feed />
          </Col>
          <Col xs={4}>
            <R_Panel />
          </Col>
        </Row>
      </Row>
  );
}

export default App;

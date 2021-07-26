import logo from './logo.svg';
import ReactDOM from 'react-dom';
import  { Weekly } from './Components/Weekly';
import  { R_Panel } from './Components/R_Panel';
import  { L_Panel } from './Components/L_Panel';
import  { Feed } from './Components/Feed';

import 'bootstrap/dist/css/bootstrap.min.css';



// import   ContactUs from './ContactUs';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Toast, Image, Button, FormControl, Jumbotron, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';
import Forms from 'react-bootstrap';


function App() {


  return (
    // <div>
    //   <Container>
    //     <Row>
    //       <Col >
    //         <L_Panel />
    //       </Col>
    //       <Col >
    //         <Feed />
    //       </Col>
    //       <Col >
    //         <R_Panel />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    //





    <div class=" container  py-4" >
        <div class="row  align-center">
          <div class="col-sm">
             <L_Panel />
          </div>
          <div class="col-sm">
            <Feed />
          </div>
          <div class="col-sm">
            <R_Panel />
          </div>
        </div>
      </div>








    //
    //
    // <div class="row">
    //   <div class="row row-cols-1 row-cols-auto justify-content-center ">
    //     <div class=" col-2 ">
    //       <L_Panel />
    //     </div>
    //     <div class="col-7">
    //       <Feed />
    //     </div>
    //     <div class="col-2">
    //       <R_Panel />
    //     </div>
    //   </div>
    // </div>



  );
}

export default App;

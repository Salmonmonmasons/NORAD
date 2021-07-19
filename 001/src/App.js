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

      // <div class="  px-2 " id="featured-4">
      //     <div class="row g-6 row-cols-1 row-cols-lg-3 align-center">
      //       <div class=" feature col mx-auto">
      //          <L_Panel />
      //       </div>
      //       <div class="feature col mx-auto">
      //         <Feed />
      //       </div>
      //       <div class="feature col mx-auto">
      //         <R_Panel />
      //       </div>
      //     </div>
      //   </div>



      <div class=" px-4 py-5" id="featured-3">
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
              <L_Panel />
            </div>
            <div class="feature col">
              <div class="feature-icon bg-primary bg-gradient ">
                <Feed />
              </div>

            </div>
            <div class="feature col">
              <L_Panel />
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

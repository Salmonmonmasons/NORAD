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

       <body class="container">
         <Jumbotron>
           <h1>npm start!</h1>
           <p>
             My name is Mason L. Salmon I am a Software/IT Engineer. I graduated from the University Of Colorado with a Bachelors Degree in Computer Science.
             I currently Live in Boulder Colorado.
           </p>
           <p>
             <Button variant="primary">Learn more</Button>
           </p>
         </Jumbotron>

{/*       Pigler Automation*/}
         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>Jan. 2020 - Present</small>
           </Toast.Header>
           <Toast.Body>

             <div class="row g-0">
               <div class="col-6 col-md-12 text-center"><img src="pa.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
               <div class="col-sm-6 col-md-12">


                <h5 class="text-center"><strong><ins>Pigler Automation</ins></strong></h5>
                <p class="text-center">Intern -> Full-Time</p>
                <br/>
               </div>
               <br/>
               <div class="row g-0">
                 <div class="col-md-12">
                   <ul>
                     <li>Managed the Company website(HTML, CSS, Wordpress)</li>
                     <li>Develop internal tools For Engineers/Staff, (React.js, HTML, CSS)</li>
                     <li>Monitor IT Infrastructure and Day To Day Operations</li>
                     <li>Support Company troubleshoot With IT issues</li>
                   </ul>
                  </div>
               </div>
             </div>
           </Toast.Body>
         </Toast>

{/*       Initium Health*/}
         <Toast>
           <Toast.Header fluid>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>Aug. 2019 - Jan. 2020</small>
           </Toast.Header>
           <Toast.Body>

             <div class="row g-0">
               <div class="col-6 col-md-12 text-center"><img src="initium.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
               <div class="col-sm-6 col-md-12">


                <h5 class="text-center"><strong><ins>Initium Health</ins></strong></h5>
                <p class="text-center">Part-Time Intern</p>
                <br/>
               </div>
               <br/>
               <div class="row g-0">
                 <div class="col-md-12">
                   <ul>
                     <li>Giving Technical guidance to the company</li>
                     <li>AWS mobile app architecture design</li>
                     <li>Website Review</li>
                     <li>Product role-out: https://www.eohealth.org/</li>
                   </ul>
                  </div>
               </div>
             </div>
           </Toast.Body>
         </Toast>

{/*       The Nonprofit Centers Network*/}
         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>Aug. 2019 - Jan. 2020</small>
           </Toast.Header>
           <Toast.Body>

             <div class="row g-0">
               <div class="col-6 col-md-12 text-center"><img src="the_nonprofit_centers.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
               <div class="col-sm-6 col-md-12">


                <h5 class="text-center"><strong><ins>The Nonprofit Centers Network</ins></strong></h5>
                <p class="text-center">Part-Time Intern</p>
                <br/>
               </div>
               <br/>
               <div class="row g-0">
                 <div class="col-md-12">
                   <ul>
                     <li>Assisting The NonprofitCenter Network with its DataBase Migration.</li>
                     <li>Update most recent Information in the System, Before the migration begins.</li>
                     <li>Assist my team in a quick orderly fashion, problem solving, and troubleshooting Issues.</li>
                     <li>Maintain the integrity of The Networks sensitive and critical Data.</li>
                   </ul>
                  </div>
               </div>
             </div>
           </Toast.Body>
         </Toast>

{/*       University of Colorado @ Boulder*/}
         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>Apr 2018 – Dec 2018</small>
           </Toast.Header>
           <Toast.Body>

             <div class="row g-0">
               <div class="col-6 col-md-12 text-center"><img src="cub.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
               <div class="col-sm-6 col-md-12">


                <h5 class="text-center"><strong><ins>University of Colorado @ Boulder</ins></strong></h5>
                <p class="text-center">Part-Time/Student</p>
                <br/>
               </div>
               <br/>
               <div class="row g-0">
                 <div class="col-md-12">
                   <ul>
                     <li><strong>Course Assistant in CSCI 1300 :</strong> Introduction to Programming C++/Python
                     Helping students understand the basic building blocks of Software Development
                     and Programming(touching on topics such as Data Structors and Algorithms). Troubleshooting
                      Software issues with students to help them develop a programmatic style of thinking.</li>
                      <br></br>
                      <li><strong>Lead software developer :</strong> Built software to test for hearing loss amongst young children
                      Comprehend Doctoral Paper and develop theoretical software in C#. net, to be tested on subjects.
                      Communicate with laboratory doctor regularly to work out kinks, and make sure project is being built-out to her specific specifications.
                      Adapting to any changes made by laboratory doctor in the software during the development process.</li>

                   </ul>
                  </div>


               </div>
             </div>
           </Toast.Body>
         </Toast>

{/*       DTMB*/}
         <Toast>
           <Toast.Header>
             <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
             <strong className="mr-auto">MasonLS</strong>
             <small>Mar 2014 – Dec 2017</small>
           </Toast.Header>
           <Toast.Body>

             <div class="row g-0">
               <div class="col-6 col-md-12 text-center"><img src="dtmb.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
               <div class="col-sm-6 col-md-12">


                <h5 class="text-center"><strong><ins>Michigan Department of Technology, Management and Budget</ins></strong></h5>
                <p class="text-center">Part-Time Intern</p>
                <br/>
               </div>
               <br/>
               <div class="row g-0">
                 <div class="col-md-12">
                   <ul>
                     <li>Agile Development in C#.net</li>
                     <li>Working with mentors to Develop Production ready Software to deliver to customers</li>
                     <li>Process Monitoring</li>

                   </ul>
                  </div>
               </div>
             </div>
           </Toast.Body>
         </Toast>

{/*       University Of Colorado, Boulder*/}
        <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">MasonLS 🦬</strong>
            <small>Graduated 🎓</small>
          </Toast.Header>
          <Toast.Body>

            <div class="row g-0">
              <div class="col-6 col-md-12 text-center"><img src="cub.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
              <div class="col-sm-6 col-md-12">


               <h5 class="text-center"><strong><ins>University Of Colorado, Boulder</ins></strong></h5>
               <p class="text-center">Bachelors, Computer Science</p>
               <br/>
              </div>
              <br/>
              <div class="row g-0">
                <div class="col-md-12">
                  <ul>
                    <li>Managed the Company website(HTML, CSS, Wordpress)</li>
                    <li>Develop internal tools For Engineers/Staff, (React.js, HTML, CSS)</li>
                    <li>Monitor IT Infrastructure and Day To Day Operations</li>
                    <li>Support Company troubleshoot With IT issues</li>
                  </ul>
                 </div>
              </div>
            </div>
          </Toast.Body>
        </Toast>



{/*       Lansing Community College */}
        <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">MasonLS</strong>
            <small>Graduated 🎓</small>
          </Toast.Header>
          <Toast.Body>

            <div class="row g-0">
              <div class="col-6 col-md-12 text-center"><img src="lcc.jpg" alt="" width="75px" height="75px" class="rounded-circle mx-auto d-block" /></div>
              <div class="col-sm-6 col-md-12">


               <h5 class="text-center"><strong><ins>Lansing Community College</ins></strong></h5>
               <p class="text-center">Associates, Computer Science</p>
               <br/>
              </div>
              <br/>
              <div class="row g-0">
                <div class="col-md-12">
                  <ul>
                    <li>When attending Lansing Community College I grasped the fundamental knowledge of Programming.
                     I took classes in C++, C#, Python, and the basics of Web Development. The course work had an emphasis
                      in Object oriented programming and Data-Structures.
                    </li>

                  </ul>
                 </div>
              </div>
            </div>
          </Toast.Body>
        </Toast>
         <br></br>

      </body>
    );

  }
}

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

       <body>
       <Jumbotron>
         <h1>Hello, world!</h1>
         <p>
           This is a simple hero unit, a simple jumbotron-style component for calling
           extra attention to featured content or information.
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
           <div class="accordion" id="accordionExample">

             <div class="accordion-item">
               <h2 class="accordion-header" id="headingOne">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                   Monday
                 </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                 <div class="accordion-body">

                 <div class="card-header">
                   G2 (Server Room)
                 </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="mon1" name="MON_1" id="MON_1">
                     </input>
                     <label class="form-check-label" for="MON_1">
                       Check IT Email for Macrium Status and Other Items from Previous Night
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_2">
                     </input>
                     <label class="form-check-label" for="MON_2">
                       Check Macrium logs on \\Nas-longmont-2 and address issues
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_3">
                     </input>
                     <label class="form-check-label" for="MON_3">
                       Swap External Hard Disks for Remote Backup (See "Offsite Backup External Hard Disk Guide")
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_4">
                     </input>
                     <label class="form-check-label" for="MON_4">
                       Check .100 Virtual Machine Status and complete the "Virtual Machine Status Checklist" for the .100
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_5">
                     </input>
                     <label class="form-check-label" for="MON_5">
                       Check All Server Hardware Status and complete the "Server Hardware Status Checklist" for the; .100,.102,.106,.109
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_6">
                     </input>
                     <label class="form-check-label" for="MON_6">
                       Check Network and Palo Alto Status (See "Network Check Procedure" Document)
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_7">
                     </input>
                     <label class="form-check-label" for="MON_7">
                     Verify that Piglerautomation.com is online and functional
                     </label>
                   </div>
                   <div class="card-header">
                     J- Suite
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_8">
                     </input>
                     <label class="form-check-label" for="MON_8">
                     Check All UPS Status
                     </label>
                   </div>
                   <div class="card-header">
                     H - Room
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="MON_9">
                     </input>
                     <label class="form-check-label" for="MON_9">
                     Check and confirm operation of UPS and Rack Electrical Sockets
                     </label>
                   </div>
                   <div class="text-center">
                     <button  type="button" type="submit" class="btn btn-primary">Submit</button>


                   </div>

                 </div>
               </div>
             </div>
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingTwo">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   Tuesday
                 </button>
               </h2>
               <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                 <div class="accordion-body">

                 <div class="card-header">
                   G2 (Server Room)
                 </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="Tue_1">
                     </input>
                     <label class="form-check-label" for="Tue_1">
                       Check IT Email for Macrium Status and Other Items from Previous Night
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="Tue_2">
                     </input>
                     <label class="form-check-label" for="Tue_2">
                       Check Macrium logs on \\Nas-longmont-2 and address issues
                     </label>
                   </div>

                   <div class="card-header">
                     J- Suite
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                     Check/Organize Toolbox
                     </label>
                   </div>
                   <div class="card-header">
                     Unit - D
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                     Collect Unused IT Items and Return to Appropriate Storage
                     </label>
                   </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                     Check All UPS Status
                     </label>
                   </div>

                   <div class="card-header">
                     Ford Transit Van
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                     Check/Fill Wiper Fluid
                     </label>
                   </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                     Check Van Trip Log and Report any issues to Josh
                     </label>
                   </div>
                   <div class="text-center">
                     <button type="button" class="btn btn-primary">Submit</button>
                   </div>

                 </div>

               </div>
             </div>
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingThree">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   Wednesday
                 </button>
               </h2>
               <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                   <div class="card-header">
                     G2 (Server Room)
                   </div>

                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck1">
                         Check IT Email for Macrium Status and Other Items from Previous Night
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck2">
                         Check Macrium logs on \\Nas-longmont-2 and address issues
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck1">
                         Check .100 Virtual Machine Status and complete the "Virtual Machine Status Checklist" for the .100
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck1">
                         Check All Server Hardware Status and complete the "Server Hardware Status Checklist" for the; .100,.102,.106,.109
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck1">
                         Verify that Piglerautomation.com is online and functional
                       </label>
                     </div>
                     <div class="card-header">
                       J- Suite
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck1">
                         Collect Unused IT Items and Return to Appropriate Storage
                       </label>
                     </div>
                     <div class="card-header">
                       H - Room
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                       </input>
                       <label class="form-check-label" for="defaultCheck1">
                         Collect Unused IT Items and Return to Appropriate Storage
                       </label>
                     </div>
                     <div class="text-center">
                       <button type="button" class="btn btn-primary">Submit</button>
                 </div>
                 </div>
               </div>
             </div>
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingThree">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                   Thursday
                 </button>
               </h2>
               <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
               <div class="accordion-body">
                 <div class="card-header">
                   G2 (Server Room)
                 </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check IT Email for Macrium Status and Other Items from Previous Night
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck2">
                       Check Macrium logs on \\Nas-longmont-2 and address issues
                     </label>
                   </div>
                   <div class="card-header">
                     Skyway
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check Network and Palo Alto Status (See Network Check Procedure Document)
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Test ADT System Functionality of arming/disarming
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check Skyway-Server Hardware and VM Status
                     </label>
                   </div>
                   <div class="text-center">
                     <button type="button" class="btn btn-primary">Submit</button>
               </div>
               </div>
               </div>
             </div>
             <div class="accordion-item">
               <h2 class="accordion-header" id="headingThree">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                   Friday
                 </button>
               </h2>
               <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                 <div class="accordion-body">
                 <div class="card-header">
                   G2 (Server Room)
                 </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check IT Email for Macrium Status and Other Items from Previous Night
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck2">
                       Check Macrium logs on \\Nas-longmont-2 and address issues
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check .100 Virtual Machine Status and complete the "Virtual Machine Status Checklist" for the .100
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check All Server Hardware Status and complete the "Server Hardware Status Checklist" for the; .100,.102,.106,.109
                     </label>
                   </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check Network and Palo Alto Status (See "Network Check Procedure" Document)
                     </label>
                   </div>

                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Verify that Piglerautomation.com is online and functional
                     </label>
                   </div>
                   <div class="card-header">
                     J-Suite
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check NW Switch Panel
                     </label>
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Collect Unused IT Items and Return to Appropriate Storage
                     </label>
                   </div>

                   <div class="card-header">
                     H-Room
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Collect Unused IT Items and Return to Appropriate Storage
                     </label>
                   </div>


                   <div class="card-header">
                     Conference Room
                   </div>
                   <div class="form-check">
                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                     </input>
                     <label class="form-check-label" for="defaultCheck1">
                       Check Projector and Wireless Transmitter Status
                     </label>
                   </div>

                   <div class="text-center">
                     <button type="button" class="btn btn-primary">Submit</button>
               </div>
                 </div>
               </div>
             </div>
           </div>
           </div>



      </body>
    );

  }
}

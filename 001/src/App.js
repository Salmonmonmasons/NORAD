import logo from './logo.svg';
import './App.css';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

// or less ideally
import { Image, Button, FormControl, Jumbotron, Container, Form, Card, Accordion, Navbar, Nav, Row,Col} from 'react-bootstrap';



function App() {
  return (

      <Row>
        <Row>
          <Col xs={3}></Col>
          <Col xs={5}>
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
          </Col>
          <Col xs={4}>
            <Col>
              <Card>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first">Twitter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#disabled" disabled>
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>

                  <Card.Text>
                    <TwitterTimelineEmbed
                     sourceType="profile"
                     screenName="Mason99181010"
                     options={{height: 550}}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
              <br></br>
            </Col>
          </Col>
        </Row>




        <br></br>


        <br></br>
      </Row>
  );
}

export default App;

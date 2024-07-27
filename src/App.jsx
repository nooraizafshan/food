import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Comp from './Comp';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { blog } from './blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import faWhatsapp

function App() {
  let headerinfo = {
    email: 'wscube@gmail.com',
    phone: '0232223333'
  };

  const [count, setCount] = useState(0);

  return (
    <div className="main">
      {/* <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center'>
              <h1>Our courses</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Carousel</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Example Course</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Example Course</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Example Course</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
      <Header headerinfo={headerinfo} cname="another props printed">
        <h1>props children printed</h1>
      </Header>

      <Comp />
      <FontAwesomeIcon icon={faWhatsapp} />
      <Container>
        <Row>
          {blog.map((v, i) => (
            <ProductItems key={i} PItems={v} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;

function ProductItems({ PItems }) {
  return (
    <Col lg="3" md="6" className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{PItems.Title}</Card.Title>
          <Card.Text>{PItems.body}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

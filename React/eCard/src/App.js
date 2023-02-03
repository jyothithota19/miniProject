import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import FormExample from './components/form/form';
import Ipsum from './components/ipsum/ipsum';
// import sum from './sum';


function App() {
  return (
    <Container fluid className='main'>
      <Row>
        <Col lg="4">
          <Ipsum></Ipsum>
        </Col>
        <Col lg="8">
          <FormExample></FormExample>
        </Col>
      </Row>
    </Container>
    // <sum></sum>

  );

}


export default App;

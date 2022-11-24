import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Form from './components/form';
import FormExample from './components/form/form';
import Ipsum from './components/ipsum/ipsum';


function App() {
  return (
    <div className='App'>
      {/* <Form></Form> */}
      <Row className="main">
        <Col lg="4" d-inline="true">
          <Ipsum></Ipsum>
        </Col>
        <Col lg="8" d-inline="true" className="form_sm">
          <FormExample></FormExample>
        </Col>
      </Row>
    </div>

  );

}


export default App;

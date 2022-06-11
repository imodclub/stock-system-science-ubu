import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';
import React from 'react';
import { signInWithGoogle } from '../services/firebase';

function Login() {
  return (
    
      <Container className='mt-3'>
        <Row>
          <Col md='auto'>
            <button className='btn btn-primary' onClick={signInWithGoogle}>Sign in with google</button>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Login;

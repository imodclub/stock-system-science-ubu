import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import image from '../images/imageForCard.png'
import React from 'react';
import { signInWithGoogle } from '../services/firebase';

function Login() {
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
          <Card style={{ width: '18rem' }} align='center'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>กรุณาลงชื่อเข้าระบบ</Card.Title>
              <Card.Text>
                กรุณาลงชื่อเข้าระบบด้วยบัญชี Google ของมหาวิทยาลัยอุบลราชธานี
              </Card.Text>
              <Button className="btn btn-primary" onClick={signInWithGoogle}>
                Sign in with google
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
  );
}

export default Login;

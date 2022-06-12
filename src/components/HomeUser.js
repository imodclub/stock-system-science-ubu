import React from 'react'
import { auth } from '../services/firebase'

import { Container, Nav, Navbar,Button } from 'react-bootstrap';

function Home({ user }) {
   console.log(user);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#Home">
            <img src={user.photoURL} width="50" height="50"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <h3>{user.displayName}</h3>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className='btn btn-warning' onClick={() => auth.signOut()}>Sign Out</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>Hello, {user.displayName} </h1>
      <p>Your have email : {user.email}</p>
      <img src={user.photoURL} alt="profile image" />
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Home
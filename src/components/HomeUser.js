import React from 'react'
import { auth } from '../services/firebase'
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import ProfileUser from './ProfileUser';
import { BrowserRouter, Link, Router, Routes,Route } from 'react-router-dom'

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
              <Nav.Link eventKey={2} href="">
                <Button
                  className="btn btn-success"
                  onClick={() => <ProfileUser />}
                >
                  Edit Profile
                </Button>
              </Nav.Link>

              <Nav.Link eventKey={2} href="">
                <Button
                  className="btn btn-warning"
                  onClick={() => auth.signOut()}
                >
                  Sign Out
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <BrowserRouter>
          <h1>Hello</h1>
          <Link to="userprofile">คลิ๊ก</Link>
          <Routes>
            <Route path="/userprofile">
              <ProfileUser />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default Home
<<<<<<< HEAD
import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import LoginModal from "./LoginModal";
import SignModal from "./SignModal";
import Social from "./Social"
import ".././App.css";


class Header extends Component  {

=======
/*eslint-disable*/

import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Route, Link } from "react-router-dom";
import ".././App.css";
import Store from "../pages/Store";

class Header extends Component {
>>>>>>> f2cc67981a3496b367f7219e05750df1c9c6517a
  render() {
    return (
      <div className="Header">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">TENNIS MANAGER</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="#features">INFO</Nav.Link>
              <Nav.Link href="/store">STORE</Nav.Link>
              <Nav.Link href="/contestBoard">CONTESTBOARD</Nav.Link>
              <Nav.Link href="/review">REVIEW</Nav.Link>
            </Nav>
            <Nav className="you-auto">
<<<<<<< HEAD
              <Nav.Link><SignModal/></Nav.Link>
              <Nav.Link><Social /></Nav.Link>
              <Nav.Link><LoginModal/></Nav.Link>
              
=======
              <Nav.Link href="/sign">SIGN</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
>>>>>>> f2cc67981a3496b367f7219e05750df1c9c6517a
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
<<<<<<< HEAD
  }
=======
}
>>>>>>> f2cc67981a3496b367f7219e05750df1c9c6517a

export default Header;


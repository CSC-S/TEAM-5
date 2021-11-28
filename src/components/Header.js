import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import LoginModal from "./LoginModal";
import SignModal from "./SignModal";
import Social from "./Social"
import ".././App.css";


class Header extends Component  {

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
              <Nav.Link><SignModal/></Nav.Link>
              <Nav.Link><Social /></Nav.Link>
              <Nav.Link><LoginModal/></Nav.Link>
              
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
  }

export default Header;


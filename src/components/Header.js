import React, { Component } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap"
import { Route, Link } from "react-router-dom";
import Modal from 'react-awesome-modal';
import ".././App.css";
import Store from "../pages/Store";

class Header extends Component {

  constructor(){
    super();
    this.state = {
      isLoginOrSignupModalOn: false,
    };
    const handleLoginOrSignupModal = () => {
      this.setState({
        isLoginOrSignupModalOn: !this.state.isLoginOrSignupModalOn,
      });
    };
  }

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
              <Nav.Link className="signup" onClick={handleLoginOrSignupModal}>SIGN</Nav.Link>
              <Nav.Link className="login" onClick={handleLoginOrSignupModal}>LOGIN</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;


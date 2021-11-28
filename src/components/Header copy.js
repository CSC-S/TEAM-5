import React, { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap"
import LoginModal from "./LoginModal"
import ".././App.css";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen)
  };
  
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
              <Nav.Link href="/sign">SIGN</Nav.Link>
              <Nav.Link onClick={openModal}>LOGIN</Nav.Link>
              <LoginModal showModal={showModal} closeModal={closeModal}></LoginModal>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header;

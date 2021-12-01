import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap"


class LoginForm extends Component {
    render() {
      return (
        <div className="Login">
         <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Id</Form.Label>
    <Form.Control type="email" placeholder="Id" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Modal.Body>
</Modal.Dialog>
        </div>
      );
    }
  }
  
  export default LoginForm;
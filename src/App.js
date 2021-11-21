/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";
import Data from './data.js';

// eslint-disable-next-line
import { Navbar, Container, Nav, NavDropdown, Button, Card } from "react-bootstrap";

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">TENNIS MANAGER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">INFO</Nav.Link>
            <Nav.Link href="#pricing">STORE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="background">
        <br></br><br></br><br></br><br></br><br></br>
        <h1>테니스 매니저</h1>
        <p>테니스매니저는 테니스의 관련된 모든 정보 및 테니스구장 정보를 알려드립니다.</p>
        <br></br><br></br><br></br>
        <Button variant="light">스토어 이용하기</Button><br></br><br></br>
      </div>

      <br></br>

      <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return <Section shoes={shoes[i]} i={i} key={i} />
            })
          }
        </div>
      </div>

    </div>
  );
}

function Section(props){
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={"/img/tennis_" + [props.i] + ".jpg"}
          width="100%"
        />
        <Card.Body>
          <Card.Title>{props.shoes.title}</Card.Title>
          <Card.Text>
            {props.shoes.content} <br />
            {props.shoes.price}
          </Card.Text>
          <Button variant="primary">구매하러가기</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
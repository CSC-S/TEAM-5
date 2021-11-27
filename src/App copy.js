/*eslint-disable*/
import React, { Component, useState } from "react";
import "./App.css";

// eslint-disable-next-line
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Card,
  CardGroup,
  Carousel,
} from "react-bootstrap";

import 메인1 from "./img/main01.jpg";
import 메인2 from "./img/main02.jpg";
import 메인3 from "./img/main03.jpg";
import 대회1 from "./img/대회1.jpg";
import 대회2 from "./img/대회2.jpg";
import 대회3 from "./img/대회3.jpg";
import 구장1 from "./img/구장1.jpg";
import 구장2 from "./img/구장2.jpg";
import 구장3 from "./img/구장3.jpg";
import Header from "./components/Header";

class App extends Component{
  render() {
    return(
      <div className="App">
        <Header></Header>
      </div>
    )
  }
}

function App() {
  return (
    <div className="Header">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">TENNIS MANAGER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">INFO</Nav.Link>
            <Nav.Link href="#pricing">STORE</Nav.Link>
            <Nav.Link href="#competition">COMPETITION</Nav.Link>
            <Nav.Link href="#review">REVIEW</Nav.Link>
          </Nav>
          <Nav className="you-auto">
            <Nav.Link href="#sign">SIGN</Nav.Link>
            <Nav.Link href="#login">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item interval={2500}>
          <img className="background" src={메인1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="background" src={메인2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="background" src={메인3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <br></br>
      <div className="notice">■ 경기정보</div>

      <br></br>
      <section id="competition">
        <div className="competition">
          <Container>
            <CardGroup className="row">
              <Card border="white" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={대회1} />
                <Card.Body>
                  <Card.Title>성주군수기 대회</Card.Title>
                  <Card.Text>
                    <a href="http://www.naver.com">자세히보기</a>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">2021-11-20</small>
                </Card.Footer>
              </Card>
              <Card border="white" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={대회2} />
                <Card.Body>
                  <Card.Title>청주 테니스 대회</Card.Title>
                  <Card.Text>
                    <a href="http://www.naver.com">자세히보기</a>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">2021-11-10</small>
                </Card.Footer>
              </Card>
              <Card border="white" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={대회3} />
                <Card.Body>
                  <Card.Title>부산광역시 대회</Card.Title>
                  <Card.Text>
                    <a href="http://www.naver.com">자세히보기</a>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">2021-11-01</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </section>
      <br></br>

      <br></br>
      <section id="review">
        <div className="notice">■ 구장리뷰</div>
        <br></br>
        <div className="review">
          <Container>
            <CardGroup className="row">
              <Card border="white" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={구장1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card border="white" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={구장2} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card border="white" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={구장3} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Container>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div class="container">
          <div class="row">
            {/* <!-- SOCIAL ICONS --> */}
            <div class="col-sm-6 col-sm-push-6 footer-social-icons">
              <span>SNS :</span>
              <a href="https://www.facebook.com/">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            {/* <!-- /SOCIAL ICONS --> */}
            <div class="col-sm-6 col-sm-pull-6 copyright">
              <p>
                소재지 : <i class="fa fa-love"></i>서울 금천구 가산디지털2로 123
                월드메르디앙벤처센터II 4층 413호
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER */}

    </div>
    
  );
}

export default App;

import React, { Component } from "react";
import { Container, CardGroup, Card } from "react-bootstrap"
import 대회1 from ".././img/대회1.jpg";
import 대회2 from ".././img/대회2.jpg";
import 대회3 from ".././img/대회3.jpg";

class Competition extends Component {
    render() {
        return (
            <div className="competition" id="competition">
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
        );


    }


}


export default Competition;
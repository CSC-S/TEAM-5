import React, { Component } from "react";
import { Container, CardGroup, Card } from "react-bootstrap"
import 대회1 from ".././img/대회1.jpg";
import 대회2 from ".././img/대회2.jpg";
import 대회3 from ".././img/대회3.jpg";
import 대회4 from ".././img/대회4.jpg";
import 대회5 from ".././img/대회5.jpg";
import 대회6 from ".././img/대회6.jpg";
import 대회7 from ".././img/대회7.jpg";
import 대회8 from ".././img/대회8.jpg";
import 대회9 from ".././img/대회9.jpg";

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
                <Container>
                    <CardGroup className="row">
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={대회4} />
                            <Card.Body>
                                <Card.Title>엠버서더 컵 친선 대회</Card.Title>
                                <Card.Text>
                                    <a href="http://www.naver.com">자세히보기</a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-20</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={대회5} />
                            <Card.Body>
                                <Card.Title>오산 국제주니어 대회</Card.Title>
                                <Card.Text>
                                    <a href="http://www.naver.com">자세히보기</a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-10</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={대회6} />
                            <Card.Body>
                                <Card.Title>전국하계대학테니스 대회</Card.Title>
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
                <Container>
                    <CardGroup className="row">
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={대회7} />
                            <Card.Body>
                                <Card.Title>궁촌테니스 여자부 대회</Card.Title>
                                <Card.Text>
                                    <a href="http://www.naver.com">자세히보기</a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-20</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={대회8} />
                            <Card.Body>
                                <Card.Title>궁촌테니스 남자부 대회</Card.Title>
                                <Card.Text>
                                    <a href="http://www.naver.com">자세히보기</a>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">2021-11-10</small>
                            </Card.Footer>
                        </Card>
                        <Card border="white" style={{ width: "20rem" }}>
                            <Card.Img variant="top" src={대회9} />
                            <Card.Body>
                                <Card.Title>서진정밀배 혼합복식 대회</Card.Title>
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
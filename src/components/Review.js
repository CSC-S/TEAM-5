import React, { Component } from "react";
import { Container, CardGroup, Card } from "react-bootstrap"
import 구장1 from ".././img/구장1.jpg";
import 구장2 from ".././img/구장2.jpg";
import 구장3 from ".././img/구장3.jpg";

class Review extends Component {
    render() {
        return (
            <div className="review" id="review">
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
        );
    }
}

export default Review;
import React, { Component } from "react";
import { Carousel } from "react-bootstrap"
import 메인1 from ".././img/main01.jpg";
import 메인2 from ".././img/main02.jpg";
import 메인3 from ".././img/main03.jpg";

class Content extends Component {
    render() {
        return (
            <div className="content">
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
            </div>
        );

    }

}

export default Content;
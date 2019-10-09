import React, { Component } from "react";
import {
    Container,
    NavItem,
    Nav,
    Col,
    Row,
    Jumbotron,
} from "reactstrap";
import image from "../Assets/welcome1.jpg"
import { Link } from "react-router-dom";


class Homepage extends Component {
    state = {};
    render() {
        return (
            <>
                <Nav id="wrapper">
                    <NavItem>
                        <Row className="col-sm-12">
                            <ul>
                                <div id="logo">
                                    <h3>StriveShool</h3>
                                </div>
                            </ul>
                        </Row>
                    </NavItem>
                    <NavItem className="mx-auto">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Students</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                        </ul>
                    </NavItem>
                </Nav>
                <Container fluid className="hpCont">
                    <Row className="col-sm-12">
                        <Col sm="12" className="heading">
                            <Jumbotron fluid  style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}} className="jumbo" >
                                <h1 className="display-3">Achieving Excellence Together</h1>
                            </Jumbotron>
                        </Col>
                        </Row>
                        <Row className="col-sm-12">
                      
                            <div id="bigphoto" className="col">
                                <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib" />
                                <Link to= {"/students"}>
                                <div className="centered">Students</div>
                                </Link>
                            </div>
                            <div id="bigphoto" className="col">
                                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                            </div>
                            <div id="bigphoto" className="col">
                                <img src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
                                <Link to= {"/projects"}>
                                <div class="centered">Projects</div>
                                </Link>
                            </div>
                      
                    </Row>
                </Container>
            </>
        );
    }


}

export default Homepage;

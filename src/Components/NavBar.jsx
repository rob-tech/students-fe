import React, { Component } from "react";
import {
    NavItem,
    Nav,
    Row,
} from "reactstrap";
import { Link } from "react-router-dom";


class NavBar extends Component {
    state = {};
    render() {
        return (
            <>
                <Nav id="wrapper">
                    <NavItem>
                        <Row className="col-sm-12">
                            <ul>
                                <div id="logo">
                                <Link to= {"/"}>
                                    <h3>StriveShool</h3>
                                    </Link>
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
            </>
        );
    }


}

export default NavBar;

import React, { Component } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardText,
    Container,
    Modal,
    Row,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleStudents } from "../actions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    addStudentsThunk: () => dispatch(handleStudents()) //I have put the actions in a separate file! ;)
});

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultModal: false
        };
    }
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <>
                <Container fluid className="studentsCont">
                    <Row>
                        {this.props.allStudents.students && this.props.allStudents.students.map(student => {
                            return (
                                <Col sm="4" key={student.StudentId}>
                                    <Card body>
                                        <Link to={"/studentprofile/" + student.StudentId} className="titleLink">
                                            <CardHeader>{student.Name} {student.Surname}</CardHeader>
                                        </Link>
                                        <CardBody className="studentCard">
                                            {student.projects && student.projects.map(project => {
                                                return (
                                                    <CardText key={project.ProjectId} onMouseOver={this.mouseOver}>{project.Name}</CardText>
                                                )
                                            })}
                                        </CardBody>
                                        <Button
                                            block
                                            className="mb-3"
                                            id="myBtn"
                                            color="none"
                                            type="button"
                                            onClick={() => this.toggleModal("defaultModal")}
                                        >
                                            View Details
                                            </Button>
                                        <Modal
                                            className="modal-dialog-centered"
                                            isOpen={this.state.defaultModal}
                                            toggle={() => this.toggleModal("defaultModal")}
                                        >
                                            <div className="modal-header">
                                                <h6 className="modal-title" id="modal-title-default">
                                                    {student.Name} {student.Surname}
                                                </h6>
                                                <button
                                                    aria-label="Close"
                                                    className="close"
                                                    data-dismiss="modal"
                                                    type="button"
                                                    onClick={() => this.toggleModal("defaultModal")}
                                                >
                                                    <span aria-hidden={true}>×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    Email: {student.Email}
                                                </p>
                                                <p>
                                                    Date of birth: {student.DOB}
                                                </p>
                                                <p>
                                                    Projects:
                                                   {student.projects && student.projects.map(project => {
                                                        return (
                                                            <CardText key={project.ProjectId} onMouseOver={this.mouseOver}>{project.Name}</CardText>
                                                        )
                                                    })}

                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <Button color="primary" type="button">
                                                    Edit Student
                                                   </Button>
                                                <Button
                                                    className="ml-auto"
                                                    color="link"
                                                    data-dismiss="modal"
                                                    type="button"
                                                    onClick={() => this.toggleModal("defaultModal")}
                                                >
                                                    Close
                                                   </Button>
                                            </div>
                                        </Modal>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </>
        );
    }

    componentDidMount = async () => {
        await this.props.addStudentsThunk()
        //     var res = await fetch("http://localhost:3000/students");
        //     var students = await res.json();

        //     var allStudents = students
        //     for (var i = 0; i < allStudents.length; i++) {
        //         allStudents[i].projects = await this.getProjects(allStudents[i].StudentId)
        //     }
        //     this.setState({ students: students });
        console.log(this.props.students)
    }



    mouseOver = () => {
        this.setState({ hover: true });
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Students);

import React, { Component } from "react";
import { Toast, ToastBody, ToastHeader, Container, Col, Row } from 'reactstrap';


class Students extends Component {
    constructor(props) {
        super(props);
        ;
        this.state = {
            students: [],
            projects: []
        };

    }

    render() {

        return (
            <>
                <Container fluid>
                    <h1>Students</h1>
                    <div className="p-3 my-2 rounded">
                        <Row className="col-sm-4">
                            {this.state.students && this.state.students.map(student => {
                                return (
                                    <Col sm="4">
                                        <div key={student.StudentId} id={this.getProjects(student.StudentId)}>                                
                                            <Toast>
                                                <ToastHeader>
                                                    {student.Name} {student.Surname}
                                                </ToastHeader>
                                                {this.state.projects && this.state.projects.map(project => {
                                                    return (
                                                        <div key={project.ProjectId}>
                                                            <ToastBody>
                                                                {project.Name}
                                                            </ToastBody>
                                                        </div>
                                                    )
                                                })}
                                            </Toast>
                                        </div>
                                    </Col>

                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </>
        );
    }

    componentDidMount = async () => {
        this.getStudents();

    }

    getStudents = async () => {
        var res = await fetch("http://localhost:3000/students");
        var students = await res.json();
        this.setState({ students: students });

    }

    getProjects = async id => {
        var res = await fetch("http://localhost:3000/students/" + id + "/projects");
        var projects = await res.json();
        this.setState({ projects: projects });
    }


}

export default Students;

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
                                var id = student.StudentId
                                return (
                                    <Col sm="4">
                                        <div key={student.StudentId}>                                
                                            <Toast>
                                                <ToastHeader>
                                                    {student.Name} {student.Surname}
                                                </ToastHeader>
                                                {this.state.projects && this.state.projects.map(project => {
                                                //    if (id === project.StudentId)
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
        var res = await fetch("http://localhost:3000/students");
        var students = await res.json();
        this.setState({ students: students });
        var allStudents = this.state.students
        allStudents.forEach (student => {
            this.getProjects(student.StudentId) 
        })
     
    }

    getProjects = async id => {
        var res = await fetch("http://localhost:3000/students/" + id + "/projects");
        var projects = await res.json();    
        var allProjects = []
        allProjects = allProjects.concat(projects)
        this.setState({ projects: allProjects });
        console.log(allProjects)
    }

}

export default Students;

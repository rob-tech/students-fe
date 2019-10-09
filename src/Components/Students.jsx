import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardText, Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom";

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };
    }

    render() {
        return (
            <>
             <Container fluid className="studentsCont">               
                    <Row>
                        {this.state.students && this.state.students.map(student => {
                            return (                   
                                    <Col sm="4" key={student.StudentId}>
                                        <Card body>
                                        <Link to= {"/studentprofile/" + student.StudentId } className="titleLink">
                                            <CardHeader>{student.Name} {student.Surname}</CardHeader>
                                        </Link>
                                            <CardBody>
                                                {student.projects && student.projects.map(project => {
                                                    return (
                                                            <CardText key={project.ProjectId} onMouseOver= {this.mouseOver}>{project.Name}</CardText>
                                                    )
                                                })}
                                            </CardBody>
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
        var res = await fetch("http://localhost:3000/students");
        var students = await res.json();

        var allStudents = students
        for (var i = 0; i < allStudents.length; i++) {
            allStudents[i].projects = await this.getProjects(allStudents[i].StudentId)
        }
        this.setState({ students: students });

    }

    getProjects = async id => {
        var res = await fetch("http://localhost:3000/students/" + id + "/projects");
        var projects = await res.json();
        // var allProjects = []
        // allProjects = allProjects.concat(projects)
        // this.setState({projects: allProjects });
        // console.log(projects)
        return projects
    }

    mouseOver = () => {
        this.setState({hover: true});
    }

}

export default Students;

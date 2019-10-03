import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StudentForm from "./Form"
import { Container } from 'reactstrap';

class Main extends Component {
    render() { 
        return(


          <Router>
          <Container fluid>
          <Route path="/" exact component={StudentForm} />
          </Container>
          </Router>
  
        )  
    }
        
}


 
export default Main;

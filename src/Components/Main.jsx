import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StudentForm from "./Form";
import Students from "./Students"
import Homepage from "./Homepage";

class Main extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/students" exact component={Students} />
        {/* <Route path="/form" exact component={StudentForm} /> */}
      </Router>
    );
  }
}

export default Main;

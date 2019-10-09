import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StudentForm from "./Form";
import Students from "./Students"
import Homepage from "./Homepage";
import { Provider } from "react-redux";
import configureStore from "../store";

class Main extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/students" exact component={Students} />
        <Route path="/form" exact component={StudentForm} />
      </Router>
      </Provider>
    );
  }
}

export default Main;

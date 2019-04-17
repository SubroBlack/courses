import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";

import Home from "./pages/home";
import Courses from "./pages/courses";

import Header from "./pages/components/header";

class App extends Component {
  state = {
    courses: []
  };

  // Fetching the courses from the open API
  componentDidMount() {
    Axios.get(
      "https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/event"
    ).then(res => {
      console.log(res.data);
      this.setState({ courses: res.data });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Courses} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

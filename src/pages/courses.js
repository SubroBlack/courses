import React, { Component } from "react";
import Course from "./components/course";

export default class courses extends Component {
  render() {
    return this.props.courses.map(course => (
      <Course key={course.id} course={course} />
    ));
  }
}

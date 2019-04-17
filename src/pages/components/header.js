import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header className="App-header">
      <h1>Courses</h1>
      <div className="navBar">
        <Link className="App-link" to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link className="App-link" to="/courses">
          Courses
        </Link>
      </div>
    </header>
  );
}

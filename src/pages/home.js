import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className="home-content">
      <h2>Find the Courses for you</h2>
      <h4>
        Look for the courses in Helsinki and see the details to see if it is the
        right course for you
      </h4>
      <button className="btn">
        <Link className="App-link" to="/courses">
          Find my Courses
        </Link>
      </button>
    </div>
  );
}

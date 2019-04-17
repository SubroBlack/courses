import React, { Component } from "react";

export default class course extends Component {
  render() {
    const { id, name } = this.props.course;
    return (
      <div>
        <h3>{name.fi}</h3>
        <p>{id}</p>
      </div>
    );
  }
}

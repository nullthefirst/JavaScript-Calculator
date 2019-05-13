import React, { Component } from 'react';

const caseOut = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#3cb271",
  padding: "0.1em",
  width: "26em"
}

export default class Case extends Component {
  render() {
    return(
      <div style={caseOut}>
        <h2>JS Calculator</h2>
      </div>
    );
  }
}
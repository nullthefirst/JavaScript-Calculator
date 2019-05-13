import React, { Component } from 'react';

const caseOut = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#3cb271",
  padding: "0.1em",
  width: "10em"
}

export default class Case extends Component {
  render() {
    return(
      <div style={caseOut}>
        <h1>Calc Body</h1>
      </div>
    );
  }
}
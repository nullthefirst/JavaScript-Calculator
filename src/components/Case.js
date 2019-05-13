import React, { Component } from 'react';

import Buttons from './Buttons';

const caseOut = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#3cb271",
  padding: "0.1em",
  width: "26em",
}

const name = {
  textDecoration: "underline",
  textDecorationColor: "#5d5d5d"
}

export default class Case extends Component {
  render() {
    return(
      <div style={caseOut}>
        <h2 style={name}>JS Calculator</h2>
        <Buttons />
      </div>
    );
  }
}
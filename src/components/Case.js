import React, { Component } from 'react';

import Buttons from './Buttons';

const caseOut = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#5d5d5d",
  borderRadius: "2%",
  backgroundColor: "#24a2b7",
  padding: "0.1em",
  width: "26em"
}

const name = {
  margin: "0.4em 0",
  color: "#fff"
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
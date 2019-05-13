import React, { Component } from 'react';

const caseOut = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#3cb271",
  padding: "0.1em",
  width: "26em"
}

export default class Block extends Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>

          <div className="col">
          
            <div style={caseOut}>
              <h2>JS Calculator</h2>
            </div>
          
          </div>
          
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
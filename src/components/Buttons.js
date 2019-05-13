import React, { Component } from 'react';

const caseIn = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#3cb271",
  padding: "1em",
  width: "24em",
  marginBottom: "0.4em"
}

export default class Buttons extends Component {
  render() {
    return(
      <div style={caseIn} className="container-fluid">
        <div className="row">
          <div className="col">
            <span>1</span>
          </div>
          <div className="col">
            <span>2</span>
          </div>
          <div className="col">
            <span>3</span>
          </div>
          <div className="col">+</div>
        </div>
        <div className="row">
          <div className="col">
            <span>4</span>
          </div>
          <div className="col">
            <span>5</span>
          </div>
          <div className="col">
            <span>6</span>
          </div>
          <div className="col">-</div>
        </div>
        <div className="row">
          <div className="col">
            <span>7</span>
          </div>
          <div className="col">
            <span>8</span>
          </div>
          <div className="col">
            <span>9</span>
          </div>
          <div className="col">&#247;</div>
        </div>
      </div>
    )
  }
}
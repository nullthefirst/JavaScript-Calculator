import React, { Component } from 'react';

import '../App.css';

const caseIn = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#3cb271",
  padding: "1em",
  width: "24em",
  marginBottom: "0.4em"
}

const solution = {
  backgroundColor: "#000",
  borderStyle: "solid",
  borderColor: "#5d5d5d",
  width: "10em",
  display: "block",
  padding: "1em"
}

const btn = {
  margin: "1em"
}

export default class Buttons extends Component {
  render() {
    return(
      <div style={caseIn} className="container-fluid">
        <div className="row">
          <div className="col">
            <span style={btn}>1</span>
          </div>
          <div className="col">
            <span>2</span>
          </div>
          <div className="col">
            <span>3</span>
          </div>
          <div className="col">
            <span>+</span>
          </div>
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
          <div className="col">
            <span>-</span>
          </div>
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
          <div className="col">
            <span>&#247;</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>0</span>
          </div>
          <div className="col-6">
            <span style={solution}></span>
          </div>
          <div className="col">
            <span>=</span>
          </div>
        </div>
      </div>
    )
  }
}
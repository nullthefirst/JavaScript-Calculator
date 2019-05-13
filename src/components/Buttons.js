import React, { Component } from 'react';

import '../App.css';

const caseIn = {
  textAlign: "center",
  borderStyle: "solid",
  borderColor: "#5d5d5d",
  padding: "1em",
  width: "24em",
  marginBottom: "0.4em",
  backgroundColor: "#f3f2e0",
}

const solution = {
  borderStyle: "solid",
  borderColor: "#24a2b7",
  width: "10em",
  display: "block",
  padding: "1em",
  backgroundColor: "#fff",
}

export default class Buttons extends Component {
  render() {
    return(
      <div style={caseIn} className="container-fluid">
        <div className="row">
          <div className="col">
            <button type="button" id="one"
                  class="btn btn-secondary">
                      <span>1</span>
                  </button>
          </div>
          <div className="col">
            <button type="button" id="two"
                  class="btn btn-secondary">
                      <span>2</span>
                  </button>
          </div>
          <div className="col">
            <button type="button" id="three"
                  class="btn btn-secondary">
                      <span>3</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-info">
                      <span>+</span>
                  </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" id="four"
                  class="btn btn-secondary">
                      <span>4</span>
                  </button>
          </div>
          <div className="col">
            <button type="button" id="five"
                  class="btn btn-secondary">
                      <span>5</span>
                  </button>
          </div>
          <div className="col">
            <button type="button" id="six"
                  class="btn btn-secondary">
                      <span>6</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-info">
                      <span>-</span>
                  </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" id="seven"
                  class="btn btn-secondary">
                      <span>7</span>
                  </button>
          </div>
          <div className="col">
            <button type="button" id="eight"
                  class="btn btn-secondary">
                      <span>8</span>
                  </button>
          </div>
          <div className="col">
            <button type="button" id="nine"
                  class="btn btn-secondary">
                      <span>9</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-info">
                      <span>&#247;</span>
                  </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" id="zero"
                  class="btn btn-secondary">
                      <span>0</span>
                  </button>
          </div>
          <div className="col-6">
            <span id="solut" style={solution}></span>
          </div>
          <div className="col">
            <button type="button" id="equals"
                  class="btn btn-danger">
                      <span>=</span>
                  </button>
          </div>
        </div>
      </div>
    )
  }
}
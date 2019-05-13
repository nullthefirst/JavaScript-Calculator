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

// const solution = {
//   backgroundColor: "#000",
//   borderStyle: "solid",
//   borderColor: "#5d5d5d",
//   width: "10em",
//   display: "block",
//   padding: "1em"
// }

export default class Buttons extends Component {
  render() {
    return(
      <div style={caseIn} className="container-fluid">
        <div className="row">
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>1</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>2</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>3</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>+</span>
                  </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>4</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>5</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>6</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>-</span>
                  </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>7</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>8</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>9</span>
                  </button>
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>&#247;</span>
                  </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>0</span>
                  </button>
          </div>
          <div className="col-6">
            {/* <span style={solution}></span> */}
          </div>
          <div className="col">
            <button type="button"
                  class="btn btn-secondary">
                      <span>=</span>
                  </button>
          </div>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    return(
      <div className="container-fluid">
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
        </div>
      </div>
    )
  }
}
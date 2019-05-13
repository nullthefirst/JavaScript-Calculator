import React, { Component } from 'react';

import Case from './Case';

export default class Block extends Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>

          <div className="col">
            <Case />
          </div>
          
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
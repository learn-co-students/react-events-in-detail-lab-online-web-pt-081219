// @ts-check

import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  findCoords = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <div>
        <button onClick={this.findCoords}>Coordinates</button>
      </div>
    );
  }
}

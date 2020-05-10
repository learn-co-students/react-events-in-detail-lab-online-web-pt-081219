import React, { Component } from 'react';
 
export default class CoordinatesButton extends Component {
 
    doThing = (event) => {
        let coord = [event.clientX, event.clientY]
        console.log(coord)
        this.props.onReceiveCoordinates(coord)
    }
 
  render() {
    return(
        <button onClick={this.doThing}>Click this</button>
     )
  }
 
}
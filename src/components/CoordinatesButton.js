import React, { Component } from 'react' 

export default class CoordinatesButton extends Component {
    
    showCoords = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return (
            <button onClick={this.showCoords} >Coordinates</button>
        )
    }
}
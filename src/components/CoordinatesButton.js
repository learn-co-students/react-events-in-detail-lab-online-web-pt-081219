import React, { Component } from 'react'

class CoordinatesButton extends Component {
    constructor() {
        super();
    }

    handleClick = (event) => {
        const result = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(result)
    }

    render() {
        return(<button onClick={this.handleClick}></button>)
    }
}

export default CoordinatesButton
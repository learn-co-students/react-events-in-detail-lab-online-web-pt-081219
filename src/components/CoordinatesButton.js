import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // color: this.props.color
        }
    }

    createArray = (event) => {
        let coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <button onClick={this.createArray}>
            </button>
        )
    }

}
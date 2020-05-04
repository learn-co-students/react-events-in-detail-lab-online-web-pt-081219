import React, { Component} from 'react';

export default class CoordinatesButton extends Component {

    handleCLick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return(
            <button onClick={this.handleCLick}>
                click
            </button>
        )
    }
}
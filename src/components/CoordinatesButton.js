// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
    createArray = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render(){
        return(
            <button onClick={this.createArray}>Coordinates</button>
        )
    }
}
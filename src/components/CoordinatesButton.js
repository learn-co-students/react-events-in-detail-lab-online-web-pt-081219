import React from 'react';

class CoordinatesButton extends React.Component {

    createXYCoor = (event) => {
        const xy = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(xy);
    }

    render() {
        return(
        <div>
            <button onClick={this.createXYCoor}>Coordinates</button>
        </div>
        )
    }
}

export default CoordinatesButton;
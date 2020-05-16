import React from 'react';

class CoordinatesButton extends React.Component {
  coordinates = event => {
    const array = [event.pageX, event.pageY]
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <div>
        <button onClick={this.coordinates}>Button 1</button>
      </div>
    );
  }
}

export default CoordinatesButton;
import React from 'react';

class DelayedButton extends React.Component {

  buttonClick = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);},
      this.props.delay);
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Button 2</button>
      </div>
    );
  }
}

export default DelayedButton;
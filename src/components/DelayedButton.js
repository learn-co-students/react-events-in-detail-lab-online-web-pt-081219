import React, { Component } from 'react';
 
export default class DelayedButton extends Component {
 
    doThing = (event) => {
        event.persist()
        window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }

  render() {
    return(
        <button onClick={this.doThing}>Click this</button>
    )
  }
 
}
// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {
    handleClick = (event) => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        
    }
    
    render(){
        return(
            <button onClick = {this.handleClick}>Delayed Button</button>
        )
    }
}
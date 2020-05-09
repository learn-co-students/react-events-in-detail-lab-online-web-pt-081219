import React from 'react';

class DelayedButton extends React.Component {

    delay = (event) => {
        event.persist();
        let callback = () => this.props.onDelayedClick(event);
        setTimeout(callback, this.props.delay);
    }

    render() {
        return(
        <div>
            <button onClick={this.delay}>Delayed</button>
        </div>
        )
    }
}

export default DelayedButton;
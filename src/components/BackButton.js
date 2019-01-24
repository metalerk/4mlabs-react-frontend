import React from 'react';

class BackButton extends React.Component {
    changeLocation() {
        window.location.replace('/')
    }

    render() {
        return (
            <button type="button" class="nes-btn is-warning" onClick={this.changeLocation}>Back to menu</button>
        );
    }
}

export default BackButton;
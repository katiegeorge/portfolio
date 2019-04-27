import React, { Component } from 'react';
import './css/App.scss';

class Tab extends Component {
    render() {
        return (
            <button
                className={ this.props.className }
                onClick={ this.props.onActiveTab }
            >
                { this.props.label }
            </button>
        );
    }
}

export default Tab;

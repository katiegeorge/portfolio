import React, { Component } from 'react';
import './css/App.scss';

class Project extends Component {
    render() {
        return (
            <div className="project">
                <h2 className="project--title">{ this.props.title }</h2>
                { this.props.body }
            </div>
        );
    }
}

export default Project;

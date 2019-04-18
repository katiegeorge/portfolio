import React, { Component } from 'react';
import './App.scss';

class ProjectCard extends Component {
    render() {
        return (
            <div className="card">
                <h2>{ this.props.title }</h2>
                <p className="card--description">{ this.props.description }</p>
            </div>
        );
    }
}

export default ProjectCard;

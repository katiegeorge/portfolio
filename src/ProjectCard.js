import React, { Component } from 'react';
import './css/App.scss';

class ProjectCard extends Component {
    renderTags() {
        return this.props.tags.map(tag =>
            <div className="tag">{ tag }</div>
        );
    }

    render() {
        return (
            <div className="card">
                <h2>{ this.props.title }</h2>
                <div className="tag-wrapper">
                    { this.renderTags() }
                </div>
                <p className="card--description">
                    { this.props.description }
                </p>
            </div>
        );
    }
}

export default ProjectCard;

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
            <div className="card" onClick={ this.props.onClick }>
                <h2>{ this.props.title }</h2>
                <p className="card--description">
                    { this.props.description }
                </p>
                <div className="tag-wrapper">
                    { this.renderTags() }
                </div>
            </div>
        );
    }
}

export default ProjectCard;

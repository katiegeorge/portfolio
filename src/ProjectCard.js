import React, { Component } from 'react';
import './css/App.scss';
import headshot from './assets/headshot.png';


class ProjectCard extends Component {
    renderTags() {
        return this.props.tags.map(tag =>
            <div className="tag">{ tag }</div>
        );
    }

    render() {
        return (
            <div className={ this.props.className } onClick={ this.props.onActiveTab }>
                <img src={ headshot } className="card--image" />
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

import React, { Component } from 'react';
import './css/App.scss';
import ProjectCard from './ProjectCard';
import Tiles from './Tiles';

class Code extends Component {
    render() {
        return (
            <React.Fragment>
                <Tiles primary="blue" />
                <div className="section">
                    <h1>Code</h1>
                    <div className="cards-wrapper">
                        <ProjectCard
                            title="Navigation redesign"
                            tags={['React', 'Design Systems']}
                        />
                        <ProjectCard
                            title="VR Timeline"
                            tags={['React', 'Design Systems']}
                        />
                        <ProjectCard
                            title="Responsive Components"
                            tags={['React', 'Design Systems']}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Code;

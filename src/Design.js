import React, { Component } from 'react';
import './App.scss';
import ProjectCard from './ProjectCard';
import Tiles from './Tiles';

class Design extends Component {
    render() {
        return (
            <React.Fragment>
                <Tiles primary="green" />
                <div className="section">
                    <h1>Design</h1>
                    <div className="cards-wrapper">
                        <ProjectCard
                            title="Navigation redesign"
                            description="React | Design Systems"
                        />
                        <ProjectCard
                            title="VR Timeline"
                            description="WebVR | HTML/CSS"
                        />
                        <ProjectCard
                            title="Responsive Components"
                            description="Responsive | Design Systems"
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Design;

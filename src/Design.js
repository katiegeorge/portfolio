import React, { Component } from 'react';
import './css/App.scss';
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
                            tags={['React', 'Design Systems']}
                            description="Redesigned Carta's navigation from scratch."
                        />
                        <ProjectCard
                            title="VR Timeline"
                            tags={['React', 'Design Systems']}
                            description="Redesigned Carta's navigation from scratch."
                        />
                        <ProjectCard
                            title="Responsive Components"
                            tags={['React', 'Design Systems']}
                            description="Redesigned Carta's navigation from scratch."
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Design;

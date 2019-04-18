import React, { Component } from 'react';
import './App.scss';
import ProjectCard from './ProjectCard';

class Design extends Component {
    getRandomColor(index) {
        const colors = ['#3FB296', '#307161', '#ABDFD2', '#E2B031', '#CBB3EA'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        return randomColor;
    }

    render() {
        const n = 165;
        const boxes = [...Array(n)].map((e, i) => (
            <div
                className="cover--item"
                key={i}
                style={{ backgroundColor: this.getRandomColor(i) }}
            />
        ));
        return (
            <React.Fragment>
                <div className="cover">
                    { boxes }
                </div>
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
